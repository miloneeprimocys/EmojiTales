"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FifthSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section 
      ref={sectionRef} 
      className="relative w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] xl:w-[calc(100%-4rem)] mx-auto bg-[#F0F6F1] h-screen flex items-center overflow-hidden py-12 md:py-16 mb-10 rounded-[50px]"
    >
      {/* Background Corner Blobs */}
      <Image src="/LeftFT.svg" alt="" width={288} height={288} className="absolute top-0 left-0 w-40 md:w-64 xl:w-72 opacity-80 pointer-events-none" />
      <Image src="/RightFT.svg" alt="" width={288} height={288} className="absolute top-0 right-0 w-40 md:w-64 xl:w-72 opacity-80 pointer-events-none" />
      <Image src="/LeftBT.svg" alt="" width={288} height={288} className="absolute bottom-0 left-0 w-40 md:w-64 xl:w-72 opacity-80 pointer-events-none" />
      <Image src="/RightFB.svg" alt="" width={288} height={288} className="absolute bottom-0 right-0 w-40 md:w-64 xl:w-72 opacity-80 pointer-events-none" />

      {/* Floating Elements Scattered */}
      <Image src="/PurpleRocket.svg" alt="" width={128} height={128} className="absolute top-6 left-10 w-20 h-20 md:w-32 md:h-32 animate-float" />
      
     {/* Flowers with specific animation class - Updated sizes and added bottom-right flower */}
<Image 
  src="/Flower.svg" 
  alt="" 
  width={96}
  height={96}
  className="animate-star-circle absolute top-20 right-[10%] w-14 md:w-24" 
/>
<Image 
  src="/Flower.svg" 
  alt="" 
  width={88}
  height={88}
  className="animate-star-circle absolute top-[45%] left-6 w-12 md:w-22" 
/>
<Image 
  src="/Flower.svg" 
  alt="" 
  width={80}
  height={80}
  className="animate-star-circle absolute bottom-10 right-10 w-12 md:w-20" 
/>
   {/* Green Stars scattered - Pulse effects added */}
      <Image src="/GreenStar.svg" alt="" width={16} height={16} className="absolute top-[25%] right-[25%] w-4 h-4 animate-pulse" />
      <Image src="/GreenStar.svg" alt="" width={20} height={20} className="absolute bottom-[20%] left-[30%] w-5 h-5" />
      <Image src="/GreenStar.svg" alt="" width={24} height={24} className="absolute bottom-[25%] right-[15%] w-6 h-6 animate-pulse" />
      <Image src="/GreenStar.svg" alt="" width={16} height={16} className="absolute top-[55%] left-12 w-4 h-4" />
      <Image src="/GreenStar.svg" alt="" width={24} height={24} className="absolute top-[15%] left-[40%] w-6 h-6 animate-pulse" />
      <Image src="/GreenStar.svg" alt="" width={20} height={20} className="absolute bottom-[10%] right-[40%] w-5 h-5" />
      <Image src="/GreenStar.svg" alt="" width={16} height={16} className="absolute top-[70%] right-[5%] w-4 h-4 animate-pulse" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-[48%] flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
            <div className={`bg-[#d5ebd7] px-4 py-1 rounded-full mb-4 2xl:px-6 2xl:py-2 2xl:mb-6 ${animationClass(true, 'delay-0')}`}>
              <span className="text-[#14532D] text-[10px] md:text-xs 2xl:text-sm font-bold tracking-wider uppercase">
                  ✦ Why Parents Love Us
              </span>
            </div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-[#064E3B] leading-[1.1] mb-4 md:mx-auto 2xl:mb-6 ${animationClass(true, 'delay-100')}`}>
              Safety & <span className="text-[#2D6A4F]">Peace of Mind</span>
            </h2>

            <p className={`text-[#4B5563] text-base md:text-lg 2xl:text-xl mb-8 max-w-[480px] md:max-w-full 2xl:mb-12 ${animationClass(true, 'delay-200')}`}>
              Professional care that respects your home, routine, and family standards.
            </p>

            <div className={`w-full md:max-w-full lg:max-w-[460px] 2xl:max-w-[560px] bg-[#064E3B] rounded-[16px] md:rounded-[20px] 2xl:rounded-[40px] p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg ${animationClass(true, 'delay-300')}`}>
              <ul className="space-y-3 sm:space-y-4 md:space-y-4 2xl:space-y-6">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                      <svg 
                        className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ${item.color}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={4}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-xs sm:text-sm md:text-[15px] 2xl:text-lg font-medium leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-end justify-center">
            <div className={`relative w-full max-w-[420px] md:max-w-[520px] ${animationClass(false, 'delay-400')}`}>
                <div className={`relative w-full -mb-32 xl:-ml-16 xl:-mb-18 ${animationClass(false, 'delay-300')}`}>
              <Image 
                src="/aboveimage.svg" 
                alt="Decorative element" 
                width={128}
                height={128}
                className="w-32 h-32  object-contain"
              />
            </div>
              <Image 
                src="/fifthRImage.svg" 
                alt="Family playing" 
                width={600}
                height={600}
                className="w-full h-auto object-contain transform lg:scale-100 xl:scale-125 origin-center lg:origin-right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FifthSection;