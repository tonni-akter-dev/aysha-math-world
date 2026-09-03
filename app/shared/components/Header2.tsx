"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Menu,
  Bell,
  Library,
  X,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";

const Header2 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="absolute top-3 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-2xl px-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-4 lg:gap-8">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              onClick={closeMobile}
            >
              <Image
                src={logo}
                alt="Logo"
                width={170}
                height={55}
                priority
                className="h-auto w-32 object-contain sm:w-40"
              />
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {/* About */}
                <NavigationMenuItem>
                  <Link
                    href="/courses"
                    className="
                      flex h-10 items-center px-4
                      text-sm font-medium
                      text-white
                      transition
                      hover:text-white/80
                    "
                  >
                    Courses
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/about"
                    className="
                      flex h-10 items-center px-4
                      text-sm font-medium
                      text-white
                      transition
                      hover:text-white/80
                    "
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                {/* Blog */}
                <NavigationMenuItem>
                  <Link
                    href="/blog"
                    className="
                      flex h-10 items-center px-4
                      text-sm font-medium
                      text-white
                      transition
                      hover:text-white/80
                    "
                  >
                    Blog
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className="
                      flex h-10 items-center px-4
                      text-sm font-medium
                      text-white
                      transition
                      hover:text-white/80
                    "
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>

              <NavigationMenuViewport />
            </NavigationMenu>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Notification */}
            <Button
              variant="ghost"
              size="icon"
              className="
                relative
                h-10 w-10
                rounded-lg
                text-white
                hover:bg-white/10
                hover:text-white
              "
            >
              <Bell className="h-5 w-5" />

              <Badge
                className="
                  absolute
                  -right-0.5
                  -top-0.5
                  flex
                  h-4
                  min-w-4
                  items-center
                  justify-center
                  rounded-full
                  px-1
                  text-[10px]
                "
              >
                3
              </Badge>
            </Button>

            {/* ================= DESKTOP PROFILE ================= */}
            <div className="relative hidden md:block">
              <Button
                variant="ghost"
                className="
                  flex
                  h-10
                  items-center
                  gap-1
                  rounded-lg
                  px-1.5
                  text-white
                  hover:bg-white/10
                  hover:text-white
                "
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-linear-to-r from-blue-600 to-purple-600 text-xs font-semibold text-white">
                    ST
                  </AvatarFallback>
                </Avatar>

                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-white/70 transition-transform",
                    profileOpen && "rotate-180",
                  )}
                />
              </Button>

              {profileOpen && (
                <>
                  {/* Overlay */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setProfileOpen(false)}
                  />

                  {/* Dropdown */}
                  <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                    <div className="border-b border-gray-100 px-3 py-3">
                      <p className="font-semibold text-gray-900">Student</p>

                      <p className="text-xs text-gray-500">
                        student@example.com
                      </p>
                    </div>

                    <Link
                      href="/user/profile"
                      onClick={() => setProfileOpen(false)}
                      className="
                        mt-1
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2.5
                        text-sm
                        text-gray-700
                        transition
                        hover:bg-gray-100
                      "
                    >
                      <User className="h-4 w-4" />
                      My Profile
                    </Link>
                    <button
                      type="button"
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2.5
                        text-sm
                        text-red-600
                        transition
                        hover:bg-red-50
                      "
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                h-10 w-10
                rounded-lg
                text-white
                hover:bg-white/10
                hover:text-white
                md:hidden
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl md:hidden">
            <nav className="flex flex-col p-3">
              <Link
                href="/courses"
                onClick={closeMobile}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                <BookOpen className="h-4 w-4 text-blue-600" />
                Courses
              </Link>

              <Link
                href="/resources"
                onClick={closeMobile}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                <Library className="h-4 w-4 text-purple-600" />
                Resources
              </Link>

              <Link
                href="/live-classes"
                onClick={closeMobile}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                <GraduationCap className="h-4 w-4 text-green-600" />
                Live Classes
              </Link>

              <Link
                href="/about"
                onClick={closeMobile}
                className="
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                About
              </Link>

              <Link
                href="/blog"
                onClick={closeMobile}
                className="
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={closeMobile}
                className="
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Profile */}
            <div className="border-t border-gray-100 p-3">
              <Link
                href="/user/profile"
                onClick={closeMobile}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-3
                  transition
                  hover:bg-gray-100
                "
              >
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-linear-to-r from-blue-600 to-purple-600 text-xs font-semibold text-white">
                    ST
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="text-sm font-semibold text-gray-900">Student</p>

                  <p className="text-xs text-gray-500">My Profile</p>
                </div>
              </Link>

              <button
                type="button"
                className="
                  mt-1
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  text-red-600
                  transition
                  hover:bg-red-50
                "
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

/* ================= LIST ITEM ================= */

interface ListItemProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "title"
> {
  title?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block rounded-lg p-3 transition-colors hover:bg-accent hover:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="mb-1 flex items-center gap-2 text-sm font-medium">
            {title}
          </div>

          <p className="text-sm text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  ),
);

ListItem.displayName = "ListItem";

export default Header2;
