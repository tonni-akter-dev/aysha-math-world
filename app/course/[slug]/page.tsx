"use client";

import { useState } from 'react';

const CourseDetails = () => {
  const [activeLessonId, setActiveLessonId] = useState(1);

  const lessons = [
    { id: 1, title: "Milestone 1: Welcome To The Web Course", duration: "09m", completed: true },
    { id: 2, title: "Setting Up Your Environment", duration: "15m", completed: true },
    { id: 3, title: "Introduction to HTML5", duration: "22m", completed: false },
    { id: 4, title: "CSS Basics & Flexbox", duration: "30m", completed: false },
    { id: 5, title: "JavaScript Fundamentals", duration: "45m", completed: false },
    { id: 6, title: "React Hooks Deep Dive", duration: "50m", completed: false },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 pb-20 font-sans pt-20">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className='text-2xl font-semibold'> 80-6 Final Steps</p>
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0`}
                title="Course Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Course Content</h3>
                <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                  {lessons.length} Lessons
                </span>
              </div>
              <div className="max-h-150 overflow-y-auto custom-scrollbar">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    onClick={() => setActiveLessonId(lesson.id)}
                    className={`group flex items-start gap-3 p-4 cursor-pointer border-b border-gray-50 transition-colors ${activeLessonId === lesson.id
                      ? "bg-blue-50 border-l-4 border-l-blue-600"
                      : "hover:bg-gray-50 border-l-4 border-l-transparent"
                      }`}
                  >
                    {/* Status Icon */}
                    <div className={`mt-1 w-5 h-5 flex items-center justify-center rounded-full border ${lesson.completed
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 text-transparent"
                      }`}>
                      {lesson.completed && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      )}
                      {!lesson.completed && activeLessonId !== lesson.id && (
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      )}
                      {activeLessonId === lesson.id && !lesson.completed && (
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                      )}
                    </div>

                    {/* Text Info */}
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium leading-snug ${activeLessonId === lesson.id ? "text-blue-700" : "text-gray-700"
                        }`}>
                        {lesson.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {lesson.duration}
                      </p>
                    </div>

                    {/* Playing Indicator */}
                    {activeLessonId === lesson.id && (
                      <span className="text-blue-600 text-xs font-bold uppercase animate-pulse">
                        Playing
                      </span>
                    )}
                  </div>
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;