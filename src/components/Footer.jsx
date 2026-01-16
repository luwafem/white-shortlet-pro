import React from 'react';
import { 
  Phone, Mail, Globe, Lock, ShieldCheck,
  Instagram, Facebook, Twitter, Linkedin, ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] text-stone-500 pt-32 pb-12 overflow-hidden border-t border-stone-900">
      {/* Background Decorative Element: Large "MS" monogram */}
      <div className="absolute -bottom-20 -right-20 text-[30vw] font-serif italic text-white/[0.02] select-none pointer-events-none">
        MS
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Top Tier: Brand Identity & Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <div className="mb-12">
              <span className="text-4xl font-serif italic text-white tracking-tight block mb-2">Mabel's</span>
              <span className="text-[8px] tracking-[0.8em] uppercase text-amber-500 font-bold ml-1">Sojourn Group</span>
            </div>
            
            <p className="text-xl font-light leading-relaxed text-stone-400 max-w-md mb-12">
              Curating high-performance real estate and bespoke hospitality for the global citizen. 
              Our residences are more than stays; they are legacy assets.
            </p>
            
            <div className="flex items-center space-x-10">
              <div className="flex flex-col space-y-2">
                <ShieldCheck strokeWidth={1} className="h-5 w-5 text-amber-600" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-300">Verified Portfolios</span>
              </div>
              <div className="w-px h-8 bg-stone-800" />
              <div className="flex flex-col space-y-2">
                <Lock strokeWidth={1} className="h-5 w-5 text-amber-600" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-300">Encrypted Booking</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className="text-white text-[10px] font-bold tracking-[0.5em] uppercase mb-10">The Insider List</h3>
            <p className="text-sm font-light text-stone-500 mb-10 max-w-sm">
              Subscribe to receive private invitations to new residence launches and curated cultural experiences across the continent.
            </p>
            <form className="relative group max-w-md">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-stone-800 py-6 focus:outline-none focus:border-amber-600 transition-all duration-700 text-white text-[11px] tracking-widest font-light placeholder:text-stone-700"
              />
              <button className="absolute right-0 bottom-6 text-stone-400 group-hover:text-amber-500 group-hover:translate-x-2 transition-all duration-500">
                <ArrowUpRight className="h-6 w-6" strokeWidth={1} />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Tier: Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-24 border-y border-stone-900">
          <div>
            <h4 className="text-white text-[9px] font-bold tracking-[0.4em] uppercase mb-10">Portfolio</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em] font-medium">
              {['The Collection', 'Signature Suites', 'Private Estates', 'Corporate Stays'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-500 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[9px] font-bold tracking-[0.4em] uppercase mb-10">Locations</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em] font-medium">
              {['Ikoyi, Lagos', 'Maitama, Abuja', 'Old GRA, Port Harcourt', 'Dubai, UAE'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-500 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[9px] font-bold tracking-[0.4em] uppercase mb-10">Experience</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em] font-medium">
              {['Concierge Desk', 'Private Chefs', 'Wellness Suites', 'Chauffeur Service'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-500 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-white text-[9px] font-bold tracking-[0.4em] uppercase mb-10">Inquiries</h4>
              <div className="space-y-8">
                <a href="tel:+234800SOJOURN" className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Phone size={12} className="group-hover:text-amber-500" />
                  </div>
                  <span className="text-[11px] tracking-widest text-stone-300">+234 800 SOJOURN</span>
                </a>
                <a href="mailto:concierge@mabelssojourn.com" className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Mail size={12} className="group-hover:text-amber-500" />
                  </div>
                  <span className="text-[11px] tracking-widest text-stone-300">concierge@mabels.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Data & Prestige */}
        <div className="pt-16">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
            
            {/* Prestige Stamps */}
            <div className="flex flex-wrap justify-center gap-8 opacity-40">
              {['Leading Hotels of the World', 'Forbes 5 Star 2026', 'Virtuoso Preferred'].map(stamp => (
                <span key={stamp} className="text-[8px] font-bold tracking-[0.5em] uppercase text-white border border-stone-800 px-6 py-3">
                  {stamp}
                </span>
              ))}
            </div>

            {/* Social & Legal */}
            <div className="flex flex-col items-center xl:items-end gap-6">
              <div className="flex items-center space-x-6">
                {[<Instagram />, <Twitter />, <Linkedin />].map((icon, idx) => (
                  <a key={idx} href="#" className="text-stone-600 hover:text-white transition-colors duration-500">
                    {React.cloneElement(icon, { size: 18, strokeWidth: 1.2 })}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center space-x-8 text-[9px] uppercase tracking-[0.3em] font-bold">
                <span className="text-stone-700">© {currentYear} Mabel's Sojourn Group</span>
                <a href="#" className="text-stone-500 hover:text-white transition-colors">Privacy</a>
                <div className="flex items-center space-x-2 text-stone-300">
                  <Globe size={10} className="text-amber-600" />
                  <span>NG / EN</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;