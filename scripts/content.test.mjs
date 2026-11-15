import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const content = JSON.parse(
  readFileSync(new URL("../lib/content.json", import.meta.url)),
);
const html = readFileSync(
  new URL("../out/index.html", import.meta.url),
  "utf8",
);
test("the source union is represented in the exported portfolio", () => {
  for (const name of [
    "TechStaX",
    "Nudron IoT Solutions",
    "Pragati One",
    "Center for Technical Education",
    "ClassSync",
    "GiftGenie",
    "CommitCut",
    "BITS Course-Registration Portal",
    "SWD Store",
    "Night Vigil",
    "Apache",
    "Flutter Chaos Toolkit",
    "Campus Solar Generation Analysis",
  ]) {
    assert.ok(html.includes(name), `${name} must survive the static export`);
  }
  assert.equal(content.projects.length, 7);
  assert.equal(new Set(content.projects.map((p) => p.id)).size, 7);
});
test("project destinations, contact, and local assets are usable", () => {
  for (const project of content.projects) {
    const url = new URL(project.url);
    assert.equal(url.protocol, "https:");
    assert.ok(["Mobile", "Web", "AI & data"].includes(project.category));
  }
  for (const path of [
    "Arjav-Patel-Resume.pdf",
    "arjav-patel.jpg",
    "bits-goa.jpg",
  ]) {
    assert.ok(existsSync(new URL(`../out/${path}`, import.meta.url)), path);
  }
  assert.ok(html.includes("mailto:arjav1528@gmail.com"));
  assert.ok(!html.includes("gmail.com.com"));
  assert.ok(!html.includes("+919876543210"));
});
test("Showpad is a normal experience with plain-language contributions and no ticket references", () => {
  const entries = content.experience.filter(
    (item) => item.company === "Showpad",
  );
  assert.equal(entries.length, 1);
  assert.ok(entries[0].description.length < 200);
  const rows = [
    ...html.matchAll(/<details class="experience-row"[\s\S]*?<\/details>/g),
  ];
  const row = rows.find(([markup]) =>
    markup.includes("<strong>Showpad</strong>"),
  );
  assert.ok(row, "Showpad must render in the shared experience list");
  assert.ok(row[0].includes(entries[0].description));
  assert.ok(
    !/shipped|released|launched|completed/i.test(entries[0].description),
  );
  assert.ok(!html.includes('id="showpad"'));
  assert.ok(
    !/SP-113568|SP-114132|FEAT-9879|showpad\.atlassian\.net|SearchAI/.test(
      html,
    ),
  );
});
test("all same-page links have a destination", () => {
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.has(id), `Missing anchor #${id}`);
});
