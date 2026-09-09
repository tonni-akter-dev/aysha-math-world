"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import shape3 from "../../../public/shape3.png";
import Container from "@/app/shared/components/Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BannerProps {
  title?: string;
  breadcrumb?: BreadcrumbItem[];
}

const Banner = ({
  title = "About Us",
  breadcrumb = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ],
}: BannerProps) => {
  return (
    // Gradient টা হালকা নীলেই শেষ হবে, সাথে নিচে border-b দেওয়া হয়েছে যাতে আলাদা বোঝা যায়
    <section className="pt-50 pb-25 relative overflow-hidden bg-linear-to-b from-[#dbeafe] via-[#e0f2fe] to-[#f0f6ff] border-b border-blue-100">
      
      {/* ---------------- BACKGROUND SHAPES & ANIMATIONS ---------------- */}

      {/* Top Left: Orange Ring */}
      <span className="absolute top-12 left-10 md:left-20 w-5 h-5 border-2 border-orange-300 rounded-full opacity-80 pointer-events-none" />

      {/* Top Left: Floating Planet (shape3) */}
      <motion.div
        className="absolute top-8 left-20 md:left-36 z-0 pointer-events-none"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <Image
          src={shape3}
          alt="Planet shape"
          width={60}
          height={60}
          className="opacity-85"
        />
      </motion.div>

      {/* Bottom Left: Red Dot Grid */}
      <div className="absolute left-8 md:left-16 bottom-8 md:bottom-12 grid grid-cols-6 gap-2 opacity-60 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-red-400 rounded-full" />
        ))}
      </div>

      {/* Top Right: Orange Ring */}
      <span className="absolute top-10 right-12 md:right-28 w-5 h-5 border-2 border-orange-300 rounded-full opacity-80 pointer-events-none" />

      {/* Bottom Right: Floating Paper Doodle */}
      <motion.div
        className="absolute bottom-10 right-32 md:right-56 text-pink-300 opacity-80 pointer-events-none hidden sm:block"
        animate={{ y: [0, 6, 0], rotate: [12, 8, 12] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      >
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width={14} height={16} rx={2} />
          <path d="M8 8h6M8 12h6M8 16h4" />
        </svg>
      </motion.div>

      {/* Bottom Right: Floating Ruler Doodle */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-20 text-sky-400 opacity-80 pointer-events-none"
        animate={{ x: [0, -5, 0], y: [0, -5, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21L21 21L3 3Z" />
          <path d="M7 17L13 17L7 11Z" />
        </svg>
      </motion.div>

      {/* ---------------- DYNAMIC TEXT CONTENT ---------------- */}
      <Container>
        <div className="relative z-10 text-center flex flex-col items-center justify-center">
          {/* Dynamic Title */}
          <h1 className="text-[#1E293B] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {title}
          </h1>

          {/* Dynamic Breadcrumbs */}
          {breadcrumb.length > 0 && (
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-600 font-medium">
              {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 hover:text-orange-500 transition-colors"
                    >
                      {index === 0 && <Home className="w-4 h-4 text-gray-700" />}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <span className="text-orange-500 font-semibold">
                      {item.label}
                    </span>
                  )}

                  {index < breadcrumb.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Banner;