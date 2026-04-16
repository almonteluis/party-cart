import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book a cart?',
    answer:
      'Simply fill out our online booking form with your event details, preferred cart, and date. We will review your request and send a confirmation within 24 hours. A deposit is required to secure your reservation.',
  },
  {
    question: 'What areas do you deliver to?',
    answer:
      'We currently serve the greater Hudson Valley area and surrounding regions within a 50-mile radius. Additional travel fees may apply for locations outside our standard service area. Contact us for specific location inquiries.',
  },
  {
    question: 'Is a deposit required?',
    answer:
      'Yes, a non-refundable deposit of 50% is required at the time of booking to secure your date and cart. The remaining balance is due 48 hours before your event.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made more than 14 days before the event will receive a full refund minus the deposit. Cancellations within 14 days of the event are non-refundable. We are happy to work with you on rescheduling when possible.',
  },
  {
    question: 'Can I customize my cart?',
    answer:
      'Absolutely! Our Cart + Branding and Full Service packages include customization options such as custom signage, branded decor, themed color schemes, and personalized accessories. Let us know your vision and we will bring it to life.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Setup typically takes 30 to 45 minutes depending on the package and customizations. We arrive early to ensure everything is perfect before your guests arrive. Breakdown takes about 20 to 30 minutes after the event.',
  },
  {
    question: 'What items are included with each cart?',
    answer:
      'Each cart comes fully stocked based on its theme. Candy Carts include a variety of candies and treats, Champagne Carts include glassware and accessories, Snack Carts include a curated snack selection, and Shot Carts include shot glasses and serving accessories. Specific item lists are provided upon booking.',
  },
  {
    question: 'Do you provide an attendant for the event?',
    answer:
      'Our basic packages are DIY, but we offer attendant service as an add-on for an additional fee. An attendant will manage the cart, serve guests, and ensure everything runs smoothly throughout your event.',
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
