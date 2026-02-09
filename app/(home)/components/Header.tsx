"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  BookOpen,
  GraduationCap,
  Award,
  Menu,
  Bell,
  Library,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full lg:px-25 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-purple-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              EduLMS Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {/* Courses */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">

                    <ListItem
                      className="list-none"
                      href="/courses/ssc"
                      title={
                        <span className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          SSC Courses
                        </span>
                      }
                    >
                      Class 9–10 complete syllabus
                    </ListItem>

                    <ListItem
                      href="/courses/hsc"
                      title={
                        <span className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-purple-600" />
                          HSC Courses
                        </span>
                      }
                    >
                      Class 11–12 specialized streams
                    </ListItem>

                    <ListItem
                      href="/courses/test-series"
                      title={
                        <span className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-green-600" />
                          Test Series
                        </span>
                      }
                    >
                      Mock tests & practice papers
                    </ListItem>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Library className="mr-2 h-4 w-4" />
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2">
                    <ListItem
                      className="list-none"
                      href="/resources/notes"
                      title="Study Notes"
                    >
                      Comprehensive notes & summaries
                    </ListItem>
                    <ListItem
                      className="list-none"
                      href="/resources/videos"
                      title="Video Lectures"
                    >
                      HD video lessons
                    </ListItem>
                    <ListItem
                      className="list-none"
                      href="/resources/papers"
                      title="Previous Papers"
                    >
                      Past exam papers
                    </ListItem>
                    <ListItem
                      className="list-none"
                      href="/resources/sample"
                      title="Sample Papers"
                    >
                      Practice papers
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Live Classes
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* ✅ REQUIRED */}
            <NavigationMenuViewport />
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* <div className="hidden lg:block relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search courses..."
                className="pl-8 h-9 w-60 rounded-md border bg-background text-sm"
              />
            </div> */}

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
                3
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem>My Courses</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

/* Helper */
interface ListItemProps extends Omit<React.ComponentPropsWithoutRef<"a">, "title"> {
  title?: React.ReactNode;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, ...props }, ref) => (
  <li className="list-none">
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium flex items-center gap-2">
          {title}
        </div>
        <p className="text-sm text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));

ListItem.displayName = "ListItem";

export default Header;
