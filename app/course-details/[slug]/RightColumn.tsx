import {
  Download,
  BookOpen,
  CheckCircle,
  Award,
  FileText,
  Video,
  MessageSquare,
  HelpCircle,
  Users,
  Sparkles
} from "lucide-react";

const RightColumn = () => {
  return (
    <div className="lg:w-1/3">
      <div className="sticky top-24 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Card Header - Professional Gradient */}
        <div className="bg-linear-to-r from-[#06144F] to-[#020B2D] p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full pointer-events-none"></div>
          <h3 className="text-xl font-bold mb-1 relative z-10">ষষ্ঠ শ্রেণি - অনলাইন ব্যাচ</h3>
          <p className="text-blue-200 text-sm relative z-10">২০২৪-২৫ শিক্ষাবর্ষ</p>
          <div className="flex items-center gap-1 mt-3 bg-white/20 backdrop-blur-sm w-fit px-3 py-1 rounded-full relative z-10">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-medium">সীমিত সময়ের অফার</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-5">
          {/* Price Section */}
          <div className="text-center pb-5 border-b border-gray-100">
            <div className="flex items-end justify-center gap-2">
              <span className="text-4xl font-extrabold text-[#06144F]">1000</span>
              <span className="text-gray-500 mb-1">টাকা / মাস</span>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              কোর্স যা যা পাবেন:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Video className="w-4 h-4 text-blue-600" />
                </div>
                লাইভ ক্লাস (সপ্তাহে ৫ দিন)
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                ক্লাসের রেকর্ডিং ও নোট
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                পিডিএফ স্টাডি ম্যাটেরিয়াল
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                </div>
                সাপ্তাহিক অ্যাসাইনমেন্ট
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                </div>
                মডেল টেস্ট ও কুইজ
              </li>
            </ul>
          </div>

          {/* Teacher Info */}
          <div className="flex items-center gap-4 bg-[#f0f6ff] p-4 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              A
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">কোর্স ইন্সট্রাক্টর</p>
              <p className="font-bold text-[#1E293B]">আয়শা সিদ্দিকা</p>
              <div className="flex items-center gap-1 mt-1">
                <Award className="w-3.5 h-3.5 text-yellow-500" />
                <p className="text-xs text-gray-500">16+ বছরের অভিজ্ঞতা</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-2">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              এখনই এনরোল করুন
            </button>
            <button className="w-full border-2 border-[#06144F] text-[#06144F] py-3 rounded-xl font-medium hover:bg-[#06144F] hover:text-white transition flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5" />
              ফ্রি স্যাম্পল ক্লাস
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;