import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import AdditionalServices from "@/components/additional-services";
import FAQ from "@/components/faq";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Pricing />
      <AdditionalServices />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
