import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bakersFatImg from '../assets/bakers-fat.jpg';

export default function BakersFat() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] overflow-x-hidden font-sans">
      <Header />
      
      <section className="max-w-[1000px] mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1b1b1b] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-[#99ff66]" />
            Products / Fats & Oils
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-[#012E1B] tracking-tight leading-tight font-serif" style={{ fontFamily: '"Crimson Pro", serif' }}>
            Bakers Fat
          </h1>
          
          <div className="w-full aspect-video rounded-3xl overflow-hidden my-8">
            <img 
              src={bakersFatImg} 
              alt="Bakers Fat" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-green max-w-none text-[#012E1B]/80">
            <p className="text-xl md:text-2xl leading-relaxed text-[#012E1B] mb-12">
              ELKAY Bakers fat is an emulsified fat specially designed for yeast based breads and steam buns application.
            </p>

            <p className="mb-8">
              It has a lubricating and softening effect on bread dough, therefore enhancing the extensibility of the dough. ELKAY Bakers Fat is also an economical source of fat when compared against standard shortening. It effectively tightens the dough and improves handling during bread production.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-8 rounded-2xl border border-[#012E1B]/10 shadow-sm flex flex-col items-center text-center">
                <div className="text-[#85FA6D] mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold text-[#012E1B] mb-2">Shelf Life</h3>
                <p className="text-lg">12 Months</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-[#012E1B]/10 shadow-sm flex flex-col items-center text-center">
                <div className="text-[#85FA6D] mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-[#012E1B] mb-2">Packaging</h3>
                <p className="text-lg">1 CN x 10 KG</p>
              </div>
            </div>

            <div className="bg-[#EDFBEA] p-8 md:p-12 rounded-3xl mt-12">
              <h3 className="text-2xl font-semibold text-[#012E1B] mb-4" style={{ fontFamily: '"Crimson Pro", serif' }}>
                Usage Recommendations
              </h3>
              <p className="text-lg font-bold text-[#012E1B] mb-4">
                Recommended dosage of 4% to 10% on flour weight.
              </p>
              <h4 className="text-xl font-semibold text-[#012E1B] mt-8 mb-2">What is the significance of the emulsification of fat?</h4>
              <p>
                Emulsified fats allow for better dispersion throughout the dough matrix. This ensures that the lubricating effects are spread evenly, resulting in a more uniform crumb structure, superior softness, and prolonged freshness in the final baked product.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
