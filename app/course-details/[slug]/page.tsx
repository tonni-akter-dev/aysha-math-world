"use client";

import Container from "@/app/shared/components/Container";
import {
  Download,
} from "lucide-react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const CourseDetails = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-linear-to-r from-[#020B2D] to-[#06144F] h-105 pt-40">
        <Container>
          {/* Decorative shapes */}
          <span className="absolute top-10 right-24 w-14 h-14 border-2 border-sky-400 rounded-full opacity-40" />
          <span className="absolute bottom-10 right-10 w-3 h-3 bg-orange-400 rounded-full" />
          <span className="absolute top-1/2 right-1/3 text-pink-400 text-4xl rotate-12">
            ✎
          </span>

          <div className="container mx-auto px-4 relative z-10">
            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              ষষ্ঠ শ্রেণি - অনলাইন ব্যাচ ২০২৬
            </h1>
            <button className="text-blue-300 flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Download className="w-5 h-5" />
              Download Routine
            </button>
          </div>
        </Container>
      </section>

      {/* Main Content Section with Sticky Card */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Main Content */}
            <LeftColumn />

            {/* Right Column - Sticky Card */}
            <RightColumn />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CourseDetails;
