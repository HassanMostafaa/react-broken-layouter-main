// app/sitemap.xml/route.ts
export async function GET(req: Request) {
  const baseUrl = `https://${
    req.headers.get("host") || req.headers.get("x-forwarded-host")
  }`;

  const urls = [
    { loc: "/", priority: "1.0" },
    { loc: "/docs", priority: "0.9" },
    { loc: "/demo", priority: "0.8" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, priority }) => `
    <url>
      <loc>${baseUrl}${loc}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <priority>${priority}</priority>
    </url>`
      )
      .join("")}
  </urlset>`.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `max-age=${60 * 60 * 1}`, // optional 1-hour cache
    },
  });
}
