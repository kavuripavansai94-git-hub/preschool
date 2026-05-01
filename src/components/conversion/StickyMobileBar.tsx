"use client";

import Link from "next/link";
import { SCHOOL_INFO } from "@/lib/constants";

const StickyMobileBar = () => {
  return (
    <div className={`lg:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-primary/10 grid grid-cols-2 z-[60] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]`}>
      <a 
        href={`tel:${SCHOOL_INFO.phone}`}
        className={`flex items-center justify-center gap-3 py-4 font-bold text-text border-r border-primary/5 active:bg-primary-light transition-colors font-nunito`}
      >
        <span className={`text-xl`}>📞</span>
        Call Us
      </a>
      <Link 
        href="#contact"
        className={`flex items-center justify-center gap-3 py-4 font-bold text-white bg-primary active:bg-primary/90 transition-colors font-nunito`}
      >
        <span className={`text-xl`}>📋</span>
        Enroll Now
      </Link>
    </div>
  );
};

export default StickyMobileBar;
