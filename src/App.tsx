import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import BreadImprover from './pages/BreadImprover';
import PanGrease from './pages/PanGrease';
import BakersFat from './pages/BakersFat';
import CakeGel from './pages/CakeGel';
import Products from './pages/Products';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <WhyUs />
      <Certifications />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/bread-improver" element={<BreadImprover />} />
        <Route path="/products/pan-grease" element={<PanGrease />} />
        <Route path="/products/bakers-fat" element={<BakersFat />} />
        <Route path="/products/cake-gel" element={<CakeGel />} />
      </Routes>
    </BrowserRouter>
  );
}
