"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';

const services = [
    {
        title: "Personalized Care",
        description: "Care plans tailored to your child's unique needs.",
        icon: "/service1.svg",
    },
    {
        title: "Routine & Familiarity",
        description: "Maintaining routines for comfort and stability.",
        icon: "/service2.svg",
    },
    {
        title: "Safe Environment",
        description: "Secure, hygienic & child-friendly surroundings.",
        icon: "/service3.svg",
    },
    {
        title: "Trust & Reliability",
        description: "Experienced caregivers you can count on.",
        icon: "/service4.svg",
    },
];

// Predefined positions for dots to avoid Math.random() during render
const dotPositions = [
    { top: 15, left: 8 }, { top: 25, left: 15 }, { top: 35, left: 22 }, { top: 45, left: 30 },
    { top: 55, left: 12 }, { top: 65, left: 18 }, { top: 75, left: 25 }, { top: 85, left: 35 },
    { top: 10, left: 45 }, { top: 20, left: 55 }, { top: 30, left: 65 }, { top: 40, left: 75 },
    { top: 50, left: 85 }, { top: 60, left: 48 }, { top: 70, left: 58 }, { top: 80, left: 68 },
    { top: 12, left: 78 }, { top: 28, left: 88 }, { top: 48, left: 95 }, { top: 72, left: 42 },
    { top: 88, left: 52 }, { top: 22, left: 35 }, { top: 38, left: 48 }, { top: 58, left: 62 }
];

const Service = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

    // Animation utility: straight slide from left on desktop, from bottom on mobile
    const animationClass = (delay: string, isLeft: boolean = false, isRight: boolean = false) => `
    transition-all duration-1000 ease-out 
    ${isVisible
            ? 'opacity-100 translate-x-0 translate-y-0'
            : isLeft
                ? 'opacity-0 -translate-x-12 translate-y-0'
                : isRight
                    ? 'opacity-0 translate-x-12 translate-y-0'
                    : 'opacity-0 translate-y-10'
        } 
    ${delay}
  `;
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);

    return (
<section id="service"
  ref={sectionRef}
  className="section-cut -mb-6 relative w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] xl:w-[calc(100%-4rem)] mx-auto pt-16 pb-28 px-4 md:pt-24 md:pb-36 bg-[#faf2e0] overflow-hidden rounded-t-[50px]"
>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Circles - Using opacity only to avoid overflow */}
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#FEF3C7] rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[#FDE68A] rounded-full blur-3xl opacity-20 animate-pulse-slower"></div>
                <div className="absolute top-[40%] right-[15%] w-48 h-48 bg-[#F59E0B] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
                
                

              {/* Animated Stars - Circular motion around their position */}
<div className="absolute top-[15%] right-[8%] text-[#F59E0B] text-4xl animate-star-circle">⭐</div>
<div className="absolute bottom-[25%] left-[3%] text-[#FFCC4D] text-2xl animate-float">✨</div>
<div className="absolute top-[60%] right-[12%] text-[#D97706] text-xl animate-star-circle"><Image src="/PinkStar.svg" alt="" width={40} height={40} /></div>
<div className="absolute bottom-[10%] right-[20%] text-[#FDE68A] text-2xl animate-star-circle">🌟</div>
                {/* Floating Hearts - Using color/opacity changes only */}
                <div className="absolute top-[30%] left-[8%] text-[#F59E0B] text-2xl animate-star-circle"><Image src="/YellowStar.svg" alt="" width={40} height={40} /></div>
                <div className="absolute bottom-[40%] right-[6%] text-[#FFCC4D] text-xl animate-float-safe-slow">💛</div>
                
               
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content Side */}
                <div className={`z-10 ${animationClass('delay-0', true)}`}>
                    <div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-[#FEF3C7] border border-[#FDE68A] transition-transform duration-300">
                        <span className="text-[#D97706] text-sm font-bold flex items-center gap-1">
                            <span className="animate-pulse">✦</span> OUR SERVICE
                        </span>
                    </div>

                    <h2 className={`text-[#1F2937] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${animationClass('delay-150', true)}`}>
                        In-Home <span className="text-[#F59E0B] relative inline-block">
                            Care
                           
                        </span>
                    </h2>

                    <p className={`text-[#374151] text-lg md:text-xl font-bold mb-4 ${animationClass('delay-300', true)}`}>
                        Caring for your child in the place they feel <span className="underline decoration-2 decoration-[#F59E0B]">safest</span>—home.
                    </p>

                    <p className={`text-[#6B7280] text-base md:text-lg mb-12 max-w-xl leading-relaxed ${animationClass('delay-300', true)}`}>
                        We provide attentive, reliable childcare within the comfort of your own home,
                        following routines that support your child wellbeing and development.
                    </p>

                    {/* Service Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className={`flex cursor-pointer items-start gap-2 transition-all duration-500 ${animationClass(`delay-${(index + 1) * 100}`, true)}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    transform: hoveredIndex === index ? 'translateX(0px)' : 'translateX(0)',
                                    transition: 'transform 0.3s ease-out'
                                }}
                            >
                                <div className={`flex-shrink-0 w-18 h-18 rounded-full flex items-center justify-center transition-all duration-500 ${
                                    hoveredIndex === index ? 'scale-110 rotate-6' : ''
                                }`}>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[#1F2937] font-bold text-lg mb-1 transition-all duration-300">
                                        {service.title}
                                    </h4>
                                    <p className="text-[#6B7280] text-sm leading-snug transition-all duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={`btn-shine group flex cursor-pointer mt-12 items-center gap-2 bg-[#FFD12D] text-black font-extrabold px-8 py-4 rounded-full transition-all active:scale-95 shadow-lg shadow-[#FFD12D]/20 hover:shadow-[#FFD12D]/30 hover:scale-105 ${animationClass('delay-500', true)}`}>
                        Learn More
                        <HiArrowRight className="text-xl transition-all duration-300 -rotate-45 group-hover:rotate-0 group-hover:translateX(5px)" />
                    </button>
                </div>

                {/* Right section */}
                <div className={`relative flex justify-center lg:justify-center items-center py-12 px-4 md:px-0 ${animationClass('delay-300', false, true)}`}>
                    <div className="relative w-full max-w-[480px] lg:max-w-[450px] xl:max-w-[480px] aspect-square flex items-center justify-center">
                        {/* Pulsing Background Ring - Using scale that's contained */}
                        <div className="absolute inset-0 rounded-full bg-[#FEF3C7] opacity-20 animate-ping-safe"></div>
                        <div className="absolute inset-2 rounded-full bg-[#FDE68A] opacity-10 animate-pulse-slow"></div>
                        
                        <Image 
                            src="/serviceR.svg" 
                            alt="Mother and child reading" 
                            width={500}
                            height={500}
                            className="w-full h-full object-cover scale-110 relative z-10  transition-transform duration-500" 
                        />

                        {/* Decorative Elements with Safe Animations */}
                        <div className="absolute bottom-[2%] left-[-10%] w-24 h-24 sm:w-28 sm:h-28 drop-shadow-2xl z-20 animate-float-safe">
                            <Image src="/rocket.svg" alt="" width={112} height={112} className="w-full h-full object-contain  transition-transform" />
                        </div>

                        <div className="absolute top-[5%] left-[-5%] text-[#FFCC4D] text-5xl animate-bounce-safe">✦</div>
                        <div className="absolute bottom-[-2%] right-[15%] text-[#ecbb3d] text-4xl animate-pulse-slow">✦</div>
                        <div className="absolute top-[10%] right-[20%] text-[#b44e16] text-4xl animate-star-pulse">✦</div>
                        
                       
                        
                        {/* Sparkle Effect - Using opacity only */}
                        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-[#FFD12D] rounded-full animate-ping-safe"></div>
                        <div className="absolute bottom-[30%] right-[25%] w-1.5 h-1.5 bg-[#F59E0B] rounded-full animate-ping-safe" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-[#D97706] rounded-full animate-pulse"></div>
                    </div>
                </div>

            </div>

        
        </section>
    );
};

export default Service;