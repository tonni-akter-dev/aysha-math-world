
"use client";

import { assignments } from "@/utils/data";
import { Eye, PlayCircle } from "lucide-react";
import Link from "next/link";

const Assignments = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-white">
          My Assignments
        </h1>
        <p className="mt-1 text-sm text-gray-300">
          Track your assignments, results and course progress.
        </p>
      </div>

      {/* Assignment Card */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Card Header */}
        <div className="flex flex-col gap-3 border-b border-gray-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Assignment History
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              View your submitted assignments and results
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 px-4 py-2">
            <span className="text-sm font-semibold text-blue-600">
              {assignments.length} Assignments
            </span>
          </div>
        </div>

        {/* Mobile / Desktop Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-212.5">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                  #
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                  Assignment
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                  Course
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                  Result
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                  Time
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wide text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {assignments.map((assignment) => (
                <tr
                  key={assignment.id}
                  className="border-t border-gray-100 transition hover:bg-gray-50/70"
                >
                  {/* ID */}
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-gray-400">
                      {assignment.id}
                    </span>
                  </td>

                  {/* Assignment */}
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {assignment.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Assignment
                      </p>
                    </div>
                  </td>

                  {/* Course */}
                  <td className="px-6 py-5">
                    <p className="max-w-55 text-sm font-medium text-gray-600">
                      {assignment.course}
                    </p>
                  </td>

                  {/* Result */}
                  <td className="px-6 py-5">
                    <span
                      className={`text-sm font-bold ${
                        assignment.status === "Passed"
                          ? "text-green-600"
                          : assignment.status === "Failed"
                            ? "text-red-500"
                            : "text-gray-400"
                      }`}
                    >
                      {assignment.result}
                    </span>
                  </td>

                  {/* Time */}
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-500">
                      {assignment.time}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${
                        assignment.status === "Passed"
                          ? "bg-green-100 text-green-700"
                          : assignment.status === "Failed"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5 text-right">
                    {assignment.status === "Pending" ? (
                      <Link
                        href={`/assignment/${assignment.id.replace("#", "")}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                      >
                        <PlayCircle size={16} />
                        Start
                      </Link>
                    ) : (
                      <Link
                        href={`/assignment/${assignment.id.replace("#", "")}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Eye size={16} />
                        View
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50/50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {assignments.length}
            </span>{" "}
            assignments
          </p>

          <Link
            href="/courses"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Browse Courses →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assignments;

