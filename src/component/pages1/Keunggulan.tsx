import React from 'react';
import Image from 'next/image';

export default function Features() {
  return (
    <section id="tentangkami" className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* === BAGIAN TEKS PENGANTAR (ATAS) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Wujudkan <span className="text-blue-600">Pertumbuhan Bisnis</span> Lewat Inovasi Digital
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto lg:mx-0 mb-6 rounded-full"></div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              CodeTag Studio adalah partner digital Anda dalam membangun website, aplikasi, dan solusi software yang modern, cepat, dan sesuai kebutuhan bisnis.
            </p>
            <a
            href="https://wa.me/6288291449821?text=Saya%20ingin%20bertanya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Konsultasi Gratis
          </a>

          </div>
        </div>

        {/* === BAGIAN KARTU FITUR (BAWAH) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* --- Kartu Kiri: Daftar Fitur --- */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                  <p className="text-gray-600">Website responsif dan modern dengan teknologi terkini untuk pengalaman pengguna terbaik.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                  <p className="text-gray-600">Optimasi mobile friendly untuk kenyamanan browsing tanpa batas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                  <p className="text-gray-600">Desain antarmuka yang intuitif dan pengalaman pengguna yang memikat untuk engagement maksimal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Kartu Kanan: Screenshot Landing Page --- */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 rounded-2xl"></div>
            <div className="relative bg-[#2D3139] rounded-2xl p-8 flex flex-col h-full transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="text-center mb-6">
                <span className="inline-block border border-gray-600 text-gray-300 text-sm rounded-full px-5 py-2 bg-gray-800/50 backdrop-blur-sm">
                  Design a website for landing page
                </span>
              </div>
              <div className="flex-grow overflow-hidden rounded-xl">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/ss.png" // Ganti dengan path gambar screenshot Anda
                    alt="Screenshot of a hero section"
                    fill
                    className="rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}