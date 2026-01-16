import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ApartmentCard = ({ apartment }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="group relative bg-transparent overflow-hidden transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/apartments/${apartment.id}`}>
        
        {/* Image Frame: Added padding to create a "Gallery Frame" effect */}
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 p-0 transition-all duration-700 group-hover:p-3">
          <img 
            src={apartment.images[0]} 
            alt={apartment.name}
            className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Status Badge: Only shows on hover or for Signature collections */}
          <div className="absolute top-6 left-6 z-20">
            {apartment.price >= 200000 ? (
              <span className="bg-stone-900 text-white text-[8px] tracking-[0.4em] uppercase px-4 py-2 font-bold">
                Signature Label
              </span>
            ) : (
              <div className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <span className="bg-white/90 backdrop-blur-md text-stone-900 text-[8px] tracking-[0.4em] uppercase px-4 py-2 font-bold shadow-xl">
                  Available
                </span>
              </div>
            )}
          </div>

          {/* Rating: Subtle and high-aligned */}
          <div className="absolute top-6 right-6 z-20 flex items-center space-x-1.5 bg-black/20 backdrop-blur-md px-2.5 py-1">
            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-bold text-white">{apartment.rating}</span>
          </div>

          {/* Price Overlay: Appears from bottom on hover */}
          <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent transition-transform duration-700 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}>
            <p className="text-white text-2xl font-light tracking-tight">
              {formatPrice(apartment.price)} <span className="text-xs text-white/60 uppercase tracking-widest ml-2">/ Night</span>
            </p>
          </div>
        </div>

        {/* Info Section: Left Aligned Editorial Style */}
        <div className="pt-8 pb-4">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-2">
              <div className="flex items-center text-amber-600 space-x-2">
                <MapPin className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{apartment.location}</span>
              </div>
              <h3 className="text-2xl font-serif italic text-stone-900 leading-tight group-hover:text-stone-600 transition-colors">
                {apartment.name}
              </h3>
            </div>
            
            <div className={`p-2 transition-all duration-700 border border-stone-200 rounded-full ${isHovered ? 'bg-stone-900 text-white border-stone-900 rotate-45' : 'text-stone-400'}`}>
              <ArrowUpRight className="h-5 w-5" strokeWidth={1} />
            </div>
          </div>

          {/* Simplified Stats: Horizontal list with dots */}
          <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-6">
            <span>{apartment.bedrooms} Beds</span>
            <div className="w-1 h-1 rounded-full bg-stone-300" />
            <span>{apartment.bathrooms} Baths</span>
            <div className="w-1 h-1 rounded-full bg-stone-300" />
            <span>{apartment.guests} Guests</span>
          </div>

          {/* Bottom Reveal Line */}
          <div className="relative h-px w-full bg-stone-100 overflow-hidden">
            <div className={`absolute inset-0 bg-amber-500 transition-transform duration-1000 ease-in-out ${
              isHovered ? 'translate-x-0' : '-translate-x-full'
            }`} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ApartmentCard;