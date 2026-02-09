"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <Image
            src="/logo.png"
            alt="Shubham Logo"
            width={40}
            height={40}
            className="rounded-lg object-cover"
            priority
          />
          <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hidden sm:block">
            Shubham.dev
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["about", "experience", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black/90 border-t border-gray-200 dark:border-gray-800 px-4 py-6 space-y-4">
          {["about", "experience", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
