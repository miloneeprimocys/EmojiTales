import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const features = [
  { title: "Create Stories By AI", desc: "Turn ideas into magical stories instantly with AI. Just select emojis and watch imagination come to life.", bgColor: "bg-[#E8E0FF]" },
  { title: "Categories Based Stories", desc: "Explore stories by themes like adventure, bedtime, fantasy, and more—perfect for every mood.", bgColor: "bg-[#FFE4D6]" },
  { title: "Add Multiple children", desc: "Create personalized stories by adding multiple kids to your account parents can add as many children as they like for easy access to the app.", bgColor: "bg-[#D4F8D4]" },
  { title: "Add Siblings to add in your AI story", desc: "Include siblings and friends in stories to make every tale more relatable and fun.", bgColor: "bg-[#FFE8D6]" },
  { title: "Earn Badges by completing Levels", desc: "Unlock exciting badges as you complete story levels and milestones along the way.", bgColor: "bg-[#FFF4D6]" },
  { title: "Parental Control for Settings", desc: "Manage content, screen time, and preferences to create a safe storytelling experience.", bgColor: "bg-[#D6E8FF]" },
  { title: "Available in Multi-language", desc: "Enjoy stories in multiple languages and make storytelling accessible for everyone.", bgColor: "bg-[#D8F5D8]" },
  { title: "Play Streaks by creating stories daily", desc: "Stay consistent, build streaks, and earn rewards by creating stories every day.", bgColor: "bg-[#FFD6D6]" },
  { title: "Follow Favorite Authors", desc: "Discover and follow creators you love to get their latest stories and updates.", bgColor: "bg-[#F5D6FF]" },
  { title: "Like, Comment & Save Stories", desc: "Engage with stories by liking, sharing feedback, and saving your favorites for later.", bgColor: "bg-[#FFD6E8]" },
  { title: "Earn coins by refer and earn", desc: "Invite friends and earn coins when they join and start creating stories.", bgColor: "bg-[#FFF2D6]" },
  { title: "Premium Subscription Plans", desc: "Unlock exclusive features, advanced story options, and an ad-free experience.", bgColor: "bg-[#FFF2D6]" },
  { title: "Coin Wallet System", desc: "Track, manage, and use your earned coins easily within your wallet.", bgColor: "bg-[#E8D6FF]" },
  { title: "Voice Story Narration", desc: "Listen to stories with expressive voice narration for a more immersive experience.", bgColor: "bg-[#E8D6FF]" },
  { title: "Smart Push Notifications", desc: "Get timely updates on new stories, rewards, and activity you care about.", bgColor: "bg-[#FFF2D6]" },
  { title: "User Profile Management", desc: "Easily manage user profiles, preferences, and settings in one place.", bgColor: "bg-[#D6E8FF]" },
  { title: "XP Rewards & Gamification", desc: "Earn XP points, level up, and enjoy gamified storytelling adventures.", bgColor: "bg-[#D8F5D8]" },
];

const Features = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation class with staggered delay based on index
  const getCardAnimationClass = (index: number) => `
    transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
  `.trim();

  // Title animation class
  const titleAnimationClass = `
    transition-all duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `.trim();

  return (
    <section id="features" ref={sectionRef} className="relative -mt-40 w-full  py-40 px-4 md:px-10 bg-gradient-to-b from-white via-purple-50 to-purple-100 overflow-hidden z-10">
      {/* Shadow effect from hero image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-white via-purple-100 to-transparent blur-3xl -z-10"></div>
      <Image src="/RightB.svg" width={256} height={256} className="absolute bottom-0 right-0 w-64 xl:w-[500px] h-auto" alt="" />

      {/* Scattered Decorative Elements */}
   {/* Smiles */}
      <Image src="/smileH.svg" width={64} height={64} className="absolute top-40 right-[10%] w-16 h-auto animate-float" alt="" />
      <Image src="/smileH.svg" width={48} height={48} className="absolute bottom-[10%] left-[5%] w-12 h-auto animate-float [animation-delay:1s]" alt="" />
      <Image src="/smileH.svg" width={48} height={48} className="absolute top-[45%] left-[8%] w-12 h-auto animate-float [animation-delay:2s] " alt="" />
      <Image src="/smileH.svg" width={40} height={40} className="absolute bottom-[10%] right-[20%] w-10 h-auto animate-pulse [animation-duration:3.5s]" alt="" />

      {/* Yellow Stars */}
      <Image src="/YellowStar.svg" width={32} height={32} className="absolute top-[15%] left-[5%] w-10 h-auto animate-star-spin" alt="" />
      <Image src="/YellowStar.svg" width={56} height={56} className="absolute top-[5%] right-[25%] opacity-80 w-16 h-auto animate-star-spin [animation-duration:5s]" alt="" />
      <Image src="/YellowStar.svg" width={36} height={36} className="absolute bottom-[20%] right-[10%] w-12 h-auto animate-star-spin [animation-duration:2s]" alt="" />
      <Image src="/YellowStar.svg" width={40} height={40} className="absolute top-[50%] left-[2%] w-14 h-auto animate-star-spin opacity-70" alt="" />
      {/* Additional Yellow Stars */}
       <Image src="/YellowStar.svg" width={28} height={28} className="absolute top-[8%] right-[18%] w-10 h-auto animate-star-spin [animation-delay:1s]" alt="" />
      <Image src="/YellowStar.svg" width={44} height={44} className="absolute bottom-[45%] right-[3%] w-16 h-auto animate-star-spin [animation-duration:4s] opacity-90" alt="" />
      <Image src="/YellowStar.svg" width={36} height={36} className="absolute top-[30%] left-[20%] w-18 h-auto animate-star-spin [animation-delay:2s]" alt="" />
<Image src="/YellowStar.svg" width={40} height={40} className="absolute top-[4%] sm:top-[2%] right-[85%] sm:right-[25%] w-14 h-auto animate-star-spin [animation-duration:3s]" alt="" />
    
      {/* Pink Stars */}
      <Image src="/PinkStar.svg" width={56} height={56} className="absolute top-[60%] right-[5%] w-14 h-auto animate-star-spin [animation-direction:reverse]" alt="" />
      <Image src="/PinkStar.svg" width={64} height={64} className="absolute top-[25%] left-[6%] w-16 h-auto animate-star-spin [animation-delay:0.5s]" alt="" />
      <Image src="/PinkStar.svg" width={44} height={44} className="absolute bottom-[5%] right-[30%] w-11 h-auto animate-star-spin [animation-duration:4s]" alt="" />
      {/* Additional Pink Stars */}
      <Image src="/PinkStar.svg" width={40} height={40} className="absolute top-[2%] right-[45%] sm:right-[25%] w-10 h-auto animate-star-spin [animation-duration:3s]" alt="" />
      <Image src="/PinkStar.svg" width={32} height={32} className="absolute top-[18%] left-[25%] w-8 h-auto animate-star-spin [animation-duration:5s] opacity-85" alt="" />
      <Image src="/PinkStar.svg" width={48} height={48} className="absolute bottom-[50%] right-[10%] w-12 h-auto animate-star-spin [animation-delay:0.8s]" alt="" />

      {/* Purple Dots */}
      <Image src="/PurpleDot.svg" width={40} height={40} className="absolute top-[2%] sm:top-[4%] right-[65%] sm:right-[25%] w-6 h-auto animate-pulse [animation-duration:3s]" alt="" />
      <Image src="/PurpleDot.svg" width={40} height={40} className="absolute top-1/3 left-[10%] w-10 h-auto animate-pulse" alt="" />
      <Image src="/PurpleDot.svg" width={20} height={20} className="absolute top-[10%] right-[45%] w-5 h-auto opacity-70" alt="" />
      <Image src="/PurpleDot.svg" width={56} height={56} className="absolute bottom-[30%] left-[8%] w-14 h-auto animate-float opacity-80" alt="" />
      {/* Additional Purple Dots */}
       <Image src="/PurpleDot.svg" width={32} height={32} className="absolute top-[20%] right-[2%] w-8 h-auto animate-float opacity-90" alt="" />
      <Image src="/PurpleDot.svg" width={32} height={32} className="absolute bottom-[15%] right-[20%] w-8 h-auto animate-pulse [animation-delay:1s]" alt="" />
      <Image src="/PurpleDot.svg" width={20} height={20} className="absolute top-[55%] left-[3%] w-5 h-auto animate-float opacity-75" alt="" />
      <Image src="/PurpleDot.svg" width={24} height={24} className="absolute top-[75%] right-[40%] w-6 h-auto animate-pulse [animation-duration:3s]" alt="" />

      {/* Yellow Dots */}
      <Image src="/YellowDot.svg" width={32} height={32} className="absolute bottom-10 left-1/2 w-8 h-auto animate-pulse" alt="" />
      <Image src="/YellowDot.svg" width={24} height={24} className="absolute top-[35%] right-[8%] w-6 h-auto opacity-60" alt="" />
      <Image src="/YellowDot.svg" width={24} height={24} className="absolute bottom-[20%] left-[20%] w-6 h-auto animate-float [animation-delay:1.5s]" alt="" />
      {/* Additional Yellow Dots */}
       <Image src="/YellowDot.svg" width={20} height={20} className="absolute top-[60%] left-[25%] w-5 h-auto animate-float opacity-70" alt="" />
      <div className="relative z-10 max-w-7xl mx-auto pt-0sm:pt-6 lg:pt-10">
        {/* Header */}
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 md:mb-18 mt-6 lg:mt-0 lg:mb-24 text-[#1E1E1E] ${titleAnimationClass}`}>
          Emotales <span className="text-[#6366F1]">Features</span>
          <span className="inline-block ml-2 sm:ml-4 animate-pulse text-2xl sm:text-3xl md:text-4xl">✨</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 sm:gap-y-20">
          {features.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white z-40 border-[1.5px] border-gray-100 rounded-[20px] p-6 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-gray-200 transition-all duration-300 text-center group h-[260px]  flex flex-col ${getCardAnimationClass(index)}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Feature Icon - Positioned on the top border line with circular background */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                {/* Circular background - different color per icon */}
                <div className={`absolute inset-0 rounded-full ${item.bgColor} border-2 border-white shadow-sm`}></div>
                {/* Icon - smaller size */}
                <Image
                  src={`/f${index + 1}.svg`}
                  alt=""
                  width={64}
                  height={64}
                  className="relative z-10 w-12 h-12 sm:w-[61px] sm:h-[61px] object-contain"
                />
                
                  {/* Specific Rocket Logic for the "Add Multiple Children" card (Index 2) */}
                {index === 2 && (
                  <div className="absolute -right-16 sm:-right-20 md:-right-24 lg:-right-28 xl:-right-32 2xl:-right-60 top-1/2 -translate-y-1/2 z-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 pointer-events-none">
                    <Image 
                      src="/MovingRocket.svg" 
                      width={112}
                      height={112}
                      className="w-full h-full object-contain animate-rocket-launch" 
                      alt="rocket" 
                    />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-center ">
                <h3 className="xl:text-2xl text-lg sm:text-xl font-semibold text-[#111] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-[16px] xl:text-[18px] leading-relaxed font-medium line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;