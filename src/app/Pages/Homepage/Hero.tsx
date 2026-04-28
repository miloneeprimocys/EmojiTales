"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const animationClass = (delay: string, isLeft: boolean = false, isRight: boolean = false) => `
    transition-all duration-1000 ease-out 
    ${isVisible
      ? 'opacity-100 translate-x-0 translate-y-0'
      : isLeft
        ? 'opacity-0 -translate-x-10'
        : isRight
          ? 'opacity-0 translate-x-10'
          : 'opacity-0 translate-y-10'
    } 
    ${delay}
  `;

  return (
    <section className="relative min-h-screen lg:min-h-screen bg-[#05011d] pt-24 lg:pt-0 overflow-hidden flex flex-col items-center justify-center">

      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:mt-6 xl:mt-0 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 flex-grow sm:py-10">

        {/* Left Content */}
        {/* Left Content */}
        <div className="flex flex-col items-center text-center space-y-6 lg:items-start lg:text-left z-20">
          {/* Badge */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md ${animationClass('delay-0', true)}`}>
            <Image src="/herostar.svg" alt="" width={24} height={24} className="inline-block w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            <span className="text-white text-[10px] md:text-sm font-semibold uppercase tracking-wider">
              AI Storytelling for Kids
            </span>
          </div>

          {/* Heading - Adjusted lg:text size to be smaller than xl/2xl */}
          <h1 className={`text-white text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight ${animationClass('delay-150', true)}`}>
            Turn Emojis Into <br />
            <span className="text-[#ffcc4d]">Magical </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Stories
            </span> with AI <Image src="/aistar.svg" alt="" width={64} height={64} className="inline-block w-10 h-10 md:w-14 lg:w-12 xl:w-16 animate-pulse align-middle" />
          </h1>

          {/* Subtext - Adjusted lg:text-lg */}
          <p className={`text-white/70 text-base md:text-xl lg:text-lg xl:text-xl max-w-lg leading-relaxed ${animationClass('delay-300', true)}`}>
            A safe, fun and creative storytelling platform for kids. Loved by parents, powered by AI.
          </p>

          {/* Buttons */}
          <div className={`flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start ${animationClass('delay-500', true)}`}>
            <button className="btn-shine group flex cursor-pointer items-center gap-2 bg-[#FFD12D] text-black text-sm md:text-base font-extrabold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all active:scale-95 shadow-lg shadow-[#FFD12D]/20 hover:shadow-[#FFD12D]/30">
              Create a Story
              <HiArrowRight className="text-lg md:text-xl transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
            </button>

            <button className="flex btn-shine items-center cursor-pointer gap-3 md:gap-4 bg-white/10 border border-white/20 text-white text-sm md:text-base font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all active:scale-95 group">
              Watch Demo
              <div className="relative w-6 h-6 md:w-7 md:h-7 rounded-full border border-white/40 flex items-center justify-center bg-white/10">
                <div className="absolute inset-0 rounded-full bg-white/40 animate-[ping_2s_linear_infinite]"></div>
                <div className="absolute inset-0 rounded-full bg-white/30 animate-[ping_2s_linear_infinite_0.75s]"></div>
                <div className="absolute -inset-1 rounded-full border border-white/20 animate-pulse"></div>
                <HiPlay className="text-base md:text-lg relative z-10 group-hover:scale-110 transition-transform" />
              </div>
            </button>
          </div>

          {/* Trust Badges */}
          <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-2 lg:justify-start ${animationClass('delay-700', true)}`}>
            <div className="flex items-center gap-2">
              <Image src="/safe.svg" alt="" width={24} height={24} className='h-5 w-5 md:h-6 md:w-6' />
              <span className="text-white text-xs md:text-[16px]">Safe for Kids</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/ai.svg" alt="" width={24} height={24} className='h-5 w-5 md:h-6 md:w-6' />
              <span className="text-white text-xs md:text-[16px]">AI Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/parent.svg" alt="" width={24} height={24} className='h-5 w-5 md:h-6 md:w-6' />
              <span className="text-white text-xs md:text-[16px]">Parent Approved</span>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className={`relative flex justify-center items-end self-end h-full transition-all duration-[1500ms] ease-out ${animationClass('delay-300', false, true)}`}>
          {/* Responsive Logic:
              Mobile/Tablet: Smaller scale (105-120), very aggressive -mb to avoid overlap.
              XL+: Kept exactly as your perfect version.
          */}
          <div className="relative z-10 w-full flex justify-center    md:-mb-40 lg:-mb-10 xl:-mb-12 2xl:-mb-32">
            <Image
              src="/hero.svg"
              alt="Kids reading magical book"
              width={800}
              height={800}
              className="w-full h-auto scale-110 lg:scale-150 xl:scale-[1.65] 2xl:scale-[2.0] origin-bottom drop-shadow-[0_20px_60px_rgba(168,85,247,0.45)]"
            />
          </div>
        </div>
      </div>

      {/* Cloud Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-30 p-0 m-0 leading-[0]">
        <Image src="/cloud.svg" alt="Cloud" width={1920} height={200} className="w-full h-auto p-0 m-0 translate-y-[2px]" />
      </div>
    </section>
  );
};

export default Hero;