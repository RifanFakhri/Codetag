// components/TrustedBy.js
import Image from 'next/image';

const logos = [
  { src: '/sponsor1.png', alt: 'Allytask Logo' },
  { src: '/sponsor2.png', alt: 'Rotatus Logo' },
  { src: '/sponsor3.png', alt: 'Serenet Escapes Logo' },
  { src: '/sponsor4.png', alt: 'Globalnation Logo' },
];

const TrustedBy = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Judul Bagian */}
        <h3 className="text-center text-lg font-semibold text-gray-500 mb-10">
          Trusted by
        </h3>

        {/* Kontainer Logo (Grid) */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-xl bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-8 w-auto sm:h-9"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
