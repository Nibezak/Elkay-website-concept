import React from "react";
import { motion, Variants } from "framer-motion";

export default function About({ className }: { className?: string }) {
  const containerVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } } };
  const itemVariants: Variants = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section className={"w-full bg-white flex flex-col items-center py-32 px-6 md:px-12 min-h-screen " + (className || "")}>
      <motion.div className="w-full max-w-[1000px] flex flex-col gap-16" initial="initial" animate="animate" variants={containerVariants}>
        
        <div className="flex flex-col gap-6 items-center text-center">
          <motion.h1 variants={itemVariants} className="text-[#012E1B] text-4xl md:text-6xl font-bold font-serif leading-tight">
            Our Heritage in <br/> Every Loaf
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[#012E1B]/80 text-lg md:text-xl font-sans max-w-[700px]">
            For over three decades, Elkay has been the silent partner behind the world's most successful productions. We believe that great products start with impeccable ingredients.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="w-full aspect-video rounded-[32px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80" alt="Production Process" className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h2 className="text-3xl font-serif text-[#012E1B] font-bold">The Science of Baking</h2>
            <p className="text-[#012E1B]/80 font-sans leading-relaxed">
              Our state-of-the-art R&D facilities are dedicated to solving the complex challenges of industrial and artisanal baking. From custom pan release agents that ensure a perfect turnout every time, to specialized fats that create the optimal crumb structure, we engineer our products to perform flawlessly.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h2 className="text-3xl font-serif text-[#012E1B] font-bold">Uncompromising Quality</h2>
            <p className="text-[#012E1B]/80 font-sans leading-relaxed">
              Every batch of ingredients that leaves our facility undergoes rigorous testing. We source only the finest raw materials and employ strict quality control protocols, ensuring that when you bake with Elkay, you are baking with confidence.
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
