import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Verse from "@/components/Verse";
import Entourage from "@/components/Entourage";
import DressCode from "@/components/DressCode";
import GiftGuide from "@/components/GiftGuide";
import BeforeRsvp from "@/components/BeforeRsvp";
import Closing from "@/components/Closing";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Nav />
      <Hero />
      <Invitation />
      <Verse />
      <Entourage />
      <DressCode />
      <GiftGuide />
      <BeforeRsvp />
      <Closing />
    </main>
  );
}
