"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import Link from "next/link";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560420015-9a475899589d?q=80&w=1471&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1440&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1438&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562519819-016930ada31c?q=80&w=1612&auto=format&fit=crop",
];

type GalleryImageProps = {
  src: string;
  index: number;
  onSelect: (src: string) => void;
  size?: "large" | "medium" | "small";
};

const GalleryImage = memo(({ src, index, onSelect, size = "large" }: GalleryImageProps) => {
  const heightClass = size === "large" ? "h-64" : "h-48";
  
  return (
    <div 
      className={`relative ${heightClass} rounded-3xl overflow-hidden cursor-pointer group shadow-lg`}
      onClick={() => onSelect(src)}
    >
      <Image 
        src={src} 
        alt={`Gallery image ${index + 1}`} 
        fill 
        sizes="(max-width: 768px) 50vw, 25vw" 
        className={`object-cover group-hover:scale-110 transition-transform duration-700`} 
      />
      <div className={`absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none`}>
        <span className={`text-white text-3xl font-bold`}>+</span>
      </div>
    </div>
  );
});

GalleryImage.displayName = "GalleryImage";

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageSelect = useCallback((src: string) => {
    setSelectedImage(src);
  }, []);

  const carouselSlides = useMemo(() => 
    GALLERY_IMAGES.map((img, idx) => (
      <div
        key={idx}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <Image
          src={img}
          alt={`Highlight ${idx + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover`}
          priority={idx === 0}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
          <div className={`text-white transform translate-y-4 group-hover:translate-y-0 transition-transform`}>
            <p className={`text-lg font-bold font-nunito`}>Joyful Moments</p>
            <p className={`text-sm opacity-80 font-inter`}>Our students engaging in creative learning activities.</p>
          </div>
        </div>
      </div>
    )), [activeSlide]);

  return (
    <section id="gallery" className={`section-padding bg-bg`}>
      <div className={`container mx-auto px-4 md:px-0`}>
        <div className={`text-center max-w-2xl mx-auto mb-16`}>
          <h2 className={`text-4xl md:text-5xl text-text mb-6 font-nunito font-bold`}>Our School Gallery</h2>
          <p className={`text-text-muted font-inter`}>Explore the vibrant world of Little Stars Academy through our lens.</p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 items-start`}>
          {/* Auto-playing Carousel */}
          <div className={`relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] group bg-primary-light/20`}>
            {carouselSlides}
            {/* Carousel Dots */}
            <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20`}>
              {GALLERY_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className={`grid grid-cols-2 gap-4`}>
            <div className={`grid gap-4`}>
              <GalleryImage src={GALLERY_IMAGES[2]} index={2} onSelect={handleImageSelect} size="large" />
              <GalleryImage src={GALLERY_IMAGES[3]} index={3} onSelect={handleImageSelect} size="medium" />
            </div>
            <div className={`grid gap-4 mt-8`}>
              <GalleryImage src={GALLERY_IMAGES[4]} index={4} onSelect={handleImageSelect} size="medium" />
              <GalleryImage src={GALLERY_IMAGES[5]} index={5} onSelect={handleImageSelect} size="large" />
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center`}>
          <Link href="#contact" className={`btn-primary inline-flex items-center gap-3 font-nunito group relative z-20`}>
            View Full Gallery
            <svg className={`w-5 h-5 group-hover:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className={`fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fadeIn`}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className={`absolute top-8 right-8 text-white text-5xl hover:scale-110 transition-transform p-2`}
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className={`relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden`} onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Enlarged gallery photo" fill className={`object-contain`} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
