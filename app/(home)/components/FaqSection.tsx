"use client";
import React, { useState } from "react";
import { cubicBezier, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};

const FaqSection = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How do I enroll in a course?",
      answer:
        "You can enroll by browsing the course catalog, selecting your desired course, and clicking the enroll button. The course will then appear in your dashboard.",
    },
    {
      id: 2,
      question: "Can I access courses on mobile devices?",
      answer:
        "Yes, our LMS is fully responsive and works seamlessly on mobile phones, tablets, and desktops.",
    },
    {
      id: 3,
      question: "How do I track my learning progress?",
      answer:
        "Your progress is automatically tracked. You can see completed lessons, ongoing modules, and overall progress from your dashboard.",
    },
    {
      id: 4,
      question: "Will I receive a certificate after completion?",
      answer:
        "Yes, after successfully completing a course, you will receive a downloadable certificate.",
    },
    {
      id: 5,
      question: "Can instructors manage their own content?",
      answer:
        "Absolutely. Instructors can upload videos, documents, quizzes, assignments, and track learner performance.",
    },
    {
      id: 6,
      question: "What if I forget my password?",
      answer:
        "Click on the 'Forgot Password' option on the login page and follow the instructions sent to your email.",
    },
  ];

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="bg-[#F4F6F8] dark:bg-transparent lg:p-24 p-5 mt-8">
      <div className="text-center mb-10">
        <h1 className="text-[52px] font-semibold text-[#252B37] dark:text-white mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-2xl text-[#6D7179] dark:text-[#B3B3B3] font-medium">
          Everything you need to know about <br /> our Learning Management System
        </p>
      </div>

      <motion.div
        className="max-w-5xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {faqItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="bg-white dark:bg-[#211D20] rounded-4xl lg:rounded-[28px] shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 lg:px-6 pt-6 pb-5 flex items-center justify-between text-left cursor-pointer"
            >
              <h3 className="text-base lg:text-xl font-semibold text-neutral-900 dark:text-white pr-3">
                {item.question}
              </h3>
              {activeItem === item.id ? (
                <Minus className="w-5 h-5 lg:w-6 lg:h-6 text-neutral-900 dark:text-white" />
              ) : (
                <Plus className="w-5 h-5 lg:w-6 lg:h-6 text-neutral-900 dark:text-white" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeItem === item.id ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="px-4 lg:px-6 pb-5">
                <p className="text-sm lg:text-base font-medium text-[#606060] dark:text-[#B3B3B3]">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FaqSection;
