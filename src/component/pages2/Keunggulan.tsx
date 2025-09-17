// File: app/fitur/page.js

import { 
  FaDollarSign, FaUsers, FaCloud, FaLaptopCode, FaMobileAlt, 
  FaRocket, FaHeadset, FaLightbulb, FaShieldAlt 
} from 'react-icons/fa';

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white py-16 px-4">
      <section className="w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Judul Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700">Keunggulan Layanan Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">CodeTag</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami memberikan solusi terbaik untuk kebutuhan website Anda dengan layanan profesional dan berkualitas.
            </p>
          </div>
          
          {/* Grid untuk Kartu Fitur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Kartu 1: Harga Terjangkau */}
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 shadow">
                <FaDollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Harga Terjangkau</h3>
              <p className="text-teal-600 font-semibold text-lg mb-2">Mulai 1 Jutaan</p>
              <p className="text-gray-600 text-sm">Kualitas premium dengan harga yang bersaing dan transparan.</p>
            </div>
            
            {/* Kartu 2: Dipercaya Klien */}
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-green-500 to-emerald-500 shadow">
                <FaMobileAlt className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Responsive & Mobile Friendly</h3>
              <p className="text-gray-600 text-sm">Website nyaman diakses di semua perangkat.</p>
            </div>

            {/* Kartu 3: Gratis Domain & Hosting */}
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-sky-500 shadow">
                <FaCloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gratis Domain & Hosting 1 Tahun</h3>
              <p className="text-gray-600 text-sm">Dapatkan domain dan hosting gratis untuk tahun pertama penggunaan.</p>
            </div>

            {/* Kartu 4: Website Custom */}
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow">
                <FaLaptopCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Website Custom</h3>
              <p className="text-gray-600 text-sm">Website dibuat khusus sesuai kebutuhan dan preferensi Anda.</p>
            </div>
            
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-4">Siap Mewujudkan Website Impian Anda?</h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Konsultasi gratis dengan tim kami untuk membahas kebutuhan website Anda dan dapatkan penawaran terbaik.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow">
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
