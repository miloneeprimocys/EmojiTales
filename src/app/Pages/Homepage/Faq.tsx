"use client";

import React, { useState, useEffect, useRef } from 'react';

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
        },
        {
            id: 2,
            question: "What are your pricing plans?",
            answer: "We offer flexible pricing plans to suit different needs. Our basic plan starts at $25/hour, with premium options available for specialized care. Contact us for a customized quote based on your specific requirements.",
            bgColor: "bg-[#FFF7ED]",
            iconBg: "bg-[#FED7AA]",
        },
        {
            id: 3,
            question: "Are your caregivers background checked?",
            answer: "Yes, absolutely! All our caregivers undergo comprehensive background checks, including criminal record checks, reference verification, and in-person interviews. Safety is our top priority.",
            bgColor: "bg-[#F0FDF4]",
            iconBg: "bg-[#BBF7D0]",
        },
        {
            id: 4,
            question: "Can I schedule recurring sessions?",
            answer: "Yes, you can set up recurring sessions based on your schedule. Whether you need daily care, weekly sessions, or occasional support, we can accommodate your needs with consistent caregivers.",
            bgColor: "bg-[#F0F9FF]",
            iconBg: "bg-[#BAE6FD]",
        },
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section ref={sectionRef} className="py-20 px-4 bg-white relative overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading with Decorative Star */}
                <div className={`text-center mb-16 relative max-w-fit mx-auto ${animationClass(-1)}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
                        Frequently Asked <span className="text-[#F97316]">Questions</span>
                    </h2>
                    {/* Decorative Sparkle/Star */}
                    <div className="absolute -top-4 -right-10 text-[#FFD1B9] text-3xl">✦</div>
                </div>

                {/* Content Grid - items-start ensures the image stays put when accordion expands */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

                    {/* Left Side - FAQ Image (Hidden on md and smaller) */}
                    <div className={`lg:col-span-5 justify-center items-start hidden lg:flex ${animationClass(0)}`}>
                        <div className="flex items-center justify-center min-h-[400px]">
                            <img
                                src="/faq.svg"
                                alt="FAQ Illustration"
                                className="w-full max-w-[450px] h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side - Accordion (Full width on smaller screens) */}
                    <div className={`lg:col-span-7 lg:space-y-6 xl:space-y-6 space-y-4 ${animationClass(1)}`}>
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={`${faq.bgColor} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-white/60 lg:rounded-2xl xl:rounded-3xl`}
                            >
                                {/* Question Header - Increased padding for spacious feel */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-8 py-4 lg:px-6 lg:py-4 xl:px-8  flex items-center justify-between text-left transition-colors cursor-pointer group"
                                >
                                    <div className="flex items-center gap-5 lg:gap-3 xl:gap-4">
                                        <div className={`${faq.iconBg} w-12 h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                            <span className="text-[#334155] font-bold text-base lg:text-sm xl:text-base">{faq.id}</span>
                                        </div>
                                        <h3 className="text-[#334155] font-semibold text-lg md:text-xl lg:text-base xl:text-lg leading-snug">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    {/* Chevron Icon */}
                                    <svg
                                        className={`w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#334155] transition-transform duration-500 cursor-pointer ${activeIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Answer Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-8 pb-8 pt-0 ml-16 lg:px-6 lg:pb-6 lg:ml-12 xl:px-8 xl:pb-8 xl:ml-16">
                                        <p className="text-[#64748b] text-base md:text-lg lg:text-sm xl:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;