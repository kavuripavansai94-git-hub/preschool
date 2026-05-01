"use client";

import { useState, useCallback, memo } from "react";
import { FAQS } from "@/lib/constants";
import { FAQ } from "@/types";

type FAQItemProps = {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
};

const FAQItem = memo(({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div 
      className={`border-2 rounded-[30px] transition-all duration-300 ${
        isOpen 
          ? "border-primary bg-primary-light/30" 
          : "border-primary-light bg-transparent hover:border-primary/30"
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 md:p-8 text-left outline-none group focus:ring-2 focus:ring-primary/20 rounded-[28px]`}
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-bold text-text pr-4 font-nunito`}>
          {faq.question}
        </span>
        <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
          isOpen ? "bg-primary text-white rotate-180" : "bg-primary-light text-primary group-hover:bg-primary/10"
        }`}>
          <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`p-6 md:p-8 pt-0 text-text-muted text-lg leading-relaxed border-t border-primary/10 font-inter`}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = "FAQItem";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className={`section-padding bg-white`}>
      <div className={`container mx-auto max-w-4xl px-4 md:px-0`}>
        <div className={`text-center mb-16`}>
          <h2 className={`text-4xl md:text-5xl text-text mb-6 font-nunito font-bold`}>Frequently Asked Questions</h2>
          <p className={`text-text-muted text-lg font-inter`}>Everything you need to know about Little Stars Academy and our commitment to your child's growth.</p>
        </div>

        <div className={`space-y-4`}>
          {FAQS.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onToggle={() => toggleFAQ(index)} 
            />
          ))}
        </div>

        <div className={`mt-16 text-center`}>
          <p className={`text-text-muted mb-4 font-inter`}>Still have questions?</p>
          <a href="#contact" className={`text-primary font-bold hover:underline font-nunito inline-flex items-center gap-2`}>
            Contact our friendly staff today 
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
