import React from "react";
import Image from "next/image"; // Pastikan menggunakan Image component dari Next.js untuk optimisasi

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white py-16 md:py-24 px-4" // Latar belakang putih dengan padding vertikal
    >
      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">
        
        {/* === BAGIAN TEKS & JUDUL === */}
        <div className="max-w-7xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight whitespace-normal md:whitespace-nowrap">
          Solusi Tepat untuk{" "}
          <span className="text-indigo-600">Membangun Website Anda</span>
        </h1>


          <p className="mt-4 text-lg text-gray-600">
            Kami menghadirkan solusi digital yang modern, cepat, dan dapat diandalkan untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* === TOMBOL AKSI === */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() =>
              window.open("https://wa.me/6288291449821?text=Saya%20ingin%20bertanya", "_blank")
            }
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Konsultasi Sekarang
          </button>

          <button
            onClick={() => {
              const section = document.getElementById("portofolio");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-white text-gray-800 font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          >
            Projek Kami
      </button>

        </div>

        {/* === BAGIAN GAMBAR === */}
        <div className="mt-16 w-full max-w-7xl">
          <div className="relative">
            {/* Bentuk Dekoratif di Latar Belakang */}
            <div className="absolute -top-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-indigo-500 rounded-2xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-indigo-500 rounded-2xl z-0"></div>
            
            {/* Gambar Utama */}
            <div className="relative z-10">
              <Image
                // Ganti `src` dengan path gambar Anda di folder /public
                src="/hero.png" 
                alt="Pengembang sedang membuat kode di laptop"
                width={1200}
                height={800}
                className="rounded-2xl shadow-2xl w-full"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}