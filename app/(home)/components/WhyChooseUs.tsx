"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";

/* ================= DATA ================= */
const stats = [
  { value: "500+", label: "Learners & counting", icon: "🎓" },
  { value: "800+", label: "Courses & Video", icon: "📺" },
  { value: "1,000+", label: "Certified Students", icon: "🎓" },
  { value: "100+", label: "Registered Enrolls", icon: "👥" },
];

/* ================= CARD ANIMATION ================= */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // slower motion
      delay: index * 0.25, // 👈 stagger here
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  }),
};
const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#F9FAFF] py-20 px-4">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.span
          variants={headerVariants}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold"
        >
          WHY CHOOSE US
        </motion.span>
        <motion.h2
          variants={headerVariants}
          custom={0.2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
        >
          Creating A Community Of <br />
          Life Long Learners.
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Horizontal Line */}
        <div className="absolute top-1.5 left-0 right-0">
          <div className="hanger-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center connector ${
                index === 1 || index === 3 ? "taller" : ""
              }`}
            >
              {/* Timeline Dot (STATIC) */}
              <div className="w-4 h-4 bg-white border-4 border-blue-500 rounded-full mb-6 z-20" />

              {/* Card (ONLY THIS ANIMATES) */}
              <motion.div
                variants={cardVariants}
                custom={index} // 👈 important
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className={`w-full bg-white rounded-2xl shadow-lg px-8 pt-12 pb-10 text-center relative overflow-hidden
                ${index === 0 || index === 2 ? "mt-10" : "mt-20"}`}
              >
                {/* Icon */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-2xl z-50">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-3 mt-10">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-sm">{item.label}</p>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-400 to-blue-500" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
