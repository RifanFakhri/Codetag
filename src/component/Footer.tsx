import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  // Anda bisa mengganti data ini dengan mudah
  const contactInfo = [
    { icon: <MapPin size={20} />, text: 'Bekasi' },
    { icon: <Phone size={20} />, text: '(+62) 819-3417-9793' },
    { icon: <Instagram size={20} />, text: 'jokiinrush' },
  ];

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#cara-kerja', label: 'Cara Kerja' },
    { href: '#kategori', label: 'Kategori' },
    { href: '#pertanyaan', label: 'Pertanyaan' },
  ];

  const socialLinks = [
    { href: '#', icon: <Twitter size={20} /> },
    { href: '#', icon: <Facebook size={20} /> },
    { href: '#', icon: <Linkedin size={20} /> },
    { href: '#', icon: <Youtube size={20} /> },
  ];

  return (
    <footer className="bg-[#425953] text-white">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Kolom 1: Info Brand & Kontak */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png" // Ganti dengan path logo Anda di /public
                alt="Jokiin Rush Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-bold tracking-wider">JOKIIN RUSH</span>
            </div>
            <hr className="my-6 border-white/20" />
            <div className="space-y-4 text-white/80">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 2: Navigasi & Copyright */}
          <div className="lg:border-l lg:border-white/20 lg:pl-8">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <hr className="my-6 border-white/20" />
            <p className="text-sm text-white/60">
              © 2024 Brand, Inc. ⋅ Privacy ⋅ Terms
            </p>
          </div>

          {/* Kolom 3: CTA & Sosial Media */}
          <div className="lg:border-l lg:border-white/20 lg:pl-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold leading-relaxed">
                Butuh bantuan untuk tugas atau proyek Anda?
              </h3>
              <Link
                href="/konsultasi"
                className="mt-6 inline-flex items-center gap-3 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
              >
                Konsultasi
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="mt-8 flex gap-5">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;