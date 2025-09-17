import React from 'react';
import Image from 'next/image';
import Link from "next/link";

// --- DATA UNTUK KARTU LAYANAN ---
// Anda bisa dengan mudah menambah, mengubah, atau mengurangi layanan di sini
const servicesData = [
  {
    imageUrl: '/layanan1.png',
    title: 'Website Company Profile',
    price: 'Mulai Rp 800.000',
    description: 'Tampilkan identitas bisnismu secara profesional dengan website company profile yang modern dan informatif. Mudah diakses, elegan, dan meningkatkan kepercayaan klien.',
  },
  {
    imageUrl: '/layanan2.png',
    title: 'Website Bisnis / Jualan',
    price: 'Mulai Rp 1.500.000',
    description: 'Jual produk lebih mudah dengan toko online yang praktis dan responsif. Dari katalog hingga pembayaran, semua terintegrasi untuk mendukung penjualanmu 24/7.',
  },
  {
    imageUrl: '/layanan3.png',
    title: 'Custom Website & Aplikasi',
    price: 'Mulai Rp 3.000.000',
    description: 'Setiap bisnis unik, begitu juga solusinya. Kami menyediakan website & aplikasi custom yang fleksibel, scalable, dan sesuai kebutuhan bisnismu.',
  },
];

// --- KOMPONEN UNTUK SATU KARTU LAYANAN ---
// Mendefinisikan tipe props untuk keamanan dan autocompletion
type ServiceCardProps = {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, price, description }) => {
  return (
    <div id="layanan" className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col
                    transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      
      {/* Gambar Layanan */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Konten Kartu */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-indigo-500 font-semibold">{price}</p>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        {/* Tombol Aksi */}
         <Link href="/pages2">
        <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                         px-6 py-3 rounded-lg font-semibold text-sm
                         hover:opacity-90 transition-opacity">
          Get started
        </button>
        </Link>
      </div>
    </div>
  );
};


// --- KOMPONEN UTAMA YANG DI-EXPORT ---
const Services = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Bagian */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Layanan Kami
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Pilihan Layanan Unggulan CodeTag Studio
          </p>
        </div>

        {/* Grid untuk Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              imageUrl={service.imageUrl}
              title={service.title}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;