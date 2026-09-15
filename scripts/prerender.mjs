/**
 * Renders every route to static HTML so the site ships as a plain folder of
 * files — fast, crawlable, and hostable anywhere. Run after both Vite builds.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const template = await readFile(path.join(clientDir, "index.html"), "utf8");
const { render, routes, club } = await import(pathToFileURL(serverEntry).href);

for (const route of routes) {
  const { html, head } = render(route.path);

  const page = template
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);

  const outFile =
    route.path === "/"
      ? path.join(clientDir, "index.html")
      : path.join(clientDir, route.path.slice(1), "index.html");

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, page, "utf8");
  console.log(`  prerendered  ${route.path}`);
}

// The router is client-side, so unknown deep links need a fallback that still
// boots the app (Netlify/Vercel/S3 all honour 404.html).
const { html, head } = render("/__not-found__");
await writeFile(
  path.join(clientDir, "404.html"),
  template.replace("<!--app-head-->", head).replace("<!--app-html-->", html),
  "utf8",
);

const origin = club.url;

await writeFile(
  path.join(clientDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${origin}${r.path === "/" ? "" : r.path}</loc></url>`)
  .join("\n")}
</urlset>
`,
  "utf8",
);

await writeFile(
  path.join(clientDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  "utf8",
);

console.log(`\n✓ ${routes.length} pages + sitemap.xml, robots.txt, 404.html\n`);
