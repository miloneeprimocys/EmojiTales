"use client";

import React, { useState, useEffect, useRef } from 'react';

const FifthSection = () => {
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

  // Animation utility: slide up from bottom (for badge and features box) / slide from left/right
  const animationClass = (isLeft: boolean | null, delay: string = 'delay-0') => `
    transition-all duration-1000 ease-out ${delay}
    ${isVisible 
      ? 'opacity-100 translate-x-0 translate-y-0' 
      : (isLeft === null 
          ? 'opacity-0 translate-y-12' 
          : (isLeft ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'))
    }
  `;
  const features = [
    { text: "Care aligned with your household routines", color: "text-[#22C55E]" },
    { text: "Background-checked & trained caregivers", color: "text-[#F59E0B]" },
    { text: "Hygiene-aware care for shared family spaces", color: "text-[#22C55E]" },
    { text: "Respect for household rules, schedules & boundaries", color: "text-[#F59E0B]" },
  ];

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-center overflow-hidden py-12 md:py-16 mb-10">
      {/* Main Background SVG 
          Mobile: object-cover with h-full ensures the vertical look 
          Desktop: returns to object-fill/cover as per your original logic
      */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Fifthbg.svg" 
          alt="Background" 
          className="w-full h-full object-cover md:object-cover md:object-center lg:object-start mx-auto"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-[48%] flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
            {/* Badge - slides up */}
            <div className={`bg-[#d5ebd7] px-4 py-1 rounded-full mb-4 2xl:px-6 2xl:py-2 2xl:mb-6 ${animationClass(true, 'delay-0')}`}>
              <span className="text-[#14532D] text-[10px] md:text-xs 2xl:text-sm font-bold tracking-wider uppercase">
                Why Parents Love Us
              </span>
            </div>

            {/* Heading - slides from left */}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-[#064E3B] leading-[1.1] mb-4 md:mx-auto 2xl:mb-6 ${animationClass(true, 'delay-100')}`}>
              Safety & <span className="text-[#2D6A4F]">Peace of Mind</span>
            </h2>

            {/* Description - slides from left */}
            <p className={`text-[#4B5563] text-base md:text-lg 2xl:text-xl mb-8 max-w-[480px] md:max-w-full 2xl:mb-12 ${animationClass(true, 'delay-200')}`}>
              Professional care that respects your home, routine, and family standards.
            </p>

            {/* Features List Box - slides up */}
            <div className={`w-full md:max-w-full lg:max-w-[460px] 2xl:max-w-[560px] bg-[#064E3B] rounded-[20px] 2xl:rounded-[40px] p-6 md:p-8 shadow-lg ${animationClass(true, 'delay-300')}`}>
              <ul className="space-y-4 2xl:space-y-6">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <svg 
                        className={`w-3.5 h-3.5 ${item.color}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={4}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm md:text-[15px] 2xl:text-lg font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image Side - Reduced scale for better fit on lg screens */}
          <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-end justify-center">
            
            <div className={`relative w-full max-w-[420px] md:max-w-[520px] ${animationClass(false, 'delay-400')}`}>
                <div className={`relative w-full -mb-32 ${animationClass(false, 'delay-300')}`}>
              <img 
                src="/aboveimage.svg" 
                alt="Decorative element" 
                className="w-32 h-32 object-contain"
              />
            </div>
              <img 
                src="/fifthRImage.svg" 
                alt="Family playing" 
                className="w-full h-auto object-contain transform lg:scale-100 xl:scale-105 origin-center lg:origin-right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FifthSection;