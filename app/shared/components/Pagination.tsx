"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: PaginationProps) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pages.push(i);
    }

    return (
      <>
        {pages.map((page) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-orange-500 text-white shadow-xs"
                  : "bg-[#f0f6ff] text-[#020B2D] hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Ellipsis if totalPages > 3 */}
        {totalPages > 3 && (
          <span className="w-10 h-10 rounded-full bg-[#f0f6ff] text-[#020B2D] flex items-center justify-center text-sm font-bold select-none">
            ...
          </span>
        )}
      </>
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className="w-10 h-10 rounded-full bg-[#f0f6ff] text-[#020B2D] flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className="w-10 h-10 rounded-full bg-[#f0f6ff] text-[#020B2D] flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
      </button>
    </div>
  );
};

export default Pagination;