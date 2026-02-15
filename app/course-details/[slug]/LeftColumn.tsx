import React from 'react'

const LeftColumn = () => {
  return (
      <div className="lg:w-2/3 space-y-8">
              <div className="mb-8">
                {/* Main FAQ Card */}
                <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 mb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#06144F] rounded-xl flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#020B2D] mb-2">
                        ক্লাসের পণ্য ক্লাসেই শেষ
                      </h3>
                      <p className="text-gray-600">
                        অনলাইন ব্যাচে প্রতিটি ক্লাস সাজানো থাকে সহজে বুঝতে,
                        প্র্যাকটিস করতে এবং সেদিনের শেখা সেদিনেই শেষ করতে।
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    দেড় ঘণ্টার প্রতিটি ক্লাসে চ্যাপ্টারগুলো ধরে ধরে এমনভাবে
                    পড়ানো হয় যাতে সবগুলো টপিক গুছিয়ে শেষ হয়ে যায় ক্লাসেই।
                    ক্লাসের কনফিউশন ক্লিয়ার করা হয় ক্লাসেই। মাস্টার বুক থেকে
                    পরীক্ষায় আসার মতো ইম্পরট্যান্ট টপিকগুলো পড়লেই চ্যাপ্টার
                    কমপ্লিট।
                  </p>

                  <p className="text-gray-700 font-medium">
                    ক্লাস 6 এর অনলাইন ব্যাচে বছরের শুরু থেকে পরীক্ষার আগ পর্যন্ত
                    সব কিছু ধাপে ধাপে সাজানো।
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Recorded Class */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-800">
                        ▶ Recorded Class & Lecture Sheet
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">
                      কোনো কারণে যদি লাইভ ক্লাস মিস হলেও সব এখানে পাওয়া যাবে।
                    </p>
                  </div>

                  {/* Daily Exam */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-800">
                        ▶ ডেইলি এক্সাম
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">
                      প্রতিটি ক্লাসের শেষে ছোট ছোট MCQ এক্সাম থাকে। এতে যা যা
                      শেখা হয় সেগুলো আরো strong হয়ে যায়।
                    </p>
                  </div>

                  {/* Monthly Exam */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          ▶ মাসিক পরীক্ষা
                        </h4>
                        <p className="text-xs text-gray-500">
                          প্রতিটি অধ্যায়ের পরে MCQ • মাসে একবার CQ+MCQ বড়
                          পরীক্ষা • স্ক্রিপ্ট চেকিংসহ রিপোর্ট
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Model Test */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-800">
                        ▶ ফুল সিলেবাসে Model Test
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">
                      ফুল সিলেবাস শেষ হওয়ার পরে পরীক্ষার আগে স্কুলের বার্ষিক
                      পরীক্ষার মতো প্রশ্নপত্রে Model test নেওয়া হবে। যাতে
                      স্টুডেন্টদের পরীক্ষার ভয় কমে, confidence বাড়ে।
                    </p>
                  </div>
                </div>

                {/* Support Section */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
                  <h4 className="text-lg font-bold text-[#06144F] mb-4">
                    আপনার সন্তানকে সারা বছর সেরা রেজাল্ট করার সব ধরনের সাপোর্ট
                  </h4>

                  <div className="space-y-4">
                    {/* Batch Support */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          Batch-wise Support
                        </p>
                        <p className="text-sm text-gray-600">
                          প্রতি ব্যাচে মাত্র ১২০ জন শিক্ষার্থী। এবং প্রতি ক্লাসে
                          থাকে দুইজন dedicated mentor: একজন ব্যাচ ট্রেইনার
                          (Batch Teacher) ও একজন স্টুডেন্ট Advisor
                        </p>
                      </div>
                    </div>

                    {/* Report Card */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          মাসিক রিপোর্ট কার্ড
                        </p>
                        <p className="text-sm text-gray-600">
                          উপস্থিতি, ক্লাস টেস্ট মার্কস, Model Test ফলাফল, পুরো
                          মাসের অগ্রগতি। আর এতেই অভিভাবকরা সহজেই বুঝতে পারবেন
                          সন্তানের উন্নতি কেমন হচ্ছে।
                        </p>
                      </div>
                    </div>

                    {/* Parent Meeting */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-purple-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          Parent–Teacher Meeting
                        </p>
                        <p className="text-sm text-gray-600">
                          প্রতি মাসে একবার আলোচনা; আপনার সন্তান কোথায় ভালো করছে,
                          কোথায় উন্নতি দরকার, কীভাবে পড়তে হবে সব এসব বিষয়ে
                          পরিষ্কার জানানো হয়।
                        </p>
                      </div>
                    </div>

                    {/* AI Support */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-indigo-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          24/7 AI Super Solve
                        </p>
                        <p className="text-sm text-gray-600">
                          এবারই প্রথম অনলাইন ব্যাচে AI! পড়াশোনা ও পরীক্ষা
                          রিলেটেড যেকোনো প্রশ্ন করলে সাথে সাথে কনফিউশন ক্লিয়ার
                          করা যায়।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expert Teachers Section */}
                <div className="bg-linear-to-r from-[#020B2D] to-[#06144F] p-6 rounded-xl text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <h4 className="text-lg font-bold">এক্সপার্ট টিচার টিম</h4>
                  </div>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    আমাদের অনলাইন ব্যাচে ক্লাস 6 এর সারা বছরের পড়াশোনার প্ল্যান
                    ও ম্যাটেরিয়াল রেডি করেন বাংলাদেশের সবচেয়ে এক্সপার্ট টিচার
                    টিম। তারা রেগুলারলি ক্লাস ও এক্সাম নেওয়ার পাশাপাশি প্রতিটি
                    শিক্ষার্থীকে আলাদাভাবে গাইড করেন।
                  </p>
                </div>
              </div>
            </div>
  )
}

export default LeftColumn