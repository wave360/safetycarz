import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import Button from '@/components/Button';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-900 text-white flex items-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose lg:prose-lg max-w-none">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg mb-8"
            />
            <p className="text-sm text-gray-500 mb-8">
              Publié le {post.date} • {post.readingTime} de lecture
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className="mt-12 flex justify-between items-center">
            <Button variant="outline" as="a" href="/blog">
              ← Retour au blog
            </Button>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
