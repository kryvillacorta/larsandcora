import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Details from "@/components/Details";
import OurStory from "@/components/OurStory";
import Schedule from "@/components/Schedule";
import Travel from "@/components/Travel";
import Registry from "@/components/Registry";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Details />
      <OurStory />
      <Schedule />
      <Travel />
      <Registry />
      <RSVP />
      <Footer />
    </main>
  );
}
