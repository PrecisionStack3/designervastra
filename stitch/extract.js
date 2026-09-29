const fs = require("fs");
const path = require("path");
const dir = __dirname;
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(dir, f), "utf8").replace(/></g, ">\n<");
  const title = (html.match(/<title>([^<]*)/) || [])[1];
  const comments = [...html.matchAll(/<!--\s*([^>]+)\s*-->/g)].map((m) => m[1].trim());
  const headings = [...html.matchAll(/<h[1-5][^>]*>([\s\S]*?)<\/h[1-5]>/g)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  );
  const imgs = [...html.matchAll(/src="(https:[^"]+)"/g)].map((m) => m[1]);
  const bgs = [...html.matchAll(/url\('(https:[^']+)'\)/g)].map((m) => m[1]);
  console.log("\n======== " + f + " ========");
  console.log("TITLE:", title);
  console.log("SECTIONS:");
  comments.forEach((c) => console.log(" -", c.slice(0, 160)));
  console.log("HEADINGS:");
  headings.forEach((h, i) => console.log(String(i + 1).padStart(2), h.slice(0, 160)));
  console.log("IMG", imgs.length, "BG", bgs.length);
  [...imgs, ...bgs].forEach((u) => console.log(u.slice(0, 120)));
}
