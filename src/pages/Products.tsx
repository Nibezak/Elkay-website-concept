import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import panGreaseImg from '../assets/pan-grease.jpg';
import bakersFatImg from '../assets/bakers-fat.jpg';
import breadImproverImg from '../assets/dough-improver.jpg';
import cakeGelImg from '../assets/cake-gel.jpg';

const products = [
  {
    id: 'bread-improver',
    title: 'Bread Improver',
    desc: 'Enhance dough characteristics and ensure consistent batch quality.',
    img: breadImproverImg
  },
  {
    id: 'pan-grease',
    title: 'Pan Grease',
    desc: 'Clean release of baked products without leaving a burnt residue.',
    img: panGreaseImg
  },
  {
    id: 'bakers-fat',
    title: 'Bakers Fat',
    desc: 'Emulsified fat specially designed for yeast based breads and steam buns.',
    img: bakersFatImg
  },
  {
    id: 'cake-gel',
    title: 'Cake Gel',
    desc: 'Premium cake emulsifier for volume and an incredibly tender crumb.',
    img: cakeGelImg
  }
];

export default function Products() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] overflow-x-hidden font-sans">
      <Header />
      
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1b1b1b] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-[#99ff66]" />
            Our Catalog
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-[#012E1B] tracking-tight leading-tight font-serif" style={{ fontFamily: '"Crimson Pro", serif' }}>
            Premium Ingredients
          </h1>
          <p className="text-xl text-[#012E1B]/80 max-w-2xl">
            Explore our range of precision-engineered baking ingredients designed for master bakers and industrial scale production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Link to={`/products/${product.id}`} className="group block h-full bg-white rounded-[32px] overflow-hidden border border-[#012E1B]/10 hover:shadow-xl transition-all duration-300">
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-between items-start gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#012E1B] mb-2 font-serif" style={{ fontFamily: '"Crimson Pro", serif' }}>
                      {product.title}
                    </h3>
                    <p className="text-[#012E1B]/70 leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#012E1B] font-semibold group-hover:text-[#85FA6D] transition-colors">
                    View Details
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
