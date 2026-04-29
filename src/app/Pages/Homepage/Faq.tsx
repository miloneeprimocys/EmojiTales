"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Faq = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
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

    // Animation utility: slide up from bottom with staggered delays
    const getDelayClass = (index: number) => {
        const delays = ['delay-[0ms]', 'delay-[150ms]', 'delay-[300ms]', 'delay-[450ms]'];
        return delays[index] || 'delay-[0ms]';
    };

    const animationClass = (index: number) => `
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
    ${getDelayClass(index)}
  `;

    const faqs = [
        {
            id: 1,
            question: "How do I get started with your service?",
            answer: "Getting started is easy! Simply sign up on our platform, create your profile, and browse through our available caregivers. You can book a trial session to see if it's the right fit for your family.",
            bgColor: "bg-[#FDF2FF]",
            iconBg: "bg-[#E9D5FF]",
            sticker: "1",
        },
        {
            id: 2,
            question: "What are your pricing plans?",
            answer: "We offer flexible pricing plans to suit different needs. Our basic plan starts at $25/hour, with premium options available for specialized care. Contact us for a customized quote based on your specific requirements.",
            bgColor: "bg-[#FFF7ED]",
            iconBg: "bg-[#FED7AA]",
            sticker: "2",
        },
        {
            id: 3,
            question: "Are your caregivers background checked?",
            answer: "Yes, absolutely! All our caregivers undergo comprehensive background checks, including criminal record checks, reference verification, and in-person interviews. Safety is our top priority.",
            bgColor: "bg-[#F0FDF4]",
            iconBg: "bg-[#BBF7D0]",
            sticker: "3",
        },
        {
            id: 4,
            question: "Can I schedule recurring sessions?",
            answer: "Yes, you can set up recurring sessions based on your schedule. Whether you need daily care, weekly sessions, or occasional support, we can accommodate your needs with consistent caregivers.",
            bgColor: "bg-[#F0F9FF]",
            iconBg: "bg-[#BAE6FD]",
            sticker: "4",
        },
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF9F5] relative overflow-x-hidden">
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading with Storytelling Elements */}
                <div className={`text-center mb-16 relative max-w-fit mx-auto ${animationClass(-1)}`}>
                    <div className="relative">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] relative inline-block">
                            Frequently Asked 
                            <span className="text-[#F97316] relative inline-block mx-2">
                                Questions
                            </span>
                        </h2>
                    </div>
                    
                    {/* Decorative Sparkle/Star */}
                    <div className="absolute -top-4 -right-10 text-[#FFD1B9] text-3xl animate-pulse">✦</div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

                    {/* Left Side - Fixed Visibility Issue */}
                <div className={`lg:col-span-5 hidden lg:flex justify-center items-start self-start sticky top-20 ${animationClass(0)}`}>
  <div className="relative w-full aspect-square flex items-center justify-center">
    
    {/* SMILE (faq1) - Positioned Top-Left of the main bubble */}
    <Image
      src="/faq1.svg"
      alt="Smile"
      width={160}
      height={160}
      className="absolute top-[0%] xl:top-[20%] left-[10%] w-40 h-40 object-contain animate-float z-0"
      style={{ animationDelay: '0.5s' }}
    />

    {/* BIG QUESTION BOX (faq2) - The central sticker centerpiece */}
    <Image
      src="/faq2.svg"
      alt="Question Box"
      width={224}
      height={224}
      className="w-56 h-56 absolute top-[10%] xl:top-[20%] left-[45%] rotate-12 object-contain animate-float z-20"
      style={{ animationDelay: '0.2s' }}
    />

    {/* QUESTION MARK (faq3) - Floating Bottom-Right */}
    <Image
      src="/faq3.svg"
      alt="Question Mark"
      width={112}
      height={112}
      className="absolute bottom-[20%] xl:bottom-[15%] left-[20%] xl:left-[25%] w-28 h-28 object-contain animate-float z-20"
      style={{ animationDelay: '1s' }}
    />

    {/* SQUIGGLY LINE (faqline) - Positioned behind the bottom question mark */}
    <Image
      src="/faqline.svg"
      alt="Squiggly Line"
      width={192}
      height={192}
      className="absolute lg:bottom-[10%] xl:bottom-[18%] right-[5%] w-48 h-auto object-contain animate-pulse opacity-50 z-10 pointer-events-none"
      style={{ animationDelay: '1.5s' }}
    />

    

  </div>
</div>
                    {/* Right Side - Playful Accordion */}
                    <div className={`lg:col-span-7 space-y-4 ${animationClass(1)}`}>
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={`
                                    ${faq.bgColor} relative overflow-hidden transition-all duration-500 border border-white
                                    ${activeIndex === index ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-md hover:-translate-y-1'}
                                    rounded-[2rem]
                                `}
                                style={{ borderRadius: activeIndex === index ? '40px 10px 40px 10px' : '30px' }}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`${faq.iconBg} w-12 h-12 rounded-2xl text-black flex items-center justify-center flex-shrink-0 shadow-inner transform group-hover:rotate-12 transition-transform`}>
                                            <span className="text-xl font-bold">{faq.sticker}</span>
                                        </div>
                                        <h3 className="text-[#334155] font-semibold text-base md:text-lg leading-snug">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5 text-[#334155]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <div className={`transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-6 pb-5 pt-0 ml-8 relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-black/5 rounded-full"></div>
                                        <p className="text-[#64748b] text-sm md:text-base leading-relaxed font-normal">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Storytime footer message */}
                <div className={`text-center mt-12 ${animationClass(2)}`}>
                    <div className="inline-block bg-gradient-to-r from-[#FFF7ED] to-[#FDF2FF] rounded-full px-6 py-3 shadow-md">
                        <p className="text-[#F97316] text-sm md:text-base font-semibold">
                            🌟 Every question unlocks a magical answer! Keep exploring! 🌟
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;