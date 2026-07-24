import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { articleJsonLd } from "@/lib/seo";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ImageSlot } from "@/components/ImageSlot";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getAllSlugs().includes(slug)) notFound();
  const post = getPostBySlug(slug);

  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.description,
              slug: post.slug,
              publishedAt: post.publishedAt,
              updatedAt: post.updatedAt,
            })
          ),
        }}
      />
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
        {post.cluster}
      </p>
      <h1 className="mt-1 font-display text-3xl font-bold italic text-brand-900">{post.title}</h1>
      <p className="mt-2 text-sm text-brand-500">
        {post.publishedAt} · {post.readingTime}
      </p>
      <div className="mt-6">
        <ImageSlot alt={post.title} caption="Photo coming soon" ratio="video" />
      </div>
      <div className="mt-6">
        <AffiliateDisclosure />
      </div>
      <div className="prose prose-brand mt-8 max-w-none">
        <MDXRemote source={post.content} />
      </div>
      <div className="mt-12">
        <NewsletterSignup />
      </div>
    </article>
  );
}
