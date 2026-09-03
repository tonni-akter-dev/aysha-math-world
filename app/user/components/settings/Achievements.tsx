"use client";

import Image from "next/image";
import { Eye, Download } from "lucide-react";
import achievement1 from "../../../../public/cittificatte1.webp";
import achievement3 from "../../../../public/cittificatte3.webp";
import achievement2 from "../../../../public/cittificatte2.webp";
import achievement4 from "../../../../public/cittificatte4.webp";
const certificates = [
  {
    id: 1,
    title: "Certificate of Appreciation",
    image: achievement1
  },
  {
    id: 2,
    title: "Certificate of Achievement",
    image: achievement2,
  },
  {
    id: 3,
    title: "Certificate of Appreciation",
    image: achievement3,
  },
  {
    id: 4,
    title: "Certificate of Appreciation",
    image: achievement4,
  },
];

const Achievements = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">
          My Achievement
        </h1>

        <p className="mt-2 text-sm text-gray-300">
          Your certificates and achievements
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Certificate Image */}
            <div className="relative overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={1200}
                height={850}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-lg transition hover:bg-gray-100"
                >
                  <Eye size={18} />
                  View Certificate
                </button>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="flex items-center justify-between gap-4 pt-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {certificate.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Achievement #{certificate.id}
                </p>
              </div>

              {/* Download */}
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                aria-label="Download certificate"
              >
                <Download size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;