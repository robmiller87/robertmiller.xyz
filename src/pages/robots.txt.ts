import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL, llmsURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}

# AI/LLM Crawlers - structured info about site owner
# See: https://llmstxt.org/
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: Claude-Web
User-agent: Anthropic-AI
User-agent: PerplexityBot
Allow: /llms.txt
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  const llmsURL = new URL("llms.txt", site);
  return new Response(getRobotsTxt(sitemapURL, llmsURL));
};
