async (page) => {
  const check = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  await page.goto("http://127.0.0.1:3001");
  await page.emulateMedia({ reducedMotion: "reduce" });
  const widths = [1440, 1024, 768, 760, 390, 375, 320];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    );
    check(!overflow, `Horizontal overflow at ${width}px`);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const [name, count] of [
    ["Mobile", 1],
    ["Web", 3],
    ["AI & data", 3],
    ["All work", 7],
  ]) {
    await page.getByRole("button", { name: new RegExp(`^${name}`) }).click();
    check(
      (await page.locator(".project-card").count()) === count,
      `${name} filter count`,
    );
    check(
      (await page
        .getByRole("button", { name: new RegExp(`^${name}`) })
        .getAttribute("aria-pressed")) === "true",
      `${name} filter selected`,
    );
  }
  const role = page.locator(".experience-row").nth(2);
  await role.locator("summary").click();
  check((await role.getAttribute("open")) !== null, "Experience opens");
  await role.locator("summary").click();
  check((await role.getAttribute("open")) === null, "Experience closes");
  await page.getByRole("button", { name: "Pause motion" }).click();
  check(
    (await page.locator("html").getAttribute("data-motion")) === "paused",
    "Motion pauses",
  );
  await page.getByRole("button", { name: "Play motion" }).click();
  check(
    (await page.locator("html").getAttribute("data-motion")) === "running",
    "Motion resumes",
  );
  const animation = await page
    .locator(".marquee-track")
    .first()
    .evaluate((el) => getComputedStyle(el).animationName);
  check(animation === "none", "Reduced motion disables ticker animation");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Menu +" }).click();
  check(
    (await page
      .getByRole("button", { name: "Close −" })
      .getAttribute("aria-expanded")) === "true",
    "Mobile menu opens",
  );
  await page
    .locator("#main-navigation")
    .getByRole("link", { name: "About" })
    .click();
  check(page.url().endsWith("#about"), "About navigation reaches its section");
  check(
    (await page
      .getByRole("button", { name: "Menu +" })
      .getAttribute("aria-expanded")) === "false",
    "Mobile menu closes after navigation",
  );
  const pdf = await page.request.get(
    "http://127.0.0.1:3001/Arjav-Patel-Resume.pdf",
  );
  check(
    pdf.ok() && pdf.headers()["content-type"].includes("pdf"),
    "Resume is served as a PDF",
  );
  await page.locator(".education-card").scrollIntoViewIfNeeded();
  await page.waitForFunction(() =>
    [...document.querySelectorAll("img")].every(
      (img) => img.complete && img.naturalWidth > 0,
    ),
  );
  await page.goto("http://127.0.0.1:3001");
  await page.keyboard.press("Tab");
  check(
    await page
      .locator(".skip-link")
      .evaluate((el) => el === document.activeElement),
    "Keyboard skip link is first",
  );
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  return {
    passed: true,
    viewportWidths: widths,
    checks: [
      "project filters",
      "experience disclosure",
      "motion toggle",
      "reduced motion",
      "mobile navigation",
      "resume PDF",
      "loaded images",
      "keyboard skip link",
    ],
  };
}
