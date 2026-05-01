"use client";

import { SCHOOL_INFO } from "@/lib/constants";

const WhatsAppBubble = () => {
  return (
    <a
      href={SCHOOL_INFO.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 lg:bottom-10 right-6 z-[70] flex items-center gap-3 group`}
      aria-label="Chat on WhatsApp"
    >
      <div className={`bg-white px-4 py-2 rounded-full shadow-xl border border-green-50 text-sm font-bold text-text-muted opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 font-nunito`}>
        How can we help?
      </div>
      <div className={`w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 relative`}>
        <span className={`absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20`}></span>
        <svg
          viewBox="0 0 24 24"
          className={`w-9 h-9 text-white fill-current relative z-10`}
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.092 3.39l-.715 2.614 2.677-.702c.814.512 1.776.812 2.805.812 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.391 8.214c-.145.405-.838.74-1.157.778-.318.038-.724.053-1.168-.089-.28-.089-.636-.207-1.077-.393-1.879-.795-3.088-2.695-3.182-2.822-.094-.127-.778-1.034-.778-1.968 0-.934.488-1.392.663-1.583.175-.19.381-.239.508-.239h.365c.127 0 .239 0 .349.254.127.301.444 1.079.482 1.157.038.078.064.168.013.267-.051.101-.077.161-.153.251-.077.089-.161.2-.231.267-.077.077-.156.161-.067.314.089.153.397.653.848 1.054.582.518 1.072.679 1.225.753.153.075.242.063.332-.039.09-.101.383-.444.485-.595.101-.151.203-.127.332-.077.13.05.823.388.966.46.142.073.239.111.274.172.034.06.034.346-.111.751z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppBubble;
