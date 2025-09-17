import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>

      {/* Konten Utama */}
      <div className="relative z-10 container mx-auto text-center max-w-4xl">

        {/* Heading Utama */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Jasa Pembuatan Website Profesional{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Company Profile & Website Bisnis
          </span>
        </h1>
        
        {/* Deskripsi */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Kami melayani jasa pembuatan website berkualitas tinggi untuk perusahaan, UMKM, dan berbagai kebutuhan industri.
        </p>
        
        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/30">
            Konsultasi Gratis
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-blue-500/50 text-white font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
            Lihat Portfolio
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-300">Proyek Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-gray-300">Kepuasan Klien</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Teknis</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}