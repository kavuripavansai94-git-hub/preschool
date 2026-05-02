"use client";

import Image from "next/image";
import Link from "next/link";
import { SCHOOL_INFO } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section id="home" className={`relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-bg`}>
      {/* Background Floating Shapes */}
      <div className={`absolute inset-0 z-0 pointer-events-none`}>
        <div className={`absolute top-1/4 left-10 text-accent-yellow opacity-20 animate-float`}>
          <svg className={`w-16 h-16 fill-current`} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </div>
        <div className={`absolute top-1/2 left-1/4 text-primary opacity-10 animate-drift`}>
          <svg className={`w-24 h-24 fill-current`} viewBox="0 0 24 24"><path d="M17.5,15c-0.2,0-0.4,0-0.6,0.1C16.4,12.7,14,11,11.2,11c-2.4,0-4.5,1.3-5.7,3.2C4.6,14.6,4,15.7,4,17c0,2.2,1.8,4,4,4h9.5 c1.9,0,3.5-1.6,3.5-3.5S19.4,14,17.5,14z"/></svg>
        </div>
        <div className={`absolute bottom-1/4 right-1/4 text-secondary opacity-20 animate-float`} style={{ animationDelay: '1s' }}>
          <svg className={`w-12 h-12 fill-current`} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </div>
        <div className={`absolute top-1/3 right-10 text-accent-green opacity-15 animate-spin-slow`}>
          <svg className={`w-20 h-20 fill-current`} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        </div>
      </div>

      <div className={`container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10`}>
        {/* Content */}
        <div className={`animate-fadeUp`}>
          <span className={`inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full font-nunito`}>
            ✨ Enrollment Open for 2024-25
          </span>
          <h1 className={`text-5xl md:text-7xl font-extrabold text-text leading-[1.1] mb-6 font-nunito`}>
            {SCHOOL_INFO.tagline}
          </h1>
          <p className={`text-lg md:text-xl text-text-muted mb-10 max-w-lg leading-relaxed font-inter`}>
            Nurturing minds, sparking curiosity, and building lifelong friendships in a warm, safe environment for ages 2 to 6.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 relative z-20`}>
            <Link 
              href="#contact" 
              className={`btn-primary text-lg px-10 py-4 shimmer-btn font-nunito flex items-center justify-center`}
            >
              Book a Free Tour →
            </Link>
            <Link 
              href="#gallery" 
              className={`flex items-center justify-center gap-3 px-10 py-4 font-bold text-primary border-2 border-primary rounded-btn transition-all hover:bg-primary-light group font-nunito`}
            >
              <span className={`w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full group-hover:scale-110 transition-transform`}>
                <svg className={`w-4 h-4 fill-current`} viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </span>
              Watch Our Story
            </Link>
          </div>

          {/* Trust Badges */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-orange-100`}>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-accent-yellow text-xl font-bold font-nunito`}>⭐ 4.9/5</span>
              <span className={`text-xs font-semibold text-text-muted uppercase tracking-tight font-nunito`}>Parent Rating</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-primary text-xl font-bold font-nunito`}>🏆 1st</span>
              <span className={`text-xs font-semibold text-text-muted uppercase tracking-tight font-nunito`}>Curriculum Award</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-secondary text-xl font-bold font-nunito`}>✅ 100%</span>
              <span className={`text-xs font-semibold text-text-muted uppercase tracking-tight font-nunito`}>Licensed</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-accent-green text-xl font-bold font-nunito`}>👩‍🏫 20+</span>
              <span className={`text-xs font-semibold text-text-muted uppercase tracking-tight font-nunito`}>Expert Teachers</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className={`relative animate-fadeUp`} style={{ animationDelay: '0.2s' }}>
          <div className={`relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white transform rotate-2 hover:rotate-0 transition-transform duration-500`}>
            <Image 
              src="/hero-classroom.png" 
              alt="Joyful Classroom" 
              width={800} 
              height={600} 
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`w-full h-auto object-cover`}
            />
          </div>
          {/* Decorative shapes behind image */}
          <div className={`absolute -top-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full z-0 animate-float opacity-50 pointer-events-none`}></div>
          <div className={`absolute -bottom-10 -left-10 w-48 h-48 bg-secondary rounded-[40px] z-0 animate-drift opacity-30 pointer-events-none`}></div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className={`absolute bottom-0 left-0 w-full leading-[0] pointer-events-none`}>
        <svg className={`relative block w-full h-[60px]`} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,89,119.24,70.33,177.75,61.71,235.48,53.22,294.7,53.25,321.39,56.44Z" className={`fill-bg`}></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
