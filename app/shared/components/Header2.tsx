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

const Header2 = () => {
  return (
    <header className="absolute top-3 z-50 w-full lg:px-25 ">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8 ">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-purple-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="hidden font-bold text-xl text-white sm:inline-block">
                EduLMS Pro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {/* Courses */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-transparent">
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
                  <NavigationMenuTrigger className="hover:bg-transparent text-white bg-transparent hover:text-white">
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

                <NavigationMenuItem className="py-2 px-4 text-white bg-transparent">
                  <Link href="/about">
                    Live Classes
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="py-2 px-4 text-white bg-transparent">
                  <Link className="" href="/about">
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="py-2 px-4 text-white bg-transparent">
                  <Link href="/about">
                    Blog
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="py-2 px-4 text-white bg-transparent">
                  <Link className="text-white " href="/contact" >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>

              {/* ✅ REQUIRED */}
              <NavigationMenuViewport />
            </NavigationMenu>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-black relative cursor-pointer" >
              <Bell className="text-white h-5 w-5" />
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

export default Header2;
