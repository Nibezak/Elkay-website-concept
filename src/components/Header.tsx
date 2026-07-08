import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MoveRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logoUrl from "../../assets/unnamed.png";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="relative z-50 flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md">
           <img src={logoUrl} alt="ELKAY Logo" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[#1b1b1b] font-medium">
        <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <Link to="/about" className="hover:opacity-70 transition-opacity">About Us</Link>
        <Link to="/products" className="hover:opacity-70 transition-opacity">Products</Link>
        <div className="relative group">
          <span className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1">
            Ingredients <span className="text-xs">▼</span>
          </span>
          <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-black/5 p-4 flex flex-col gap-3 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link to="/products/bread-improver" className="hover:text-[#85FA6D] transition-colors">Bread Improver</Link>
            <Link to="/products/pan-grease" className="hover:text-[#85FA6D] transition-colors">Pan Grease</Link>
            <Link to="/products/bakers-fat" className="hover:text-[#85FA6D] transition-colors">Bakers Fat</Link>
            <Link to="/products/cake-gel" className="hover:text-[#85FA6D] transition-colors">Cake Gel</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block bg-[#99ff66] text-[#1b1b1b] px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all active:scale-95">
          Connect
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1b1b1b] hover:bg-black/5 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 overflow-hidden flex flex-col md:hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4 text-[#1b1b1b] font-medium">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-black/5">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-black/5">About Us</Link>
              <Link to="/products" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-black/5">Products</Link>
              <div className="text-sm text-black/50 uppercase mt-4 mb-2 font-bold tracking-widest">Ingredients</div>
              <Link to="/products/bread-improver" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-black/5 pl-4">Bread Improver</Link>
              <Link to="/products/pan-grease" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-black/5 pl-4">Pan Grease</Link>
              <Link to="/products/bakers-fat" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-black/5 pl-4">Bakers Fat</Link>
              <Link to="/products/cake-gel" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-black/5 pl-4">Cake Gel</Link>
              <button className="w-full mt-6 bg-[#99ff66] text-[#1b1b1b] px-6 py-4 rounded-full font-bold shadow-lg">
                Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function CoachCard() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      onClick={() => navigate('/products')}
      className="md:absolute md:bottom-8 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 w-full md:max-w-xs shadow-2xl group cursor-pointer hover:bg-white/20 transition-all mt-8 md:mt-0"
    >
      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white">
        <img
          src={logoUrl}
          alt="Elkay Quality"
          className="w-full h-full object-contain p-2"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-white font-semibold text-sm">Elkay Enterprise</h4>
        <p className="text-white/70 text-xs mb-2">Premium Baking Ingredients</p>
        <div className="flex items-center gap-1 text-[#99ff66] text-xs font-bold">
          <span>View Catalog</span>
          <MoveRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Header({ className }: { className?: string }) {
  const navigate = useNavigate();
  return (
    <section className={"w-full bg-white font-sans " + (className || "")}>
      <Navbar />

      <main className="px-4 md:px-8 max-w-7xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col justify-end min-h-[600px] md:min-h-[700px] p-6 md:p-12"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 53.43%, rgba(0, 0, 0, 0.52) 100%), linear-gradient(236deg, rgba(0, 0, 0, 0.00) 58.28%, rgba(0, 0, 0, 0.80) 96.47%), url(https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80) center / cover no-repeat"
          }}
        >
          <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4 md:gap-6 max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-[#FFF] text-4xl sm:text-5xl md:text-[68px] leading-tight md:leading-[72px] tracking-tight md:tracking-[-1.6px]"
                style={{ fontFamily: '"Crimson Pro", serif', fontWeight: 600 }}
              >
                Better Ingredients, <br className="hidden sm:block" />
                <span className="italic">Flawless Baking.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white opacity-80 text-base md:text-xl leading-relaxed md:leading-[28px] max-w-[600px]"
              >
                Premium bakery fats, pan grease, and artisanal ingredients delivered directly to your bakery to help you craft the perfect crumb and crust.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-4"
              >
                <button onClick={() => navigate('/products')} className="group bg-[#99ff66] text-[#1b1b1b] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(153,255,102,0.4)] transition-all active:scale-95">
                  Explore Products
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button onClick={() => navigate('/about')} className="bg-white text-[#1b1b1b] px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all active:scale-95">
                  About Elkay
                </button>
              </motion.div>
            </div>

            <CoachCard />
          </div>
        </motion.div>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1b1b1b] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[#99ff66]" />
              Our Promise
            </div>
          </div>
          <div className="md:col-span-9 flex flex-col gap-12">
            <h4
              className="text-[#0A0D12] max-w-4xl text-xl sm:text-2xl md:text-[30px] leading-snug md:leading-[36px] tracking-tight"
              style={{ fontFamily: '"Crimson Pro", serif', fontWeight: 600 }}
            >
              From our factory to your bakery, we deliver precision-engineered ingredients and dedicated support to help you scale production and maintain perfect consistency.
            </h4>
          </div>
        </section>
      </main>
    </section>
  );
}
