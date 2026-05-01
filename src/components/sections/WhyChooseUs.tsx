"use client";

import { useEffect, useRef } from "react";
import { FEATURES } from "@/lib/constants";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = sectionRef.current?.querySelectorAll(".fade-up");
    children?.forEach((child) => observer.observe(child));

    return () => {
      children?.forEach((child) => observer.unobserve(child));
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className={`section-padding bg-white`} ref={sectionRef}>
      <div className={`container mx-auto`}>
        <div className={`text-center max-w-3xl mx-auto mb-16 fade-up`}>
          <h2 className={`text-4xl md:text-5xl text-text mb-6 font-nunito font-bold`}>
            Why Parents Love Little Stars Academy
          </h2>
          <p className={`text-text-muted text-lg`}>
            We provide a nurturing environment where children can explore, learn, and grow through a carefully designed curriculum that balances play and academics.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className={`card-style group fade-up`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold text-text mb-3 font-nunito`}>
                {feature.title}
              </h3>
              <p className={`text-text-muted leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
