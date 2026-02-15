"use client";

import { useState } from 'react';

const CourseDetails = () => {
  const [expandedChapters, setExpandedChapters] = useState([1]); // Chapter 1 expanded by default
  const [expandedModules, setExpandedModules] = useState([1]); // Module 1 expanded by default
  const [activeLessonId, setActiveLessonId] = useState(1);

  // Course structure: Chapters -> Modules -> Lessons/Quizzes
  const courseStructure = [
    {
      id: 1,
      title: "Chapter-1: Welcome To The Web Course",
      duration: "0h 9m",
      completed: 1,
      total: 1,
      modules: [
        {
          id: 1,
          title: "Module 0: Welcome to the course",
          duration: "0h 9m",
          completed: 1,
          total: 2,
          items: [
            {
              id: 1,
              title: "0-1 Welcome message",
              duration: "9 min",
              completed: true,
              type: "lesson",
              videoId: "tgbNymZ7vqY"
            },
            {
              id: 2,
              title: "Course Introduction Quiz",
              duration: "5 min",
              completed: false,
              type: "quiz",
              questions: 5
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Chapter-2: HTML & CSS Basics",
      duration: "4h 30m",
      completed: 2,
      total: 5,
      modules: [
        {
          id: 2,
          title: "Module 1: HTML Fundamentals",
          duration: "2h 15m",
          completed: 2,
          total: 4,
          items: [
            { id: 3, title: "1-1 HTML Document Structure", duration: "25 min", completed: true, type: "lesson" },
            { id: 4, title: "1-2 Text Elements & Lists", duration: "30 min", completed: true, type: "lesson" },
            { id: 5, title: "1-3 Links & Images", duration: "20 min", completed: false, type: "lesson" },
            { id: 6, title: "HTML Basics Quiz", duration: "10 min", completed: false, type: "quiz", questions: 5 }
          ]
        },
        {
          id: 3,
          title: "Module 2: CSS Styling",
          duration: "2h 15m",
          completed: 0,
          total: 4,
          items: [
            { id: 7, title: "2-1 CSS Selectors", duration: "25 min", completed: false, type: "lesson" },
            { id: 8, title: "2-2 Box Model", duration: "30 min", completed: false, type: "lesson" },
            { id: 9, title: "2-3 Flexbox Layout", duration: "35 min", completed: false, type: "lesson" },
            { id: 10, title: "CSS Fundamentals Quiz", duration: "15 min", completed: false, type: "quiz", questions: 8 }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Chapter-3: JavaScript Essentials",
      duration: "6h 20m",
      completed: 0,
      total: 5,
      modules: [
        {
          id: 4,
          title: "Module 3: JavaScript Basics",
          duration: "3h 10m",
          completed: 0,
          total: 4,
          items: [
            { id: 11, title: "3-1 Variables & Data Types", duration: "35 min", completed: false, type: "lesson" },
            { id: 12, title: "3-2 Functions", duration: "40 min", completed: false, type: "lesson" },
            { id: 13, title: "3-3 Arrays & Objects", duration: "45 min", completed: false, type: "lesson" },
            { id: 14, title: "JavaScript Basics Quiz", duration: "10 min", completed: false, type: "quiz", questions: 6 }
          ]
        }
      ]
    }
  ];

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const getIcon = (type: string, completed: boolean) => {
    if (completed) {
      return (
        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-green-500">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }

    switch(type) {
      case 'lesson':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'quiz':
        return (
          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 pb-20 font-sans pt-20">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Video player */}
          <div className="lg:col-span-2 space-y-6">
            {/* <p className='text-2xl font-semibold'>Course Player</p> */}
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0"
                title="Course Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right column - Collapsible course content */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <h3 className="font-bold text-gray-800">Course Content</h3>
                <p className="text-xs text-gray-500 mt-1">3 chapters • 4 modules • 11 lessons • 3 quizzes</p>
              </div>

              {/* Scrollable content area */}
              <div className="max-h-150 overflow-y-auto custom-scrollbar divide-y divide-gray-100">
                {courseStructure.map((chapter) => (
                  <div key={chapter.id} className="p-3">
                    {/* Chapter Header (Click to expand/collapse) */}
                    <div
                      onClick={() => toggleChapter(chapter.id)}
                      className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 rounded p-1 -ml-1"
                    >
                      <svg
                        className={`w-4 h-4 text-gray-500 mt-1 transition-transform ${expandedChapters.includes(chapter.id) ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">{chapter.title}</h4>
                        <p className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
                          <span>{chapter.duration}</span>
                          <span>●</span>
                          <span>{chapter.completed}/{chapter.total}</span>
                        </p>
                      </div>
                    </div>

                    {/* Modules (shown when chapter is expanded) */}
                    {expandedChapters.includes(chapter.id) && (
                      <div className="ml-4 mt-2 space-y-3">
                        {chapter.modules.map((module) => (
                          <div key={module.id} className="border-l-2 border-gray-200 pl-3">
                            {/* Module Header (Click to expand/collapse) */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleModule(module.id);
                              }}
                              className="flex items-start gap-2 py-1 cursor-pointer hover:bg-gray-50 rounded px-1 -ml-1"
                            >
                              <svg
                                className={`w-3.5 h-3.5 text-gray-400 mt-1 transition-transform ${expandedModules.includes(module.id) ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700">{module.title}</p>
                                <p className="text-xs text-gray-500 flex items-center gap-2">
                                  <span>{module.duration}</span>
                                  <span>●</span>
                                  <span>{module.completed}/{module.total}</span>
                                </p>
                              </div>
                            </div>

                            {/* Items (shown when module is expanded) */}
                            {expandedModules.includes(module.id) && (
                              <div className="ml-4 mt-2 space-y-2">
                                {module.items.map((item) => (
                                  <div
                                    key={item.id}
                                    onClick={() => setActiveLessonId(item.id)}
                                    className={`flex items-start gap-2 py-2 px-2 rounded cursor-pointer ${
                                      activeLessonId === item.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                                    }`}
                                  >
                                    <div className="w-5 flex justify-center mt-0.5">
                                      {getIcon(item.type, item.completed)}
                                    </div>
                                    <div className="flex-1">
                                      <p className={`text-xs font-medium ${
                                        activeLessonId === item.id ? 'text-blue-700' : 'text-gray-600'
                                      }`}>
                                        {item.title}
                                      </p>
                                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                                        <span className="flex items-center gap-1">
                                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                          {item.duration}
                                        </span>
                                        {item.questions && (
                                          <>
                                            <span>•</span>
                                            <span>{item.questions} questions</span>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                    {activeLessonId === item.id && (
                                      <span className="text-xs text-blue-600 font-medium animate-pulse whitespace-nowrap">
                                        Playing
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer summary */}
              <div className="p-3 text-center text-xs text-gray-500 border-t border-gray-100 bg-gray-50">
                <span>3 quizzes • 11 lessons • 11h total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;