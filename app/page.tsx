import About from '@/components/about';
import CTASection from '@/components/CTASection';
import FeaturedProperties from '@/components/featuredProperties';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import LocationSection from '@/components/locationSection';
import Nav from '@/components/nav';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/whyChooseUs';

export default function Home() {
  return (
    <div className="full relative mx-auto w-full border-x font-sans">
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <CTASection />
      <LocationSection />
    </div>
  );
}
