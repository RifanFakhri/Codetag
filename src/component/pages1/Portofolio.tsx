// src/component/Portfolio.tsx
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/component/shared/Reveal';
import React, { useState } from 'react';

// Tipe data untuk setiap item portfolio
interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  imageUrl: string;      // Thumbnail (gambar utama)
  modalImageUrl: string; // Gambar untuk modal
}

// Data portfolio
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: 'Company Profile Website',
    title: 'Jokiin Rush',
    imageUrl: '/portofolio-2.png',
    modalImageUrl: '/ss2.png',
  },
  {
    id: 2,
    category: 'Company Profile Website',
    title: 'Pemerintah Desa Sebet',
    imageUrl: '/portofolio3.png',
    modalImageUrl: '/portofolio-3.jpeg',
  },
  {
    id: 3,
    category: 'Service Website',
    title: 'Jokilin Rush',
    imageUrl: '/portofolio-2.png',
    modalImageUrl: '/portofolio-detail-3.png',
  },
  {
    id: 4,
    category: 'Service Website',
    title: 'Jokilin Rush',
    imageUrl: '/portofolio-2.png',
    modalImageUrl: '/portofolio-detail-4.png',
  },
  {
    id: 5,
    category: 'Service Website',
    title: 'Jokilin Rush',
    imageUrl: '/portofolio-2.png',
    modalImageUrl: '/portofolio-detail-5.png',
  },
  {
    id: 6,
    category: 'Service Website',
    title: 'Jokilin Rush',
    imageUrl: '/portofolio-2.png',
    modalImageUrl: '/portofolio-detail-6.png',
  },
];
// --- KOMPONEN MODAL ---
type PortfolioModalProps = {
  project: PortfolioItem;
  onClose: () => void;
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 40 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        aria-label="Tutup"
        className="absolute -top-4 -right-4 bg-white rounded-full p-2 z-10 shadow-lg hover:bg-gray-200 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image src={project.modalImageUrl} alt={`Screenshot ${project.title}`} fill className="object-contain" />
      </div>
      <div className="mt-4 px-2">
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{project.category}</p>
      </div>
    </motion.div>
  </motion.div>
);

// --- KOMPONEN UTAMA PORTFOLIO ---
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <>
      <section id="portofolio" className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-7xl">
          <Reveal className="text-center mb-14">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 mb-4">
              Hasil Karya
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Portofolio</h2>
            <p className="text-lg text-gray-500 mt-3">Projek-projek codetag yang sudah selesai dikerjakan</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.12}>
                <motion.button
                  type="button"
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(item)}
                  className="group block w-full text-left bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={item.imageUrl}
                      alt={`Screenshot ${item.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-indigo-700">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                      {item.category}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
