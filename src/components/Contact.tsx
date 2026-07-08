import React from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";

export default function Contact({ className }: { className?: string }) {
  const containerVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } } };
  const itemVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section className={"w-full bg-[#EDFBEA] flex justify-center " + (className || "")}>
      <motion.div className="w-full max-w-[1440px] px-6 md:px-[135px] py-[80px] md:py-[120px] flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-[80px]" initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
        <div className="flex flex-col gap-6 w-full lg:max-w-[520px]">
          <motion.h2 variants={itemVariants} className="text-[#012E1B] text-[36px] md:text-[48px] font-bold leading-[120%] tracking-[-0.3px] font-serif">
            Let's Scale Your <br /> Bakery Production
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#012E1B] text-[16px] leading-[24px] opacity-80 font-sans">
            Reach out to our experts to discuss custom formulations, bulk orders, and how we can elevate your baking consistency.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-[#DDEBDD] border-b">
              <span className="text-[#012E1B] text-[16px] font-medium opacity-60 font-sans">Office</span>
              <span className="text-[#012E1B] text-[16px] font-normal font-sans text-left sm:text-right sm:max-w-[300px]">Elkay Industrial Park, 100 Main St.</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-[#DDEBDD] border-b">
              <span className="text-[#012E1B] text-[16px] font-medium opacity-60 font-sans">Email</span>
              <span className="text-[#012E1B] text-[16px] font-normal font-sans text-left sm:text-right sm:max-w-[300px]">sales@elkay.com</span>
            </div>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="w-full lg:w-[520px] bg-white p-6 md:p-8 rounded-[24px] flex flex-col gap-5 shadow-sm">
          <h3 className="text-[#012E1B] text-[24px] font-semibold font-serif">Let's talk!</h3>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#012E1B] text-[14px] font-medium font-sans">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[#012E1B] text-[14px] font-medium font-sans">Company</label>
                <input type="text" placeholder="Bakery name" className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#012E1B] text-[14px] font-medium font-sans">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#012E1B] text-[14px] font-medium font-sans">Message</label>
              <textarea placeholder="Tell us about your production goals" className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60 h-[120px] resize-none" />
            </div>
            <motion.button type="button" whileHover={{ boxShadow: "0px 10px 24px rgba(0,0,0,0.12)" }} transition={{ duration: 0.25, ease: "easeOut" }} className="group w-full bg-[#85FA6D] text-[#012E1B] py-4 rounded-full font-semibold flex items-center justify-center gap-2 mt-2">
              Submit Request <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
