"use client";

import { ADMISSIONS_STEPS } from "@/lib/constants";

const AdmissionsSteps = () => {
  return (
    <section id="admissions" className={`section-padding bg-bg relative overflow-hidden`}>
      {/* Decorative Blob */}
      <div className={`absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none`}></div>

      <div className={`container mx-auto px-6 md:px-12`}>
        <div className={`text-center max-w-2xl mx-auto mb-20`}>
          <h2 className={`text-4xl md:text-5xl font-nunito font-extrabold text-text mb-6`}>Simple Admission Process</h2>
          <p className={`text-text-muted text-lg font-inter`}>Join the Little Stars family in four easy steps. We're here to support you at every stage of the journey.</p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative`}>
          {/* Connector Line (Desktop) */}
          <div className={`hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-primary/10 -z-0`}></div>

          {ADMISSIONS_STEPS.map((step, index) => (
            <div key={index} className={`relative z-10 flex flex-col items-center text-center group`}>
              <div className={`w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center text-3xl font-extrabold text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 border-2 border-primary/5`}>
                {step.step}
              </div>
              <h3 className={`text-xl font-bold text-text mb-4 font-nunito`}>{step.title}</h3>
              <p className={`text-text-muted font-inter leading-relaxed`}>{step.description}</p>
              
              {/* Arrow (Desktop) */}
              {index !== ADMISSIONS_STEPS.length - 1 && (
                <div className={`hidden lg:block absolute top-12 -right-6 text-primary/20`}>
                  <svg className={`w-12 h-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`mt-20 text-center`}>
          <button className={`btn-primary px-12 py-5 text-xl shadow-2xl hover:shadow-primary/40 font-nunito`}>
            Start Enrollment Application →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSteps;
