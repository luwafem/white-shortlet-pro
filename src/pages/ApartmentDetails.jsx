import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, Star, MapPin, Bed, Bath, Users, 
  CheckCircle, Shield, Share2, Heart, ArrowRight
} from 'lucide-react';
import apartmentsData from '../data/apartmentsData';

const ApartmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const apartment = apartmentsData.find(apt => apt.id === parseInt(id));

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-4xl font-serif italic text-stone-900 mb-6">Residence Not Found</h2>
          <button onClick={() => navigate('/apartments')} className="tracking-widest text-xs font-bold border-b-2 border-amber-600 pb-2">
            RETURN TO COLLECTION
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* 01. Minimal Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-5 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="group flex items-center space-x-3 text-stone-900">
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Back to Collection</span>
          </button>
          
          <div className="flex items-center space-x-8">
            <button className="text-stone-400 hover:text-stone-900 transition-colors flex items-center space-x-2">
              <Share2 size={16} strokeWidth={1.5} />
              <span className="text-[9px] font-bold tracking-widest uppercase hidden md:inline">Share</span>
            </button>
            <button className="text-stone-400 hover:text-amber-600 transition-colors flex items-center space-x-2">
              <Heart size={16} strokeWidth={1.5} />
              <span className="text-[9px] font-bold tracking-widest uppercase hidden md:inline">Save</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: GALLERY & NARRATIVE */}
          <div className="lg:col-span-8">
            
            {/* Main Presentation Gallery */}
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 mb-6 group">
              <img 
                src={apartment.images[selectedImage]} 
                alt={apartment.name}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute top-8 left-8">
                <span className="bg-stone-900 text-white text-[8px] tracking-[0.5em] uppercase px-5 py-2.5 font-bold">
                  Signature Label
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-4 mb-20 overflow-x-auto pb-4 scrollbar-hide">
              {apartment.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(idx)}
                  className={`relative flex-shrink-0 w-24 aspect-[4/3] transition-all duration-700 overflow-hidden ${
                    selectedImage === idx ? 'ring-1 ring-amber-500 ring-offset-4' : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="Perspective view" />
                </button>
              ))}
            </div>

            {/* Editorial Header */}
            <div className="max-w-3xl mb-20">
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center text-amber-500">
                  <Star size={12} fill="currentColor" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase ml-2">{apartment.rating} / 5.0 Rating</span>
                </div>
                <div className="h-px w-8 bg-stone-200" />
                <span className="text-[10px] text-stone-400 tracking-[0.3em] uppercase">Ref: MS-2026-0{id}</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-stone-900 leading-[0.85] mb-8">
                {apartment.name.split(' ').slice(0, -1).join(' ')} <br />
                <span className="italic font-serif text-stone-400">{apartment.name.split(' ').slice(-1)}</span>
              </h1>

              <div className="flex items-center text-stone-500 space-x-2">
                <MapPin size={14} className="text-amber-600" />
                <span className="text-sm font-light tracking-wide uppercase">{apartment.location}</span>
              </div>
            </div>

            {/* The "Blueprint" Specs */}
            <div className="grid grid-cols-3 gap-0 border-y border-stone-100 mb-20">
              {[
                { icon: <Bed size={20} strokeWidth={1} />, label: 'Master Suites', value: apartment.bedrooms },
                { icon: <Bath size={20} strokeWidth={1} />, label: 'Bathrooms', value: apartment.bathrooms },
                { icon: <Users size={20} strokeWidth={1} />, label: 'Guest Capacity', value: apartment.guests }
              ].map((spec, i) => (
                <div key={i} className={`py-12 px-6 text-center ${i !== 2 ? 'border-r border-stone-100' : ''}`}>
                  <div className="flex justify-center text-stone-300 mb-4">{spec.icon}</div>
                  <div className="text-3xl font-light text-stone-900 mb-1">{spec.value}</div>
                  <div className="text-[9px] text-stone-400 uppercase tracking-[0.3em] font-bold">{spec.label}</div>
                </div>
              ))}
            </div>

            {/* The Narrative Text */}
            <div className="max-w-2xl mb-24">
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-600 mb-8">The Experience</h3>
              <p className="text-2xl font-serif italic text-stone-800 leading-relaxed mb-8">
                {apartment.description}
              </p>
            </div>

            {/* Curated Provisions (Amenities) */}
            <div className="mb-24">
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-900">Curated Provisions</h3>
                <button 
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="text-[9px] font-bold tracking-[0.3em] text-stone-400 hover:text-amber-600 transition-colors uppercase underline underline-offset-8"
                >
                  {showAllAmenities ? 'Minimize List' : 'View Full Inventory'}
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20">
                {(showAllAmenities ? apartment.amenities : apartment.amenities.slice(0, 6)).map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-stone-100 pb-4 group">
                    <span className="text-sm font-light text-stone-600 group-hover:text-stone-900 transition-colors">{item}</span>
                    <CheckCircle size={14} className="text-stone-200 group-hover:text-amber-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: FLOATING CONCIERGE CARD */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-white border border-stone-100 p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
                <div className="mb-10 text-center border-b border-stone-50 pb-10">
                  <p className="text-[9px] tracking-[0.4em] text-stone-400 uppercase mb-4">Investment Per Night</p>
                  <div className="text-5xl font-light text-stone-900 mb-2">{formatPrice(apartment.price)}</div>
                  <p className="text-[9px] tracking-[0.2em] text-stone-400 uppercase font-medium">All-Inclusive Luxury Service</p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-2 gap-px bg-stone-100 border border-stone-100">
                    <div className="bg-white p-5">
                      <label className="block text-[8px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-2">Check In</label>
                      <input type="text" placeholder="Select Date" className="w-full text-xs font-medium focus:outline-none placeholder:text-stone-300" />
                    </div>
                    <div className="bg-white p-5">
                      <label className="block text-[8px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-2">Check Out</label>
                      <input type="text" placeholder="Select Date" className="w-full text-xs font-medium focus:outline-none placeholder:text-stone-300" />
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 border border-stone-100">
                    <label className="block text-[8px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-2">Guest Configuration</label>
                    <select className="w-full text-xs font-medium focus:outline-none bg-transparent cursor-pointer">
                       <option>2 Adults, Luxury Suite</option>
                       <option>4 Adults, Family Wing</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-stone-900 text-white py-6 text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-amber-600 transition-all duration-700 shadow-xl mb-8">
                  Check Availability
                </button>

                <div className="flex items-center justify-center space-x-6">
                  <a href="#" className="text-[9px] font-bold tracking-[0.2em] text-stone-400 hover:text-stone-900 uppercase border-b border-transparent hover:border-stone-900 transition-all pb-1">
                    Direct Inquiry
                  </a>
                  <span className="w-1 h-1 rounded-full bg-stone-200" />
                  <a href="#" className="text-[9px] font-bold tracking-[0.2em] text-stone-400 hover:text-stone-900 uppercase border-b border-transparent hover:border-stone-900 transition-all pb-1">
                    Concierge WhatsApp
                  </a>
                </div>
              </div>

              {/* The "Assurance" Banner */}
              <div className="mt-8 flex items-start space-x-5 p-6 bg-stone-900">
                <Shield size={24} className="text-amber-500 flex-shrink-0" strokeWidth={1} />
                <div>
                  <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-white mb-2">The Sojourn Guarantee</h4>
                  <p className="text-[11px] text-stone-400 font-light leading-relaxed">
                    Diplomatic-grade security, biometric privacy, and white-glove check-in included with every signature reservation.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;