import Navbar from '@/component/pages1/Navbar';
import Hero from '@/component/pages1/Hero';
import Services from '@/component/pages1/Services';
import Keunggulan from '@/component/pages1/Keunggulan';   
import CaraKerja from '@/component/pages1/CaraKerja';
import Pakettugas from '@/component/pages1/Pakettugas';
import Feedback from '@/component/pages1/Feedback';
import Cta from '@/component/pages1/Cta';
import Faq from '@/component/pages1/Faq';
import Footer from '@/component/pages1/Footer';

export default function Page1() {
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
