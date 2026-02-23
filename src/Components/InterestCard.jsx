import React from "react";

export default function InterestCard({ category, items, image, light = false }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64 w-full">
      {/* Afbeelding */}
      <img
        src={image}
        alt={category}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-4 text-center
          ${light ? "bg-black/30" : "bg-black/70"}
        `}
      >
        {/* Categorie Titel */}
        <h3 className="text-2xl font-extrabold mb-3 text-white font-serif">
          {category.toUpperCase()}
        </h3>

        {/* Items lijst zonder puntjes */}
        <ul className="space-y-1 text-neutral-300 font-serif list-none">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm md:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
