// src/component/Portfolio.tsx

import React, { useState } from 'react';
import Image from 'next/image';

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

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full relative p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 z-10 shadow-lg hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Konten Modal */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={project.modalImageUrl}
            alt={`Enlarged screenshot of ${project.title}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="mt-4 px-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA PORTFOLIO ---
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Section dengan id="portofolio" */}
      <section id="portofolio" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Portofolio</h2>
            <p className="text-md text-gray-500 mt-2">
              Projek-projek codetag yang sudah selesai dikerjakan
            </p>
          </div>

          {/* Grid Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item) => (
              <div
                key={item.id}
                className="bg-[#e5edff] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="p-6">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                </div>

                <div className="relative w-full aspect-video mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={`Screenshot of ${item.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render Modal */}
      {selectedProject && <PortfolioModal project={selectedProject} onClose={closeModal} />}
    </>
  );
};

export default Portfolio;
