// src/component/Footer.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link"; // 1. Impor komponen Image
// Impor ikon yang kita butuhkan dari react-icons
import { FiArrowUpRight } from "react-icons/fi";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-indigo-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bagian utama footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 pr-8">
            {/* 2. Ganti tag h2 dengan komponen Image */}
            <Link href="/#home" className="inline-block">
              {" "}
              {/* Ganti <a> dengan <Link> */}
              <Image
                src="/codetag.png"
                alt="Company Logo"
                width={120}
                height={40}
              />
            </Link>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Velit officia ut cupidatat qui laboris aliquip do Lorem dolor eu.
              Excepteur quis mollit fugiat laboris ut sunt tempor magna.
            </p>
            {/* --- PERUBAHAN UTAMA PADA TOMBOL DI SINI --- */}
            <button
              className="mt-6 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300
                               flex items-center justify-center space-x-2"
            >
              {" "}
              {/* Tambah flex, items-center, justify-center, space-x-2 */}
              <BsChatDots size={20} /> {/* Ikon */}
              <span>Start Live Chat</span> {/* Teks */}
            </button>
            {/* --- AKHIR PERUBAHAN PADA TOMBOL --- */}
          </div>

          {/* Kolom 2: Features */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  Beta access <FiArrowUpRight className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Main features
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Solutions */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Solutions</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Collaboration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 flex items-center">
                  Engagement <FiArrowUpRight className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Satisfaction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Talent
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Resources & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-600 flex items-center"
                  >
                    Blogs & Article <FiArrowUpRight className="ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">
                Follow our socials
              </h3>
              <div className="flex space-x-4 text-gray-500">
                <a href="#" className="hover:text-indigo-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-indigo-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="hover:text-indigo-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian sub-footer */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-500 text-sm">
            <a href="#" className="hover:text-indigo-600 flex items-center">
              Term of Conditions <FiArrowUpRight className="ml-1" />
            </a>
            <a href="#" className="hover:text-indigo-600">
              Privacy and Security
            </a>
            <a href="#" className="hover:text-indigo-600">
              Privacy and Security
            </a>
          </div>
          <div className="mt-6 sm:mt-0">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition-colors"
            >
              <HiOutlineArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;