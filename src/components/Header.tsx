import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Headphones, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" crossOrigin="anonymous" />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`flex items-center justify-between py-4 bg-white z-20 relative max-w-[1360px] w-full mx-auto px-4 md:px-6 ${className || ""}`}
      >
        <div className="flex items-center h-[50px] cursor-pointer" onClick={() => navigate('/')}>
           <div className="text-[#012E1B] flex items-center p-1"><svg width="120" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 30V10H30V14H15V18H28V22H15V26H30V30H10Z" fill="currentColor"/>
  <path d="M35 30V10H40V26H55V30H35Z" fill="currentColor"/>
  <path d="M60 30V10H65V18H75L82 30H76L71 20H65V30H60Z" fill="currentColor"/>
  <path d="M85 30L95 10H101L111 30H105L102 24H93L90 30H85ZM95 19L97.5 14L100 19H95Z" fill="currentColor"/>
  <path d="M115 10H121L128 20L135 10H141L131 24V30H125V24L115 10Z" fill="currentColor"/>
</svg></div>
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
              <Link to="/products/bread-improver" className="hover:text-[#012E1B] transition-colors font-jost font-medium text-sm">Bread Improver</Link>
              <Link to="/products/pan-grease" className="hover:text-[#012E1B] transition-colors font-jost font-medium text-sm">Pan Grease</Link>
              <Link to="/products/bakers-fat" className="hover:text-[#012E1B] transition-colors font-jost font-medium text-sm">Bakers Fat</Link>
            </div>
          </div>
        </div>

        {/* Right Contact + CTA */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-sm text-[#012E1B] font-medium font-jost">
            <Headphones className="h-4 w-4" />
            <span>+254 700 000 000</span>
          </div>
          
          <button onClick={() => navigate('/products')} className="hidden sm:flex rounded-full bg-[#F0F2F1] p-1 items-center gap-3 hover:opacity-90 transition-opacity group cursor-pointer border border-[#012E1B]/10">
            <div className="w-8 h-8 aspect-square rounded-full bg-[#012E1B] flex items-center justify-center">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
            <span className="pr-5 font-jost text-[16px] font-medium leading-[24px] text-[#012E1B]">
              Catalog
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#012E1B] hover:bg-gray-100 rounded-lg transition-colors"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
