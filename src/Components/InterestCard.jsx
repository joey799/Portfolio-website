import React from "react";
import { motion } from "motion/react";

export default function InterestCard({ category, items, image, light = false }) {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-md h-64 w-full"
      whileHover="hover"
      initial="rest"
    >
      {/* Image with scale on hover */}
      <motion.img
        src={image}
        alt={category}
        className="w-full h-full object-cover"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay darkens on hover */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center"
        variants={{
          rest: { backgroundColor: light ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.7)" },
          hover: { backgroundColor: "rgba(0,0,0,0.55)" },
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-extrabold mb-3 text-white font-serif">
          {category.toUpperCase()}
        </h3>

        <ul className="space-y-1 text-neutral-300 font-serif list-none">
          {items.map((item, i) => (
            <motion.li
              key={item}
              className="text-sm md:text-base"
              variants={{
                rest: { opacity: 0.7, y: 0 },
                hover: { opacity: 1, y: -2 },
              }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}