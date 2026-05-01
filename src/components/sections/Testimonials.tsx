"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = memo(({ testimonial }: TestimonialCardProps) => (
  <div className={`w-full flex-shrink-0 px-4`}>
    <div className={`bg-primary-light/50 p-8 md:p-16 rounded-[40px] flex flex-col items-center text-center shadow-sm border border-white/50 backdrop-blur-sm`}>
      <div className={`w-20 h-20 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg font-nunito transform hover:rotate-6 transition-transform`}>
        {testimonial.initials}
      </div>
      <div className={`flex text-accent-yellow text-xl mb-6`}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < testimonial.rating ? "opacity-100" : "opacity-30"}>★</span>
        ))}
      </div>
      <blockquote className={`text-xl md:text-2xl italic text-text font-medium mb-8 max-w-3xl leading-relaxed font-inter`}>
        "{testimonial.review}"
      </blockquote>
      <div>
        <h4 className={`text-lg font-bold text-text font-nunito`}>{testimonial.name}</h4>
        <p className={`text-primary font-semibold text-sm uppercase tracking-wider font-nunito mt-1`}>{testimonial.childInfo}</p>
      </div>
    </div>
  </div>
));

TestimonialCard.displayName = "TestimonialCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section id="testimonials" className={`section-padding bg-white relative overflow-hidden`}>
      {/* Decorative Quote Mark */}
      <div className={`absolute top-20 left-10 text-primary/5 -rotate-12 pointer-events-none hidden lg:block`}>
        <svg className={`w-64 h-64 fill-current`} viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56888 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56888 8 8.0166 8H5.0166C3.91203 8 3.0166 7.10457 3.0166 6V3L10.0166 3V15C10.0166 18.3137 7.3303 21 4.0166 21H3.0166Z" /></svg>
      </div>

      <div className={`container mx-auto px-4 md:px-0`}>
        <div className={`flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left`}>
          <div className={`max-w-2xl`}>
            <h2 className={`text-4xl md:text-5xl text-text mb-6 font-nunito font-bold`}>What Parents Are Saying 💬</h2>
            <p className={`text-text-muted text-lg font-inter`}>Read heartfelt stories from our wonderful community of parents and see why Little Stars is the preferred choice.</p>
          </div>
          
          <div className={`bg-bg p-5 rounded-3xl flex items-center gap-4 shadow-sm border border-primary/10`}>
            <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm`}>
              <svg className={`w-7 h-7`} viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </div>
            <div>
              <div className={`flex text-accent-yellow text-sm gap-0.5 mb-0.5`}>{"★".repeat(5)}</div>
              <p className={`text-[10px] font-bold uppercase tracking-widest text-text font-nunito`}>4.9/5 Average Rating</p>
            </div>
          </div>
        </div>

        <div 
          className={`relative group max-w-5xl mx-auto`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`overflow-hidden rounded-[40px]`}>
            <div 
              className={`flex transition-transform duration-700`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, idx) => (
                <TestimonialCard key={idx} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex z-20`}
            aria-label="Previous testimonial"
          >
            <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={next}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex z-20`}
            aria-label="Next testimonial"
          >
            <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className={`flex justify-center gap-3 mt-12`}>
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-10 bg-primary shadow-sm" : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
