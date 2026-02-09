/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import profile from '../../../../public/profile.png'
import Image from "next/image";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Heart,
  Star,
  HelpCircle,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "My Profile", icon: User },
  { label: "Enrolled Courses", icon: BookOpen },
  { label: "Wishlist", icon: Heart },
  { label: "Reviews", icon: Star },
  { label: "Quiz Attempts", icon: HelpCircle },
  { label: "Assignment", icon: FileText },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab }:any) {
  return (
    <div className="w-70 rounded-2xl bg-white shadow-2xl border min-h-screen px-6 py-8">
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <Image
            src={profile} // replace with real image
            alt="User"
            width={90}
            height={90}
            className="rounded-full border-4 border-blue-500"
          />
          <span className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            ✓
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Wade Warren
        </h3>
        <p className="text-sm text-gray-500">info@example.com</p>
      </div>

      <hr className="my-6" />

      {/* Menu */}
      <p className="text-sm text-gray-500 mb-3">Welcome Warren,</p>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
