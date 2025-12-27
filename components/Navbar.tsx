
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 glass shadow-sm border-b border-white/50 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">א</div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">אסתר תטא</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium transition-colors">בית</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium transition-colors">על הטיפול</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium transition-colors">מחירים</a>
              <a href="https://wa.me/972546243864" className="bg-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-600 transition-all shadow-md">שלחו וואטסאפ</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="תפריט"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
            <a href="#home" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">בית</a>
            <a href="#about" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">על הטיפול</a>
            <a href="#services" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">מחירים</a>
            <a href="https://wa.me/972546243864" onClick={closeMenu} className="block px-3 py-2 text-indigo-600 font-bold bg-indigo-50 rounded-md">שלחו וואטסאפ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
