// Renders the site's 404 page into dist/404.html after `vite build`.
// TanStack Start's prerenderer fails the build on non-200 responses, so the
// 404 page can't go through it; instead this renders it once with the SSR
// bundle from the same build. Static hosts (Cloudflare Pages, Netlify, Vercel,
// ...) serve 404.html for unknown URLs.
import { writeFile } from "node:fs/promises";
import server from "../dist-ssr/server.js";

const res = await server.fetch(new Request("http://localhost/404"));
if (res.status !== 404) {
  throw new Error(`Expected the 404 page to render with status 404, got ${res.status}`);
}
await writeFile(new URL("../dist/404.html", import.meta.url), await res.text());
console.log("[prerender] - /404.html");
