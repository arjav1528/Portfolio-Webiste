async (page) => {
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  const enter = async (selector) => {
    await page.locator(selector).evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }));
    await page.waitForFunction(selector => document.querySelector(selector).getAnimations().some(a => a.id === 'viewport-reveal'), selector);
  };
  const settled = selector => page.waitForFunction(selector => !document.querySelector(selector).getAnimations().some(a => a.id === 'viewport-reveal'), selector);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('http://127.0.0.1:3001');
  await page.waitForFunction(() => document.documentElement.dataset.motion === 'running');
  await page.evaluate(() => window.scrollTo({ top: 400, behavior: 'instant' }));
  await page.waitForFunction(() => new DOMMatrixReadOnly(getComputedStyle(document.querySelector('.scroll-scene')).transform).m42 > 0);

  const heading = '#journey .section-heading';
  check(await page.locator(heading).evaluate(el => el.getAnimations().length === 0), 'Offscreen content waits for the viewport');
  await enter(heading);
  await settled(heading);
  check(await page.locator(heading).evaluate(el => getComputedStyle(el).opacity === '1'), 'Reveal settles to readable content');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForFunction(() => scrollY === 0);
  await page.locator(heading).evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }));
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  check(await page.locator(heading).evaluate(el => el.getAnimations().length === 0), 'Re-entering does not replay a reveal');

  await enter('.receipt');
  const delays = await page.locator('.impact-wall > article').evaluateAll(cards => cards.map(el => el.getAnimations().find(a => a.id === 'viewport-reveal')?.effect.getTiming().delay));
  check(delays.every(delay => typeof delay === 'number') && new Set(delays).size > 1, 'Cards enter with a stagger');
  await enter('.education-card');
  await page.locator('.education-card summary').focus();
  check(await page.locator('.education-card').evaluate(el => getComputedStyle(el).opacity === '1' && el.getAnimations().length === 0), 'Keyboard focus immediately reveals its container');

  await enter('.skills-heading');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForFunction(() => !document.getAnimations().some(a => a.id === 'viewport-reveal'));
  check(await page.locator('.scroll-scene').evaluate(el => getComputedStyle(el).transform === 'none'), 'Reduced motion disables parallax');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  // Trigger pause without scrolling to the footer, so cancellation is tested mid-reveal.
  await page.locator('.footer-top').evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }));
  await page.waitForFunction(() => document.querySelector('.footer-top').getAnimations().some(a => a.id === 'viewport-reveal'));
  await page.getByRole('button', { name: 'Pause motion' }).evaluate(el => el.click());
  await page.waitForFunction(() => !document.getAnimations().some(a => a.id === 'viewport-reveal'));
  check(await page.locator('[data-reveal]').evaluateAll(elements => elements.every(el => getComputedStyle(el).opacity === '1')), 'Pause leaves all content visible');
  check(await page.locator('.scroll-scene').evaluate(el => getComputedStyle(el).transform === 'none'), 'Pause disables parallax');

  await page.getByRole('button', { name: 'Play motion' }).click();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo({ top: 700, behavior: 'instant' }));
  check(await page.locator('.scroll-scene').evaluate(el => getComputedStyle(el).transform === 'none'), 'Mobile uses a stable collage');
  check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Animated mobile layout has no horizontal overflow');

  const noJsContext = await page.context().browser().newContext({ javaScriptEnabled: false });
  try {
    const noJsPage = await noJsContext.newPage();
    await noJsPage.goto('http://127.0.0.1:3001');
    check(await noJsPage.locator('[data-reveal]').evaluateAll(elements => elements.length > 0 && elements.every(el => getComputedStyle(el).opacity === '1' && getComputedStyle(el).visibility === 'visible')), 'Content stays visible without JavaScript');
  } finally { await noJsContext.close(); }
  return { passed: true, checks: ['scroll parallax', 'viewport entry', 'once-only reveal', 'staggered cards', 'keyboard focus', 'reduced motion cancellation', 'pause cancellation', 'mobile fallback', 'no-JavaScript content'] };
}
