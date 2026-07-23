import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export const metadata: Metadata = {
  title: "All Guides",
  description:
    "Every ADHD-friendly routine, tool comparison, and printable — organized by topic.",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ cluster?: string }>;
}) {
  const { cluster } = await searchParams;
  const allPosts = getAllPosts();
  const posts = cluster
    ? allPosts.filter((post) => post.cluster === cluster)
    : allPosts;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-900">All guides</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="text-brand-700">No guides in this topic yet.</p>
        )}
      </div>
    </div>
  );
}
