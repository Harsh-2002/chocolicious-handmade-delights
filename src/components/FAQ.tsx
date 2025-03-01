
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: 'faq-1',
      question: 'Are all your cakes 100% vegetarian?',
      answer: 'Yes, all our cakes and desserts are 100% vegetarian and egg-free. We use special techniques and ingredients to ensure our eggless cakes have the same delicious taste and texture as traditional cakes.'
    },
    {
      id: 'faq-2',
      question: 'How far in advance should I place my order?',
      answer: 'For regular cakes, we recommend placing your order at least 24 hours in advance. For custom designs or special occasion cakes, please order 48-72 hours ahead. During peak seasons (festivals, holidays), earlier orders are advisable to ensure availability.'
    },
    {
      id: 'faq-3',
      question: 'Do you offer delivery services?',
      answer: 'Yes, we offer free delivery within 3km of our location in Jogeshwari, Mumbai. For locations beyond this radius, a nominal delivery charge applies based on distance. You can also pick up your order directly from our store.'
    },
    {
      id: 'faq-4',
      question: 'Can I get a custom design cake?',
      answer: 'Absolutely! We specialize in custom cake designs. You can provide us with your ideas, images, or themes, and our talented bakers will create a beautiful cake to match your vision. Custom design services may incur additional charges depending on complexity.'
    },
    {
      id: 'faq-5',
      question: 'What dietary options do you offer?',
      answer: 'Besides our standard vegetarian options, we also offer sugar-free cakes, gluten-free options, and vegan cakes upon request. Please specify any dietary requirements when placing your order.'
    },
    {
      id: 'faq-6',
      question: 'How should I store my cake?',
      answer: 'For best taste and freshness, our cakes should be refrigerated. We recommend consuming the cake within 3 days. Before serving, allow the cake to reach room temperature for about 30 minutes to enhance flavor and texture.'
    },
    {
      id: 'faq-7',
      question: 'Do you cater for large events or corporate orders?',
      answer: 'Yes, we cater for weddings, corporate events, and large celebrations. For bulk orders, we offer special pricing. Please contact us at least a week in advance for event catering to discuss your requirements.'
    },
    {
      id: 'faq-8',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, all major credit/debit cards, UPI payments, and bank transfers. For custom orders or large events, we require a 50% advance payment to confirm your booking.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our cakes and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border-b border-cream-200 last:border-0"
              >
                <AccordionTrigger className="py-5 text-left font-serif font-medium text-chocolate-800 hover:text-caramel-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-chocolate-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-chocolate-700 mb-6">
            Still have questions? Contact us directly
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
