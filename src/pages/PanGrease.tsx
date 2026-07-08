import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import panGreaseImg from '../assets/pan-grease.jpg';

export default function PanGrease() {
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
            Products / Release Agents
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-[#012E1B] tracking-tight leading-tight font-serif" style={{ fontFamily: '"Crimson Pro", serif' }}>
            Pan Grease
          </h1>
          
          <div className="w-full aspect-video rounded-3xl overflow-hidden my-8">
            <img 
              src={panGreaseImg} 
              alt="Pan Grease" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-green max-w-none text-[#012E1B]/80">
            <p className="text-xl md:text-2xl leading-relaxed text-[#012E1B] mb-12">
              Elkay Pan Grease is a vegetable oil based emulsion consisting of quality vegetable oils that is vegan and vegetarian compliant. Our products are also Halal Certified.
            </p>

            <p className="mb-8">
              It is an all-purpose confectionery release agent, designed for the hand greasing of confectionery trays. It is a precise blend of vegetable oil, emulsifiers and water. When applied, it forms a reliable barrier which results in clean release of baked products without leaving a burnt residue or altering the taste of your delicate sponges.
            </p>

            <div className="bg-[#EDFBEA] p-8 md:p-12 rounded-3xl mt-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#012E1B] mb-4" style={{ fontFamily: '"Crimson Pro", serif' }}>
                  Industrial Packaging
                </h3>
                <p className="text-lg">
                  Packed in 20 liters jerry cans for economic use! Designed for heavy-duty commercial bakeries requiring reliability at scale.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-[#012E1B]/10">
                  <div className="text-4xl font-bold text-[#012E1B] mb-2">20L</div>
                  <div className="text-sm font-medium uppercase tracking-widest text-[#012E1B]/60">Jerry Cans</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
