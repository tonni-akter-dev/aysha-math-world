"use client";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone, Users } from "lucide-react";
import shape5 from "../../../public/shape5.png";
import shape1 from "../../../public/shape1.png";
import shape2 from "../../../public/shape2.png";
import banner from "../../../public/banner.png";
import arrow from "../../../public/curve-arrow.png";

const floating = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: easeInOut,
  },
};

const Banner = () => {
  return (
    <div className="">
      <div className="relative  bg-[#FFF9F3] lg:px-50 mx-auto px-4 sm:px-6 py-16 lg:py-28">
        <motion.div
          //   animate={{ x: [0, 10, 0] }}
          //   transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-10 left-0"
        >
          <Image src={shape2} alt="shape2" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-40"
        >
          <Image src={shape1} alt="shape1" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-blue-600 font-medium mb-3">
              স্মার্টভাবে শিখুন। দক্ষতা তৈরি করুন। দ্রুত সফল হোন।
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="text-orange-400">SSC & HSC </span>
              শিক্ষার্থীদের জন্য সেরা অনলাইন প্ল্যাটফর্ম
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              EduAll-এর সাথে যেকোনো সময়, যেকোনো জায়গা থেকে শিখুন।
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
                এখনই এনরোল করুন <ArrowRight size={18} />
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">
                আমাদের সম্পর্কে
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE + FLOATING ITEMS */}
          <div className="relative flex justify-center">
            <Image
              src={banner}
              alt="Student"
              width={600}
              height={520}
              className="rounded-2xl object-cover"
            />
            {/* shape5 — ROTATING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-30 right-0 px-4 py-3"
            >
              <Image src={shape5} alt="" />
            </motion.div>

            {/* Enrolled Students */}
            <motion.div
              {...floating}
              className="absolute top-6 left-0 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <Users className="text-blue-600" size={20} />
              <div>
                <p className="font-semibold text-sm">৩৬হাজার+</p>
                <p className="text-xs text-gray-500">ভর্তি শিক্ষার্থী</p>
              </div>
            </motion.div>

            {/* Online Support */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-30 right-0 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <Phone className="text-green-600" size={18} />
              <div>
                <p className="text-sm font-semibold">অনলাইন সাপোর্ট</p>
                <p className="text-xs text-blue-600">(880) 16556-0127</p>
              </div>
            </motion.div>

            {/* Arrow — LEFT ↔ RIGHT */}
            <motion.div
              animate={{ x: [0, 30, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/2 -left-10 hidden lg:block"
            >
              <Image src={arrow} alt="Arrow" className="w-32 h-auto" />
            </motion.div>
          </div>
        </div>

        {/* Decorative floating shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-10 h-10 border-2 border-blue-300 rounded-full"
        />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-16 left-10 w-6 h-6 bg-orange-400 rounded"
        />
      </div>
    </div>
  );
};

export default Banner;
