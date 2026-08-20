import React from 'react';
import { Container } from '../components/common/Container';
import { Qualification } from '../components/home/Qualification';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { Button } from '../components/common/Button';
import { clinicData } from '../data/clinic';
import { CheckCircle2, GraduationCap } from 'lucide-react';

export const AboutPage = () => {
  return (
    <main className="pt-20 space-y-0 bg-[#EFF8F7]">
      {/* Header Banner */}
      <section className="bg-[#082F38] text-white py-20 md:py-24 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-quicksand text-xs font-semibold uppercase tracking-[0.2em] text-[#C9952E]">
              <span className="w-4 h-[1px] bg-[#C9952E]" />
              <span>PRACTICE PHILOSOPHY</span>
            </div>
            <h1 className="font-jura text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              About Jeevan Physiotherapy Clinic
            </h1>
            <p className="font-quicksand text-base sm:text-lg text-[#EFF8F7]/85 font-normal leading-relaxed">
              Combining academic excellence, 5 years of healthcare experience, and individualized rehabilitation protocols focused on physical independence.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white border-b thin-line-separator">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="border border-gray-300 shadow-xl overflow-hidden">
                <img
                  src="/images/clinic/about_physio.png"
                  alt="Physiotherapy evaluation session"
                  className="w-full h-[500px] object-cover rounded-none"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 font-quicksand">
              <h2 className="font-jura text-3xl sm:text-4xl font-bold text-[#082F38]">
                Dedicated Rehabilitation & Physical Health Care
              </h2>

              <p className="text-base text-[#17343B]/80 leading-relaxed font-normal">
                Jeevan Physiotherapy Clinic was established to deliver compassionate, evidence-based physical therapy that addresses the root cause of movement dysfunction rather than merely masking symptoms.
              </p>

              <div className="p-6 bg-[#EFF8F7] border border-[#075A68]/15 space-y-3">
                <h3 className="font-jura text-xl font-bold text-[#075A68] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#C9952E]" />
                  Educational & Practice Credentials
                </h3>
                <ul className="space-y-2 text-sm text-[#17343B]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#075A68]" />
                    <span className="font-bold">Degree:</span> {clinicData.qualification}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#075A68]" />
                    <span className="font-bold">University:</span> {clinicData.university}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#075A68]" />
                    <span className="font-bold">Graduation Year:</span> {clinicData.qualificationYear}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#075A68]" />
                    <span className="font-bold">Clinical Experience:</span> {clinicData.experience}
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Book a Physical Evaluation
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
