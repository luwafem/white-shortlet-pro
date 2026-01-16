import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Residences', path: '/apartments' },
    { name: 'Collections', path: '/collections' },
    { name: 'Concierge', path: '/concierge' },
    { name: 'Experiences', path: '/experiences' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[120] transition-all duration-500 ease-in-out ${
          isScrolled && !isOpen 
            ? 'bg-black/90 backdrop-blur-md py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo Section - Higher z-index to stay above menu */}
            <Link to="/" className="relative z-[130] flex flex-col group">
              <span className="text-xl md:text-2xl font-serif italic text-white tracking-tight leading-none">
                Mabel's
              </span>
              <span className="text-[7px] tracking-[0.6em] uppercase text-amber-500 font-bold ml-0.5 mt-1 transition-all group-hover:tracking-[0.8em]">
                Sojourn
              </span>
            </Link>

            {/* Desktop Center Links */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] uppercase tracking-[0.4em] font-light transition-all duration-300 hover:text-amber-400 ${
                    isActive(link.path) ? 'text-amber-500' : 'text-stone-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-8 relative z-[130]">
              <button className="hidden md:flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">
                <Instagram size={14} strokeWidth={1.5} />
                <span className="hidden xl:inline">Follow</span>
              </button>

              <button className="hidden lg:block bg-white text-black text-[9px] uppercase tracking-[0.3em] font-bold px-8 py-3 rounded-none hover:bg-amber-500 transition-all duration-500">
                Reserve Stay
              </button>

              {/* Mobile Toggle Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center space-x-3 text-white focus:outline-none"
              >
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium group-hover:text-white transition-colors">
                  {isOpen ? 'Close' : 'Menu'}
                </span>
                <div className="relative w-6 h-6 flex items-center justify-center">
                   {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Architectural Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay with subtle blur - only behind the panel */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[105]"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed inset-y-0 right-0 w-full lg:w-[450px] bg-[#0a0a0a] z-[110] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Internal padding adjusted to not be blocked by logo */}
              <div className="flex flex-col h-full pt-48 pb-12 px-12 md:px-16">
                <p className="text-[9px] uppercase tracking-[0.5em] text-amber-500/60 mb-10 font-bold">Navigation</p>
                
                <div className="flex flex-col space-y-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.2 }}
                      key={link.name}
                    >
                      <Link
                        to={link.path}
                        className="text-4xl md:text-5xl font-serif italic text-white hover:text-amber-500 transition-colors inline-block"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Section of Menu */}
                <div className="mt-auto pt-10 border-t border-white/5">
                  <div className="grid grid-cols-1 gap-8">
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3 font-bold">Contact</h4>
                      <p className="text-sm text-stone-300 font-light">concierge@mabels.com</p>
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-3 font-bold">Location</h4>
                      <p className="text-sm text-stone-300 font-light">Lagos — Abuja</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;