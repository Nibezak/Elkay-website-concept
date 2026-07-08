import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logoUrl from "../../assets/unnamed.png";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#093600]">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1600&q=80" alt="Footer Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(9, 54, 0, 0.00) 0%, #093600 80%)" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1440px] mx-auto px-6 md:px-[135px] pt-[130px] pb-0">
        <div className="flex flex-col items-center text-center w-full mb-[130px]">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-[42px] md:text-[52px] font-semibold text-white leading-[1.2] md:leading-[56px] tracking-[-0.8px] mb-4">
            Bake With Excellence Today
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full sm:w-auto mt-8">
            <a href="#" className="group flex px-7 py-3 md:py-4 justify-center items-center gap-3 rounded-full bg-[#85FA6D] text-[#0f1a0e] text-[15px] font-bold no-underline transition-all hover:bg-[#5fdb48] hover:shadow-[0_8px_28px_rgba(133,250,109,0.30)] w-full sm:w-auto overflow-hidden">
              Request Samples
              <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[64px] w-full mb-[64px]">
          <div className="flex flex-col items-start gap-4 w-full lg:w-[275px] shrink-0">
            <div className="flex items-center h-16 w-16 bg-white p-2 rounded-full">
              <img src={logoUrl} alt="Elkay Logo" className="w-full h-full object-contain" />
            </div>
            <p className="font-sans text-[16px] text-white/60 leading-[1.6]">
              A complete industrial baking ecosystem designed to deliver measurable results and lasting quality.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[1280px] mt-auto">
          <div className="w-full h-[1px] bg-white/10 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 md:mb-[130px]">
            <p className="font-sans text-[12px] md:text-[14px] text-white/40 text-center md:text-left tracking-wide">
              ©Copyright Elkay | All rights reserved. 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
