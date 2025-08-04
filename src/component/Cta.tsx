"use client";

import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="relative container mx-auto bg-[#425953] rounded-2xl p-8 sm:p-12 lg:p-16 flex items-center justify-center min-h-[300px]">
        
        {/* Text Section */}
        <div className="max-w-2xl text-white relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Kami siap membantu menyelesaikan tugas Anda!
          </h2>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Tim profesional kami akan memberikan hasil terbaik dengan cepat,
            tepat waktu, dan sesuai harapan Anda.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-white text-[#087977] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Hubungi Kami
          </a>
        </div>

        {/* === Image Section (DIUBAH) === */}
        {/* Ditambahkan 'hidden' untuk menyembunyikan di mobile */}
        {/* Ditambahkan 'lg:block' untuk menampilkan lagi di layar besar */}
        <div className="hidden lg:block absolute bottom-0 right-0 translate-y-[4px] w-[420px] z-0">
          <Image
            src="/3(1).png"
            alt="Customer Service Agent"
            width={420}
            height={480}
            className="w-full h-auto object-contain"
          />
        </div>
        
      </div>
    </section>
  );
};

export default CallToAction;