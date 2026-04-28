"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const IdealService = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Track which card was clicked to re-trigger animation
  const [triggerCount, setTriggerCount] = useState<Record<number, number>>({});
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
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const handleCardClick = (id: number) => {
    setTriggerCount(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

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
    { id: 1, title: "Families who prefer care in their own home", icon: "/Ideal1.svg", bgColor: "bg-[#FDF2FF]", iconBg: "bg-[#E9D5FF]", starColor: "text-purple-400" },
    { id: 2, title: "Parents with busy or changing schedules", icon: "/Ideal2.svg", bgColor: "bg-[#FFF7ED]", iconBg: "bg-[#FED7AA]", starColor: "text-orange-400" },
    { id: 3, title: "Children who benefit from routine and familiarity", icon: "/Ideal3.svg", bgColor: "bg-[#F0FDF4]", iconBg: "bg-[#BBF7D0]", starColor: "text-green-400" },
    { id: 4, title: "Families seeking calm, one-to-one care", icon: "/Ideal4.svg", bgColor: "bg-[#F0F9FF]", iconBg: "bg-[#BAE6FD]", starColor: "text-blue-400" },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white relative overflow-hidden">
      <div className={`text-center mb-12 relative max-w-fit mx-auto ${animationClass(-1)}`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
          Who This Service Is <span className="text-[#F97316]">Ideal For</span>
        </h2>
        <div className="absolute -top-4 -right-8 text-[#FFD1B9] text-2xl animate-pulse">✦</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id)}
            className={`group cursor-pointer relative overflow-hidden ${service.bgColor} rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl  border border-white/60 ${animationClass(index)}`}
          >
            {/* Stars Container - uses triggerCount in key to restart animation on click */}
            <div className="stars-container" key={`${service.id}-${triggerCount[service.id] || 0}`}>
              {isVisible && [1, 2, 3, 4, 5, 6, 7, 8].map((star) => {
                const randomLeft = Math.floor(Math.random() * 90) + 5; 
                const randomDelay = (Math.random() * 0.8).toFixed(2); // Shorter window for punchier click effect
                
                return (
                  <div
                    key={star}
                    className={`star-fall ${service.starColor}`}
                    style={{
                      left: `${randomLeft}%`,
                      animationDelay: `${randomDelay}s`
                    }}
                  >
                    ✦
                  </div>
                );
              })}
            </div>

            <div className={`relative z-10 ${service.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm`}>
              <Image
                src={service.icon}
                alt={`Service icon ${service.id}`}
                width={32}
                height={32}
                className="w-8 h-8 object-contain group-hover:rotate-12 transition-transform duration-300" 
              />
            </div>

            <p className="relative z-10 text-[#334155] text-[16px] font-bold leading-snug px-2">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdealService;