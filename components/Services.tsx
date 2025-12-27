
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">טיפולים ומחירים</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            הטיפולים מתקיימים בקליניקה נעימה בתל אביב או אצלכם בבית.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Single Session */}
          <article className="flex-1 p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-all" itemScope itemType="https://schema.org/Service">
            <div className="text-4xl mb-4" aria-hidden="true">✨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">טיפול אישי</h3>
            <p className="text-gray-600 mb-6 leading-relaxed" itemProp="description">
              מפגש עומק אישי שבו נאתר את שורש החסימה וניצור ריפוי ושינוי בתת-המודע.
            </p>
            <div className="text-3xl font-extrabold text-indigo-600" itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <span itemProp="price" content="350">350</span>
              <span itemProp="priceCurrency" content="ILS"> ₪</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">למפגש בודד</p>
          </article>

          {/* Package */}
          <article className="flex-1 p-8 bg-purple-50 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden" itemScope itemType="https://schema.org/Service">
            <div className="absolute top-4 left-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">משתלם ביותר</div>
            <div className="text-4xl mb-4" aria-hidden="true">💎</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">כרטיסיית 10 טיפולים</h3>
            <p className="text-gray-600 mb-6 leading-relaxed" itemProp="description">
              תהליך עומק משמעותי לליווי מתמשך ושינוי יסודי של דפוסי חיים.
            </p>
            <div className="text-3xl font-extrabold text-purple-600" itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <span itemProp="price" content="2500">2,500</span>
              <span itemProp="priceCurrency" content="ILS"> ₪</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">חוסך 1,000 ₪</p>
          </article>
        </div>
        
        <div className="text-center mt-12">
            <p className="text-gray-500 mb-6 italic">מיקום: תל אביב</p>
            <a
              href="https://wa.me/972546243864?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A1%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%2F%D7%AA%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A2%D7%9C%20%D7%98%D7%99%D7%A4%D7%95%D7%9C%D7%99%20%D7%AA%D7%98%D7%90%20%D7%94%D7%99%D7%9C%D7%99%D7%A0%D7%92"
              className="inline-block px-10 py-4 bg-green-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-green-600 transition-all"
              aria-label="לתאום טיפול תטא הילינג בוואטסאפ"
              rel="noopener noreferrer"
            >
                לתאום טיפול בוואטסאפ
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
