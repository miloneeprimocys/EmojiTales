"use client";

import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const NewsLetter = () => {
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

  const animationClass = (delay: string = 'delay-0') => `
    transition-all duration-1000 ease-out ${delay}
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
  `;

  return (
    <section ref={sectionRef} className="relative w-full min-h-[400px] md:min-h-[600px] flex items-start lg:items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-0">
      
      {/* Small icons floating - Responsive positioning to avoid text overlap */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Rocket - Top Left corner space */}
        <div className="absolute top-[20%] left-[4%] sm:left-[8%] animate-float" style={{ animationDuration: '3.5s' }}>
          <img src="/n1.svg" alt="Rocket" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
        </div>
        
        {/* Book - Lower Left space (pushed left on mobile) */}
        <div className="absolute bottom-[40%] left-[2%] sm:left-[15%] lg:left-[22%] 2xl:left-[28%] animate-float" style={{ animationDelay: '0.5s', animationDuration: '4.2s' }}>
          <img src="/n2.svg" alt="Book" className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18" />
        </div>

        {/* Happy Emoji - Middle Right space (pushed right on mobile) */}
        <div className="absolute top-[30%] right-[2%] sm:right-[15%] lg:right-[28%] 2xl:right-[30%] animate-float" style={{ animationDelay: '0.2s', animationDuration: '3.8s' }}>
          <img src="/n3.svg" alt="Emoji" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
        </div>

        {/* Angry/Red Emoji - Top Right corner space */}
        <div className="absolute top-[10%] right-[5%] sm:right-[10%] animate-float" style={{ animationDelay: '0.8s', animationDuration: '4.5s' }}>
          <img src="/n4.svg" alt="Angry Emoji" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        </div>

        {/* Small Rocket - Far Right center space */}
        <div className="absolute bottom-[45%] right-[4%] sm:right-[8%] animate-float" style={{ animationDelay: '1.2s', animationDuration: '3.2s' }}>
          <img src="/n5.svg" alt="Small Rocket" className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16" />
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/footerbg.svg" 
          alt="Footer Background" 
          className="w-full h-full object-cover object-top lg:object-center rounded-t-3xl "
        />
      </div>

      {/* Content Overlay - Higher Z-index to stay above floating icons */}
      <div className="relative z-30 text-center px-6 max-w-2xl">
        <h2 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight ${animationClass('delay-0')}`}>
          Ready to Create <br />
          <span className="text-[#FFD700]">Magical Stories?</span>
        </h2>
        <p className={`text-white/95 text-sm sm:text-base md:text-xl mb-6 md:mb-10 font-medium max-w-lg mx-auto px-4 ${animationClass('delay-100')}`}>
          Join thousands of happy families and spark imagination today!
        </p>
        <button className={`btn-shine group bg-[#FFD12D] cursor-pointer text-[#1e1b4b] font-bold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg flex items-center gap-2 mx-auto transition-all shadow-xl hover:shadow-[#FFD12D]/30 active:scale-95 ${animationClass('delay-200')}`}>
          Start Your Journey 
          <HiArrowRight className="text-lg md:text-xl transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
        </button>
      </div>

      {/* Floating Illustrations - Dog and Unicorn */}
      <div className="absolute left-[1%] md:left-[5%] xl:left-[7%] bottom-0 z-10 w-28 sm:w-48 md:w-64 lg:w-80  2xl:w-[480px]">
        <img src="/dog.svg" alt="Cute dog" className="w-full h-auto object-contain" />
      </div>
      <div className="absolute right-[1%] md:right-[5%] xl:right-[7%] bottom-0 z-10 w-28 sm:w-48 md:w-64 lg:w-80  2xl:w-[480px]">
        <img src="/unicorn.svg" alt="Unicorn" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
};

export default NewsLetter;