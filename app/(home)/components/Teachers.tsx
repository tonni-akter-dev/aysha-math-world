/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/app/shared/components/Container";
import { useState } from "react";

const teachersData = [
  {
    id: 1,
    name: "Mames Mary",
    role: "English Teacher",
    location: "CO Miego, AD, USA",
    bio: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Sophia Turner",
    role: "Math Teacher",
    location: "New York, USA",
    bio: "Passionate math educator with 10+ years of experience.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Angela Moore",
    role: "Science Teacher",
    location: "California, USA",
    bio: "Making science fun and practical for students.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 4,
    name: "Daniel Smith",
    role: "Physics Teacher",
    location: "Texas, USA",
    bio: "Focused on concept-based learning and experiments.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 5,
    name: "Emma Johnson",
    role: "Biology Teacher",
    location: "Florida, USA",
    bio: "Helping students understand life sciences deeply.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 6,
    name: "Robert Brown",
    role: "History Teacher",
    location: "Chicago, USA",
    bio: "Connecting past events with modern history.",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
];

const Teachers = () => {
  const [activeTeacher, setActiveTeacher] = useState(teachersData[0]);

  return (
    <Container>
      <div className="py-20 px-40">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Our Teacher
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            প্রতিটি বিষয়ে দক্ষ ও অভিজ্ঞ শিক্ষকবৃন্দ

          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* LEFT MAIN CARD */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
            <img
              src={activeTeacher.image}
              alt={activeTeacher.name}
              onError={(e) =>
                (e.currentTarget.src =
                  "https://randomuser.me/api/portraits/lego/1.jpg")
              }
              className="w-full md:w-65 h-80 object-cover rounded-xl"
            />

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {activeTeacher.name}
              </h3>
              <p className="text-blue-600 font-medium mt-1">
                {activeTeacher.role}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                📍 {activeTeacher.location}
              </p>

              <p className="text-gray-600 mt-5 leading-relaxed">
                {activeTeacher.bio}
              </p>

              {/* Social */}
              <div className="flex gap-3 mt-6">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border cursor-pointer hover:bg-blue-600 hover:text-white transition">
                  f
                </span>
                <span className="w-10 h-10 flex items-center justify-center rounded-full border cursor-pointer hover:bg-blue-600 hover:text-white transition">
                  t
                </span>
                <span className="w-10 h-10 flex items-center justify-center rounded-full border cursor-pointer hover:bg-blue-600 hover:text-white transition">
                  in
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT THUMBNAILS */}
          <div className="grid grid-cols-3 gap-4">
            {teachersData.map((teacher) => (
              <button
                key={teacher.id}
                onClick={() => setActiveTeacher(teacher)}
                className={`rounded-xl overflow-hidden border-2 transition-all
                ${
                  activeTeacher.id === teacher.id
                    ? "border-blue-600 scale-105"
                    : "border-transparent hover:scale-105"
                }`}
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://randomuser.me/api/portraits/lego/2.jpg")
                  }
                  className="w-80 h-40 object-cover rounded-xl"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Teachers;
