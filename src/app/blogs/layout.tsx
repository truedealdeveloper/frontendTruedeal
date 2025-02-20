import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "./blogData"

// Helper function to generate metadata based on current path
export async function generateMetadata({ params }: { params: { slug?: string } }): Promise<Metadata> {
  // If we're on a specific blog post
  if (params.slug) {
    const post = blogPosts.find(p => p.slug === params.slug)
    if (post) {
      return {
        title: `${post.title} | Truedeal Travel Blog`,
        description: post.excerpt,
        openGraph: {
          title: post.title,
          description: post.excerpt,
          images: [post.image],
          type: 'article',
          authors: post.author?.name,
          publishedTime: post.publishDate,
          tags: post.tags,
        },
        twitter: {
          card: 'summary_large_image',
          title: post.title,
          description: post.excerpt,
          images: [post.image],
        },
        alternates: {
          canonical: `https://www.truedeal4u.com/blogs/${post.slug}`,
        },
        keywords: post.tags?.join(', '),
      }
    }
  }

  // Default metadata for blog listing page
  return {
    title: "Travel Blog | Truedeal Travel",
    description: "Explore travel stories, guides, and hidden gems around the world with Truedeal Travel's blog.",
    openGraph: {
      title: "Travel Blog | Truedeal Travel",
      description: "Explore travel stories, guides, and hidden gems around the world with Truedeal Travel's blog.",
      images: ['/Assets/NavbarImages/logo.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Travel Blog | Truedeal Travel",
      description: "Explore travel stories, guides, and hidden gems around the world with Truedeal Travel's blog.",
      images: ['/Assets/NavbarImages/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://www.truedeal4u.com/blogs',
    },
    verification: {
      google: 'google-site-verification=2wyPdrWOgtbDk0m_GbZfczCwx6g46vqbXpbP-INhwy0',
    },
  }
}

// Generate structured data for SEO
function generateStructuredData(post?: typeof blogPosts[0]) {
  if (post) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.publishDate,
      author: {
        '@type': 'Person',
        name: post.author?.name || 'Truedeal Travel Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Truedeal Travel',
        logo: {
          '@type': 'ImageObject',
          url: '/Assets/NavbarImages/logo.png'
        }
      }
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Truedeal Travel Blog',
    description: 'Explore travel stories, guides, and hidden gems around the world with Truedeal Travel\'s blog.',
    publisher: {
      '@type': 'Organization',
      name: 'Truedeal Travel',
      logo: {
        '@type': 'ImageObject',
        url: '/Assets/NavbarImages/logo.png'
      }
    }
  }
}

export default function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug?: string }
}) {
  // Get current post if we're on a blog post page
  const currentPost = params.slug ? blogPosts.find(p => p.slug === params.slug) : undefined

  return (
    <section className="bg-white">
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData(currentPost)) }}
      />

      {/* Blog Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <nav>
              <ul className="flex space-x-8 text-gray-600">
                <li>
                  <Link 
                    href="/blogs" 
                    className="hover:text-gray-900 transition-colors font-medium"
                  >
                    All Posts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-gray-900">Blog</Link>
              {currentPost && (
                <>
                  <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                  <span className="text-gray-900">{currentPost.title}</span>
                </>
              )}
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </section>
  )
} 