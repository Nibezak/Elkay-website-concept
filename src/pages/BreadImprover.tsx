import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BreadImprover() {
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
            Products / Dough Conditioners
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-[#012E1B] tracking-tight leading-tight font-serif" style={{ fontFamily: '"Crimson Pro", serif' }}>
            Bread Improver
          </h1>
          
          <div className="w-full aspect-video rounded-3xl overflow-hidden my-8">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80" 
              alt="Bread Improver" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-green max-w-none text-[#012E1B]/80">
            <p className="text-xl md:text-2xl leading-relaxed text-[#012E1B] mb-12">
              ELKAY bread improver is a flour-based blend of several ingredients with specific functional properties designed to modify dough characteristics and give quality attributes to bread.
            </p>

            <p className="mb-8">
              Bread improvers are mostly made from a combination of enzymes in addition to various emulsifiers and soya flour for their dough conditioning and improving properties. They have a range of functional benefits; they can enable the rapid development of a dough through to the finished baked product by reducing the time required to achieve a comparable result from the traditional long fermented doughs of the past.
            </p>

            <h2 className="text-3xl font-semibold text-[#012E1B] mt-16 mb-6" style={{ fontFamily: '"Crimson Pro", serif' }}>
              The Function of Bread Improvers
            </h2>
            
            <p className="mb-6">There are 2 primary functions of bread improvers in dough:</p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-8 rounded-2xl border border-[#012E1B]/10 shadow-sm">
                <h3 className="text-xl font-bold text-[#012E1B] mb-4">1. Stimulate & Promote Gas Production</h3>
                <p className="text-sm">
                  Carbon dioxide is formed in a dough when the available sugars are broken down by various enzymes. Bread improvers promote the continuous and constant production of gas throughout the fermentation period until the yeast activity is stopped by the high temperatures in the baking oven.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-[#012E1B]/10 shadow-sm">
                <h3 className="text-xl font-bold text-[#012E1B] mb-4">2. Aids in Gas Retention</h3>
                <p className="text-sm">
                  Bread improvers rapidly modify the gluten structure in a dough, to produce a matrix so that the minimum amount of gas can be retained and hence assist the expansion or leavening of the dough.
                </p>
              </div>
            </div>

            <p className="mb-8">
              Bread improvers may also carry within them a blend of enzymes that assist in the gluten matrix modification as well as yeast foods or sources of nitrogen for the yeast to use. It is important for the baker to be aware of the differences between bread improvers as one used successfully in a particular application may encourage too much softening or strengthening of the gluten matrix when used in another. This could lead to major and costly problems in the bakery.
            </p>

            <div className="bg-[#EDFBEA] p-8 md:p-12 rounded-3xl mt-12">
              <h3 className="text-2xl font-semibold text-[#012E1B] mb-4" style={{ fontFamily: '"Crimson Pro", serif' }}>
                Why should you use Bread Improver?
              </h3>
              <p className="text-lg">
                Our Bread improver helps fight against inconsistency in batching and will help to prevent line stoppages caused by sticky or otherwise unusable dough. One poor batch can be the difference in making your quota, and perhaps even your profits for the day.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
