"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Star, BookOpen, ArrowRight } from "lucide-react";
import Hero from "../shared/components/Hero";
import { classOptions, demoCourses } from "@/utils/data";
import { Course } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState("All Classes");

  const courseList: Course[] = demoCourses

  const filteredCourses = useMemo(() => {
    if (selectedClass === "All Classes") {
      return courseList;
    }

    return courseList.filter((course) => course.className === selectedClass);
  }, [selectedClass, courseList]);

  return (
    <>
      <section className="bg-[#fafafa] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
           
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Popular Courses
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Discover courses designed to help you learn new skills and
                improve your academic performance.
              </p>
            </div>
            <div className="w-full sm:w-50">
              <label
                htmlFor="class-filter"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Filter by Class
              </label>

              <div className="relative">
                <select
                  id="class-filter"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="h-11 w-full appearance-none rounded-md border border-gray-200 bg-white px-4 pr-10 text-sm font-medium text-gray-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                >
                  {classOptions.map((classItem) => (
                    <option key={classItem} value={classItem}>
                      {classItem}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* =============================================
              RESULT COUNT
          ============================================= */}

          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-800">
                {filteredCourses.length}
              </span>{" "}
              {filteredCourses.length === 1 ? "course" : "courses"}
            </p>

            {selectedClass !== "All Classes" && (
              <button
                type="button"
                onClick={() => setSelectedClass("All Classes")}
                className="text-sm font-medium text-primary hover:underline"
              >
                Clear Filter
              </button>
            )}
          </div>

          {/* =============================================
              COURSE GRID
          ============================================= */}

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            /* ===========================================
               EMPTY STATE
            =========================================== */

            <div className="rounded-xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
              <BookOpen size={44} className="mx-auto text-gray-300" />

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                No courses found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                There are no courses available for this class.
              </p>

              <button
                type="button"
                onClick={() => setSelectedClass("All Classes")}
                className="mt-5 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                View All Courses
              </button>
            </div>
          )}

          {/* =============================================
              PAGINATION
          ============================================= */}

          {filteredCourses.length > 0 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-white"
              >
                1
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-600 transition hover:bg-gray-50"
              >
                2
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-600 transition hover:bg-gray-50"
              >
                3
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-600 transition hover:bg-gray-50"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;

/* =====================================================
   COURSE CARD
===================================================== */

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* ===============================================
          IMAGE
      =============================================== */}

      <div className="relative h-52.5 overflow-hidden bg-gray-100">
        <Image
        width={400}
          height={300}
        
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5" />

        {/* Category */}

        <div className="absolute left-3 top-3">
          <span className="rounded bg-[#f6c945] px-3 py-1.5 text-[11px] font-semibold text-gray-900">
            {course.category}
          </span>
        </div>

        {/* Class */}

        <div className="absolute right-3 top-3">
          <span className="rounded bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-700 shadow-sm">
            {course.className}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 min-h-12 text-[16px] font-bold leading-6 text-gray-900 transition-colors group-hover:text-primary">
          {course.title}
        </h3>

        {/* Instructor */}

        <p className="mt-2 text-xs text-gray-500">
          By{" "}
          <span className="font-medium text-gray-700">{course.instructor}</span>
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold text-gray-800">
              {course.rating}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            ({course.reviews} Reviews)
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3">
          <BookOpen size={15} className="text-gray-400" />

          <span className="text-xs text-gray-500">
            {course.lessons} Lessons
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          {/* PRICE */}

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ৳{course.price.toLocaleString()}
            </span>

            {course.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ৳{course.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          {/* VIEW COURSE */}
          <Link href={`/course-details/${course.title}`} className="flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:gap-2">
            View Course
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};
