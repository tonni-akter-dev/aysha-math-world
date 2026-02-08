"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F3F7FB] text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="EduAll Logo" width={40} height={40} />
            <span className="font-bold text-xl text-blue-600">EduAll</span>
          </div>
          <p className="text-sm text-gray-600">
            EduAll exceeded all my expectations! The instructors were not only experts.
          </p>
          <div className="flex gap-3 mt-2 text-blue-600 text-lg">
            <Link href="#"><Facebook className="hover:text-blue-800 transition" /></Link>
            <Link href="#"><Twitter className="hover:text-blue-800 transition" /></Link>
            <Link href="#"><Instagram className="hover:text-blue-800 transition" /></Link>
            {/* <Link href="#"><Pinterest className="hover:text-blue-800 transition" /></Link> */}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-blue-600 transition">About us</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">Courses</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">Instructor</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">FAQs</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">Blogs</Link></li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Category</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-blue-600 transition">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">Web Development</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">Python Development</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">Digital Marketing</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition">Graphic Design</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (207) 555-0119</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (704) 555-0127</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> dwallo@gmail.com</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> eduAll@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 5488 Srker Rd, 8745 Doer Dr</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe Here</h3>
          <p className="text-gray-600 text-sm mb-3">
            Enter your email address to register for our newsletter subscription
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email..."
              className="w-full px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-sm flex flex-col md:flex-row justify-between px-4 max-w-7xl mx-auto text-gray-500">
        <span>© 2024 EduAll. All Rights Reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="#" className="hover:text-blue-600 transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-600 transition">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
