import { defineConfig, loadEnv } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define: envDefine,
    // Match the build's CSS pipeline in dev: Lightning CSS handles minification
    // and vendor prefixing consistently in both modes.
    css: { transformer: "lightningcss" },
    resolve: {
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    server: { host: true, port: 8080 },
    environments: {
      // The deployable static site. `dist` is the default publish directory of
      // the Vite presets on Cloudflare Pages, Netlify and Vercel.
      client: { build: { outDir: "dist" } },
      // Server bundle used only at build time to render the HTML; kept out of
      // `dist` so it's never published.
      ssr: { build: { outDir: "dist-ssr" } },
    },
    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        // Static site: every page is rendered to plain HTML at build time
        // (starting at "/" and following internal links), so `dist` can be
        // served from the root of a domain by any static host — no server needed.
        // The 404 page is rendered separately by scripts/prerender-404.mjs.
        prerender: { enabled: true, crawlLinks: true },
        importProtection: {
          behavior: "error",
          client: { files: ["**/server/**"], specifiers: ["server-only"] },
        },
      }),
      viteReact(),
    ],
  };
});
