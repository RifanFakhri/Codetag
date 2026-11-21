import Navbar from '@/component/shared/Navbar';
import Footer from '@/component/shared/Footer';
import Hero from '@/component/pages1/Hero';
import TrustedBy from '@/component/pages1/TrustedBy';
import TentangKami from '@/component/pages1/TentangKami';
import Layanan from '@/component/pages1/Layanan';
import Keunggulan from '@/component/pages1/Keunggulan';
import Portofolio from '@/component/pages1/Portofolio';
import Cta from '@/component/pages1/Cta';
import Faq from '@/component/pages1/Faq';

export default function Page1() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <TentangKami />
      <Layanan />
      <Keunggulan />
      <Portofolio />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
