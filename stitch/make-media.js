const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "images.json"), "utf8"));
const by = Object.fromEntries(data.map((d) => [d.file, d.urls]));

const designHtml = fs.readFileSync(path.join(__dirname, "..", "stitch-screen.html"), "utf8");
const designUrls = [...designHtml.matchAll(/src="(https:\/\/lh3[^"]+)"/g)].map((m) => m[1]);
const designBgs = [...designHtml.matchAll(/url\('(https:\/\/lh3[^']+)'\)/g)].map((m) => m[1]);

const media = {
  home: by["home.html"],
  creations: by["creations.html"],
  services: by["services.html"],
  design: designUrls,
  map: designBgs[0] || "",
  logo: "/brand-logo.jpg",
};

const out = `export const media = ${JSON.stringify(media, null, 2)};\n`;
fs.mkdirSync(path.join(__dirname, "..", "src"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "..", "src", "media.js"), out);
console.log("home", media.home.length, "creations", media.creations.length, "services", media.services.length, "design", media.design.length);
