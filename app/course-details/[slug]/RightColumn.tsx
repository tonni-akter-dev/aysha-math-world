import {
  Download,
//   Calendar,
//   Clock,
//   Users,
  BookOpen,
  CheckCircle,
  Award,
  FileText,
  Video,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

const RightColumn = () => {
  return (
    <div className="lg:w-1/3">
      <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Card Header */}
        <div className="bg-linear-to-r from-[#020B2D] to-[#06144F] p-6 text-white">
          <h3 className="text-xl font-bold mb-1">ষষ্ঠ শ্রেণি - অনলাইন ব্যাচ</h3>
          <p className="text-blue-200 text-sm">২০২৪-২৫ শিক্ষাবর্ষ</p>
          <div className="flex items-center gap-1 mt-2">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-blue-200">সীমিত সময়ের অফার</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Price Section */}
          <div className="text-center pb-4 border-b border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-[#06144F]">1000</span>
              <span className="text-gray-500">টাকা মাসিক</span>
            </div>
       
          </div>

          {/* Course Info Grid */}
          {/* <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <Calendar className="w-5 h-5 text-[#06144F] mx-auto mb-1" />
              <p className="text-xs text-gray-500">মেয়াদ</p>
              <p className="font-medium text-sm">১২ মাস</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <Clock className="w-5 h-5 text-[#06144F] mx-auto mb-1" />
              <p className="text-xs text-gray-500">মোট ক্লাস</p>
              <p className="font-medium text-sm">১৮০+ ঘন্টা</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <Users className="w-5 h-5 text-[#06144F] mx-auto mb-1" />
              <p className="text-xs text-gray-500">শিক্ষার্থী</p>
              <p className="font-medium text-sm">২৫০+</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <BookOpen className="w-5 h-5 text-[#06144F] mx-auto mb-1" />
              <p className="text-xs text-gray-500">বিষয়</p>
              <p className="font-medium text-sm">টি</p>
            </div>
          </div> */}

          {/* Features List */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              কোর্স যা যা পাবেন:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Video className="w-4 h-4 text-blue-500" />
                লাইভ ক্লাস (সপ্তাহে ৫ দিন)
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="w-4 h-4 text-blue-500" />
                ক্লাসের রেকর্ডিং ও নোট
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4 text-blue-500" />
                পিডিএফ স্টাডি ম্যাটেরিয়াল
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <MessageSquare className="w-4 h-4 text-blue-500" />
                সাপ্তাহিক অ্যাসাইনমেন্ট
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <HelpCircle className="w-4 h-4 text-blue-500" />
                মডেল টেস্ট ও কুইজ
              </li>
            </ul>
          </div>

          {/* Teacher Info */}
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">কোর্স ইন্সট্রাক্টর</p>
            <p className="font-medium">আয়শা সিদ্দিকা</p>
            <p className="text-xs text-gray-500">16+ বছরের অভিজ্ঞতা</p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-2">
            <button className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3.5 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition shadow-md flex items-center justify-center gap-2">
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
