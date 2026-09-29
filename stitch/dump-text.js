const fs = require("fs");
const path = require("path");

function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h1|h2|h3|h4|h5|li|section|button|label|span|a)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 1)
    .join("\n");
}

const dir = __dirname;
for (const f of ["home.html", "creations.html", "services.html", "design-vastra.html"]) {
  const html = fs.readFileSync(path.join(dir, f), "utf8");
  const main = html.split("<main")[1]?.split("</main>")[0] || html;
  fs.writeFileSync(path.join(dir, f.replace(".html", ".txt")), textOf(main));
}

function images(file) {
  const html = fs.readFileSync(path.join(dir, file), "utf8");
  const urls = [];
  for (const m of html.matchAll(/src="(https:\/\/lh3[^"]+)"/g)) urls.push(m[1]);
  for (const m of html.matchAll(/url\('(https:\/\/lh3[^']+)'\)/g)) urls.push(m[1]);
  const alts = [...html.matchAll(/data-alt="([^"]+)"/g)].map((m) => m[1]);
  return { file, urls, alts };
}

const out = ["home.html", "creations.html", "services.html"].map(images);
fs.writeFileSync(path.join(dir, "images.json"), JSON.stringify(out, null, 2));
console.log("wrote texts");
