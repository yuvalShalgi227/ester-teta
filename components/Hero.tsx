
import React from 'react';
import { IMAGES, useImageWithFallback } from '../utils/imageHelper';

const Hero: React.FC = () => {
  const heroImage = useImageWithFallback(IMAGES.hero);
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 md:w-96 md:h-96 bg-indigo-200 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
          <span className="block">שנו את המציאות שלכם</span>
          <span className="block text-indigo-600">דרך התטא הילינג</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base md:text-xl text-gray-600 leading-relaxed">
          אסתר צימרמן - מטפלת מוסמכת בתטא הילינג בתל אביב. 
          ביחד נשחרר חסימות, נשנה אמונות מגבילות ונחבר אתכם לשקט ולעוצמה הפנימית שלכם.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/972546243864" className="px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg shadow-xl hover:bg-green-600 hover:scale-105 transition-all text-center flex items-center justify-center gap-2">
            <span>צרו קשר בוואטסאפ</span>
          </a>
          <a href="#about" className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-md hover:bg-gray-50 transition-all border border-indigo-100 text-center">
            על הטיפול
          </a>
        </div>
        
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl theta-glow">
            <img
              src={heroImage}
              alt={IMAGES.hero.alt}
              className="w-full h-auto object-cover min-h-[250px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 md:p-8">
              <p className="text-white text-base md:text-lg font-medium italic">"המציאות שלנו היא השתקפות של האמונות התת-מודעות שלנו"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
