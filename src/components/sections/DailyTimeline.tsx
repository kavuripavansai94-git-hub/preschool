"use client";

import { TIMELINE } from "@/lib/constants";

const DailyTimeline = () => {
  return (
    <section className={`section-padding bg-white overflow-hidden`}>
      <div className={`container mx-auto`}>
        <div className={`text-center max-w-2xl mx-auto mb-16`}>
          <h2 className={`text-4xl md:text-5xl text-text mb-6 font-nunito font-bold`}>A Day in the Life</h2>
          <p className={`text-text-muted font-inter`}>Take a peek at the joyful routines and engaging activities that fill our students' days at Little Stars.</p>
        </div>

        {/* Timeline Container */}
        <div className={`relative`}>
          {/* Horizontal Line (Desktop) */}
          <div className={`hidden lg:block absolute top-[52px] left-0 w-full h-1 bg-primary-light z-0`}></div>

          {/* Scrollable Area */}
          <div className={`flex flex-col lg:flex-row lg:overflow-x-auto lg:pb-12 gap-8 lg:gap-0 no-scrollbar relative z-10`}>
            {TIMELINE.map((item, index) => (
              <div 
                key={index} 
                className={`flex lg:flex-col items-center lg:items-start lg:min-w-[200px] flex-1 group`}
              >
                {/* Icon & Connector */}
                <div className={`relative flex items-center justify-center`}>
                  <div 
                    className={`w-24 h-24 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 z-10 ${index === 2 ? 'pulse-ring' : ''}`}
                    style={{ backgroundColor: item.color, color: 'white' }}
                  >
                    {item.icon}
                  </div>
                  
                  {/* Vertical Line (Mobile) */}
                  {index !== TIMELINE.length - 1 && (
                    <div className={`lg:hidden absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-primary-light`}></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-6 lg:ml-0 lg:mt-8 flex-1`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-light text-primary mb-2 font-nunito`}>
                    {item.time}
                  </span>
                  <h4 className={`text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors font-nunito`}>
                    {item.title}
                  </h4>
                  <p className={`text-text-muted text-sm leading-relaxed max-w-xs font-inter`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator (Mobile) */}
        <div className={`lg:hidden mt-8 flex justify-center gap-2`}>
          <div className={`w-8 h-1 bg-primary rounded-full`}></div>
          <div className={`w-2 h-1 bg-primary-light rounded-full`}></div>
          <div className={`w-2 h-1 bg-primary-light rounded-full`}></div>
        </div>
      </div>
    </section>
  );
};

export default DailyTimeline;
