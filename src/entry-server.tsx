import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { club } from "./data/site";
import { routeByPath, routes } from "./data/routes";

// Re-exported so the prerender script knows every URL to emit, and which
// origin to stamp into sitemap.xml / robots.txt.
export { routes, club };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Renders one route to static HTML plus the <head> tags for that URL. */
export function render(url: string) {
  const meta = routeByPath.get(url);
  const title = meta?.title ?? `${club.name} — ${club.city}, ${club.state}`;
  const description = meta?.description ?? club.tagline;
  const canonical = `${club.url}${url === "/" ? "" : url}`;

  const html = renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );

  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(club.name)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${esc(club.url)}/brand/og.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    url === "/" ? sportsClubJsonLd() : "",
  ]
    .filter(Boolean)
    .join("\n    ");

  return { html, head };
}

/** Local-business structured data — helps the club surface in "soccer near me". */
function sportsClubJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: club.name,
    description: club.tagline,
    url: club.url,
    telephone: club.phone,
    email: club.email,
    sport: "Soccer",
    address: {
      "@type": "PostalAddress",
      streetAddress: club.address.line2,
      addressLocality: club.address.city,
      addressRegion: club.address.state,
      postalCode: club.address.zip,
      addressCountry: "US",
    },
    sameAs: [club.social.instagram, club.social.facebook],
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}
