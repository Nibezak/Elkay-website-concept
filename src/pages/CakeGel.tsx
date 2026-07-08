import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cakeGelImg from '../../assets/unnamed (2).jpg';

export default function CakeGel() {
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
            Products / Emulsifiers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-[#093600] tracking-tight leading-tight font-serif" style={{ fontFamily: '"Crimson Pro", serif' }}>
            Cake Gel
          </h1>
          
          <div className="w-full aspect-video rounded-3xl overflow-hidden my-8">
            <img 
              src={cakeGelImg} 
              alt="Cake Gel" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-green max-w-none text-[#093600]/80">
            <h2 className="text-3xl font-semibold text-[#093600] mt-12 mb-6" style={{ fontFamily: '"Crimson Pro", serif' }}>
              What is Elkay Cake Gel?
            </h2>
            <p className="text-xl leading-relaxed text-[#093600] mb-8">
              Elkay Cake Gel is a premium cake emulsifier that does not add strange tastes to your cake mixes. Instead, it adds a crucial function that allows insoluble liquids (water and oil) to mix seamlessly.
            </p>

            <h3 className="text-2xl font-semibold text-[#093600] mt-12 mb-6" style={{ fontFamily: '"Crimson Pro", serif' }}>
              Main Functions in Cake Baking
            </h3>
            <ul className="list-disc pl-6 mb-12 space-y-4">
              <li>To enhance the distribution of oil in water dispersion.</li>
              <li>Stabilizing the resultant emulsion or foam.</li>
              <li>Enhancing shelf life and maintaining moisture.</li>
            </ul>

            <div className="bg-[#EDFBEA] p-8 md:p-12 rounded-3xl mt-12">
              <h3 className="text-2xl font-semibold text-[#093600] mb-4" style={{ fontFamily: '"Crimson Pro", serif' }}>
                Use Cases of Cake Gel
              </h3>
              <p className="text-lg">
                Emulsifiers are essential ingredients in the recipe of cakes and other desserts. Most importantly, they help keep the ingredients blended, which prevents any oil or water from separating from the mixture. In effect, the stability of those bubbles and the even expansion during baking helps produce a significant volume and an incredibly tender crumb.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
