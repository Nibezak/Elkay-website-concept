import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Headphones, Share2, ShieldCheck, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import logoUrl from "../../assets/unnamed.png";
import panGreaseImg from "../../assets/unnamed (4).jpg";
import bakersFatImg from "../../assets/unnamed (3).jpg";
import doughImproverImg from "../../assets/unnamed (5).jpg";
import cakeGelImg from "../../assets/unnamed (2).jpg";

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

export default function Header({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" crossOrigin="anonymous" />
      
      <section className={`w-full min-h-screen flex flex-col bg-white selection:bg-[#093600] selection:text-white ${className || ""}`}>
        
        {/* Navbar */}
        <motion.nav 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between py-4 bg-white z-20 relative max-w-[1360px] w-full mx-auto px-4 md:px-6"
        >
          <div className="flex items-center h-[50px] cursor-pointer" onClick={() => navigate('/')}>
             <img src={logoUrl} alt="Elkay Logo" className="h-[40px] w-auto object-contain p-1" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0">
            <Link to="/" className="flex items-center gap-[2px] px-4 py-1 bg-transparent border border-gray-200 rounded-full font-jost text-[14px] font-medium leading-[24px] text-gray-700 hover:bg-gray-100 transition-colors mx-1">
              Home
            </Link>
            <Link to="/about" className="flex items-center gap-[2px] px-4 py-1 bg-transparent border border-gray-200 rounded-full font-jost text-[14px] font-medium leading-[24px] text-gray-700 hover:bg-gray-100 transition-colors mx-1">
              About Us
            </Link>
            <Link to="/products" className="flex items-center gap-[2px] px-4 py-1 bg-transparent border border-gray-200 rounded-full font-jost text-[14px] font-medium leading-[24px] text-gray-700 hover:bg-gray-100 transition-colors mx-1">
              Products
            </Link>
            
            <div className="relative group mx-1">
              <span className="flex items-center gap-[2px] px-4 py-1 bg-transparent border border-gray-200 rounded-full font-jost text-[14px] font-medium leading-[24px] text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
                Ingredients <span className="text-[10px] ml-1">▼</span>
              </span>
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-black/5 p-4 flex flex-col gap-3 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/products/bread-improver" className="hover:text-[#093600] transition-colors font-jost font-medium text-sm">Bread Improver</Link>
                <Link to="/products/pan-grease" className="hover:text-[#093600] transition-colors font-jost font-medium text-sm">Pan Grease</Link>
                <Link to="/products/bakers-fat" className="hover:text-[#093600] transition-colors font-jost font-medium text-sm">Bakers Fat</Link>
                <Link to="/products/cake-gel" className="hover:text-[#093600] transition-colors font-jost font-medium text-sm">Cake Gel</Link>
              </div>
            </div>
          </div>

          {/* Right Contact + CTA */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden lg:flex items-center gap-2 text-sm text-[#093600] font-medium font-jost">
              <Headphones className="h-4 w-4" />
              <span>+254 700 000 000</span>
            </div>
            
            <button onClick={() => navigate('/products')} className="hidden sm:flex rounded-full bg-[#F0F2F1] p-1 items-center gap-3 hover:opacity-90 transition-opacity group cursor-pointer border border-[#093600]/10">
              <div className="w-8 h-8 aspect-square rounded-full bg-[#093600] flex items-center justify-center">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>
              <span className="pr-5 font-jost text-[16px] font-medium leading-[24px] text-[#093600]">
                Catalog
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#093600] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-[82px] left-0 right-0 bg-white border-b border-gray-200 overflow-hidden flex flex-col md:hidden shadow-xl z-50"
            >
              <div className="flex flex-col p-6 gap-4 text-gray-800 font-jost">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-100 font-medium">Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-100 font-medium">About Us</Link>
                <Link to="/products" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-100 font-medium">Products</Link>
                <div className="text-sm text-gray-500 uppercase mt-4 mb-2 font-bold tracking-widest">Ingredients</div>
                <Link to="/products/bread-improver" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-100 pl-4">Bread Improver</Link>
                <Link to="/products/pan-grease" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-100 pl-4">Pan Grease</Link>
                <Link to="/products/bakers-fat" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-100 pl-4">Bakers Fat</Link>
                <Link to="/products/cake-gel" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-100 pl-4">Cake Gel</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col font-jost">
          <section className="w-full flex justify-center px-4 md:px-6 py-4 mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[1360px] h-auto lg:h-[788px] rounded-[40px] bg-[#093600] overflow-hidden flex flex-col lg:flex-row shadow-2xl px-6 lg:pl-[74px] lg:pr-[80px] py-12 lg:py-0 relative"
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
                    Premium bakery fats, pan grease, and artisanal ingredients delivered directly to your bakery to help you craft the perfect crumb and crust.
                  </motion.p>
                  
                  <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
                    <button onClick={() => navigate('/products')} className="flex items-center justify-center gap-[10px] rounded-[99px] p-[4px_16px_4px_4px] bg-[#85FA6D] backdrop-blur-[50px] font-jost text-[16px] font-medium leading-[24px] text-[#093600] hover:opacity-90 transition-opacity">
                      <div className="w-[44px] h-[44px] aspect-square rounded-full flex items-center justify-center bg-[#093600]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                          <rect width="44" height="44" rx="22" fill="#093600"/>
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
                      {[bakersFatImg, "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", panGreaseImg, "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80", 
                        bakersFatImg, "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", panGreaseImg, "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80"].map((src, i) => (
                        <div key={`left-${i}`} className="w-[280px] h-[333px] rounded-[32px] overflow-hidden shadow-xl border-[4px] border-white/12 flex-shrink-0 bg-[#093600]">
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
                      {[cakeGelImg, doughImproverImg, "https://images.unsplash.com/photo-1589367920969-ab8e050bfc81?w=600&q=80", 
                        cakeGelImg, doughImproverImg, "https://images.unsplash.com/photo-1589367920969-ab8e050bfc81?w=600&q=80"].map((src, i) => (
                        <div key={`right-${i}`} className="w-[280px] h-[333px] rounded-[32px] overflow-hidden shadow-xl border-[4px] border-white/12 flex-shrink-0 bg-[#093600]">
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
      </section>
    </>
  );
}

