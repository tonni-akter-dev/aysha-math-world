"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import shape3 from "../../../public/shape3.png";
import Container from "./Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
}

const Hero = ({ title, breadcrumb = [] }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#020B2D] to-[#06144F] h-105 pt-40">
      <Container>
        {/* Decorative shapes */}
        <span className="absolute top-10 right-24 w-14 h-14 border-2 border-sky-400 rounded-full opacity-40" />
        <span className="absolute bottom-10 right-10 w-3 h-3 bg-orange-400 rounded-full" />
        <span className="absolute top-1/2 right-1/3 text-pink-400 text-4xl rotate-12">
          ✎
        </span>

        {/* Animated space shape */}
        <motion.span
          className="absolute top-1/2 left-1/3 z-50 rotate-12"
          animate={{
            x: [0, 50, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src={shape3}
            alt="Decorative shape"
            width={80}
            height={80}
            className="pointer-events-none"
          />
        </motion.span>

        <div className="container mx-auto px-4 relative z-10">
          {/* Title */}
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>

          {/* Breadcrumb */}
          {breadcrumb.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-300">
              {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-orange-400 font-medium">
                      {item.label}
                    </span>
                  )}

                  {index < breadcrumb.length - 1 && (
                    <span className="text-gray-500">›</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
