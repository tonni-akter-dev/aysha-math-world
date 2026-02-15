"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface ClassInfo {
  id: number;
  name: string;
  subjects: string[];
}

const classData: ClassInfo[] = [
  {
    id: 7,
    name: "শ্রেণী ৭",
    subjects: ["গণিত"],
  },
  {
    id: 8,
    name: "শ্রেণী ৮",
    subjects: ["গণিত"],
  },
  {
    id: 9,
    name: "শ্রেণী ৯",
    subjects: ["গণিত"],
  },
  {
    id: 10,
    name: "শ্রেণী ১০",
    subjects: ["general math", "Higher math"],
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
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleCardOpen = (classInfo: ClassInfo) => {
    setSelectedClass(classInfo);
    setSelectedClassId(classInfo.id);
    setSelectedSubject(null); // Reset subject selection when opening new class
  };

  const handleCardClose = () => {
    setSelectedClass(null);
    setSelectedSubject(null); // Reset subject selection when closing modal
  };

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
  };

  const router = useRouter();

  const handleEnrollClick = () => {
    if (!selectedClass || !selectedSubject) return;
    console.log(
      "Enrolling in course:",
      selectedClass?.name,
      "Subject:",
      selectedSubject,
    );
    // You can navigate to enrollment page, open payment modal, etc.
    router.push(`/course-details/${selectedClass.id}-${selectedSubject}`);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans relative p-6 pt-20">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {classData.map((cls) => (
            <div
              key={cls.id}
              onClick={() => handleCardOpen(cls)}
              className={`group relative p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 cursor-pointer ${
                selectedClassId === cls.id
                  ? "bg-[#051247]/5 border-[#051247] shadow-lg"
                  : "bg-white border-transparent hover:border-[#051247]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg ${
                    selectedClassId === cls.id
                      ? "bg-[#051247] text-white"
                      : "bg-[#051247] text-white"
                  }`}
                >
                  {cls.id}
                </span>
                <span
                  className={`transition-opacity ${
                    selectedClassId === cls.id
                      ? "text-[#051247] opacity-100"
                      : "text-[#051247] opacity-0 group-hover:opacity-100"
                  }`}
                >
                  →
                </span>
              </div>
              <h3
                className={`text-xl font-semibold ${
                  selectedClassId === cls.id
                    ? "text-[#051247]"
                    : "text-gray-800"
                }`}
              >
                {cls.name}
              </h3>
              <p
                className={`text-xs mt-1 ${
                  selectedClassId === cls.id
                    ? "text-[#051247]"
                    : "text-gray-500"
                }`}
              >
                বিষয় দেখতে ক্লিক করুন
              </p>
            </div>
          ))}
        </div>

        {/* Enroll Now Button - Shows when a class is selected */}
        {selectedClassId && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                const selectedClassData = classData.find(
                  (cls) => cls.id === selectedClassId,
                );
                if (selectedClassData) {
                  setSelectedClass(selectedClassData);
                  // Don't auto-enroll, just open modal
                }
              }}
              className="px-8 py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition text-base font-medium shadow-md flex items-center gap-2 mx-auto"
            >
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              View Subjects for{" "}
              {classData.find((cls) => cls.id === selectedClassId)?.name}
            </button>
          </div>
        )}
      </div>

      {/* Modal / Card Overlay */}
      {selectedClass && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCardClose}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#051247] p-6 text-white">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">{selectedClass.name}</h2>
                <button
                  onClick={handleCardClose}
                  className="text-blue-200 hover:text-white bg-white/10 rounded-full p-2 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-blue-200 text-sm">পাঠ্যক্রমের বিবরণ</p>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 mb-3">
                নিচের বিষয় নির্বাচন করুন:
              </p>
              <ul className="space-y-2 mb-6">
                {selectedClass.subjects.map(
                  (subject: string, index: number) => (
                    <li
                      key={index}
                      onClick={() => handleSubjectClick(subject)}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                        selectedSubject === subject
                          ? "bg-[#051247]/10 border-l-4 border-[#051247] shadow-sm"
                          : "hover:bg-gray-100 border-l-4 border-transparent"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-3 ${
                          selectedSubject === subject
                            ? "bg-[#051247]"
                            : "bg-gray-400"
                        }`}
                      ></span>
                      <span
                        className={`font-medium ${
                          selectedSubject === subject
                            ? "text-[#051247]"
                            : "text-gray-700"
                        }`}
                      >
                        {subject}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={handleEnrollClick}
                disabled={!selectedSubject}
                className={`px-6 py-2.5 rounded-lg transition text-sm font-medium shadow-md flex items-center gap-2 ${
                  selectedSubject
                    ? "bg-linear-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Enroll Now {selectedSubject && `in ${selectedSubject}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classes;
