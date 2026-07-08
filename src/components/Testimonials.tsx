import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1579697096985-41fe1430e5df?q=80&w=2000&auto=format&fit=crop",
    name: "Marcus Chen",
    role: "Industrial Bakery Manager",
    rating: 5.0,
    headline: "“A complete shift in our production consistency.”",
    text: "“The customized dough improvers helped us regain peak production efficiency. I feel more confident in our daily output than ever before.”",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
    activeRole: "Operations Director"
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop",
    name: "David Miller",
    role: "Artisanal Baker",
    rating: 5.0,
    headline: "“The perfect balance between crumb and crust.”",
    text: "“Sourcing high-quality fat was a struggle until we partnered with Elkay. The ingredients fit perfectly into our traditional sourdough processes.”",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop",
    activeRole: "Head Baker"
  }
];

function TestimonialCard({ testimonial, isActive, onHover }: any) {
  return (
    <motion.div onMouseEnter={onHover} layout transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={"relative flex flex-col flex-1 min-w-0 transition-all duration-700 h-[350px] " + (isActive ? "bg-[#093600] rounded-[20px] p-5 shadow-[0px_12px_30px_rgba(0,0,0,0.08)] z-10" : "items-start opacity-90 hover:opacity-100 hover:-translate-y-1")}>
      <AnimatePresence mode="wait" initial={false}>
        {isActive ? (
          <motion.div key="active" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col h-full">
            <div className="flex flex-col">
              <div className="flex items-center gap-[10px] mb-5">
                <div className="flex items-center gap-[5px]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F8933A" stroke="#F8933A" />)}
                </div>
                <span className="text-[#85FA6D] text-[20px] font-bold leading-[28px] font-sans">{testimonial.rating.toFixed(1)}</span>
              </div>
              <h3 className="text-white text-[20px] font-semibold leading-[28px] mb-3 line-clamp-2 font-sans">{testimonial.headline}</h3>
              <p className="text-white text-[16px] font-normal leading-[24px] tracking-[-0.4px] opacity-90 line-clamp-4 font-sans">{testimonial.text}</p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-12 h-12 rounded-full border-[1.2px] border-[#EDFBEA] overflow-hidden bg-gray-200 shrink-0">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[16px] font-semibold leading-[24px] font-sans">{testimonial.name}</span>
                <span className="text-white text-[16px] font-normal leading-[24px] tracking-[-0.4px] opacity-80 font-sans">{testimonial.activeRole}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="inactive" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col gap-4 w-full h-full">
            <img src={testimonial.image} alt={testimonial.name} className="h-[310px] w-full rounded-[20px] object-cover" />
            <div className="flex justify-between items-center w-full">
              <span className="text-[#093600] text-[16px] font-semibold leading-[24px] font-sans">{testimonial.name}</span>
              <span className="text-[#093600] text-[14px] font-normal leading-[22px] opacity-80 font-sans">{testimonial.role}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Testimonials({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } } };
  const itemVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section className={"w-full max-w-[1440px] mx-auto py-[120px] px-6 md:px-[135px] flex flex-col items-center gap-[80px] bg-white overflow-hidden " + (className || "")}>
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-[96px] w-full max-w-[1170px]">
        <motion.h2 variants={itemVariants} className="text-[#093600] text-[40px] md:text-[52px] font-semibold leading-[48px] md:leading-[56px] tracking-[-0.8px] w-full md:w-[605px] shrink-0 text-center md:text-left font-serif">
          Committed to Quality <br className="hidden md:block" /> Proven by Results
        </motion.h2>
        <motion.p variants={itemVariants} className="text-[#093600] text-[18px] font-normal leading-[26px] tracking-[-0.18px] opacity-80 flex-1 text-center md:text-left font-sans">
          Authentic experiences from bakers who trusted our ingredients and transformed their output.
        </motion.p>
      </motion.div>
      <div className="flex flex-col items-center gap-[48px] w-full">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} onMouseLeave={() => setActiveIndex(1)} className="hidden md:flex gap-6 w-full max-w-[1170px]">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="flex-1 min-w-0">
              <TestimonialCard testimonial={testimonial} isActive={activeIndex === index} onHover={() => setActiveIndex(index)} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
