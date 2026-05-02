"use client";

import Link from "next/link";

const VirtualTourBanner = () => {
  return (
    <section className={`py-12`}>
      <div className={`container mx-auto px-6 md:px-12`}>
        <div className={`relative rounded-[50px] overflow-hidden bg-primary p-10 md:p-20 text-center text-white shadow-2xl`}>
          {/* Animated background patterns */}
          <div className={`absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none`}>
            <div className={`absolute top-10 left-10 w-40 h-40 border-8 border-white rounded-full animate-float`}></div>
            <div className={`absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-[60px] rotate-45 animate-drift`}></div>
          </div>

          <div className={`relative z-10 max-w-3xl mx-auto`}>
            <span className={`inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 font-nunito`}>
              🎥 Experience Little Stars from Anywhere
            </span>
            <h2 className={`text-4xl md:text-6xl font-extrabold mb-8 leading-tight font-nunito`}>
              Take a Virtual Tour of Our Beautiful Campus
            </h2>
            <p className={`text-xl opacity-90 mb-10 leading-relaxed font-inter`}>
              See our bright classrooms, safe play areas, and creative spaces through our immersive 360° virtual tour experience.
            </p>
            <div className={`flex flex-wrap justify-center gap-6 relative z-20`}>
              <Link 
                href="#gallery" 
                className={`bg-white text-primary hover:bg-bg px-10 py-5 rounded-btn font-extrabold text-xl shadow-xl hover:shadow-2xl transition-all font-nunito flex items-center justify-center`}
              >
                Start Virtual Tour →
              </Link>
              <Link 
                href="#contact" 
                className={`bg-primary-light/20 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/10 px-10 py-5 rounded-btn font-bold text-xl transition-all font-nunito flex items-center justify-center`}
              >
                Schedule In-Person Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourBanner;
