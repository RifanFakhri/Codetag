import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import { useState } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// --- Pricing Data ---
const pricingPackages = [
  {
    title: 'Tugas Kuliah / SMA',
    price: '25.000',
    features: [
      'Analisis Data',
      'Penurunan Turnitin',
      'PPT Presentasi',
      'Tugas Mata Kuliah',
      'Laporan Praktikum',
    ],
    isHighlighted: false,
    popular: false,
    icon: '📚',
  },
  {
    title: 'Tugas IT / Programing',
    price: '100.000',
    features: [
      'Website Pribadi',
      'Website Perusahaan',
      'Aplikasi Desktop',
      'Sistem Informasi',
      'Design UI/UX',
    ],
    isHighlighted: true,
    popular: true,
    icon: '💻',
  },
  {
    title: 'Karya Tulis Ilmiah',
    price: '30.000',
    features: [
      'Penulisan Skripsi',
      'Copywriting',
      'Essay Akademik',
      'Makalah Penelitian',
      'Artikel Jurnal',
    ],
    isHighlighted: false,
    popular: false,
    icon: '✍️',
  },
];

// --- Icons ---
const CheckIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 flex-shrink-0 text-emerald-500"
    viewBox="0 0 20 20"
    fill="currentColor"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </motion.svg>
);

type IconProps = {
  className?: string;
};

const StarIcon = ({ className = '' }: IconProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 text-yellow-400 ${className}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    animate={{ rotate: [0, 15, -15, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.445a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.367-2.445a1 1 0 00-1.175 0l-3.367 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.34 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </motion.svg>
);

const PriceCard = ({ pkg, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative flex flex-col rounded-lg p-6 shadow-md transition-all duration-300 ${
        pkg.isHighlighted
          ? 'bg-[#425953] text-white border border-gray-700'
          : 'bg-gray-50 text-gray-800 border border-gray-200'
      }`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 py-0.5 rounded-full text-xs font-bold flex items-center"
        >
          <StarIcon className="mr-1" />
          <span>POPULAR</span>
        </motion.div>
      )}

      {/* Package Icon */}
      <motion.div
        animate={isHovered ? { rotate: 10, scale: 1.1 } : { rotate: 0, scale: 1 }}
        className={`text-3xl mb-3 ${
          pkg.isHighlighted ? 'text-white' : 'text-indigo-500'
        }`}
      >
        {pkg.icon}
      </motion.div>

      {/* Package Title */}
      <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>

      {/* Price */}
      <div className="my-4">
        <p
          className={`text-xs ${
            pkg.isHighlighted ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          Mulai dari
        </p>
        <motion.p 
          className="text-3xl font-extrabold"
          animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
        >
          Rp {pkg.price}
          <span className="text-sm font-normal">/tugas</span>
        </motion.p>
      </div>

      {/* Features List */}
      <ul className="mt-2 space-y-2 flex-grow">
        {pkg.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ delay: i * 0.03 }}
            className="flex items-start gap-2 text-sm"
          >
            <CheckIcon />
            <span
              className={`${
                pkg.isHighlighted ? 'text-gray-200' : 'text-gray-600'
              }`}
            >
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.div
        className="mt-6"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <a
  href={`https://wa.me/6281934179793?text=${encodeURIComponent(
    `Halo, saya ingin memesan paket *${pkg.title}* dengan harga Rp ${pkg.price}/tugas.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full block text-center rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 shadow-sm ${
    pkg.isHighlighted
      ? 'bg-white text-gray-800 hover:bg-gray-100'
      : 'bg-gray-800 text-white hover:bg-gray-700'
  }`}
>
  Pesan Sekarang
</a>

      </motion.div>
    </motion.div>
  );
};

export default function PricingSection() {
  return (
    <section id="kategori" className={`py-12 sm:py-16 bg-white ${poppins.className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Layanan Pengerjaan Tugas
          </h2>
          <p className="text-lg text-gray-600">
            Solusi lengkap untuk kebutuhan akademik dan teknis Anda
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-6 items-stretch"
        >
          {pricingPackages.map((pkg, index) => (
            <PriceCard key={index} pkg={pkg} index={index} />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Garansi revisi gratis dan konsultasi 24/7
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}