"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { NAV_LINKS, SCHOOL_INFO } from "@/lib/constants";

interface NavItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}

const NavItem = memo(({ label, href, onClick }: NavItemProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-text font-semibold hover:text-primary transition-colors text-sm uppercase tracking-wide font-nunito relative z-20`}
  >
    {label}
  </Link>
));

NavItem.displayName = "NavItem";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    // Prevent scroll when menu is open
    if (typeof document !== "undefined") {
      document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-[80] transition-all duration-500 ease-in-out mx-auto ${
        isScrolled 
          ? "top-4 w-[95%] lg:w-[90%] bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-2.5 rounded-[24px] border border-white/40" 
          : "top-0 w-full bg-transparent py-6"
      }`}
    >
      <div className={`container mx-auto px-6 md:px-12 flex justify-between items-center relative z-[90]`}>
        {/* Logo */}
        <Link 
          href="/" 
          className={`flex items-center gap-2 group relative z-20`}
          onClick={closeMobileMenu}
        >
          <div className={`bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md`}>
            <svg
              viewBox="0 0 24 24"
              className={`w-6 h-6 text-white fill-current`}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <span className={`text-xl font-nunito font-extrabold tracking-tight text-text`}>
            {SCHOOL_INFO.name}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className={`hidden lg:flex items-center gap-10 relative z-20`}>
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
          <Link href="#contact" className={`btn-primary flex items-center gap-2 text-sm font-nunito shadow-lg hover:shadow-primary/30 active:scale-95 transition-all relative z-20`}>
            Enroll Now
            <svg className={`w-4 h-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden text-text p-2 hover:bg-primary-light rounded-xl transition-colors relative z-20`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <svg className={`w-7 h-7`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-[70] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className={`flex flex-col p-8 pt-32 gap-8 h-full bg-bg/50 overflow-y-auto`}>
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-text font-bold hover:text-primary transition-all text-2xl font-nunito flex items-center justify-between group relative z-20`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
              <span className={`opacity-0 group-hover:opacity-100 transition-opacity`}>→</span>
            </Link>
          ))}
          <div className={`mt-auto pb-12 relative z-20`}>
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className={`btn-primary w-full text-center py-5 text-xl font-nunito shadow-xl flex items-center justify-center`}
            >
              Start Admission →
            </Link>
            <div className={`mt-8 flex justify-center gap-6`}>
              {Object.entries(SCHOOL_INFO.socials).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className={`text-primary hover:scale-110 transition-transform capitalize font-bold font-nunito`}>
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
