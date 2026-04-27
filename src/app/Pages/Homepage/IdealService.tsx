"use client";

import React, { useState, useEffect, useRef } from 'react';

const IdealService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;  
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animation utility: cards slide up from bottom with staggered delays (1,2,3,4 sequence)
  const getDelayClass = (index: number) => {
    const delays = ['delay-[0ms]', 'delay-[150ms]', 'delay-[300ms]', 'delay-[450ms]'];
    return delays[index] || 'delay-[0ms]';
  };

  const animationClass = (index: number) => `
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
    ${getDelayClass(index)}
  `;

const services = [
  {
    id: 1,
    title: "Families who prefer care in their own home",
    icon: "/Ideal1.svg",
    bgColor: "bg-[#FDF2FF]",
    iconBg: "bg-[#E9D5FF]", // softer purple
  },
  {
    id: 2,
    title: "Parents with busy or changing schedules",
    icon: "/Ideal2.svg",
    bgColor: "bg-[#FFF7ED]",
    iconBg: "bg-[#FED7AA]", // softer orange
  },
  {
    id: 3,
    title: "Children who benefit from routine and familiarity",
    icon: "/Ideal3.svg",
    bgColor: "bg-[#F0FDF4]",
    iconBg: "bg-[#BBF7D0]", // softer green
  },
  {
    id: 4,
    title: "Families seeking calm, one-to-one care",
    icon: "/Ideal4.svg",
    bgColor: "bg-[#F0F9FF]",
    iconBg: "bg-[#BAE6FD]", // softer blue
  },
];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white relative overflow-x-hidden">
      {/* Heading with Decorative Star */}
      <div className={`text-center mb-12 relative max-w-fit mx-auto ${animationClass(-1)}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
          Who This Service Is <span className="text-[#F97316]">Ideal For</span>
        </h2>
        {/* Decorative Sparkle/Star from screenshot */}
        <div className="absolute -top-4 -right-8 text-[#FFD1B9] text-2xl">✦</div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`${service.bgColor} rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md border border-white/50 ${animationClass(index)}`}
          >
            {/* Icon Container - Now using solid background colors from screenshot */}
            <div className={`${service.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm`}>
              <img
                src={service.icon}
                alt={`Service icon ${service.id}`}
                className="w-7 h-7 object-contain " 
              />
            </div>

            {/* Description */}
            <p className="text-[#334155] text-[16px] font-medium leading-snug px-2">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdealService;