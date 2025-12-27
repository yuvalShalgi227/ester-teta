
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features / Benefits Section */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">למה תטא הילינג?</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    תטא הילינג היא שיטת ריפוי עוצמתית המאפשרת לנו לגשת ישירות לתת-המודע שלנו. 
                    במקום שבו מילים לבדן לא מספיקות, התטא הילינג מאפשרת שינוי מהיר ויסודי.
                  </p>
                  <p>
                    בטיפול עם אסתר צימרמן, אנחנו מוצאים את האמונות המגבילות שמונעות מכם להתקדם – בזוגיות, בקריירה או בבריאות – ומחליפים אותן באמונות חדשות שיוצרות מציאות טובה יותר.
                  </p>
                  <div className="pt-4 space-y-3">
                    <div className="flex items-start gap-3 justify-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-white text-xs">✓</div>
                      <span>שחרור מתחים, חרדות וטראומות</span>
                    </div>
                    <div className="flex items-start gap-3 justify-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-white text-xs">✓</div>
                      <span>ריפוי רגשי ושיפור הביטחון העצמי</span>
                    </div>
                    <div className="flex items-start gap-3 justify-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-white text-xs">✓</div>
                      <span>יצירת שפע וחיבור לשליחות האישית</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="https://images.unsplash.com/photo-1528319725582-ddc096101511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" alt="Meditation Practice" className="rounded-3xl shadow-xl max-w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* Call to Action Section */}
        <section id="contact" className="py-24 bg-indigo-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים להתחיל בשינוי?</h2>
            <p className="text-xl opacity-90 mb-10">אני מזמינה אתכם לשיחה קצרה ותיאום טיפול בתל אביב או מרחוק.</p>
            <a href="https://wa.me/972546243864" className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-white rounded-full font-bold text-2xl shadow-2xl hover:bg-green-600 hover:scale-105 transition-all">
              <span>כתבו לאסתר צימרמן בוואטסאפ</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.284l-.569 2.103 2.2-.545c.951.538 1.83.859 3.097.86 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.586-5.765-5.766-5.765zm3.377 8.272c-.14.393-.812.722-1.121.769-.281.042-.644.062-1.042-.066-.254-.082-.572-.191-1.285-.494-.969-.412-1.594-1.396-1.643-1.46-.048-.065-.393-.522-.393-1.001 0-.479.251-.714.34-.813.089-.099.195-.124.26-.124h.186c.065 0 .152-.025.239.186.089.211.306.744.333.799.027.055.044.119.008.191-.036.072-.054.119-.107.186-.053.065-.113.146-.16.195-.054.054-.11.112-.047.218.062.106.277.458.595.741.408.363.754.475.86.522.107.047.169.039.231-.033.063-.072.268-.314.339-.422.072-.108.143-.089.239-.053.098.036.621.293.728.347.107.054.178.082.204.124.027.044.027.251-.114.644zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.658 1.44 5.166L2 22l4.991-1.298C8.428 21.503 10.141 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
