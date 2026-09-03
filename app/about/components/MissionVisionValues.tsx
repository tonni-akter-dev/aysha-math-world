"use client";



interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cardsData: FeatureCardProps[] = [
  {
    title: "Our Mission",
    description:
      "Our mission is to provide high-quality, accessible online education that empowers learners to reach their personal and professional goals. We aim to create an innovative, flexible, and engaging learning environment for all.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#F97316" strokeWidth="4" />
        <circle cx="24" cy="24" r="12" stroke="#10B981" strokeWidth="4" />
        <path d="M24 16V24L29 29" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    description:
      "We envision a future where education is globally accessible, enabling individuals to unlock their full potential. Through continuous innovation, we strive to be a leader in transforming lives through online learning.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M12 36L20 22M20 22L32 10L38 16L26 28M20 22L26 28M26 28L36 36" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 36L30 36" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Our Values",
    description:
      "At iStudy, we are guided by integrity a commitment to excellence. We believe in putting learners first ensuring education is accessible to all. Our goal is to deliver exceptional learning experiences that drive success.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M14 10H10V14M34 10H38V14M10 34V38H14M38 34V38H34" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="18" width="12" height="12" rx="2" stroke="#10B981" strokeWidth="4" />
      </svg>
    ),
  },
];

const MissionVisionValues = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="text-center mb-12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Decorative Corner Glow Accent */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-linear-to-br from-emerald-100 to-orange-100 rounded-full opacity-60 pointer-events-none" />

              {/* Custom SVG Icon */}
              <div className="mb-6 relative z-10">{card.icon}</div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#020B2D] mb-4 relative z-10">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base leading-relaxed relative z-10">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;