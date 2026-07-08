import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/ArticleLayout";
import blogsData from "@/data/blogs.json";

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
    <ArticleLayout
      eyebrow={post.eyebrow}
      title={post.title}
    >
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </ArticleLayout>
  );
}
