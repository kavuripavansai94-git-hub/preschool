"use client";

import Link from "next/link";
import { SCHOOL_INFO, NAV_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className={`bg-text text-white pt-24 pb-12 relative overflow-hidden`}>
      {/* Wave Divider (Top) */}
      <div className={`absolute top-0 left-0 w-full rotate-180 leading-[0]`}>
        <svg className={`relative block w-full h-[60px]`} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,89,119.24,70.33,177.75,61.71,235.48,53.22,294.7,53.25,321.39,56.44Z" className={`fill-bg`}></path>
        </svg>
      </div>

      <div className={`container mx-auto px-6 md:px-12`}>
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20`}>
          {/* Brand */}
          <div className={`space-y-8`}>
            <Link href="/" className={`flex items-center gap-3 group`}>
              <div className={`bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform`}>
                <svg viewBox="0 0 24 24" className={`w-6 h-6 text-white fill-current`}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <span className={`text-2xl font-nunito font-extrabold tracking-tight`}>{SCHOOL_INFO.name}</span>
            </Link>
            <p className={`text-white/60 leading-relaxed font-inter`}>
              Nurturing the next generation of global citizens through a balance of curiosity, creativity, and compassion.
            </p>
            <div className={`flex gap-4`}>
              {Object.entries(SCHOOL_INFO.socials).map(([platform, url]) => (
                <a 
                  key={platform} 
                  href={url} 
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors`}
                  aria-label={platform}
                >
                  <span className={`capitalize text-[10px] font-bold`}>{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-xl font-bold mb-8 font-nunito`}>Quick Links</h4>
            <ul className={`space-y-4`}>
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className={`text-white/60 hover:text-primary transition-colors font-inter`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-xl font-bold mb-8 font-nunito`}>Contact Us</h4>
            <ul className={`space-y-6 text-white/60 font-inter`}>
              <li className={`flex gap-4`}>
                <span className={`text-primary`}>📍</span>
                {SCHOOL_INFO.address}, {SCHOOL_INFO.city}
              </li>
              <li className={`flex gap-4`}>
                <span className={`text-primary`}>📞</span>
                {SCHOOL_INFO.phone}
              </li>
              <li className={`flex gap-4`}>
                <span className={`text-primary`}>✉️</span>
                {SCHOOL_INFO.email}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`text-xl font-bold mb-8 font-nunito`}>Stay Updated</h4>
            <p className={`text-white/60 mb-6 text-sm font-inter`}>Subscribe to our newsletter for latest updates and parenting tips.</p>
            <form className={`space-y-3`} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className={`w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-primary transition-all font-inter`}
              />
              <button className={`w-full btn-primary py-3 font-nunito`}>Subscribe Now</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-inter`}>
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.</p>
          <div className={`flex gap-8`}>
            <Link href="/privacy" className={`hover:text-white transition-colors`}>Privacy Policy</Link>
            <Link href="/terms" className={`hover:text-white transition-colors`}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
