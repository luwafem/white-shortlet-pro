import React, { useState } from 'react';
import ApartmentCard from '../components/ApartmentCard';
import apartmentsData from '../data/apartmentsData';
import { 
  Grid, List, Sliders, Search, Map, X, ChevronRight, Info
} from 'lucide-react';

const ApartmentsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(1500000); 
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const locations = [
    { value: 'all', label: 'All Portfolios', count: apartmentsData.length },
    { value: 'Ikoyi, Lagos', label: 'Old Ikoyi Estates', tier: 'Ultra-Luxury' },
    { value: 'Victoria Island, Lagos', label: 'VI Corporate Suites', tier: 'Executive' },
    { value: 'Banana Island, Lagos', label: 'Banana Island', tier: 'Private' },
    { value: 'Maitama, Abuja', label: 'Maitama District', tier: 'Diplomatic' },
  ];

  const filteredApartments = apartmentsData.filter(apartment => {
    const matchesLocation = selectedLocation === 'all' || apartment.location === selectedLocation;
    const matchesBedrooms = selectedBedrooms === 'all' || 
      (selectedBedrooms === '4+' ? apartment.bedrooms >= 4 : apartment.bedrooms === parseInt(selectedBedrooms));
    const matchesPrice = apartment.price <= priceRange;
    const matchesSearch = searchQuery === '' || 
      apartment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apartment.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLocation && matchesBedrooms && matchesPrice && matchesSearch;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumSignificantDigits: 3
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* 01. Editorial Header Section */}
      <section className="relative pt-32 pb-20 bg-white border-b border-stone-100 overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-[0.03]">
          {[...Array(6)].map((_, i) => <div key={i} className="border-r border-stone-900 h-full" />)}
        </div>

        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-3 text-[9px] font-bold tracking-[0.5em] uppercase text-amber-600 mb-8">
                <span className="w-8 h-px bg-amber-500" />
                <span>The 2026 Residential Index</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-stone-900 leading-[0.8] mb-4">
                Curated <br />
                <span className="italic font-serif text-stone-400">Sanctuaries.</span>
              </h1>
            </div>

            <div className="lg:max-w-md">
              <p className="text-stone-500 font-light text-lg leading-relaxed mb-10 border-l border-stone-100 pl-8">
                Explore our hand-selected portfolio of residences, each chosen for its architectural significance and unrivaled postcode.
              </p>
              
              {/* Refined Search */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search by landmark or estate name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-stone-200 py-4 text-sm font-light focus:outline-none focus:border-stone-900 transition-all placeholder:text-stone-300"
                />
                <Search size={18} className="absolute right-0 top-4 text-stone-300 group-focus-within:text-stone-900 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Architectural Filter Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-stone-100 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <button
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.3em] uppercase text-stone-900"
              >
                <Sliders size={14} className={isFilterExpanded ? 'text-amber-600' : ''} />
                <span>{isFilterExpanded ? 'Close Parameters' : 'Refine Search'}</span>
              </button>
              
              <div className="hidden xl:flex items-center space-x-2 text-[9px] font-bold tracking-[0.2em] uppercase text-stone-300">
                <Info size={12} />
                <span>Showing {filteredApartments.length} of {apartmentsData.length} Exclusive Listings</span>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="hidden sm:flex bg-stone-50 p-1 rounded-sm border border-stone-100">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-300'}`}
                >
                  <Grid size={14} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-300'}`}
                >
                  <List size={14} />
                </button>
              </div>
              <button className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.3em] uppercase text-stone-900 hover:text-amber-600 transition-colors">
                <Map size={14} />
                <span className="hidden md:inline">Cartographic View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Drawer */}
        <div className={`overflow-hidden transition-all duration-700 ease-in-out bg-white border-b border-stone-200 ${isFilterExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8">Postcodes</h4>
              <div className="space-y-4">
                {locations.map(loc => (
                  <button 
                    key={loc.value}
                    onClick={() => setSelectedLocation(loc.value)}
                    className="flex flex-col text-left group w-full"
                  >
                    <span className={`text-sm tracking-tight transition-colors ${selectedLocation === loc.value ? 'text-stone-900 font-medium' : 'text-stone-400 font-light group-hover:text-stone-600'}`}>
                      {loc.label}
                    </span>
                    {loc.tier && <span className="text-[8px] uppercase tracking-widest text-amber-600/60 font-bold">{loc.tier}</span>}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8">Asset Valuation</h4>
              <div className="pt-4">
                <input
                  type="range"
                  min="200000"
                  max="2500000"
                  step="50000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full accent-stone-900 h-1 bg-stone-100 appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-6">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Cap</span>
                  <span className="text-sm font-serif italic text-stone-900">{formatPrice(priceRange)} / Night</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8">Configuration</h4>
              <div className="grid grid-cols-2 gap-px bg-stone-100 border border-stone-100">
                {['1', '2', '3', '4+'].map(num => (
                  <button 
                    key={num}
                    onClick={() => setSelectedBedrooms(num)}
                    className={`py-4 bg-white text-[10px] font-bold tracking-widest uppercase transition-all ${selectedBedrooms === num ? 'bg-stone-900 text-white' : 'text-stone-400 hover:bg-stone-50'}`}
                  >
                    {num} Suites
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end pb-1">
              <button 
                onClick={() => {
                  setSelectedLocation('all');
                  setSelectedBedrooms('all');
                  setPriceRange(1500000);
                  setSearchQuery('');
                }}
                className="text-[9px] font-bold tracking-[0.3em] uppercase text-stone-400 hover:text-stone-900 mb-8 text-left transition-colors"
              >
                Clear All Parameters
              </button>
              <button 
                onClick={() => setIsFilterExpanded(false)}
                className="w-full bg-stone-900 text-white py-6 text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-amber-600 transition-all shadow-xl"
              >
                Apply Selection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 03. The Collection Grid */}
      <main className="max-w-[1800px] mx-auto px-8 lg:px-12 py-24">
        <div className={viewMode === 'grid' ? 
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24" : 
          "flex flex-col space-y-16"}>
          {filteredApartments.map(apartment => (
            <div key={apartment.id} className="group relative">
               <ApartmentCard apartment={apartment} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredApartments.length === 0 && (
          <div className="max-w-xl mx-auto text-center py-40">
            <h3 className="text-4xl font-serif italic text-stone-900 mb-6">Unmatched Search</h3>
            <p className="text-stone-500 font-light leading-relaxed mb-10">
              Our off-market portfolio may contain what you seek. Our concierge team specializes in sourcing bespoke residences that are not listed publicly.
            </p>
            <button className="flex items-center space-x-4 mx-auto group">
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-900">Speak with an Advisor</span>
               <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ApartmentsPage;