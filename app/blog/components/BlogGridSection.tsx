"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Eye,
  MessageSquare,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Container from "@/app/shared/components/Container";
import Pagination from "@/app/shared/components/Pagination";
import { initialBlogs } from "@/utils/data";

const subjects = [
  "All Subjects",
  "Math",
  "Physics",
  "English",
  "Chemistry",
  "Computer Science",
];



const BlogGridSection = () => {
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [sortBy, setSortBy] = useState("Popular");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs =
    selectedSubject === "All Subjects"
      ? initialBlogs
      : initialBlogs.filter((blog) => blog.subject === selectedSubject);

  return (
    <section className="py-12 bg-[#F8FAFC]">
      <Container>
        {/* ---------------- SUBJECT FILTER TABS ---------------- */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {subjects.map((subject) => {
            const isActive = selectedSubject === subject;
            return (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#020B2D] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {subject}
              </button>
            );
          })}
        </div>

        {/* ---------------- HEADER BAR (RESULTS COUNT & SORT) ---------------- */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium">
            Showing{" "}
            <span className="text-gray-900 font-semibold">
              {filteredBlogs.length}
            </span>{" "}
            of 600 Results
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm font-medium">Sort By :</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-2 pr-8 text-sm font-semibold text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="Popular">Popular</option>
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ---------------- CARD GRID ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Thumbnail & Green Date Badge */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Date Badge */}
                <div className="absolute bottom-3 right-3 bg-[#10B981] text-white rounded-xl px-3 py-1.5 text-center flex flex-col items-center justify-center font-bold shadow-xs">
                  <span className="text-lg leading-none">{blog.date}</span>
                  <span className="text-[10px] tracking-wider uppercase">
                    {blog.month}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#020B2D] leading-snug mb-4 hover:text-orange-500 transition-colors">
                    <Link href={blog.href}>{blog.title}</Link>
                  </h3>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-6">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      By {blog.author}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-gray-400" />
                      {blog.views}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
                      {blog.comments}
                    </span>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={blog.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-orange-500 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={20}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default BlogGridSection;
