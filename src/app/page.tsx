import { Header } from "@/app/_components/header";
import { Hero } from "@/app/_components/hero";
import { Services } from "@/app/_components/services";
import { Testimonials } from "./_components/testimonials";
import { Results } from "./_components/results";
import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Map } from "./_components/map";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Results />
      <Testimonials />
      <About />
      <Map />
      <Footer />
    </main>
  );
}
