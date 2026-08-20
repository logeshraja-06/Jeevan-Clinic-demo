import React from 'react';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TreatmentTechniques } from '../components/home/TreatmentTechniques';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { Gallery } from '../components/home/Gallery';
import { Qualification } from '../components/home/Qualification';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { Contact } from '../components/home/Contact';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';

export const Home = () => {
  return (
    <main className="space-y-0 bg-[#EFF8F7]">
      <Hero />
      <About />
      <WhyChooseUs />
      <TreatmentTechniques />
      
      {/* Services List Preview */}
      <section className="py-20 md:py-28 bg-[#EFF8F7] relative border-t thin-line-separator">
        <Container>
          <SectionHeading
            eyebrow="TREATMENTS & REHABILITATION"
            title="Physiotherapy Treatments"
            subtitle="Focused care for pain relief, recovery, mobility and strength."
          />
          <ServiceGrid limit={8} showSearch={false} />
          <div className="mt-12 text-center">
            <Button href="/services" variant="gold" size="lg" showArrow>
              View All 17+ Conditions & Treatment Techniques
            </Button>
          </div>
        </Container>
      </section>

      <Gallery />
      <Qualification />
      <AppointmentCTA />
      <Contact />
    </main>
  );
};
