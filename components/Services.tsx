
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">טיפולים ומחירים</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            הטיפולים מתקיימים בקליניקה נעימה בתל אביב או אצלכם בבית.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Single Session */}
          <div className="flex-1 p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-all">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">טיפול אישי</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              מפגש עומק אישי שבו נאתר את שורש החסימה וניצור ריפוי ושינוי בתת-המודע.
            </p>
            <div className="text-3xl font-extrabold text-indigo-600">350 ₪</div>
            <p className="text-sm text-gray-500 mt-1">למפגש בודד</p>
          </div>

          {/* Package */}
          <div className="flex-1 p-8 bg-purple-50 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
            <div className="absolute top-4 left-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">משתלם ביותר</div>
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">כרטיסיית 10 טיפולים</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              תהליך עומק משמעותי לליווי מתמשך ושינוי יסודי של דפוסי חיים.
            </p>
            <div className="text-3xl font-extrabold text-purple-600">2,500 ₪</div>
            <p className="text-sm text-gray-500 mt-1">חוסך 1,000 ₪</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
            <p className="text-gray-500 mb-6 italic">מיקום: תל אביב</p>
            <a href="https://wa.me/972546243864" className="inline-block px-10 py-4 bg-green-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-green-600 transition-all">
                לתאום טיפול בוואטסאפ
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
