import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, ArrowUpRight } from "lucide-react";

const plans = [
  {
    id: 1,
    title: "Artisanal Package",
    subtitle: "Perfect for local bakeries",
    price: "Custom",
    buttonText: "Request Quote",
    features: [
      { text: "Access to premium fats & greases", included: true },
      { text: "Small-batch ordering available", included: true },
      { text: "Standard technical support", included: true },
      { text: "Custom formulations", included: false }
    ]
  },
  {
    id: 2,
    title: "Industrial Scale",
    subtitle: "For high-volume production",
    price: "Bulk",
    buttonText: "Partner With Us",
    isActive: true,
    features: [
      { text: "Access to all product lines", included: true },
      { text: "High-volume tiered pricing", included: true },
      { text: "Priority technical support", included: true },
      { text: "Custom formulation access", included: true }
    ]
  }
];

export default function Pricing({ className }: { className?: string }) {
  const [activeCardId, setActiveCardId] = React.useState(2);
  const containerVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } } };
  const itemVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section className={"w-full flex items-center justify-center bg-white py-[120px] px-4 md:px-[135px] overflow-hidden " + (className || "")}>
      <motion.div className="w-full max-w-[1440px] flex flex-col items-center gap-[80px]" initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
        <div className="flex flex-col items-center gap-4 max-w-[720px]">
          <motion.h2 variants={itemVariants} className="text-[#093600] text-[48px] font-bold leading-[120%] text-center tracking-[-0.3px] font-serif">
            Partner for <br /> Industrial Growth
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#093600] text-[18px] leading-[28px] opacity-80 text-center font-normal font-sans">
            Transparent bulk pricing with dedicated technical support.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]" onMouseLeave={() => setActiveCardId(2)}>
          {plans.map((plan) => {
            const isActive = activeCardId === plan.id;
            return (
              <motion.div key={plan.id} variants={itemVariants} onMouseEnter={() => setActiveCardId(plan.id)} whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.08)" }} transition={{ duration: 0.4 }} className={"flex flex-col justify-between p-8 rounded-[24px] transition-all duration-500 ease-in-out border " + (isActive ? "bg-[#093600] text-white border-transparent" : "bg-white text-[#093600] border-[#E5E7EB]")}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[22px] font-semibold font-serif">{plan.title}</h3>
                    <p className="text-[16px] opacity-80 font-sans">{plan.subtitle}</p>
                  </div>
                  <div className={"h-[1px] w-full transition-colors duration-500 " + (isActive ? "bg-white/10" : "bg-black/10")} />
                  <div className="flex flex-col gap-3">
                    <h4 className="text-[16px] font-semibold font-sans">Included:</h4>
                    <ul className="flex flex-col gap-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          {feature.included ? <CheckCircle2 size={20} className={"transition-colors duration-500 " + (isActive ? "text-[#85FA6D]" : "text-[#093600]")} /> : <XCircle size={20} className="opacity-40" />}
                          <span className={"text-[16px] font-sans transition-opacity duration-500 " + (!feature.included ? "opacity-40" : "opacity-100")}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[36px] font-semibold font-serif">{plan.price}</span>
                  </div>
                  <motion.a href="#" whileHover={{ scale: 1.02, boxShadow: isActive ? "0px 12px 24px rgba(133, 250, 109, 0.4)" : "0px 12px 24px rgba(0,0,0,0.12)" }} transition={{ duration: 0.3 }} className={"group flex items-center justify-center gap-2 py-[14px] px-6 rounded-full text-[16px] font-medium transition-all duration-500 ease-in-out cursor-pointer " + (isActive ? "bg-[#85FA6D] text-[#093600]" : "bg-[#EDFBEA] text-[#093600]")}>
                    {plan.buttonText}
                    {isActive ? <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" /> : <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
