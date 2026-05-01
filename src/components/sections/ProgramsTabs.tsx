"use client";

import { useState, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import { PROGRAMS } from "@/lib/constants";
import { Program } from "@/types";

type ProgramCardProps = {
  program: Program;
  isActive: boolean;
};

const ProgramCard = memo(({ program, isActive }: ProgramCardProps) => (
  <div
    className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-in-out absolute inset-0 ${
      isActive
        ? "opacity-100 translate-x-0 pointer-events-auto z-10"
        : "opacity-0 translate-x-12 pointer-events-none z-0"
    }`}
  >
    {/* Image Side */}
    <div className={`relative group px-4 lg:px-0`}>
      <div className={`rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] relative bg-primary-light`}>
        <Image
          src={program.image}
          alt={`${program.title} classroom environment`}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className={`object-cover group-hover:scale-105 transition-transform duration-700`}
          loading={isActive ? "eager" : "lazy"}
        />
      </div>
      <div className={`absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-[40px] opacity-20 group-hover:bottom-0 group-hover:right-0 transition-all pointer-events-none hidden md:block`}></div>
    </div>

    {/* Text Side */}
    <div className={`p-4 lg:p-0`}>
      <div className={`inline-block px-4 py-1 bg-primary-light text-primary rounded-full text-sm font-bold mb-6 font-nunito`}>
        {program.ageRange}
      </div>
      <h3 className={`text-3xl md:text-4xl font-bold text-text mb-6 font-nunito`}>
        {program.title} Excellence
      </h3>
      <p className={`text-lg text-text-muted mb-8 leading-relaxed font-inter`}>
        {program.description}
      </p>
      
      <ul className={`grid sm:grid-cols-2 gap-4 mb-10`}>
        {program.features.map((feature, i) => (
          <li key={i} className={`flex items-center gap-3 font-semibold text-text font-inter`}>
            <span className={`w-6 h-6 rounded-full bg-accent-green flex items-center justify-center text-white text-xs flex-shrink-0`}>
              ✓
            </span>
            <span className={`text-sm md:text-base`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`btn-primary font-nunito group flex items-center gap-2`}>
        Learn More About {program.title}
        <span className={`group-hover:translate-x-1 transition-transform`}>→</span>
      </button>
    </div>
  </div>
));

ProgramCard.displayName = "ProgramCard";

const ProgramsTabs = () => {
  const [activeTab, setActiveTab] = useState(PROGRAMS[1].id); // Pre-KG as default

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id);
  }, []);

  const renderedPrograms = useMemo(() => 
    PROGRAMS.map((program) => (
      <ProgramCard 
        key={program.id} 
        program={program} 
        isActive={activeTab === program.id} 
      />
    )), [activeTab]);

  return (
    <section id="programs" className={`section-padding bg-bg relative overflow-hidden`}>
      <div className={`absolute top-0 right-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`}></div>
      
      <div className={`container mx-auto relative z-10`}>
        <div className={`text-center max-w-2xl mx-auto mb-12`}>
          <h2 className={`text-4xl md:text-5xl text-text mb-6 font-nunito font-bold`}>Our Learning Programs</h2>
          <p className={`text-text-muted font-inter`}>Carefully curated age-appropriate curricula designed to spark curiosity and foster holistic development.</p>
        </div>

        {/* Tab Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 relative z-20`}>
          {PROGRAMS.map((program) => (
            <button
              key={program.id}
              onClick={() => handleTabChange(program.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 relative font-nunito ${
                activeTab === program.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-text-muted hover:bg-primary-light hover:text-primary shadow-sm"
              }`}
            >
              {program.title}
              <span className={`block text-[10px] uppercase tracking-wider opacity-80 font-inter`}>
                ({program.ageRange})
              </span>
              {program.badge && (
                <span className={`absolute -top-3 -right-2 bg-accent-yellow text-text text-[10px] px-2 py-0.5 rounded-full shadow-sm animate-bounce font-bold`}>
                  {program.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`relative min-h-[600px] lg:min-h-[500px]`}>
          {renderedPrograms}
        </div>
      </div>
    </section>
  );
};

export default ProgramsTabs;
