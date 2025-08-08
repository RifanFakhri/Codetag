"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pastikan ID di sini sesuai dengan ID elemen di halaman Anda
      const sections = ["home", "keunggulan", "cara-kerja", "kategori", "pertanyaan"];
      
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Logika untuk menentukan section aktif berdasarkan posisi scroll
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset 80px untuk tinggi navbar
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false); // Tutup menu mobile setelah diklik
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "keunggulan", label: "Keunggulan" },
    { id: "cara-kerja", label: "Cara Order" }, // ID diperbaiki dari 'cara-order' ke 'cara-kerja'
    { id: "kategori", label: "Kategori" },
    { id: "pertanyaan", label: "Pertanyaan" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* FIX: Menambahkan legacyBehavior */}
            <Link href="/#home" passHref legacyBehavior>
             <a 
              onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
              className="text-2xl font-bold text-[#425953]"
            >
              JOKIIN RUSH
            </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  // FIX: Menambahkan legacyBehavior
                  <Link href={`/#${item.id}`} passHref key={item.id} legacyBehavior>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`${
                        activeSection === item.id
                          ? "text-emerald-600 border-b-2 border-emerald-500"
                          : "text-gray-700 hover:text-emerald-600"
                      } px-1 pb-1 text-sm font-medium transition-colors duration-200`}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </nav>

              {/* FIX: Menambahkan legacyBehavior */}
              <Link
                href="https://wa.me/6281934179793?text=Saya%20ingin%20bertanya%20tentang%20joki%20tugas"
                passHref
                legacyBehavior
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <FaWhatsapp className="mr-2" />
                  Chat WhatsApp
                </a>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            // FIX: Menambahkan legacyBehavior
            <Link href={`/#${item.id}`} passHref key={item.id} legacyBehavior>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`${
                  activeSection === item.id
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-[#425953]"
                } block w-full text-left px-3 py-2 rounded-md text-base font-medium`}
              >
                {item.label}
              </a>
            </Link>
          ))}
          {/* FIX: Menambahkan legacyBehavior */}
          <Link href="https://wa.me/6281934179793" passHref legacyBehavior>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              <FaWhatsapp className="mr-2" />
              Chat WhatsApp
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}