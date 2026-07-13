import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Hero({ className }: { className?: string }) {
  const navigate = useNavigate();

  return (
    <main className={`flex-1 flex flex-col font-jost bg-white selection:bg-[#012E1B] selection:text-white ${className || ""}`}>
      <section className="w-full flex justify-center px-4 md:px-6 py-4 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1360px] h-auto lg:h-[788px] rounded-[40px] bg-[#012E1B] overflow-hidden flex flex-col lg:flex-row shadow-2xl px-6 lg:pl-[74px] lg:pr-[80px] py-12 lg:py-0 relative"
        >
          
          {/* Left Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-start gap-10 lg:gap-[70px] w-full lg:w-[563px] z-10"
          >
            <div className="flex flex-col">
              <motion.span variants={itemVariants} className="mb-6 inline-flex items-center justify-center gap-[10px] rounded-full bg-[#85FA6D]/10 border border-[#85FA6D]/30 px-5 py-1 font-jost text-[12px] font-medium leading-[24px] uppercase text-[#85FA6D] self-start">
                PREMIUM BAKING INGREDIENTS
              </motion.span>
              
              <motion.h1 variants={itemVariants} className="w-full lg:w-[491px] font-jost font-semibold text-[40px] lg:text-[56px] leading-tight lg:leading-[64px] text-white tracking-[-1px]">
                Better Ingredients,<br/>Flawless Baking.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="mt-6 w-full lg:w-[491px] font-jost text-[18px] font-normal leading-[24px] text-white/80">
                Premium baking fats, pan grease, and artisanal ingredients delivered directly to your facility to help you craft the perfect crumb and crust.
              </motion.p>
              
              <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
                <button onClick={() => navigate('/products')} className="flex items-center justify-center gap-[10px] rounded-[99px] p-[4px_16px_4px_4px] bg-[#85FA6D] backdrop-blur-[50px] font-jost text-[16px] font-medium leading-[24px] text-[#012E1B] hover:opacity-90 transition-opacity">
                  <div className="w-[44px] h-[44px] aspect-square rounded-full flex items-center justify-center bg-[#012E1B]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <rect width="44" height="44" rx="22" fill="#012E1B"/>
                      <path d="M17 27.5L26.5 18M26.5 18V26M26.5 18H18.5" stroke="#85FA6D"/>
                    </svg>
                  </div>
                  Explore Products
                </button>
                <button onClick={() => navigate('/about')} className="flex items-center justify-center gap-[10px] rounded-[99px] p-[14px_20px] bg-white/10 backdrop-blur-[50px] font-jost text-[16px] font-medium leading-[24px] text-white transition-colors hover:bg-white/20">
                  About Elkay
                </button>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="self-stretch">
              <div className="flex flex-col sm:flex-row items-start gap-[22px]">
                <div className="flex items-start gap-4 flex-1 self-stretch">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full p-1.5">
                    <ShieldCheck className="w-full h-full text-[#85FA6D]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-white font-jost leading-[20px]">Consistent Quality</h3>
                    <p className="text-[14px] text-white/70 leading-[18px] font-jost mt-2">Formulated for absolute predictability in every single batch.</p>
                  </div>
                </div>
                
                <div className="hidden sm:block w-[1px] h-[40px] bg-white/30 self-center" />
                
                <div className="flex items-start gap-4 flex-1 self-stretch">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full p-1.5">
                    <Share2 className="w-full h-full text-[#85FA6D]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-white font-jost leading-[20px]">Global Standards</h3>
                    <p className="text-[14px] text-white/70 leading-[18px] font-jost mt-2">Halal & KEBS certified to ensure safety and hygiene.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Mosaic Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 relative overflow-hidden hidden lg:flex items-center justify-end h-full max-h-[900px] z-0"
          >
            <div className="flex gap-4 h-full">
              {/* Left sub-column */}
              <div className="relative h-full overflow-hidden w-[280px]">
                <motion.div 
                  animate={{ y: [0, -1396] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-4 pt-4"
                >
                  {["https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&q=80", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80", "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80", 
                    "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&q=80", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80", "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80"].map((src, i) => (
                    <div key={`left-${i}`} className="w-[280px] h-[333px] rounded-[32px] overflow-hidden shadow-xl border-[4px] border-white/12 flex-shrink-0 bg-[#012E1B]">
                      <img src={src} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Baking Ingredient" />
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Right sub-column */}
              <div className="relative h-full overflow-hidden pt-20 w-[280px]">
                <motion.div 
                  animate={{ y: [-1047, 0] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-4"
                >
                  {["https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1600&q=80", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80", 
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1600&q=80", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80"].map((src, i) => (
                    <div key={`right-${i}`} className="w-[280px] h-[333px] rounded-[32px] overflow-hidden shadow-xl border-[4px] border-white/12 flex-shrink-0 bg-[#012E1B]">
                      <img src={src} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Baking Ingredient" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </section>
    </main>
  );
}
