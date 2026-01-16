import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react';

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    {
      city: "Lagos",
      area: "Ikoyi",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
      tagline: "The Waterfront Collection"
    },
    {
      city: "Abuja",
      area: "Maitama",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      tagline: "Architectural Marvels"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white selection:bg-amber-200 selection:text-black">
      
      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side: Editorial Content */}
        {/* pt-48 ensures content starts below your fixed Navbar */}
        <div className="w-full lg:w-5/12 pt-48 pb-20 px-8 lg:px-20 flex flex-col justify-between relative z-20">
          <div>
            <motion.div 
              key={`tag-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs uppercase tracking-[0.4em] text-amber-500 font-semibold">
                {slides[current].tagline}
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] tracking-tighter mb-8">
              LIVING <br />
              <span className="italic font-serif text-stone-500">Redefined.</span>
            </h1>

            <p className="max-w-sm text-stone-400 font-light leading-relaxed text-lg">
              Curating high-performance real estate for the global citizen. 
              Our residences are more than homes; they are legacy assets.
            </p>
          </div>

          {/* New Interactive Search Bar */}
          <div className="mt-12 bg-stone-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-4 group">
                <MapPin className="text-amber-500 w-5 h-5" />
                <div className="flex-1 border-b border-white/10 pb-2 group-hover:border-amber-500/50 transition-colors cursor-pointer">
                  <p className="text-[10px] uppercase text-stone-500 tracking-widest mb-1">Destination</p>
                  <p className="text-sm font-medium">Victoria Island, Lagos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <Calendar className="text-amber-500 w-5 h-5" />
                <div className="flex-1 border-b border-white/10 pb-2 group-hover:border-amber-500/50 transition-colors cursor-pointer">
                  <p className="text-[10px] uppercase text-stone-500 tracking-widest mb-1">Duration</p>
                  <p className="text-sm font-medium">Long Term Stay</p>
                </div>
              </div>

              <button className="w-full bg-white text-black py-4 rounded-xl flex items-center justify-center space-x-3 group hover:bg-amber-400 transition-all duration-500">
                <span className="text-xs uppercase font-bold tracking-widest">Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Immersive Visuals */}
        <div className="w-full lg:w-7/12 relative h-[60vh] lg:h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              animate={{ clipPath: 'inset(0 0 0 0%)' }}
              exit={{ clipPath: 'inset(0 100% 0 0%)' }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={slides[current].img} 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                alt="Property"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Location Indicator Card */}
          <motion.div 
             key={`card-${current}`}
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             className="absolute bottom-12 right-12 bg-black/60 backdrop-blur-xl p-8 border border-white/10 max-w-xs z-30"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-bold">Featured Listing</span>
              <div className="flex text-amber-500">
                <Star size={10} fill="currentColor"/>
                <Star size={10} fill="currentColor"/>
                <Star size={10} fill="currentColor"/>
              </div>
            </div>
            <h3 className="text-2xl font-light mb-1">{slides[current].area}</h3>
            <p className="text-sm text-stone-400 uppercase tracking-widest">{slides[current].city}</p>
          </motion.div>

          {/* Slide Controls */}
          <div className="absolute left-12 bottom-12 flex space-x-4 z-30">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-500 ${current === i ? 'w-12 bg-amber-500' : 'w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
        <p className="text-[9px] uppercase tracking-[1em] text-stone-600">
          Est. 2026 — Lagos — London — Dubai
        </p>
      </div>
    </div>
  );
};

export default HeroSection;