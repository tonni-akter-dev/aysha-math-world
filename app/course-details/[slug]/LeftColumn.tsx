import React from 'react';
import { 
  CheckCircle2, 
  Video, 
  ClipboardCheck, 
  CalendarDays, 
  BarChart3, 
  GraduationCap, 
  MessageSquare, 
  BrainCircuit,
  Users,
  FileText
} from 'lucide-react';

const LeftColumn = () => {
  return (
    <div className="lg:w-2/3 space-y-8">
      <div className="mb-8">
        {/* Main FAQ Card */}
        <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                ক্লাসের পণ্য ক্লাসেই শেষ
              </h3>
              <p className="text-gray-600">
                অনলাইন ব্যাচে প্রতিটি ক্লাস সাজানো থাকে সহজে বুঝতে, প্র্যাকটিস করতে এবং সেদিনের শেখা সেদিনেই শেষ করতে।
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            দেড় ঘণ্টার প্রতিটি ক্লাসে চ্যাপ্টারগুলো ধরে ধরে এমনভাবে পড়ানো হয় যাতে সবগুলো টপিক গুছিয়ে শেষ হয়ে যায় ক্লাসেই। ক্লাসের কনফিউশন ক্লিয়ার করা হয় ক্লাসেই। মাস্টার বুক থেকে পরীক্ষায় আসার মতো ইম্পরট্যান্ট টপিকগুলো পড়লেই চ্যাপ্টার কমপ্লিট।
          </p>

          <p className="text-gray-700 font-medium bg-white/60 p-3 rounded-xl border border-blue-100">
            ক্লাস 6 এর অনলাইন ব্যাচে বছরের শুরু থেকে পরীক্ষার আগ পর্যন্ত সব কিছু ধাপে ধাপে সাজানো।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-800">Recorded Class & Lecture Sheet</h4>
            </div>
            <p className="text-sm text-gray-600">
              কোনো কারণে যদি লাইভ ক্লাস মিস হলেও সব এখানে পাওয়া যাবে।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800">ডেইলি এক্সাম</h4>
            </div>
            <p className="text-sm text-gray-600">
              প্রতিটি ক্লাসের শেষে ছোট ছোট MCQ এক্সাম থাকে। এতে যা যা শেখা হয় সেগুলো আরো strong হয়ে যায়।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">মাসিক পরীক্ষা</h4>
                <p className="text-xs text-gray-500 mt-1">প্রতিটি অধ্যায়ের পরে MCQ • মাসে একবার CQ+MCQ বড় পরীক্ষা • স্ক্রিপ্ট চেকিংসহ রিপোর্ট</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-800">ফুল সিলেবাসে Model Test</h4>
            </div>
            <p className="text-sm text-gray-600">
              ফুল সিলেবাস শেষ হওয়ার পরে পরীক্ষার আগে স্কুলের বার্ষিক পরীক্ষার মতো প্রশ্নপত্রে Model test নেওয়া হবে।
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
          <h4 className="text-xl font-bold text-[#1E293B] mb-6">
            আপনার সন্তানকে সারা বছর সেরা রেজাল্ট করার সব ধরনের সাপোর্ট
          </h4>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Batch-wise Support</p>
                <p className="text-sm text-gray-600 mt-1">প্রতি ব্যাচে মাত্র ১২০ জন শিক্ষার্থী। এবং প্রতি ক্লাসে থাকে দুইজন dedicated mentor: একজন ব্যাচ ট্রেইনার (Batch Teacher) ও একজন স্টুডেন্ট Advisor</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">মাসিক রিপোর্ট কার্ড</p>
                <p className="text-sm text-gray-600 mt-1">উপস্থিতি, ক্লাস টেস্ট মার্কস, Model Test ফলাফল, পুরো মাসের অগ্রগতি। আর এতেই অভিভাবকরা সহজেই বুঝতে পারবেন সন্তানের উন্নতি কেমন হচ্ছে।</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Parent–Teacher Meeting</p>
                <p className="text-sm text-gray-600 mt-1">প্রতি মাসে একবার আলোচনা; আপনার সন্তান কোথায় ভালো করছে, কোথায় উন্নতি দরকার, কীভাবে পড়তে হবে সব এসব বিষয়ে পরিষ্কার জানানো হয়।</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                <BrainCircuit className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">24/7 AI Super Solve</p>
                <p className="text-sm text-gray-600 mt-1">এবারই প্রথম অনলাইন ব্যাচে AI! পড়াশোনা ও পরীক্ষা রিলেটেড যেকোনো প্রশ্ন করলে সাথে সাথে কনফিউশন ক্লিয়ার করা যায়।</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Teachers Section */}
        <div className="bg-[#020B2D] p-8 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-bl-full opacity-20 pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <GraduationCap className="w-8 h-8 text-yellow-400" />
            <h4 className="text-xl font-bold">এক্সপার্ট টিচার টিম</h4>
          </div>
          <p className="text-sm text-blue-100 leading-relaxed relative z-10">
            আমাদের অনলাইন ব্যাচে ক্লাস 6 এর সারা বছরের পড়াশোনার প্ল্যান ও ম্যাটেরিয়াল রেডি করেন বাংলাদেশের সবচেয়ে এক্সপার্ট টিচার টিম। তারা রেগুলারলি ক্লাস ও এক্সাম নেওয়ার পাশাপাশি প্রতিটি শিক্ষার্থীকে আলাদাভাবে গাইড করেন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;