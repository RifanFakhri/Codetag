import Navbar from '@/component/Navbar';
import Hero from '@/component/Hero';
import Services from '@/component/Services';
import Keunggulan from '@/component/Keunggulan';
import CaraKerja from "@/component/CaraKerja";
import Feedback from "@/component/Feedback";
import Cta from "@/component/Cta";
import Faq from '@/component/Faq';
import Pakettugas from '@/component/Pakettugas';
import Footer from '@/component/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Keunggulan />
      <CaraKerja />
      <Pakettugas />
      <Feedback />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
