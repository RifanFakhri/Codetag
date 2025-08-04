'use client';

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Apa yang Kami Tawarkan?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Berbagai layanan akademik profesional untuk mendukung kesuksesan studi Anda dengan kualitas terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Tugas Harian */}
          <div className="group text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary bg-white p-6 rounded-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">Tugas Harian</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              PR, Essay, dan tugas harian lainnya
            </p>
          </div>

          {/* Analisis Data */}
          <div className="group text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary bg-white p-6 rounded-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">Analisis Data</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              SPSS, Excel, dan analisis statistik
            </p>
          </div>

          {/* Programming */}
          <div className="group text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary bg-white p-6 rounded-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">Programming</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Python, Java, Web Development
            </p>
          </div>

          {/* Makalah & Paper */}
          <div className="group text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary bg-white p-6 rounded-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow">
              <span className="text-3xl">📖</span>
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">Makalah & Paper</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Turnitin-friendly, referensi lengkap
            </p>
          </div>

          {/* Desain Grafis */}
          <div className="group text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary bg-white p-6 rounded-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">Desain Grafis</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Poster, Infografis, dan desain visual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
