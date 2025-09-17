import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import { useState } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// --- Pricing Data ---
// --- Pricing Data ---
const pricingPackages = [
  {
    title: 'Paket Basic',
    price: '800.000',
    features: [
      'Website Siap Pakai',
      'Desain Standart',
      'Optimasi SEO Dasar',
      'Request Fitur',
      'Optimasi UIUX',
      'Optimasi Speed Loading',
      'Bonus Busines Kit',
    ],
    availableFeatures: [0, 1, 2],
    isHighlighted: false,
    popular: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* Icon Document */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h8m-5 4h5m-9 4h10a2 2 0 002-2V6l-6-4H7a2 2 0 00-2 2v16a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Paket Business',
    price: '1.500.000',
    features: [
      'Website Siap Pakai',
      'Desain Custom',
      'Optimasi SEO',
      'Request Fitur',
      'Optimasi UIUX',
      'Optimasi Speed Loading',
      'Integrasi Payment Gateway',
    ],
    availableFeatures: [0, 1, 2, 3, 4],
    isHighlighted: true,
    popular: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* Icon Briefcase */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 12v6m0-6V6m0 6h6m-6 0H6m16 4V8a2 2 0 
          00-2-2h-4V4a2 2 0 00-2-2H10a2 2 0 
          00-2 2v2H4a2 2 0 00-2 2v8a2 2 0 
          002 2h16a2 2 0 002-2z"
        />
      </svg>
    ),
  },
  {
    title: 'Paket Custom',
    price: '3.000.000',
    features: [
      'Website Siap Pakai',
      'Desain Custom',
      'Optimasi SEO',
      'Request Fitur',
      'Optimasi UIUX',
      'Optimasi Speed Loading',
      'Integrasi Payment Gateway',
    ],
    availableFeatures: [0, 1, 2, 3, 4, 5, 6],
    isHighlighted: false,
    popular: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* Icon Cog / Setting */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 
          4 4 4-1.79 4-4-1.79-4-4-4zm0 
          0V4m0 16v-4m8-4h-4m-8 
          0H4m12.364-5.636l2.828-2.828m-11.314 
          0L5.05 9.05m11.314 11.314l2.828-2.828m-11.314 
          0L5.05 14.95"
        />
      </svg>
    ),
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

const XIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 flex-shrink-0 text-red-500"
    viewBox="0 0 20 20"
    fill="currentColor"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 
      1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 
      1.414L10 11.414l-4.293 4.293a1 1 
      0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 
      0 010-1.414z"
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
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 
    3.956a1 1 0 00.95.69h4.162c.969 0 
    1.371 1.24.588 1.81l-3.367 
    2.445a1 1 0 00-.364 
    1.118l1.287 3.956c.3.921-.755 
    1.688-1.54 1.118l-3.367-2.445a1 
    1 0 00-1.175 0l-3.367 
    2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 
    1 0 00-.364-1.118L2.34 
    9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 
    1 0 00.95-.69L9.049 2.927z" />
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
          ? 'bg-indigo-700 text-white border border-gray-700'
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
        </motion.p>
      </div>

      {/* Features List */}
      <ul className="mt-2 space-y-2 flex-grow">
        {pkg.features.map((feature, i) => {
          const isAvailable = pkg.availableFeatures.includes(i);
          return (
            <motion.li
              key={i}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-start gap-2 text-sm"
            >
              {isAvailable ? <CheckIcon /> : <XIcon />}
              <span
                className={`${
                  pkg.isHighlighted ? 'text-gray-200' : 'text-gray-600'
                } ${!isAvailable ? 'line-through opacity-60' : ''}`}
              >
                {feature}
              </span>
            </motion.li>
          );
        })}
      </ul>

      {/* CTA Button */}
      <motion.div
        className="mt-6"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <a
          href={`https://wa.me/6281934179793?text=${encodeURIComponent(
            `Halo, saya ingin memesan paket *${pkg.title}* dengan harga Rp ${pkg.price}.`
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
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            HARGA JASA PEMBUATAN WEBSITE
          </h2>
          <p className="text-lg text-gray-600">
           Berikut ini sekilas harga untuk Jasa Pembuatan Website. Tersedia paket custom untuk memenuhi kebutuhan request kamu
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
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 
                0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 
                001 1h1a1 1 0 100-2h-1V9z"
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
