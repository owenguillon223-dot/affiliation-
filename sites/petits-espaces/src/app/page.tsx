import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SITE_TAGLINE } from "@/lib/seo";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-700">
          Real storage systems for studios, small apartments, and rentals —
          nothing that requires owning the walls.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-block rounded-md bg-brand-600 px-6 py-3 font-medium text-white hover:bg-brand-700"
        >
          Browse all guides
        </Link>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-brand-900">
          Latest guides
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
