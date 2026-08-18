import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";
import { supabase, type Blog } from "@/lib/supabase";

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

    if (line.startsWith("<")) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(line);
      continue;
    }

    if (/^H2:\s*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(`<h2>${inline(line.replace(/^H2:\s*/i, ""))}</h2>`);
      continue;
    }

    if (/^H3:\s*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(`<h3>${inline(line.replace(/^H3:\s*/i, ""))}</h3>`);
      continue;
    }

    if (/^P:\s*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (inUl) { output.push("</ul>"); inUl = false; }
      output.push(`<p>${inline(line.replace(/^P:\s*/i, ""))}</p>`);
      continue;
    }

    if (/^Numbered list[:\s]*/i.test(line)) {
      if (inUl) { output.push("</ul>"); inUl = false; }
      if (!inOl) { output.push("<ol>"); inOl = true; }
      continue;
    }

    if (/^Bullet list[:\s]*/i.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (!inUl) { output.push("<ul>"); inUl = true; }
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (inUl) { output.push("</ul>"); inUl = false; }
      if (!inOl) { output.push("<ol>"); inOl = true; }
      output.push(`<li>${inline(line.replace(/^\d+\.\s+/, ""))}</li>`);
      continue;
    }

    if (/^[-•*]\s+/.test(line)) {
      if (inOl) { output.push("</ol>"); inOl = false; }
      if (!inUl) { output.push("<ul>"); inUl = true; }
      output.push(`<li>${inline(line.replace(/^[-•*]\s+/, ""))}</li>`);
      continue;
    }

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
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\[([^\]]+)\]/g, '<a href="/contact">$1</a>');
}

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ loaderData }) => {
    const post = loaderData?.post
    return {
      meta: [
        { title: post?.meta_title ?? "Blog | CloutNine" },
        { name: "description", content: post?.meta_description ?? "" },
        { property: "og:title", content: post?.meta_title ?? "Blog | CloutNine" },
        { property: "og:description", content: post?.meta_description ?? "" },
      ],
    };
  },
  loader: async ({ params }) => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', params.slug)
      .eq('is_published', true)
      .single()

    if (error) return { post: null }
    return { post: data as Blog }
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData()

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