import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";
import blogsData from "@/data/blogs.json";

function renderContent(raw: string): string {
  const lines = raw.split("\n");
  const output: string[] = [];
  let inOl = false;
  let inUl = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      continue;
    }

    // Already HTML — pass through untouched
    if (line.startsWith("<")) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(line);
      continue;
    }

    // H2
    if (/^H2:\s*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(`<h2>${inline(line.replace(/^H2:\s*/i, ""))}</h2>`);
      continue;
    }

    // H3
    if (/^H3:\s*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(`<h3>${inline(line.replace(/^H3:\s*/i, ""))}</h3>`);
      continue;
    }

    // P
    if (/^P:\s*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(`<p>${inline(line.replace(/^P:\s*/i, ""))}</p>`);
      continue;
    }

    // Numbered list label
    if (/^Numbered list[:\s]*/i.test(line)) {
      if (inUl) { output.push("</ul>"); inUl = false; }
      if (!inOl) { output.push("<ol>"); inOl = true; }
      continue;
    }

    // Bullet list label
    if (/^Bullet list[:\s]*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (!inUl) { output.push("<ul>"); inUl = true; }
      continue;
    }

    // Numbered list item
    if (/^\d+\.\s+/.test(line)) {
      if (inUl) { output.push("</ul>"); inUl = false; }
      if (!inOl) { output.push("<ol>"); inOl = true; }
      output.push(`<li>${inline(line.replace(/^\d+\.\s+/, ""))}</li>`);
      continue;
    }

    // Bullet list item
    if (/^[-•*]\s+/.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (!inUl) { output.push("<ul>"); inUl = true; }
      output.push(`<li>${inline(line.replace(/^[-•*]\s+/, ""))}</li>`);
      continue;
    }

    // Fallback — treat as paragraph
    if (inOl) { output.push("</ol>"); inOl = false; }
    if (inUl) { output.push("</ul>"); inUl = false; }
    output.push(`<p>${inline(line)}</p>`);
  }

  if (inOl) output.push("</ol>");
  if (inUl) output.push("</ul>");

  return output.join("\n");
}

function inline(text: string): string {
  return text
    // Bold **text**
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic *text*
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Markdown links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Bare placeholder links [text] with no url — highlight so you notice
    .replace(/\[([^\]]+)\]/g, '<a href="/contact">$1</a>');
}

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = blogsData.find((b) => b.slug === params.slug);
    return {
      meta: [
        { title: post?.metaTitle ?? "Blog | CloutNine" },
        { name: "description", content: post?.metaDescription ?? "" },
        { property: "og:title", content: post?.metaTitle ?? "Blog | CloutNine" },
        { property: "og:description", content: post?.metaDescription ?? "" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="container-x py-40 text-center">
        <h1 className="display text-3xl">Post not found</h1>
        <p className="mt-4 text-muted-foreground">This blog post doesn't exist or has been moved.</p>
      </div>
    );
  }

  return (
    <ArticleLayout eyebrow={post.eyebrow} title={post.title}>
      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
      />
    </ArticleLayout>
  );
}