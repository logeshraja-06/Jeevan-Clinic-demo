import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { HelpCircle } from 'lucide-react';

export const ServicesPage = () => {
  const faqs = [
    {
      q: "What should I expect during my first physiotherapy appointment?",
      a: "Your initial session includes a detailed 1-on-1 physical evaluation, biomechanical assessment, posture analysis, and the formulation of a customized treatment plan tailored to your condition."
    },
    {
      q: "Do I need a doctor's referral to visit Jeevan Physiotherapy Clinic?",
      a: "No, a doctor's referral is not strictly required. You can book an evaluation directly. However, if you have prior X-rays, MRI scans, or surgical notes, please bring them along."
    },
    {
      q: "How many sessions will I need for pain relief or rehabilitation?",
      a: "Treatment duration varies depending on whether your condition is acute (e.g. recent sprain) or chronic (e.g. stroke rehab, osteoarthritis). Your physiotherapist will outline realistic milestones during your first visit."
    },
    {
      q: "Are the treatment techniques painful?",
      a: "Our priority is patient comfort. While mild soreness can occur as tight muscles release or joint mobility is restored, therapeutic techniques are applied gently within your tolerance."
    }
  ];

  return (
    <main className="pt-20 space-y-0 bg-[#F4F8F7]">
      {/* Header Banner */}
      <section className="bg-[#28363F] text-white py-20 md:py-24 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#1B8480]">
              <span className="w-4 h-[2px] bg-[#1B8480]" />
              <span>CLINICAL CATALOG</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Physiotherapy Treatments & Services
            </h1>
            <p className="font-body text-base sm:text-lg text-[#F4F8F7]/85 font-normal leading-relaxed">
              Explore our comprehensive range of evidence-based treatments covering musculoskeletal conditions, stroke rehabilitation, sports injuries, and advanced manual therapy.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24 bg-[#F4F8F7]">
        <Container>
          <ServiceGrid showSearch={true} />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t thin-line-separator font-body">
        <Container>
          <SectionHeading
            eyebrow="PATIENT INFORMATION"
            title="Frequently Asked Questions"
            subtitle="Common inquiries about our clinical evaluation process, treatment expectations, and clinic consultations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#F4F8F7] border border-[#1B8480]/15 space-y-2 rounded-2xl">
                <h3 className="font-heading text-lg font-bold text-[#1E2A38] flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#1B8480] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AppointmentCTA />
    </main>
  );
};
