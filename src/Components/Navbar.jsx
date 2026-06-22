import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black shadow-md">
      {/* Scroll progress bar — the signature element */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="h-[2px] bg-white w-full"
      />

      <nav className="mx-auto max-w-7xl px-6 md:px-12 py-5 flex items-center justify-between">
        {/* NAME LEFT */}
        <motion.div
          className="font-extrabold text-xl md:text-2xl cursor-pointer"
          onClick={() => handleNavigate("/home")}
          whileHover={{ letterSpacing: "0.05em" }}
          transition={{ duration: 0.3 }}
        >
          Joey Lourens
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 justify-center gap-6 md:gap-8 uppercase text-sm font-medium">
          {[
            { label: "Home", path: "/home" },
            { label: "Projects", path: "/projects" },
            { label: "About Me", path: "/about" },
            { label: "Education & Experience", path: "/education-experience" },
            { label: "Interests", path: "/interests" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <motion.button
              key={path}
              onClick={() => handleNavigate(path)}
              className="relative hover:text-gray-300 transition"
              whileHover="hover"
            >
              {label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-white w-full origin-left"
                variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
                initial="initial"
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          ))}
        </div>

        {/* GITHUB + HAMBURGER */}
        <div className="flex-shrink-0 ml-auto flex items-center gap-4">
          <motion.a
            href="https://github.com/joey799"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-black px-6"
      >
        <div className="pb-6 space-y-4 uppercase text-center font-medium">
          {[
            { label: "Home", path: "/home" },
            { label: "Projects", path: "/projects" },
            { label: "About Me", path: "/about" },
            { label: "Education & Experience", path: "/education-experience" },
            { label: "Interests", path: "/interests" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <button
              key={path}
              onClick={() => handleNavigate(path)}
              className="block w-full py-2 hover:text-gray-300 transition"
            >
              {label}
            </button>
          ))}
        </div>
      </motion.div>
    </header>
  );
}