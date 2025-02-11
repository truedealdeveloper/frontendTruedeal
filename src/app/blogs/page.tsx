import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "./blogData"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white font-serif">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif">
          Truedeal Travel Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl font-serif leading-relaxed">
          Discover inspiring travel stories, expert guides, and hidden gems around the world.
        </p>
        
        <div className="space-y-16">
          {blogPosts.map((post) => (
            <article 
              key={post.slug} 
              className="border-b border-gray-200 pb-16 last:border-b-0"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/5 relative">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative h-64 lg:h-[400px]">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                </div>
                <div className="lg:w-3/5">
                  <div className="flex items-center text-sm text-gray-500 mb-6 font-sans">
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors font-serif leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-xl leading-relaxed font-serif line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>

                  <div className="flex flex-wrap gap-3">
                    {post.tags?.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-gray-100 rounded-full px-4 py-1.5 text-sm text-gray-600 font-sans hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

