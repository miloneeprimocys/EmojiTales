"use client";

import React, {
    useState, useEffect, useRef
} from 'react';

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

const Service = () => {
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

    return (
        <section ref={sectionRef} className="relative w-full py-16 px-4 md:py-24 bg-[#FFFBF2] overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content Side */}
                <div className={`z-10 ${animationClass('delay-0', true)}`}>
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#FEF3C7] border border-[#FDE68A]">
                        <span className="text-[#D97706] text-sm font-bold flex items-center gap-1">
                            ✦ OUR SERVICE
                        </span>
                    </div>

                    <h2 className={`text-[#1F2937] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight ${animationClass('delay-150', true)}`}>
                        In-Home <span className="text-[#F59E0B]">Care</span>
                    </h2>

                    <p className={`text-[#374151] text-lg md:text-xl font-bold mb-4 ${animationClass('delay-300', true)}`}>
                        Caring for your child in the place they feel <span className="underline decoration-2">safest</span>—home.
                    </p>

                    <p className={`text-[#6B7280] text-base md:text-lg mb-12 max-w-xl leading-relaxed ${animationClass('delay-300', true)}`}>
                        We provide attentive, reliable childcare within the comfort of your own home,
                        following routines that support your child wellbeing and development.
                    </p>

                    {/* Service Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
                        {services.map((service, index) => (
                            <div key={index} className={`flex items-start gap-2 ${animationClass(`delay-${(index + 1) * 100}`, true)}`}>
                                <div className={`flex-shrink-0 w-18 h-18 rounded-full flex items-center justify-center `}>
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-16 h-16"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-[#1F2937] font-bold text-lg mb-1">{service.title}</h4>
                                    <p className="text-[#6B7280] text-sm leading-snug">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={`group flex cursor-pointer mt-12 items-center gap-2 bg-[#ffcc4d] hover:bg-[#ffdb7d] text-black font-extrabold px-8 py-4 rounded-full transition-all active:scale-95 shadow-[0_10px_30px_rgba(255,204,77,0.3)] ${animationClass('delay-500', true)}`}>
                        Learn More
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
                {/* Right section */}
                <div className={`relative flex justify-center lg:justify-center items-center py-12 px-4 md:px-0 ${animationClass('delay-300', false, true)}`}>
                    <div className="relative w-full max-w-[480px] lg:max-w-[450px] xl:max-w-[480px] aspect-square flex items-center justify-center">

                       <img src="/serviceR.svg" alt="Mother and child reading" className="w-full h-full object-cover scale-110" />

                        {/* Decorative Elements */}
                        <div className="absolute bottom-[2%] left-[-10%] w-24 h-24 sm:w-28 sm:h-28 drop-shadow-2xl z-20 animate-float">
                            <img src="/rocket.svg" alt="" className="w-full h-full object-contain" />  </div>

                        <div className="absolute top-[5%] left-[-5%] text-[#FFCC4D] text-4xl animate-pulse">✦</div>
                        <div className="absolute bottom-[-2%] right-[15%] text-[#FFCC4D] text-3xl animate-pulse">✦</div>
                        <div className="absolute top-[10%] right-[20%] text-[#FFD1B9] text-xl animate-pulse">✦</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Service;