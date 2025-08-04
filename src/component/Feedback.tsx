'use client';

import { useState, useRef, useEffect } from 'react';

const testimonials = [
  { stars: 4, text: "Kerjanya rapi dan tepat waktu, terima kasih atas profesionalismenya.", author: { name: 'Shultan Abdi', title: 'Mahasiswa Informatika', avatar: '/icon3.png' } },
  { stars: 5, text: 'Presentasinya sangat jelas dan mudah dipahami. Good job!', author: { name: 'Fauzan Naufaldi', title: 'Mahasiswa Psikologi', avatar: '/icon3.png' } },
  { stars: 5, text: 'Desain UI-nya clean dan user-friendly. Lanjutkan seperti ini ya.', author: { name: 'Naufal Rafif', title: 'Mahasiswa Informatika', avatar: '/icon3.png' } },
  { stars: 4, text: 'Saya puas dengan hasil kerjanya, timnya komunikatif dan responsif.', author: { name: 'Rifan Nurfakhri', title: 'Mahasiswa Manajemen', avatar: '/icon3.png' } },
  { stars: 5, text: 'Bener-bener bantu banget pas lagi sibuk kerja praktik. Gak nyesel order di sini.', author: { name: 'Nabila Salsa', title: 'Mahasiswa Ilmu Komunikasi', avatar: '/icon3.png' } },
  { stars: 5, text: 'Tugas saya selesai lebih cepat dari deadline, makasih banget timnya responsif!', author: { name: 'Salsadila', title: 'Mahasiswa Manajemen', avatar: '/icon3.png' } },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.445a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.367-2.445a1 1 0 00-1.175 0l-3.367 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.34 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="absolute top-4 right-6 w-16 h-16 text-gray-100 opacity-50 z-0" fill="currentColor" viewBox="0 0 32 32">
    <path d="M9.333 22.667h4L16 16V9.333H6.667v9.334L9.333 22.667zM22.667 22.667h4L29.333 16V9.333H20v9.334L22.667 22.667z" />
  </svg>
);

export default function Feedback() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculatePages = () => {
      if (typeof window !== 'undefined') {
        const isDesktop = window.innerWidth >= 768;
        const cardsPerPage = isDesktop ? 3 : 1;
        const calculatedTotalPages = Math.ceil(testimonials.length / cardsPerPage);
        setTotalPages(calculatedTotalPages);
        if (currentPage >= calculatedTotalPages) {
          setCurrentPage(calculatedTotalPages - 1);
        }
      }
    };
    calculatePages();
    window.addEventListener('resize', calculatePages);
    return () => window.removeEventListener('resize', calculatePages);
  }, [currentPage]);

  const scrollToPage = (pageIndex: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const pageWidth = carousel.clientWidth;
      carousel.scrollTo({ left: pageIndex * pageWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (totalPages === 0) return;
    const timer = setInterval(() => {
      const newPage = (currentPage + 1) % totalPages;
      setCurrentPage(newPage);
      scrollToPage(newPage);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentPage, totalPages]);

  const handleDotClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    scrollToPage(pageIndex);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="relative bg-[#425953] rounded-t-2xl text-white text-center pt-12 md:pt-16 pb-28 md:pb-40">
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Customer feedbacks
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative -mt-12 sm:-mt-16 md:-mt-[120px] z-10">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pointer-events-none"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 snap-center p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 min-h-[300px] flex flex-col justify-between text-gray-800 relative">
                  <QuoteIcon />
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < testimonial.stars} />
                    ))}
                  </div>
                  <p className="mb-6 z-10 relative">{testimonial.text}</p>
                  <div className="flex items-center z-10 relative">
                    <img
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.author.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.author.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center mt-8">
          {totalPages > 1 &&
            Array.from({ length: totalPages }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => handleDotClick(pageIndex)}
                className={`w-3 h-3 rounded-full mx-1.5 transition-all duration-300 ${
                  currentPage === pageIndex ? 'bg-[#11817F]' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${pageIndex + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
