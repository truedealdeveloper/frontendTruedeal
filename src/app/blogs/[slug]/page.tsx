"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { blogPosts } from "../blogData"
import type { BlogPost } from "../blogData"
import { FaTwitter, FaFacebook, FaLinkedin, FaBookmark } from "react-icons/fa"

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p: BlogPost) => p.slug === slug) as BlogPost | undefined
  const [showShareButtons, setShowShareButtons] = useState(true)
  const moreStoriesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (moreStoriesRef.current) {
        const moreStoriesPosition = moreStoriesRef.current.getBoundingClientRect().top
        setShowShareButtons(moreStoriesPosition > window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShare = (platform: string) => {
    const currentUrl = window.location.href
    let shareUrl = ''

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post?.title || '')}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
        break
      case 'copy':
        navigator.clipboard.writeText(currentUrl)
        alert('Link copied to clipboard!')
        return
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Blog post not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white mt-8">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Share Floating Bar - Updated with visibility control */}
        <div className={`fixed left-0 top-1/3 hidden lg:flex flex-col space-y-4 ml-4 transition-opacity duration-300 ${showShareButtons ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => handleShare('facebook')}
            className="p-2 text-gray-500 hover:text-blue-500 bg-white rounded-full shadow-sm hover:shadow transition-all"
          >
            <FaFacebook size={20} />
          </button>
          <button 
            onClick={() => handleShare('twitter')}
            className="p-2 text-gray-500 hover:text-blue-400 bg-white rounded-full shadow-sm hover:shadow transition-all"
          >
            <FaTwitter size={20} />
          </button>
          <button 
            onClick={() => handleShare('linkedin')}
            className="p-2 text-gray-500 hover:text-blue-600 bg-white rounded-full shadow-sm hover:shadow transition-all"
          >
            <FaLinkedin size={20} />
          </button>
          <button 
            onClick={() => handleShare('copy')}
            className="p-2 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all"
          >
            <FaBookmark size={20} />
          </button>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link href="/blogs" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              ← Back to Blogs
            </Link>
          </div>

          <header className="mb-12">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Author info and meta */}
            <div className="flex items-center mb-8">
              <Image
                src={post.author?.image || "/placeholder.svg"}
                alt={post.author?.name || ""}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <div className="font-medium text-gray-900">{post.author?.name || "Truedeal Travel"}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.publishDate || new Date().toLocaleDateString()}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime || "5 min read"}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] mb-12">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.substring(2)}
                  </h2>
                )
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                    {paragraph.substring(3)}
                  </h3>
                )
              }
              return (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          {post.tags && (
            <div className="mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Mobile Social Share - Updated with share functionality */}
          <div className="mt-8 flex justify-center space-x-6 lg:hidden border-t border-b border-gray-200 py-4">
            <button 
              onClick={() => handleShare('facebook')}
              className="p-2 text-gray-500 hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </button>
            <button 
              onClick={() => handleShare('twitter')}
              className="p-2 text-gray-500 hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="p-2 text-gray-500 hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </button>
            <button 
              onClick={() => handleShare('copy')}
              className="p-2 text-gray-500 hover:text-gray-900"
            >
              <FaBookmark size={24} />
            </button>
          </div>

          {/* Author Bio */}
          {post.author && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Written by {post.author.name}</h3>
                  <p className="text-gray-600">{post.author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </article>

        {/* More Articles Section - Added ref */}
        <div ref={moreStoriesRef} className="max-w-4xl mx-auto mt-16 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More stories</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blogs/${relatedPost.slug}`} className="group">
                <div className="aspect-[16/9] relative mb-4">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-600">
                  {relatedPost.title} 
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}