import { RootEffects } from "@/components/RootEffects";
import { Nav, Hero } from "@/components/web-nav-hero";
import { ClientLogos } from "@/components/web-clients";
import { About, Services } from "@/components/web-about-services";
import { CCTV } from "@/components/web-cctv";
import { ProductShowcase, Portfolio } from "@/components/web-products";
import { Partnership } from "@/components/web-partnerships";
import { Team, FAQ } from "@/components/web-team-projects";
import { Contact, Footer } from "@/components/web-contact-footer";
import { WhatsAppWidget } from "@/components/web-whatsapp-widget";

export default function HomePage() {
  return (
    <>
      <RootEffects />
      <div id="top" />
      <div className="bg-orb a" />
      <div className="bg-orb b" />
      <div className="bg-orb c" />
      <div className="scroll-bar" id="scrollBar" />

      <Nav />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <CCTV />
        <Services />
        <ProductShowcase />
        <Partnership />
        <Portfolio />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
