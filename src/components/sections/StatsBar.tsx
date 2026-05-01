"use client";

import { STATS } from "@/lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";

const StatsBar = () => {
  return (
    <section className={`bg-primary-light py-10`}>
      <div className={`container mx-auto px-6 md:px-12`}>
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8`}>
          {STATS.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center group`}
            >
              <div className={`text-4xl md:text-5xl font-nunito font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className={`text-text font-bold uppercase tracking-wider text-xs md:text-sm font-nunito`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
