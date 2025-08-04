'use client';

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">Cara Kerja</h2>
          <p className="text-xl text-muted-foreground">
            4 langkah mudah untuk mendapatkan bantuan tugas Anda
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Langkah 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3F82F9] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Chat Admin</h3>
            <p className="text-muted-foreground">
              Hubungi admin via WhatsApp untuk konsultasi kebutuhan tugas Anda
            </p>
          </div>

          {/* Langkah 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#72E5B5] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Kirim Tugas</h3>
            <p className="text-muted-foreground">
              Kirimkan detail tugas, requirements, dan deadline yang diinginkan
            </p>
          </div>

          {/* Langkah 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0EA2E9] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Proses Pengerjaan</h3>
            <p className="text-muted-foreground">
              Tim ahli kami mengerjakan tugas dengan kualitas terbaik
            </p>
          </div>

          {/* Langkah 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#24C45E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">Selesai</h3>
            <p className="text-muted-foreground">
              Tugas selesai tepat waktu dan siap untuk dikumpulkan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
