import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger iconen

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // mobiel menu state

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // sluit menu na klik
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black shadow-md">
      <nav className="mx-auto max-w-7xl px-6 md:px-12 py-6 flex items-center justify-between">
        {/* NAME LEFT */}
        <div
          className="font-extrabold text-xl md:text-2xl cursor-pointer"
          onClick={() => handleNavigate("/home")}
        >
          Joey Lourens
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 justify-center gap-6 md:gap-8 uppercase text-sm md:text-base font-medium">
          <button onClick={() => handleNavigate("/home")} className="hover:text-gray-300 transition transform hover:scale-105">Home</button>
          <button onClick={() => handleNavigate("/projects")} className="hover:text-gray-300 transition transform hover:scale-105">Projects</button>
          <button onClick={() => handleNavigate("/about")} className="hover:text-gray-300 transition transform hover:scale-105">About Me</button>
          <button onClick={() => handleNavigate("/education-experience")} className="hover:text-gray-300 transition transform hover:scale-105">
            Education & Experience
          </button>
          <button onClick={() => handleNavigate("/interests")} className="hover:text-gray-300 transition transform hover:scale-105">Interests & Hobbies</button>
          <button onClick={() => handleNavigate("/contact")} className="hover:text-gray-300 transition transform hover:scale-105">Contact Me</button>
        </div>

        {/* GITHUB LOGO RIGHT */}
        <div className="flex-shrink-0 ml-auto flex items-center">
          <a href="https://github.com/joey799" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition transform hover:scale-110 mr-4">
            <FaGithub size={24} />
          </a>

          {/* HAMBURGER ICON MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4 uppercase text-center font-medium">
          <button onClick={() => handleNavigate("/home")} className="block w-full py-2 hover:text-gray-300 transition transform hover:scale-105">Home</button>
          <button onClick={() => handleNavigate("/projects")} className="block w-full py-2 hover:text-gray-300 transition transform hover:scale-105">Projects</button>
          <button onClick={() => handleNavigate("/about")} className="block w-full py-2 hover:text-gray-300 transition transform hover:scale-105">About Me</button>
          <button onClick={() => handleNavigate("/education-experience")} className="block w-full py-2 hover:text-gray-300 transition transform hover:scale-105">Education & Experience</button>
          <button onClick={() => handleNavigate("/interests")} className="block w-full py-2 hover:text-gray-300 transition transform hover:scale-105">Interests & Hobbies</button>
          <button onClick={() => handleNavigate("/contact")} className="block w-full py-2 hover:text-gray-300 transition transform hover:scale-105">Contact Me</button>
        </div>
      )}
    </header>
  );
}
