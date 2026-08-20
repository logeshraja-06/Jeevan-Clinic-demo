import React from 'react';
import { Container } from '../components/common/Container';
import { Qualification } from '../components/home/Qualification';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { Button } from '../components/common/Button';
import { clinicData } from '../data/clinic';
import { CheckCircle2, GraduationCap } from 'lucide-react';

export const AboutPage = () => {
  return (
    <main className="pt-20 space-y-0 bg-[#F4F8F7]">
      {/* Header Banner */}
      <section className="bg-[#28363F] text-white py-20 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-35 mix-blend-luminosity transform scale-105"
          style={{ backgroundImage: `url('/images/clinic/about_physio.png')` }}
        />

        {/* Multi-layer Gradient Overlay for Text Readability & Brand Consistency */}
        <div 
          className="absolute inset-0 z-10 hero-overlay-gradient hidden md:block" 
          style={{
            background: 'linear-gradient(90deg, rgba(40, 54, 63, 0.96) 0%, rgba(27, 132, 128, 0.85) 50%, rgba(40, 54, 63, 0.70) 100%)'
          }}
        />
        <div 
          className="absolute inset-0 z-10 hero-overlay-mobile md:hidden" 
          style={{
            background: 'linear-gradient(180deg, rgba(40, 54, 63, 0.96) 0%, rgba(27, 132, 128, 0.88) 60%, rgba(40, 54, 63, 0.96) 100%)'
          }}
        />

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#1B8480]">
              <span className="w-4 h-[2px] bg-[#1B8480]" />
              <span>PRACTICE PHILOSOPHY</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              About Jeevan Physiotherapy Clinic
            </h1>
            <p className="font-body text-base sm:text-lg text-[#F4F8F7]/85 font-normal leading-relaxed">
              Combining academic excellence, 5 years of healthcare experience, and individualized rehabilitation protocols focused on physical independence.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white border-b thin-line-separator font-body">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="border border-gray-200 shadow-md overflow-hidden">
                <img
                  src="/images/clinic/about_physio.png"
                  alt="Physiotherapy evaluation session"
                  className="w-full h-[500px] object-cover rounded-none"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E2A38]">
                Dedicated Rehabilitation & Physical Health Care
              </h2>

              <p className="text-base text-[#6B7280] leading-relaxed font-normal">
                Jeevan Physiotherapy Clinic was established to deliver compassionate, evidence-based physical therapy that addresses the root cause of movement dysfunction rather than merely masking symptoms.
              </p>

              <div className="p-6 bg-[#F4F8F7] border border-[#1B8480]/15 space-y-3 rounded-2xl">
                <h3 className="font-heading text-xl font-bold text-[#1B8480] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#1B8480]" />
                  Educational & Practice Credentials
                </h3>
                <ul className="space-y-2 text-sm text-[#1E2A38]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8480]" />
                    <span className="font-bold">Degree:</span> {clinicData.qualification}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8480]" />
                    <span className="font-bold">University:</span> {clinicData.university}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8480]" />
                    <span className="font-bold">Graduation Year:</span> {clinicData.qualificationYear}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1B8480]" />
                    <span className="font-bold">Clinical Experience:</span> {clinicData.experience}
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Qualification />
      <AppointmentCTA />
    </main>
  );
};
