/* eslint-disable @next/next/no-img-element */
"use client";

const DashboardTab = () => {
  const stats = [
    {
      id: 1,
      title: "All Courses",
      count: 35,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "bg-blue-100 text-blue-600",
      linkColor: "text-blue-600 hover:text-blue-800"
    },
    {
      id: 2,
      title: "Enrolled Courses",
      count: 15,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "bg-purple-100 text-purple-600",
      linkColor: "text-purple-600 hover:text-purple-800"
    },
    {
      id: 3,
      title: "Active Courses",
      count: 11,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-yellow-100 text-yellow-600",
      linkColor: "text-yellow-600 hover:text-yellow-800"
    },
    {
      id: 4,
      title: "Completed Courses",
      count: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-green-100 text-green-600",
      linkColor: "text-green-600 hover:text-green-800"
    },
  ];

  return (
    <div className="min-h-screen  font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stat.count}</h3>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>

              {/* "View all" Link */}
              <div className="mt-4">
                <a href="#" className={`text-sm font-semibold flex items-center gap-1 ${stat.linkColor} group-hover:underline transition-all`}>
                  View all
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity (Extra section to complete the dashboard look) */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-6">In Progress Course List</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1 block">
                    With Programming Hero
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    Complete Web Development Course

                  </h1>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">
                      Content Updated up to Batch 11
                    </span>
                  </p>
                </div>

                {/* Instructor Mini Card */}
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 w-max">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Instructor"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Instructor</p>
                    <p className="text-sm font-bold text-gray-900">sdfdf</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">Your Progress</span>
                  <span className="font-bold text-blue-600">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `50%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg shadow-blue-600/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Continue Course
                </button>
                <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                  Course Outline
                </button>
              </div>
            </div>


            {/* Course Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
                    WD
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Web Development</h4>
                    <p className="text-sm text-gray-500">Chapter 2: CSS Grid</p>
                  </div>
                </div>

                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                  In Progress
                </span>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      35%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
                  <div style={{ width: "35%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardTab;