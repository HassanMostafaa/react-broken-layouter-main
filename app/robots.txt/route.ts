export async function GET(req: Request) {
  const headers = new Headers(req.headers);
  const baseUrl = `https://${
    req.headers.get("host") || req.headers.get("x-forwarded-host")
  }`;

  const robots = `
  User-agent: *
  Allow: /
  
  Host: ${baseUrl}
  Sitemap: ${baseUrl}/sitemap.xml
  `.trim();

  headers.set("Content-Type", "text/plain");
  headers.set("Cache-Control", `max-age=${60 * 60 * 1}`); // 1 hour

  return new Response(robots, {
    status: 200,
    headers,
  });
}
