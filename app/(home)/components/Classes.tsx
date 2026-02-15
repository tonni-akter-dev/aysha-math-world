"use client";

import React, { useState } from 'react';

// Define interface for Class data
interface ClassInfo {
  id: number;
  name: string;
  subjects: string[];
}

// Mock data with Bengali translations
const classData: ClassInfo[] = [
  {
    id: 7,
    name: "শ্রেণী ৭",
    subjects: ["গণিত", "বিজ্ঞান", "সামাজিক বিজ্ঞান", "বাংলা", "ইংরেজি"],
  },
  {
    id: 8,
    name: "শ্রেণী ৮",
    subjects: ["গণিত", "বিজ্ঞান", "ইতিহাস", "নাগরিক শাস্ত্র", "ভূগোল"],
  },
  {
    id: 9,
    name: "শ্রেণী ৯",
    subjects: ["গণিত", "বিজ্ঞান", "সামাজিক বিজ্ঞান", "বাংলা এ", "ইংরেজি"],
  },
  {
    id: 10,
    name: "শ্রেণী ১০",
    subjects: ["গণিত", "বিজ্ঞান", "সামাজিক বিজ্ঞান", "বাংলা", "সংস্কৃত"],
  },
  {
    id: 11,
    name: "শ্রেণী ১১ (বিজ্ঞান)",
    subjects: ["পদার্থবিদ্যা", "রসায়ন", "জীববিদ্যা", "গণিত", "ইংরেজি"],
  },
  {
    id: 12,
    name: "শ্রেণী ১২ (বিজ্ঞান)",
    subjects: ["পদার্থবিদ্যা", "রসায়ন", "জীববিদ্যা", "গণিত", "ইংরেজি"],
  },
];

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

  const handleCardOpen = (classInfo: ClassInfo) => {
    setSelectedClass(classInfo);
  };

  const handleCardClose = () => {
    setSelectedClass(null);
  };

  return (
    <div className=" bg-gray-50 text-gray-800 font-sans relative p-6 pt-20">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#051247] mb-2">
         আমাদের প্রোগ্রামসমুহ 
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            আপনার শ্রেণী নির্বাচন করুন এবং বিস্তারিত পাঠ্যক্রম দেখুন
          </p>
        </div>

        {/* Grid of Class Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {classData.map((cls) => (
            <button
              key={cls.id}
              onClick={() => handleCardOpen(cls)}
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#051247] text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white bg-[#051247] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  {cls.id}
                </span>
                <span className="text-[#051247] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{cls.name}</h3>
              <p className="text-xs text-gray-500 mt-1">বিষয দেখতে ক্লিক করুন</p>
            </button>
          ))}
        </div>

      </div>

      {/* Modal / Card Overlay */}
      {selectedClass && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCardClose}
        >
          {/* The Card Content */}
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Card Header */}
            <div className="bg-[#051247] p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{selectedClass.name}</h2>
                <p className="text-blue-200 text-sm">পাঠ্যক্রমের বিবরণ</p>
              </div>
              <button 
                onClick={handleCardClose}
                className="text-blue-200 hover:text-white bg-white/10 rounded-full p-2 hover:bg-white/20 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Card Body (Subject List) */}
            <div className="p-6">
              
              {/* Standard Subjects */}
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">
                প্রধান বিষয়
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedClass.subjects.map((subject: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#051247] rounded-full mr-3"></span>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
              <button 
                onClick={handleCardClose}
                className="px-4 py-2 bg-[#051247] text-white rounded-lg hover:bg-[#0a2a6b] transition text-sm font-medium shadow-md"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classes;