"use client";

import { Download, Sparkles } from "lucide-react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const CourseDetails = () => {
  return (
    <div>
      {/* ----------------- PROFESSIONAL & MATCHED BANNER ----------------- */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#dbeafe] via-[#f0f6ff] to-white border-b border-blue-100 pt-40 pb-16">
        {/* Decorative shapes matching the site theme */}
        <span className="absolute top-16 left-10 md:left-20 w-5 h-5 border-2 border-orange-300 rounded-full opacity-80 pointer-events-none" />
        <span className="absolute bottom-12 left-16 grid grid-cols-6 gap-2 opacity-60 pointer-events-none">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-red-400 rounded-full" />
          ))}
        </span>
        <span className="absolute top-10 right-12 md:right-28 w-5 h-5 border-2 border-orange-300 rounded-full opacity-80 pointer-events-none" />
        <span className="absolute top-1/2 right-24 text-pink-300 text-5xl rotate-12 opacity-70 pointer-events-none hidden md:block">
          ✎
        </span>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="bg-white/70 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5 border border-blue-200 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Online Batch 2026
          </span>
          <h1 className="text-[#1E293B] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            ষষ্ঠ শ্রেণি - অনলাইন ব্যাচ ২০২৬
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            আপনার সন্তানের জন্য সেরা অনলাইন শিক্ষার অভিজ্ঞতা। লাইভ ক্লাস, রেকর্ডেড ভিডিও এবং নিয়মিত মূল্যায়ন।
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300">
            <Download className="w-5 h-5" />
            Download Routine
          </button>
        </div>
      </section>

      {/* ----------------- MAIN CONTENT SECTION ----------------- */}
      <section className="py-16 bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Main Content */}
            <LeftColumn />

            {/* Right Column - Sticky Card */}
            <RightColumn />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;