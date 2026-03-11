/**
 * Post-build script: Injects Open Graph and Twitter Card meta tags into
 * the built index.html. Run after `vite build`.
 *
 * Usage: node scripts/inject-meta.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.resolve(__dirname, "../dist/public/index.html");

const metaTags = `
    <!-- Open Graph -->
    <meta property="og:title" content="The Prompt Architect – AI Music Prompt Books" />
    <meta property="og:description" content="2500+ AI music generation prompts for Suno, Udio and Riffusion. Includes The Prompt Architect, The Seduction Protocols and Blueprint bonus books." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/assets/hero-bg.png" />
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="The Prompt Architect – AI Music Prompt Books" />
    <meta name="twitter:description" content="Master AI music generation with over 2500 prompts for Suno, Udio and Riffusion." />
    <meta name="twitter:image" content="/assets/hero-bg.png" />
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "The Prompt Architect",
      "description": "The definitive guide to AI music generation with 2500+ prompts for Suno, Udio and Riffusion.",
      "image": "/assets/bundle-preorder.jpg",
      "author": { "@type": "Person", "name": "Prompt Architect" }
    }
    </script>`;

let html = fs.readFileSync(indexPath, "utf-8");
html = html.replace("</head>", `${metaTags}\n  </head>`);
fs.writeFileSync(indexPath, html, "utf-8");

console.log("✓ OG/Twitter meta tags injected into dist/public/index.html");
