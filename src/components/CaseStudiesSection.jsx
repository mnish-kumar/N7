import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Vector from "../assets/Vector.png";

const caseStudies = [
  {
    id: 1,
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    description: "Increased brand awareness by 150% through our innovative digital solutions.",
  },
  {
    id: 2,
    category: "OPTIMIZATION",
    title: "Streamlining operations for maximum efficiency",
    company: "ArtVenue",
    description: "Reduced operational costs by 40% with our advanced analytics platform.",
  },
  {
    id: 3,
    category: "TRANSFORMATION",
    title: "Digital transformation at scale",
    company: "SmartFinder",
    description: "Successfully migrated to cloud infrastructure, improving reliability to 99.9%.",
  },
  {
    id: 4,
    category: "GROWTH",
    title: "Scaling revenue streams",
    company: "SHELLS",
    description: "Expanded market reach to 5 new countries with localized solutions.",
  },
];

const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="relative py-30 bg-[var(--bg-primary)] text-[var(--text-primary)] px-4 sm:px-8 md:px-15 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16 md:mb-20">
        <h1 className="font-archivo text-4xl sm:text-5xl md:text-6xl font-normal leading-tight">
          Our Case Studies
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 max-w-6xl mx-auto">
        {/* Left Arrow - Hidden on mobile */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-primary-10)] transition-all duration-300 shrink-0"
          aria-label="Previous case study"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Card */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 flex-1">
          {/* Logo/Icon Section */}
          <div className="w-full md:w-[40%] flex-shrink-0">
            <div className="bg-[image:var(--gradient-case)] rounded-2xl p-8 md:p-10 aspect-square md:aspect-auto md:h-[340px] flex items-center justify-center relative overflow-hidden">
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-[image:var(--gradient-primary-soft)] blur-[60px] opacity-20" />

              {/* Icon Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-8 md:gap-10">
                <img src={Vector} alt="Icon" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                <img src={Vector} alt="Icon" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                <img src={Vector} alt="Icon" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                <img src={Vector} alt="Icon" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[60%] flex flex-col gap-6 md:gap-8">
            {/* Category */}
            <p className="text-[var(--blue-primary)] text-xs font-chivo tracking-widest uppercase">
              {currentStudy.category}
            </p>

            {/* Title */}
            <h2 className="font-archivo text-2xl sm:text-3xl md:text-4xl leading-tight">
              {currentStudy.title}
            </h2>

            {/* Company */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--text-primary-10)] flex items-center justify-center">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--blue-primary)]" />
              </div>
              <p className="text-[var(--text-primary-70)] font-chivo text-sm">{currentStudy.company}</p>
            </div>

            {/* Read More Button */}
            <button className="w-full md:w-auto px-8 py-3 border border-[var(--text-primary-30)] rounded-[8px] text-xs font-chivo uppercase tracking-wider hover:border-[var(--blue-primary)] hover:text-[var(--blue-primary)] transition-all duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Right Arrow - Hidden on mobile */}
        <button
          onClick={goToNext}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-primary-10)] transition-all duration-300 shrink-0"
          aria-label="Next case study"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Navigation - Mobile Arrows */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-12">
        <button
          onClick={goToPrevious}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-primary-10)] transition-all duration-300"
          aria-label="Previous case study"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={goToNext}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-primary-10)] transition-all duration-300"
          aria-label="Next case study"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Pagination & View All */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-16 gap-6 max-w-6xl mx-auto">
        {/* Pagination Dots */}
        <div className="flex items-center gap-3 order-2 md:order-1">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2 bg-[var(--blue-primary)] rounded-full"
                  : "w-2 h-2 bg-[var(--text-primary-30)] rounded-full hover:bg-[var(--text-primary-50)]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <a
          href="#"
          className="text-[var(--blue-primary)] text-xs font-chivo uppercase tracking-wider hover:text-[var(--blue-primary-70)] transition-colors order-1 md:order-2"
        >
          VIEW ALL →
        </a>
      </div>
    </section>
  );
};

export default CaseStudiesSection;