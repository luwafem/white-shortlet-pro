import React from 'react';
import { 
  Wifi, Shield, ChefHat, Wine, Droplets, Dumbbell, 
  Headphones, Key, Utensils, Briefcase, Car, Coffee, 
  ArrowRight, Sparkles
} from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    { icon: <Wifi />, name: 'Fiber WiFi', description: 'Dedicated bandwidth for seamless global connectivity.', exclusive: true },
    { icon: <Shield />, name: 'Elite Security', description: '24/7 personnel and biometric surveillance.', premium: true },
    { icon: <ChefHat />, name: 'Private Chef', description: 'Bespoke culinary journeys prepared in-residence.', exclusive: true },
    { icon: <Wine />, name: 'Vintage Cellar', description: 'A curated selection of the world\'s finest labels.', premium: true },
    { icon: <Droplets />, name: 'Infinity Pool', description: 'Climate-controlled water with panoramic skylines.', exclusive: true },
    { icon: <Dumbbell />, name: 'Wellness', description: 'State-of-the-art equipment and private spa suites.', premium: true },
    { icon: <Headphones />, name: 'Cinema', description: 'Dolby Atmos acoustics with plush velvet seating.', exclusive: true },
    { icon: <Key />, name: 'Valet', description: 'White-glove concierge and parking services.', premium: true },
    { icon: <Utensils />, name: 'Gourmet Kitchen', description: 'Miele appliances for the professional gourmet.', premium: true },
    { icon: <Briefcase />, name: 'Executive Hub', description: 'Quiet suites designed for high-stakes productivity.', premium: true },
    { icon: <Car />, name: 'Chauffeur', description: 'Premium Maybach airport transfers.', exclusive: true },
    { icon: <Coffee />, name: 'Roastery', description: 'Artisanal coffee prepared by certified baristas.', premium: true },
  ];

  return (
    <section className="relative py-40 bg-[#fcfcfc] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-px bg-amber-500" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-amber-600 font-bold">
                The Ecosystem
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-stone-900 leading-[0.85]">
              Unrivaled <br />
              <span className="italic font-serif text-stone-400">Standard.</span>
            </h2>
          </div>
          
          <div className="lg:max-w-sm border-l border-stone-200 pl-8">
            <p className="text-stone-500 font-light text-base leading-relaxed">
              Every detail is a testament to our commitment to absolute convenience, 
              fusing architectural beauty with white-glove service.
            </p>
          </div>
        </div>

        {/* The "Blueprint" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-stone-200">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className={`group relative p-12 border-b border-stone-100 transition-all duration-700 hover:bg-white
                ${index % 4 !== 3 ? 'xl:border-r' : ''} 
                ${index % 2 !== 1 ? 'md:border-r xl:md:border-r-0' : ''}
              `}
            >
              {/* Subtle Index Number */}
              <span className="absolute top-8 right-8 text-[10px] font-medium text-stone-200 group-hover:text-amber-200 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="mb-10 inline-flex items-center justify-center text-stone-900 group-hover:text-amber-600 group-hover:scale-110 transition-all duration-500 transform-gpu">
                {React.cloneElement(amenity.icon, { strokeWidth: 1, size: 36 })}
              </div>
              
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-stone-900 mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {amenity.name}
              </h3>
              
              <p className="text-stone-400 text-xs font-light leading-relaxed mb-8 max-w-[240px]">
                {amenity.description}
              </p>

              <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-amber-600">Inquiry Required</span>
                <ArrowRight size={12} className="text-amber-600" />
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-stone-900 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Modernized Footer */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center space-x-12">
            <div className="group cursor-default">
              <p className="text-[9px] tracking-[0.4em] text-stone-400 uppercase mb-2">Portfolio</p>
              <p className="text-sm font-serif italic text-stone-900 group-hover:text-amber-600 transition-colors">Global Network</p>
            </div>
            <div className="w-px h-10 bg-stone-200 hidden md:block" />
            <div className="group cursor-default">
              <p className="text-[9px] tracking-[0.4em] text-stone-400 uppercase mb-2">Support</p>
              <p className="text-sm font-serif italic text-stone-900 group-hover:text-amber-600 transition-colors">24/7 Concierge</p>
            </div>
          </div>

          <button className="relative group overflow-hidden border border-stone-900 px-10 py-5 transition-all duration-500 hover:bg-stone-900">
            <span className="relative z-10 text-[10px] font-bold tracking-[0.4em] uppercase text-stone-900 group-hover:text-white">
              Request Full Inventory
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;