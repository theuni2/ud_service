"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "When should we start the program?",
      answer:
        "The earlier, the better. Starting from grade 6 or 7 helps build a consistent profile, but we also support students who join in later years with tailored strategies.",
    },
    {
      question: "Do you offer installment plans for the fees?",
      answer:
        "Yes, we provide flexible installment options to make the program accessible for families. You can choose quarterly or half-yearly payments.",
    },
    {
      question: "How personalized is the guidance?",
      answer:
        "Each student is assigned a dedicated mentor and subject-specific experts. The program is customized according to the student’s strengths, interests, and target universities.",
    },
    {
      question: "Do you guarantee admissions to top universities?",
      answer:
        "We don’t guarantee admissions, as that depends on each student’s performance. However, our proven framework and mentorship have helped 1000+ students reach top global universities.",
    },
    {
      question: "What is included in the program?",
      answer:
        "From psychometric testing to essay reviews, research projects, internships, and application filing — we cover the entire journey end-to-end.",
    },
  ];

  return (
    <section id="faq" className="relative bg-gray-50 py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        >
          Answers to the most common questions families ask before joining our programs.
        </motion.p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-2xl bg-white shadow-md border border-gray-100">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group p-6 cursor-pointer hover:bg-gray-50 transition"
          >
            <summary className="flex justify-between items-center font-semibold text-gray-900 text-lg">
              {faq.question}
              <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
