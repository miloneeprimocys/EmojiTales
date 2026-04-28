"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: "Create a Child",
    description: "Set up your child profile in seconds.",
    image: "/card1.svg",
    bgColor: "bg-[#FDF2FF]",
    iconBg: "bg-[#E9D5FF]",
  },
  {
    id: 2,
    title: "Pick Emojis",
    description: "Choose from fun categories.",
    image: "/card2.svg",
    bgColor: "bg-[#FFF7ED]",
    iconBg: "bg-[#FED7AA]",
  },
  {
    id: 3,
    title: "AI Creates Story",
    description: "Our AI turns emojis into magical stories.",
    image: "/card3.svg",
    bgColor: "bg-[#F0FDF4]",
    iconBg: "bg-[#BBF7D0]",
  },
  {
    id: 4,
    title: "Read & Listen",
    description: "Enjoy with narration in any voice.",
    image: "/card4.svg",
    bgColor: "bg-[#F0F9FF]",
    iconBg: "bg-[#BAE6FD]",
  },
  {
    id: 5,
    title: "Save & Share",
    description: "Keep, share or print your story.",
    image: "/card5.svg",
    bgColor: "bg-[#FEF3C7]",
    iconBg: "bg-[#FDE68A]",
  },
];

const HowItWorks = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Detect touch device for better UX - computed once during render
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Handle click/tap to toggle pause on mobile/tablet
  const handleCarouselClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsPaused(prev => !prev);
  };

  // Mouse/Touch drag handlers for manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      if (!isPaused) setIsPaused(false);
    }, 100);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => {
      if (!isPaused) setIsPaused(false);
    }, 100);
  };

  // Intersection Observer for slide-up animation
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

  // Smooth scrolling animation
  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 1.2; // pixels per frame

    const animate = () => {
      if (!isPaused && scrollContainer && !isDragging) {
        scrollPosition += scrollSpeed;
        
        // Calculate the width of one set of cards (5 cards)
        const firstCard = scrollContainer.querySelector('.carousel-item') as HTMLElement;
        if (firstCard) {
          const cardWidth = firstCard.getBoundingClientRect().width;
          const gap = parseInt(getComputedStyle(firstCard.parentElement as HTMLElement).gap || '24');
          const totalCardsWidth = steps.length * (cardWidth + gap);
          
          // Reset when we've scrolled through one set of cards
          if (scrollPosition >= totalCardsWidth) {
            scrollPosition = 0;
          }
          
          scrollContainer.scrollLeft = scrollPosition;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging]);

  return (
    <section ref={sectionRef} className="py-8 sm:py-16 md:py-20 lg:py-24 px-4 bg-white overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[#05011d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            How Emoji Tales <span className="text-[#F97316]">Works</span> 
            <span className="text-[#F97316] animate-pulse">✨</span>
          </h2>
        </div>

        {/* --- XL Desktop View (Grid Layout - xl screens and above) --- */}
        <div className={`hidden xl:grid grid-cols-5 gap-6 2xl:gap-14 relative px-10 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Star decorations - Left side of first card */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-24 animate-pulse z-0">
            <Image src="/STARs.svg" alt="" width={80} height={80} className='h-20 '/>
          </div>
          
          {/* Star decorations - Right side of last card */}
          <div className="absolute top-0 -right-12 animate-pulse z-0">
            <Image src="/StarsR.svg" alt="" width={80} height={80} className='h-20'/>
          </div>
          
          {/* DNA-style Double Dotted Connecting Line */}
          <div className="absolute top-[42%] left-0 w-full h-12 z-0 pointer-events-none opacity-60">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <pattern id="dotted-dna" x="0" y="0" width="160" height="40" patternUnits="userSpaceOnUse">
                <path 
                  d="M0,10 C40,10 40,30 80,30 C120,30 120,10 160,10 M0,30 C40,30 40,10 80,10 C120,10 120,30 160,30" 
                  fill="none" 
                  stroke="#6366f1" 
                  strokeWidth="2.5" 
                  strokeDasharray="5 5"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotted-dna)" />
            </svg>
          </div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10">
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* --- Mobile, Tablet & Desktop below XL (Continuous Carousel) --- */}
        {/* Carousel is visible from mobile up to xl breakpoint (below 1280px) */}
        <div className={`xl:hidden relative transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} onClick={handleCarouselClick}>
          <div 
            ref={scrollRef}
            className="relative w-full overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar"
            onMouseEnter={() => !isDragging && setIsPaused(true)}
            onMouseLeave={() => !isDragging && setIsPaused(false)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-8 sm:py-10 md:py-12 relative -mx-4 sm:-mx-6 md:-mx-8">
              
              {/* DNA-style Double Dotted Connecting Line for Carousel - Continuous pattern */}
              <div className="absolute top-[42%] left-0 w-full h-12 z-0 pointer-events-none opacity-60">
                <svg width="100%" height="100%" preserveAspectRatio="none" className="dotted-line-svg">
                  <defs>
                    <pattern id="dotted-dna-carousel" x="0" y="0" width="100%" height="40" patternUnits="userSpaceOnUse">
                      <path 
                        d="M0,10 L100%,10 M0,30 L100%,30" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="2.5" 
                        strokeDasharray="8 12"
                      />
                      <path 
                        d="M50,0 L50,40" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 8"
                        opacity="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dotted-dna-carousel)" />
                </svg>
              </div>
              
              {/* Triple the steps for seamless infinite scroll on all screen sizes */}
              {[...steps, ...steps, ...steps].map((step, index) => (
                <div 
                  key={`${step.id}-${index}`} 
                  className="carousel-item w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] shrink-0 relative z-10"
                >
                  <StepCard step={step} index={index % steps.length} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Subtle fade edges for better UX on carousel */}
          <div className="absolute top-0 left-0 w-8 sm:w-12 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-12 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          
                  </div>

      </div>
          </section>
  );
};

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index]);

  return (
  <div ref={cardRef} className={`flex flex-col items-center relative group cursor-pointer h-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    
    {/* Dotted Connector - Between Cards (Hidden in XL and 2XL) */}
    <div className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-0 xl:hidden">
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10H15M25 10H40" stroke="#6366f1" strokeDasharray="3 3"/>
        <circle cx="20" cy="10" r="2" fill="#6366f1"/>
      </svg>
    </div>

    {/* Number Marker - Overlapping top of card */}
    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#6366f1] text-white flex items-center justify-center font-bold text-base sm:text-lg absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-20 shadow-lg shadow-indigo-200">
      {step.id}
    </div>

    {/* Fixed height card container - all cards will have exact same height */}
    <div className="w-full bg-[#f8f9ff] rounded-2xl sm:rounded-[28px] md:rounded-[30px] border border-indigo-200 px-3 pt-10 sm:pt-12 pb-4  flex flex-col items-center transition-all duration-300 group-hover:border-indigo-300 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-indigo-100/40 relative overflow-hidden h-[310px] sm:h-[330px] md:h-[350px] lg:h-[360px]">
      {/* Inner indigo shadow effect - only around boundaries */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-[28px] md:rounded-[30px] shadow-inner shadow-indigo-300/60 pointer-events-none"></div>
      
      {/* Card content positioned above shadows */}
      <div className="relative z-10 flex flex-col items-center h-full">
        
        {/* Step Image Area - Using Next.js Image component */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32  flex items-center justify-center   relative overflow-hidden flex-shrink-0">
          <Image
            src={step.image}
            alt={step.title}
            width={80}
            height={80}
            className="w-full h-full object-cover  transition-transform duration-500"
          />
        </div>

        {/* Text Content - Inside the card with flex-grow to maintain spacing */}
        <div className="text-center flex flex-col flex-grow justify-center ">
          <h3 className="text-[#05011d]  md:text-xl lg:text-[22px] xl:text-[21px] 2xl:text-[22px]  font-extrabold mb-1  px-1">
            {step.title}
          </h3>
          <p className="text-[#71717a] text-xs sm:text-sm md:text-base lg:text-[17px] font-medium leading-relaxed  w-full mx-auto">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HowItWorks;