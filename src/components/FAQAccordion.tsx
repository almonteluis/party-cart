import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book a service?',
    answer:
      'Simply fill out our online booking form with your event details, preferred services, and date. We will review your request and send a confirmation within 24 hours. A 50% deposit is required to secure your reservation.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Middletown, NY and serve New York, NY and the surrounding 20-mile radius. Additional travel fees may apply for locations outside our standard service area. Contact us for specific location inquiries.',
  },
  {
    question: 'Is a deposit required?',
    answer:
      'Yes, a non-refundable deposit of 50% is required at the time of booking to secure your date. The remaining balance is due 48 hours before your event. We accept Apple Pay and Zelle.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made more than 14 days before the event will receive a full refund minus the deposit. Cancellations within 14 days of the event are non-refundable. We are happy to work with you on rescheduling when possible.',
  },
  {
    question: 'Can I customize my backdrop or balloon installation?',
    answer:
      'Absolutely! We offer custom arch covers, graphic designs, textured fabrics, and clipart graphics. Our creative consulting service ($500) includes a full design session with our team to create your dream setup.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Setup typically takes 30 to 60 minutes depending on the services selected. Balloon installations and backdrop setups may take longer. We arrive early to ensure everything is perfect before your guests arrive. Breakdown takes about 20 to 30 minutes after the event.',
  },
  {
    question: 'Are balloons included in the installation price?',
    answer:
      'Balloons are sold separately from our installation services. The installation prices cover delivery, professional setup, and arrangement. We can source balloons for you or you can provide your own.',
  },
  {
    question: 'Do you offer full event planning?',
    answer:
      'Yes! Our full event planning service ($500) includes complete event coordination, vendor management, and day-of coordination. We also offer creative consulting ($500) which includes a one-on-one design session with mood boards and concepts.',
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base md:text-lg font-medium pr-6 transition-colors duration-300 ${
            isOpen ? 'text-brand-gold' : 'text-white/90 group-hover:text-brand-gold'
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-gold' : 'text-white/50'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-5 md:pb-6 text-white/60 text-sm md:text-base leading-relaxed pr-12">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQAccordionItem
          key={index}
          item={faq}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
