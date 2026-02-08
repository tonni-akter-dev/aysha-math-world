/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import CountUp from "react-countup";
import { motion, easeOut } from "framer-motion";

/* ===== Animation Variants ===== */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const About = () => {
  return (
    <section className="w-full bg-[#f9fbff] py-20 px-4 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Students learning"
            className="rounded-2xl w-[85%] shadow-lg"
          />

          {/* Experience Counter */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-10 -left-6 bg-blue-600 text-white rounded-xl px-6 py-4 text-center shadow-lg"
          >
            <h3 className="text-3xl font-bold">
              <CountUp start={0} end={16} duration={2.5} />+
            </h3>
            <p className="text-sm">Years of experience</p>
          </motion.div>

          {/* Secondary Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="Library study"
            className="absolute -bottom-20 right-10 w-[55%] rounded-2xl shadow-lg border-8 border-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* ================= RIGHT CONTENT SECTION ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="text-blue-600 font-semibold flex items-center gap-2 mb-3"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            About EduAll
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-gray-900 leading-tight mb-6"
          >
            The Place Where You Can Achieve
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-600 mb-8"
          >
            Welcome to EduAll, where learning knows no bounds. Whether you&apos;re a
            student, professional, or lifelong learner, we provide the tools
            and guidance to help you grow.
          </motion.p>

          {/* ================= Mission ================= */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="flex gap-4 mb-6 p-4 rounded-xl bg-white shadow-lg"
          >
            <div className="w-14 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              📊
            </div>

            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4
                variants={textItem}
                className="text-lg font-semibold text-gray-900"
              >
                Our Mission
              </motion.h4>

              <motion.p
                variants={textItem}
                className="text-gray-600 text-sm"
              >
                Driven by educators and technologists, we create a supportive
                and innovative learning environment.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* ================= Vision ================= */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="flex gap-4 mb-10 p-4 rounded-xl bg-white shadow-lg"
          >
            <div className="w-14 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              📈
            </div>

            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h4
                variants={textItem}
                className="text-lg font-semibold text-gray-900"
              >
                Our Vision
              </motion.h4>

              <motion.p
                variants={textItem}
                className="text-gray-600 text-sm"
              >
                To empower learners worldwide and accompany them every step of
                their educational journey.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* ================= CTA ================= */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6"
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Read More →
            </button>

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="CEO"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  John McCoy
                </p>
                <p className="text-xs text-gray-500">
                  CEO of Company
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
