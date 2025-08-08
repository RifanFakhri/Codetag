import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 flex justify-center"
    >
      <div className="relative bg-[#425953] text-white rounded-2xl w-full max-w-6xl overflow-hidden shadow-lg flex flex-col lg:flex-row items-center lg:items-start px-6 sm:px-10 lg:px-16 py-12">
        {/* Gambar Kiri */}
        <div className="relative lg:absolute lg:left-0 lg:bottom-0 transform lg:translate-x-[8%] translate-y-8 lg:translate-y-[72px] z-10 mb-8 lg:mb-0">
          <img
            src="/1.png"
            alt="Student Illustration"
            className="h-[300px] sm:h-[400px] lg:h-[550px] w-auto object-contain"
          />
        </div>

        {/* Konten Kanan */}
        <div className="w-full lg:ml-auto z-10 lg:w-[55%]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Selesaikan Tugas Tepat <br className="hidden sm:block" /> Waktu
            Tanpa Stres
          </h1>
          <p className="mb-8 text-base sm:text-lg leading-relaxed">
            Layanan joki tugas terpercaya untuk pelajar dan mahasiswa. <br />
            Fokus pada hal penting, biar kami yang kerjakan sisanya.
          </p>

          {/* Checklist */}
          <div className="flex flex-col gap-3 mb-8 text-base sm:text-lg">
            <div className="flex items-center gap-3">
               <input
                type="checkbox"
                id="task2"
                className="w-5 h-5 rounded border-2 border-white bg-transparent"
                checked
                disabled
              />
              <label htmlFor="task1">100+ Tugas Selesai</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="task2"
                className="w-5 h-5 rounded border-2 border-white bg-transparent"
                checked
                disabled
              />
              <label htmlFor="task2">98% Kepuasan</label>
            </div>
          </div>

          {/* Garis Pembatas */}
          <div className="border-t border-white mb-6"></div>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/6281934179793?text=Saya%20ingin%20bertanya%20tentang%20joki%20tugas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200 hover:bg-white hover:text-[#008A84] text-base"
            >
              Pesan Sekarang
            </a>
            <a
              href="https://wa.me/6281934179793?text=Saya%20ingin%20konsultasi%20gratis%20tentang%20joki%20tugas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#008A84] transition text-base"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Sudut Kanan Atas Dekorasi */}
        <div className="absolute right-0 top-0 w-40 h-40 sm:w-48 sm:h-48 bg-[#768D70] rounded-bl-[80px] sm:rounded-bl-[96px] z-0" />
      </div>
    </section>
  );
}
