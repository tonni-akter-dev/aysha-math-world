
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Menu,
  Bell,
  ChevronDown,
  X,
  User,
  LogOut,
} from "lucide-react";
import logo from "@/public/logo.png";
import Image from "next/image";

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto container ">
        <div className="flex h-16 items-center justify-between">

          <Link
            href="/"
            className="flex size-50 items-center gap-2"
          >
            <Image src={logo} alt="Logo" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-1 md:flex">

            {/* About */}
            <Link
              href="/courses"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              About
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-2">

            {/* Notification */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
            >
              <Bell className="h-5 w-5" />

              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            {/* Profile */}
            <div className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-gray-100"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-sm font-semibold text-white">
                  ST
                </div>

                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {profileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setProfileOpen(false)}
                  />

                  <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">

                    <div className="border-b border-gray-100 px-3 py-3">
                      <p className="font-semibold text-gray-900">
                        Student
                      </p>

                      <p className="text-xs text-gray-500">
                        student@example.com
                      </p>
                    </div>

                    <Link
                      href="/user/profile"
                      onClick={() => setProfileOpen(false)}
                      className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100"
                    >
                      <User className="h-4 w-4" />
                      My Profile
                    </Link>

                    <Link
                      href="/my-courses"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100"
                    >
                      <BookOpen className="h-4 w-4" />
                      My Courses
                    </Link>

                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">

            <nav className="flex flex-col gap-1">
              <Link
                href="/courses"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Courses
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                About
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Blog
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Contact
              </Link>

            </nav>

            {/* Mobile Profile Section */}
            <div className="mt-4 border-t border-gray-100 pt-4">

              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-gray-100"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-sm font-semibold text-white">
                  ST
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Student
                  </p>

                  <p className="text-xs text-gray-500">
                    My Profile
                  </p>
                </div>
              </Link>

              <button
                type="button"
                className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Log out
              </button>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
