"use client";

import { useState, useEffect, useCallback } from "react";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if mouse leaves the top of the viewport and hasn't shown before
    if (e.clientY < 0 && !hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [hasShown]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fadeIn`}>
      <div className={`bg-white rounded-[40px] p-8 md:p-12 max-w-xl w-full relative shadow-2xl overflow-hidden`}>
        {/* Decorative background blobs */}
        <div className={`absolute -top-12 -right-12 w-48 h-48 bg-accent-yellow/20 rounded-full blur-3xl pointer-events-none`}></div>
        <div className={`absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none`}></div>

        <button 
          onClick={handleClose}
          className={`absolute top-6 right-6 text-text-muted hover:text-text transition-colors text-2xl p-2 z-20`}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className={`relative z-10 text-center`}>
          <div className={`text-5xl mb-6 animate-bounce`}>✨</div>
          <h2 className={`text-3xl md:text-4xl font-extrabold text-text mb-4 leading-tight font-nunito`}>
            Before you go...
          </h2>
          <p className={`text-text-muted text-lg mb-8 leading-relaxed font-inter`}>
            Don't miss out! Book a <span className={`text-primary font-bold`}>Free Discovery Tour</span> in just 30 seconds and secure your child's spot.
          </p>
          
          <form className={`space-y-4 max-w-md mx-auto`} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="tel" 
              placeholder="Your Phone Number"
              className={`w-full px-6 py-4 rounded-2xl bg-bg border-2 border-transparent focus:border-primary outline-none transition-all text-center text-lg font-inter`}
              required
            />
            <button 
              type="submit"
              className={`w-full btn-primary text-lg py-5 shadow-xl font-nunito`}
            >
              Get a Callback Now
            </button>
            <p className={`text-xs text-text-muted opacity-60 font-inter`}>
              No commitment required. We'll call you at your preferred time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
