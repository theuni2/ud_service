"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExpertsSection() {
  const experts = [
    {
      role: "Co-ED, AIGA | Co-founder, Foossa | Educator & Facilitator (NYU)",
      image: "/professor/prof1.png",
    },
    {
      role: "CDO, Michigan Medicine | $1.5B+ Raised | Philanthropy Consultant (University of Michigan)",
      image: "/professor/prof2.png",
    },
    {
      role: "Professor at UIUC & VP, Chaozhou Three-Circle Group",
      image: "/professor/prof3.png",
    },
  ];

  return (
    <section id="experts" className="relative w-full bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Meet Our Experts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        >
          Our team of global mentors, admissions counsellors, and subject matter experts have guided 1000+ students into top global universities.
        </motion.p>
      </div>

      {/* Expert Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100 text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={expert.image}
                alt={expert.role}
                className="h-24 w-24 rounded-full object-cover border-2 border-indigo-600 shadow"
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{expert.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}