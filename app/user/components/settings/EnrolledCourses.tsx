/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const EnrolledCourses = () => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white">Enrolled Courses</h1>
      </div>
      {[0, 1, 2].map((_) => (
        <>
          <div className="space-y-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1 block">
                  With Programming Hero
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Complete Web Development Course
                </h1>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">
                    Content Updated up to Batch 11
                  </span>
                </p>
              </div>

              {/* Instructor Mini Card */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 w-max">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Instructor"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-xs text-gray-500">Instructor</p>
                  <p className="text-sm font-bold text-gray-900">sdfdf</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Your Progress</span>
                <span className="font-bold text-blue-600">50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `50%` }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link href={`/course/course1`}>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg shadow-blue-600/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Continue Course
                </button>
              </Link>

              <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                Course Outline
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default EnrolledCourses;
