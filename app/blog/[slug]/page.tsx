/* eslint-disable react/no-unescaped-entities */
"use client";

import  { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Eye,
  MessageSquare,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Bookmark,
  Send,
} from "lucide-react";
import Container from "@/app/shared/components/Container";
import Banner from "@/app/about/components/Banner";

// Demo Related Posts Data
const relatedPosts = [
  {
    id: 1,
    title: "The Importance of Diversity in Higher Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    date: "21 DEC",
    author: "Admin",
    views: "1.6k",
    comments: 24,
    href: "/blog/importance-of-diversity",
  },
  {
    id: 2,
    title: "10 Tips for Successful Online Learning",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    date: "21 DEC",
    author: "Admin",
    views: "1.6k",
    comments: 24,
    href: "/blog/10-tips-online-learning",
  },
];

const BlogDetailsPage = () => {
  const [commentText, setCommentText] = useState("");

  return (
    <main className="bg-[#F8FAFC]">
      {/* ---------------- 1. DYNAMIC BANNER ---------------- */}
      <Banner
        title="Blog Details"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Navigating the Job Market" },
        ]}
      />

      {/* ---------------- 2. MAIN ARTICLE CONTENT ---------------- */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left/Main Column: Article Details */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-xs">
                {/* Featured Image */}
                <div className="relative h-75 sm:h-105 w-full rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Blog Cover"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-[#10B981] text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
                    English
                  </div>
                </div>

                {/* Article Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100 text-xs sm:text-sm text-gray-500 font-medium">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-orange-500" />
                      By Admin
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      Dec 21, 2026
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-orange-500" />
                      1.6k Views
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-orange-500" />
                      24 Comments
                    </span>
                  </div>

                  <button className="flex items-center gap-1.5 text-gray-600 hover:text-orange-500 transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>

                {/* Article Body */}
                <article className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-6">
                  <p className="text-lg text-gray-800 font-medium leading-relaxed">
                    Transitioning from university to the professional world can feel overwhelming. With changing industries, emerging technologies, and evolving workforce needs, recent graduates must adopt strategic approaches to land their ideal roles.
                  </p>

                  <h2 className="text-2xl font-extrabold text-[#020B2D] mt-8 mb-4">
                    1. Tailor Your Resume and Digital Presence
                  </h2>
                  <p>
                    Sending out generic applications rarely works in today's competitive landscape. Customizing your resume to match specific keywords from job descriptions helps pass Applicant Tracking Systems (ATS) and demonstrates genuine alignment with the prospective employer's needs.
                  </p>

                  {/* Blockquote */}
                  <blockquote className="border-l-4 border-orange-500 bg-orange-50/50 p-6 rounded-r-xl my-6 text-[#020B2D] italic font-medium">
                    "Networking is not about just connecting people. It's about connecting people with people, people with ideas, and people with opportunities."
                  </blockquote>

                  <h2 className="text-2xl font-extrabold text-[#020B2D] mt-8 mb-4">
                    2. Leverage Informational Interviews
                  </h2>
                  <p>
                    Reaching out to alumni and industry professionals on platforms like LinkedIn for 15-minute chats can unlock hidden opportunities. Focus on gaining insight rather than asking directly for job placements.
                  </p>
                </article>

                {/* Social Share Footer */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#020B2D]">Share Post:</span>
                    <div className="flex gap-2">
                      <button className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase text-gray-400">Tags:</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Careers</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">Jobs</span>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#020B2D] mb-6">Leave a Comment</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                  </div>
                  <textarea
                    rows={4}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment here..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm outline-none focus:border-orange-500 transition-colors"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#020B2D] hover:bg-orange-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
                  >
                    Post Comment
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Author Box */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-xs">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-400">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#020B2D]">Sarah Jenkins</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Senior Education Editor</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Passionate about modern learning methodologies, career guidance, and empowering students to reach their full potential.
                </p>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
                <h4 className="text-lg font-bold text-[#020B2D] mb-4 pb-2 border-b border-gray-100">
                  Related Posts
                </h4>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="flex gap-3 group">
                      <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <Link
                          href={post.href}
                          className="text-xs font-bold text-[#020B2D] group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug"
                        >
                          {post.title}
                        </Link>
                        <span className="text-[11px] text-gray-400 mt-1">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BlogDetailsPage;