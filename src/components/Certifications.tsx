import React from "react";
import { motion } from "framer-motion";

export default function Certifications({ className }: { className?: string }) {
  return (
    <section className={"w-full bg-[#EDFBEA] py-16 md:py-[120px] px-6 md:px-10 lg:px-0 " + (className || "")}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="rounded-[32px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1600&q=80" 
              alt="Halal and KEBS Certifications" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1b1b1b] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-[#99ff66]" />
            Certified Quality
          </div>
          
          <h2 className="text-[#012E1B] text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight tracking-tight font-serif" style={{ fontFamily: '"Crimson Pro", serif' }}>
            Uncompromising Standards.
          </h2>
          
          <p className="text-[#012E1B]/80 text-lg leading-relaxed font-sans">
            At Elkay, we hold ourselves to the highest manufacturing and food safety standards. We are proudly KEBS certified, ensuring every batch meets rigorous quality controls.
          </p>
          
          <p className="text-[#012E1B]/80 text-lg leading-relaxed font-sans">
            Furthermore, our products are fully Halal Certified, providing peace of mind and broad compliance for your diverse customer base.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-[#012E1B]/10 flex flex-col items-center justify-center">
              <span className="font-bold text-[#012E1B] text-lg">KEBS</span>
              <span className="text-xs text-[#012E1B]/60 uppercase tracking-widest mt-1">Certified</span>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-[#012E1B]/10 flex flex-col items-center justify-center">
              <span className="font-bold text-[#012E1B] text-lg">HALAL</span>
              <span className="text-xs text-[#012E1B]/60 uppercase tracking-widest mt-1">Certified</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
