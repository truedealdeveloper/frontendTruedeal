import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "./blogData"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Truedeal Travel Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
          Discover inspiring travel stories, expert guides, and hidden gems around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/blogs/${post.slug}`}>
                <div className="relative h-64">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="inline-flex items-center">
                    {post.author?.image && (
                      <Image
                        src={post.author.image}
                        alt={post.author?.name || ""}
                        width={32}
                        height={32}
                        className="rounded-full mr-3"
                      />
                    )}
                    <span className="font-medium">{post.author?.name || "Truedeal Travel"}</span>
                  </span>
                  <span className="mx-2">·</span>
                  <span>{post.publishDate || new Date().toLocaleDateString()}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime || "5 min read"}</span>
                </div>

                <Link href={`/blogs/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>

                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

