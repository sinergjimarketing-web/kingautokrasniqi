import { BookingSection } from '@/components/sections/BookingSection';
import { CarsSection } from '@/components/sections/CarsSection';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CarsSection />
      <WhyChooseUs />
      <BookingSection />
      <Footer />
    </main>
  );
}
