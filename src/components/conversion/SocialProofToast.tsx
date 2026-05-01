"use client";

import { useState, useEffect, useCallback } from "react";

const NOTIFICATIONS = [
  "Sarah enrolled her daughter 2 hours ago",
  "Rahul booked a campus tour just now",
  "4 parents joined the waitlist today",
  "Sneha from Jubilee Hills just enrolled",
  "Only 3 seats left for Pre-KG!"
];

const SocialProofToast = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let cycleInterval: ReturnType<typeof setInterval>;
    let transitionTimeout: ReturnType<typeof setTimeout>;

    // Initial delay before first show
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Continuous cycle
    cycleInterval = setInterval(() => {
      setIsVisible(false);
      
      transitionTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 500); // Duration matches CSS transition or slightly more for safety
    }, 15000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(cycleInterval);
      if (transitionTimeout) clearTimeout(transitionTimeout);
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div 
      className={`fixed bottom-24 lg:bottom-10 left-6 z-[70] transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className={`bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-primary/10 flex items-center gap-4 max-w-xs relative`}>
        <div className={`w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-xl flex-shrink-0`}>
          ✨
        </div>
        <div>
          <p className={`text-xs font-bold text-text leading-tight font-nunito`}>
            {NOTIFICATIONS[index]}
          </p>
          <p className={`text-[10px] text-primary font-bold uppercase tracking-widest mt-1 font-nunito`}>
            Verified Activity
          </p>
        </div>
        <button 
          onClick={handleClose}
          className={`text-text-muted hover:text-text transition-colors p-1 text-lg`}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SocialProofToast;
