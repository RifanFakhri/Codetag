import Image from 'next/image';

const CtaSection = () => {
  return (
    <section className="p-4 md:p-8 bg-white">
      <div className=" mx-auto rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row">
          
          {/* === Kolom Kiri (Teks & Tombol) === */}
          <div className="w-full lg:w-3/5 bg-indigo-500 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Jadikan Bisnismu Go Digital
            </h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-md">
              Kami membantu startup & bisnis menghadirkan aplikasi dan website modern. Mari ciptakan solusi digital yang berdampak.
            </p>
            <div className="mt-8">
              <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg
                                 shadow-md hover:bg-gray-100 transition-colors duration-300
                                 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
                Mulai Sekarang
              </button>
            </div>
          </div>

          {/* === Kolom Kanan (Gambar) === */}
          <div className="w-full lg:w-2/5 relative min-h-[400px] lg:min-h-0">
            <Image
              src="/modehp.jpg" // Ganti dengan path gambar Anda
              alt="Aplikasi mobile ditampilkan di smartphone"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;