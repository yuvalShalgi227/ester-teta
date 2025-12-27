
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center text-white font-bold">א</div>
              <span className="text-xl font-bold text-white">אסתר תטא</span>
            </div>
            <p className="text-sm">
              מרכז לטיפול בתטא הילינג עם אסתר צימרמן. 
              ליווי אישי, שחרור חסימות ויצירת מציאות חדשה ומעצימה.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-indigo-400">בית</a></li>
              <li><a href="#about" className="hover:text-indigo-400">על הטיפול</a></li>
              <li><a href="#services" className="hover:text-indigo-400">מחירים</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">צרו קשר</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 תל אביב / טיפול בזום</li>
              <li>📞 054-6243864</li>
              <li>✉️ info@esthertheta.co.il</li>
            </ul>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a href="https://wa.me/972546243864?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A1%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%2F%D7%AA%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A2%D7%9C%20%D7%98%D7%99%D7%A4%D7%95%D7%9C%D7%99%20%D7%AA%D7%98%D7%90%20%D7%94%D7%99%D7%9C%D7%99%D7%A0%D7%92" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">WA</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} אסתר תטא - תטא הילינג עם אסתר צימרמן. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
