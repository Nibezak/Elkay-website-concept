import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const programs = [
  {
    tag: "Essential Release",
    title: "Zero-Stick<br />Pan Grease",
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
    alt: "Pan Grease",
    price: "Bulk",
    label: "Industrial & Artisanal Sizes",
    link: "/products/pan-grease"
  },
  {
    tag: "Signature Structure",
    title: "Premium<br />Bakers Fat",
    img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&q=80",
    alt: "Bakers Fat",
    price: "Bulk",
    label: "Extend Shelf Life",
    link: "/products/bakers-fat"
  },
  {
    tag: "Scientific Edge",
    title: "Masterful Dough<br />Improver",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    alt: "Dough Improver",
    price: "Bulk",
    label: "Consistent Artisanal Batches",
    link: "/products/bread-improver"
  }
];

const features = [
  { title: "Consistent Quality", desc: "Formulated for absolute predictability in every single batch." },
  { title: "Industrial Scale", desc: "Reliable supply chains designed for high-volume commercial production." },
  { title: "Technical Support", desc: "Direct access to our food scientists and production experts." }
];

export default function Features({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={"w-full py-20 md:py-[120px] px-6 md:px-[120px] bg-white flex flex-col items-center gap-16 md:gap-[80px] self-stretch " + (className || "")}>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-5 max-w-[680px] text-center">
        <h2 className="text-[#012E1B] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-tight tracking-tight">
          Discover Our Core<br className="hidden sm:block" /> Ingredient Collection
        </h2>
        <p className="text-[#012E1B]/60 font-sans text-base sm:text-lg leading-relaxed tracking-tight">
          Engineered fats, release agents, and dough conditioners to<br className="hidden sm:block" /> elevate your baking consistency and product quality.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full max-w-[1170px] bg-[#EDFBEA] rounded-[30px] p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6">
        <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide w-full lg:w-auto lg:flex-1 items-center lg:items-start">
          {programs.map((p, i) => (
            <button key={i} onClick={() => setActiveTab(i)} className={"flex items-center justify-center lg:justify-start px-5 py-3.5 rounded-full font-sans text-sm sm:text-base font-semibold transition-all whitespace-nowrap text-center lg:text-left " + (activeTab === i ? "bg-[#85FA6D] text-[#012E1B]" : "bg-transparent text-[#012E1B] hover:bg-[#85FA6D]/25")}>
              {p.tag}
            </button>
          ))}
        </nav>

        <div className="relative rounded-[20px] overflow-hidden min-h-[340px] w-full lg:w-[473px] bg-[#1a2e16] group flex flex-col justify-between py-8 px-6 self-stretch">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.22 }} className="absolute inset-0">
              <img src={programs[activeTab].img} alt={programs[activeTab].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 z-[1]" />
            </motion.div>
          </AnimatePresence>

          <span className="relative z-[2] text-white/90 font-sans text-sm font-medium tracking-tight">
            {programs[activeTab].tag}
          </span>
          <h3 className="relative z-[2] text-[#EDFBEA] font-serif text-[30px] font-semibold leading-[36px] tracking-[-0.2px] w-full max-w-[264px]" dangerouslySetInnerHTML={{ __html: programs[activeTab].title }} />
        </div>

        <div className="bg-white rounded-[30px] py-8 px-6 flex flex-col justify-between items-end flex-[1_0_0] self-stretch">
          <Link to={programs[activeTab].link} className="w-10 h-10 rounded-full border border-[#012E1B]/15 flex items-center justify-center transition-all hover:bg-[#85FA6D] hover:border-[#85FA6D] hover:rotate-45 group">
            <ArrowUpRight className="w-[18px] h-[18px] text-[#012E1B]" />
          </Link>
          <div className="flex flex-col gap-1.5 mt-6 lg:mt-0 w-full text-left">
            <p className="font-serif text-[48px] font-semibold leading-[56px] text-[#012E1B] tracking-[-0.8px] self-stretch">
              {programs[activeTab].price}
            </p>
            <p className="font-sans text-sm text-[#012E1B]/55 leading-relaxed">
              {programs[activeTab].label}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex w-full max-w-[1170px] items-start content-center gap-[24px] flex-wrap justify-center">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.15 * (i + 1) }} className="flex items-start gap-6 w-full sm:max-w-[374px] group">
            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border-2 border-[#85FA6D] rounded-full text-[#85FA6D] font-bold">
              ✓
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <p className="self-stretch text-[#012E1B] font-serif text-[20px] font-semibold leading-[28px] tracking-[-0.04px]">
                {f.title}
              </p>
              <p className="font-sans text-[15px] text-[#012E1B]/55 leading-relaxed tracking-tight">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
