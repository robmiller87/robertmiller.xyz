import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Robert Miller

Notes on technology, markets, and human systems — plus the occasional field report from real life.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [RSS Feed](/rss.xml)

## Links

- X: [@rob_miller87](https://x.com/rob_miller87)
- LinkedIn: [rm16](https://www.linkedin.com/in/rm16/)
- GitHub: [@robmiller87](https://github.com/robmiller87)

---

*This is the markdown-only version of robertmillerconsultancy.com. Visit [robertmillerconsultancy.com](https://robertmillerconsultancy.com) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
