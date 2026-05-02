"use client";

import { useState, useCallback, memo } from "react";
import { SCHOOL_INFO, PROGRAMS } from "@/lib/constants";

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

const FormField = memo(({ label, children }: FormFieldProps) => (
  <div className={`space-y-2`}>
    <label className={`text-sm font-bold text-text ml-1 font-nunito`}>{label}</label>
    {children}
  </div>
));

FormField.displayName = "FormField";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    program: "",
    phone: "",
    email: "",
    message: "",
    tourDate: ""
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  }, []);

  return (
    <section id="contact" className={`section-padding bg-bg relative overflow-hidden`}>
      <div className={`absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none`}></div>
      
      <div className={`container mx-auto relative z-10 px-4 md:px-0`}>
        <div className={`grid lg:grid-cols-2 gap-16 items-start`}>
          
          {/* Form Side */}
          <div className={`bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-primary/5 relative z-20`}>
            {isSubmitted ? (
              <div className={`text-center py-20 animate-fadeUp`}>
                <div className={`w-24 h-24 bg-accent-green text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-lg shadow-green-100 animate-bounce`}>
                  ✓
                </div>
                <h3 className={`text-3xl font-extrabold text-text mb-4 font-nunito`}>Inquiry Received!</h3>
                <p className={`text-text-muted text-lg mb-8 font-inter leading-relaxed`}>
                  Thank you for reaching out. Our admissions coordinator will call you within 24 hours to schedule your discovery tour.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className={`text-primary font-extrabold hover:underline font-nunito flex items-center gap-2 mx-auto relative z-20`}
                >
                  ← Send another inquiry
                </button>
              </div>
            ) : (
              <>
                <div className={`mb-10`}>
                  <h2 className={`text-3xl md:text-4xl font-bold text-text mb-4 font-nunito`}>Enrollment Inquiry</h2>
                  <p className={`text-text-muted font-inter`}>Fill out the form below and we'll get back to you shortly.</p>
                </div>
                
                <form onSubmit={handleSubmit} className={`space-y-6 relative z-20`}>
                  <div className={`grid md:grid-cols-2 gap-6`}>
                    <FormField label="Parent's Name">
                      <input 
                        required
                        name="parentName"
                        type="text" 
                        placeholder="e.g. John Smith"
                        className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-inter relative z-20`}
                        value={formData.parentName}
                        onChange={handleInputChange}
                      />
                    </FormField>
                    <FormField label="Child's Name">
                      <input 
                        required
                        name="childName"
                        type="text" 
                        placeholder="e.g. Jane Smith"
                        className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-inter relative z-20`}
                        value={formData.childName}
                        onChange={handleInputChange}
                      />
                    </FormField>
                  </div>

                  <div className={`grid md:grid-cols-2 gap-6`}>
                    <FormField label="Child's Age">
                      <input 
                        required
                        name="childAge"
                        type="text" 
                        placeholder="e.g. 3.5 years"
                        className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-inter relative z-20`}
                        value={formData.childAge}
                        onChange={handleInputChange}
                      />
                    </FormField>
                    <FormField label="Interested Program">
                      <div className={`relative z-20`}>
                        <select 
                          required
                          name="program"
                          className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all appearance-none font-inter relative z-20`}
                          value={formData.program}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Program</option>
                          {PROGRAMS.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                        </select>
                        <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted`}>
                          <svg className={`w-5 h-5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </FormField>
                  </div>

                  <div className={`grid md:grid-cols-2 gap-6`}>
                    <FormField label="Phone Number">
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-inter relative z-20`}
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </FormField>
                    <FormField label="Preferred Tour Date">
                      <input 
                        required
                        name="tourDate"
                        type="date" 
                        className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all font-inter relative z-20`}
                        value={formData.tourDate}
                        onChange={handleInputChange}
                      />
                    </FormField>
                  </div>

                  <FormField label="Your Message">
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Tell us about your child's specific needs..."
                      className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary focus:bg-white outline-none transition-all resize-none font-inter relative z-20`}
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </FormField>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full btn-primary text-lg py-5 shadow-xl flex items-center justify-center gap-3 font-nunito transition-all relative z-20 ${isSubmitting ? "opacity-70 scale-[0.98]" : "shimmer-btn"}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className={`animate-spin h-5 w-5 text-white`} fill="none" viewBox="0 0 24 24"><circle className={`opacity-25`} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className={`opacity-75`} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Processing...
                      </>
                    ) : "Book My Discovery Tour →"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info Side */}
          <div className={`lg:pt-8`}>
            <h2 className={`text-3xl md:text-4xl font-bold text-text mb-10 font-nunito`}>Visit Our Campus</h2>
            <div className={`space-y-10 mb-12`}>
              <div className={`flex items-start gap-6 group`}>
                <div className={`w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                  <svg className={`w-7 h-7`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className={`font-bold text-xl text-text font-nunito mb-1`}>School Address</h4>
                  <p className={`text-text-muted font-inter leading-relaxed`}>{SCHOOL_INFO.address}, {SCHOOL_INFO.city}, {SCHOOL_INFO.state} - {SCHOOL_INFO.pincode}</p>
                </div>
              </div>
              <div className={`flex items-start gap-6 group`}>
                <div className={`w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                  <svg className={`w-7 h-7`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className={`font-bold text-xl text-text font-nunito mb-1`}>Call or Email</h4>
                  <p className={`text-text-muted font-inter font-medium`}>{SCHOOL_INFO.phone}</p>
                  <p className={`text-text-muted font-inter`}>{SCHOOL_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className={`rounded-[40px] overflow-hidden shadow-2xl border-8 border-white h-80 relative group`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.82722262705!2d78.39076597513412!3d17.420102983471015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972e2d933391%3A0x7d6b88b209e9f697!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Little Stars Academy Location"
                className={`grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000`}
              ></iframe>
              <div className={`absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary shadow-lg border border-primary/10 font-nunito`}>
                📍 2 mins from Jubilee Hills Checkpost
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
