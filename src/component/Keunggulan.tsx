'use client';

import Image from 'next/image';

export default function WhyUs() {
  return (
    <main id="keunggulan" className="bg-white font-sans flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#425953] mb-3">
              Mengapa Pilih Kami?
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Keunggulan yang membuat kami berbeda dari yang lain
            </p>

            <div className="space-y-8">
              {/* Item 1 */}
              <FeatureItem
                icon="fa-gears"
                bgColor="#f97b22"
                title="Cepat & Tepat Waktu"
                description="Garansi pengerjaan sesuai deadline yang disepakati. Kami utamakan ketepatan waktu tanpa mengorbankan kualitas."
              />

              {/* Item 2 */}
              <FeatureItem
                icon="fa-users"
                bgColor="#5837d0"
                title="Harga Terjangkau"
                description="Tarif kompetitif yang ramah di kantong pelajar dan mahasiswa, dengan sistem pembayaran fleksibel."
              />

              {/* Item 3 */}
              <FeatureItem
                icon="fa-headset"
                bgColor="#008A84"
                title="Revisi Gratis"
                description="Kami menyediakan unlimited revisi hingga tugas kamu benar-benar sesuai harapan. Tanpa biaya tambahan."
              />

              {/* Item 4 */}
              <FeatureItem
                icon="fa-user-tie"
                bgColor="#008A84"
                title="Tim Profesional"
                description="Dikerjakan oleh tim ahli dan berpengalaman sesuai bidang tugas. Hasil dikerjakan secara teliti dan terpercaya."
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center transform translate-y-10">
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-slate-100 rounded-3xl"></div>
              <div className="absolute -top-6 -right-6 w-36 h-36 bg-[#425953] rounded-tr-[60px] rounded-bl-[60px]"></div>
              <div className="relative p-6">
                <Image
                  src="/2.png"
                  alt="Tim profesional sedang berdiskusi di depan laptop"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

type FeatureItemProps = {
  icon: string;
  bgColor: string;
  title: string;
  description: string;
};

function FeatureItem({ icon, bgColor, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-4 text-left">
      <div
        className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <i className={`fa-solid ${icon} text-white text-2xl`}></i>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
