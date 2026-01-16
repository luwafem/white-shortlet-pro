import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Clock, Globe, Star, ShieldCheck } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import AmenitiesSection from '../components/AmenitiesSection';
import ApartmentCard from '../components/ApartmentCard';
import apartmentsData from '../data/apartmentsData';

const HomePage = () => {
  const featuredApartments = apartmentsData.slice(0, 3);
  const premiumApartments = apartmentsData.filter(apt => apt.price >= 200000).slice(0, 2);

  const stats = [
    { value: '500+', label: 'CURATED RESIDENCES', icon: <Crown strokeWidth={1} size={18} /> },
    { value: '4.9', label: 'GUEST RATING', icon: <Star strokeWidth={1} size={18} /> },
    { value: '24/7', label: 'PERSONAL CONCIERGE', icon: <Clock strokeWidth={1} size={18} /> },
    { value: '50+', label: 'GLOBAL DESTINATIONS', icon: <Globe strokeWidth={1} size={18} /> },
  ];

  return (
    <div className="bg-[#fdfdfd] selection:bg-amber-100">
      <HeroSection />
      
      {/* 01. Featured Residences - Editorial Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
          
          {/* Header with floating Index Number */}
          <div className="relative mb-24">
            <span className="absolute -left-4 -top-8 text-[120px] font-serif italic text-stone-100 select-none z-0">01</span>
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <p className="text-[10px] tracking-[0.5em] uppercase text-amber-600 font-bold mb-6">The 2026 Collection</p>
                <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-stone-900 leading-[0.85]">
                  Curated <br />
                  <span className="italic font-serif text-stone-400">Excellence.</span>
                </h2>
              </div>
              <div className="max-w-xs border-l border-stone-200 pl-8 pb-2">
                <p className="text-stone-500 font-light leading-relaxed text-sm">
                  A handpicked selection of residences defining the new standard of West African luxury living.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Layout - Subtle Y-Offset for "Art Gallery" feel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {featuredApartments.map((apartment, idx) => (
              <div key={apartment.id} className={idx === 1 ? "md:mt-20" : ""}>
                <ApartmentCard apartment={apartment} />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Link to="/apartments" className="group flex items-center space-x-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-900">Discover More</span>
              <div className="w-12 h-px bg-stone-300 group-hover:w-24 group-hover:bg-amber-500 transition-all duration-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02. Stats Section - High Contrast Ribbon */}

      {/* 03. Premium Collection - The Dark Vault */}
      <AmenitiesSection />
      
      {/* 04. CTA Section - The Final Inquiry */}
      <section className="py-40 bg-white relative">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-block w-px h-20 bg-gradient-to-b from-transparent to-amber-500 mb-12" />
          <h2 className="text-5xl md:text-8xl font-serif italic text-stone-900 mb-10 leading-none">
            Your <span className="text-stone-300">Legacy</span> <br /> Awaits.
          </h2>
          
          <p className="text-stone-500 font-light text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
            Your journey to extraordinary living begins with a conversation. 
            Allow our concierge to craft your perfect experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="relative group overflow-hidden px-16 py-6 bg-stone-900 text-white text-[10px] tracking-[0.4em] uppercase font-bold transition-all duration-500 hover:bg-amber-600">
              <span className="relative z-10">Book Private Viewing</span>
            </button>
            <Link 
              to="/contact" 
              className="group text-stone-900 text-[10px] tracking-[0.4em] uppercase font-bold flex items-center gap-4"
            >
              Contact Concierge
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

export default HomePage;