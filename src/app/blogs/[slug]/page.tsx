// "use client"

// import { useParams } from "next/navigation"
// import Image from "next/image"
// import Link from "next/link"
// import { blogPosts } from "../blogData"
// import { FaTwitter, FaFacebook, FaLinkedin, FaBookmark } from "react-icons/fa"

// export default function BlogPost() {
//   const { slug } = useParams()
//   const post = blogPosts.find((p) => p.slug === slug)

//   if (!post) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl text-gray-600">Blog post not found</h1>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 mt-8">
//       <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-10">
//           {/* Navigation */}
//           <div className="mb-8">
//             <Link 
//               href="/blogs" 
//               className="text-gray-600 hover:text-gray-900 text-sm font-medium"
//             >
//               ← All stories
//             </Link>
//           </div>

//           <header className="mb-12">
//             {/* Author info and meta */}
//             <div className="flex items-center mb-8">
//               <Image
//                 src={post.author?.image || "/placeholder.svg"}
//                 alt={post.author?.name || ""}
//                 width={48}
//                 height={48}
//                 className="rounded-full"
//               />
//               <div className="ml-4">
//                 <div className="font-medium text-gray-900">
//                   {post.author?.name || "Truedeal Travel"}
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span>{post.publishDate || new Date().toLocaleDateString()}</span>
//                   <span className="mx-2">·</span>
//                   <span>{post.readTime || "5 min read"}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Title */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
//               {post.title}
//             </h1>

//             {/* Subtitle/Excerpt */}
//             <p className="text-xl text-gray-600 mb-8">
//               {post.excerpt}
//             </p>

//             {/* Featured Image */}
//             <div className="relative aspect-[16/9] mb-12">
//               <Image
//                 src={post.image || "/placeholder.svg"}
//                 alt={post.title}
//                 fill
//                 className="rounded-lg object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
//               />
//             </div>

//             {/* Social Share Floating Bar */}
//             <div className="fixed left-8 top-1/3 hidden lg:flex flex-col space-y-4">
//               <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
//                 <FaTwitter size={20} />
//               </button>
//               <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
//                 <FaFacebook size={20} />
//               </button>
//               <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
//                 <FaLinkedin size={20} />
//               </button>
//               <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
//                 <FaBookmark size={20} />
//               </button>
//             </div>
//           </header>

//           {/* Article Content */}
//           <div className="prose prose-lg max-w-none">
//             {post.content.split("\n\n").map((paragraph, index) => {
//               // Check if the paragraph is a heading (starts with # or ##)
//               if (paragraph.startsWith('# ')) {
//                 return (
//                   <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
//                     {paragraph.substring(2)}
//                   </h2>
//                 );
//               }
//               if (paragraph.startsWith('## ')) {
//                 return (
//                   <h3 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
//                     {paragraph.substring(3)}
//                   </h3>
//                 );
//               }
//               // Regular paragraph
//               return (
//                 <p key={index} className="mb-6 text-gray-800 leading-relaxed">
//                   {paragraph}
//                 </p>
//               );
//             })}
//           </div>

//           {/* Tags */}
//           {post.tags && (
//             <div className="mt-12">
//               {post.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-700 mr-2 mb-2 hover:bg-gray-200 transition-colors"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Mobile Social Share */}
//           <div className="mt-12 flex justify-center space-x-6 lg:hidden">
//             <button className="p-3 text-gray-500 hover:text-gray-900">
//               <FaTwitter size={24} />
//             </button>
//             <button className="p-3 text-gray-500 hover:text-gray-900">
//               <FaFacebook size={24} />
//             </button>
//             <button className="p-3 text-gray-500 hover:text-gray-900">
//               <FaLinkedin size={24} />
//             </button>
//             <button className="p-3 text-gray-500 hover:text-gray-900">
//               <FaBookmark size={24} />
//             </button>
//           </div>

//           {/* Author Bio */}
//           {post.author && (
//             <div className="mt-16 pt-8 border-t border-gray-200">
//               <div className="flex items-start sm:items-center flex-col sm:flex-row">
//                 <Image
//                   src={post.author.image || "/placeholder.svg"}
//                   alt={post.author.name}
//                   width={80}
//                   height={80}
//                   className="rounded-full mb-4 sm:mb-0"
//                 />
//                 <div className="sm:ml-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     Written by {post.author.name}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {post.author.bio}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </article>

//         {/* More Articles Section */}
//         <div className="max-w-3xl mx-auto mt-16 mb-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">More stories</h2>
//           <div className="grid sm:grid-cols-2 gap-8">
//             {blogPosts.slice(0, 2).map((relatedPost) => (
//               <Link 
//                 key={relatedPost.slug} 
//                 href={`/blogs/${relatedPost.slug}`}
//                 className="group"
//               >
//                 <div className="aspect-[16/9] relative mb-4">
//                   <Image
//                     src={relatedPost.image || "/placeholder.svg"}
//                     alt={relatedPost.title}
//                     fill
//                     className="rounded-lg object-cover"
//                   />
//                 </div>
//                 <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
//                   {relatedPost.title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { blogPosts, BlogPost } from "../blogData"
import { FaTwitter, FaFacebook, FaLinkedin, FaBookmark } from "react-icons/fa"

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p: BlogPost) => p.slug === slug) as BlogPost | undefined

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Blog post not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-8">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-10">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              ← All stories
            </Link>
          </div>

          <header className="mb-12">
            {/* Author info and meta */}
            <div className="flex items-center mb-8">
              <Image
                src={post.author?.image || "/placeholder.svg"}
                alt={post.author?.name || ""}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <div className="font-medium text-gray-900">
                  {post.author?.name || "Truedeal Travel"}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.publishDate || new Date().toLocaleDateString()}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime || "5 min read"}</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Subtitle/Excerpt */}
            <p className="text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>

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

            {/* Social Share Floating Bar */}
            <div className="fixed left-8 top-1/3 hidden lg:flex flex-col space-y-4">
              <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
                <FaTwitter size={20} />
              </button>
              <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
                <FaFacebook size={20} />
              </button>
              <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
                <FaLinkedin size={20} />
              </button>
              <button className="p-3 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-sm hover:shadow transition-all">
                <FaBookmark size={20} />
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              // Check if the paragraph is a heading (starts with # or ##)
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.substring(2)}
                  </h2>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                    {paragraph.substring(3)}
                  </h3>
                );
              }
              // Regular paragraph
              return (
                <p key={index} className="mb-6 text-gray-800 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          {post.tags && (
            <div className="mt-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-700 mr-2 mb-2 hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Mobile Social Share */}
          <div className="mt-12 flex justify-center space-x-6 lg:hidden">
            <button className="p-3 text-gray-500 hover:text-gray-900">
              <FaTwitter size={24} />
            </button>
            <button className="p-3 text-gray-500 hover:text-gray-900">
              <FaFacebook size={24} />
            </button>
            <button className="p-3 text-gray-500 hover:text-gray-900">
              <FaLinkedin size={24} />
            </button>
            <button className="p-3 text-gray-500 hover:text-gray-900">
              <FaBookmark size={24} />
            </button>
          </div>

          {/* Author Bio */}
          {post.author && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-start sm:items-center flex-col sm:flex-row">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 sm:mb-0"
                />
                <div className="sm:ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Written by {post.author.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          )}
        </article>

        {/* More Articles Section */}
        <div className="max-w-3xl mx-auto mt-16 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More stories</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((relatedPost) => (
              <Link 
                key={relatedPost.slug} 
                href={`/blogs/${relatedPost.slug}`}
                className="group"
              >
                <div className="aspect-[16/9] relative mb-4">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
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
