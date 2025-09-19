"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, BarChart3, Star } from "lucide-react";

export default function WhyFamiliesChooseUs() {
  const pillars = [
    {
      title: "Find – Strengths & Interests",
      icon: Lightbulb,
      description:
        "We uncover each student’s unique strengths and interests through psychometric tests, projects, and extracurricular exploration.",
    },
    {
      title: "Fit – Dream School Alignment",
      icon: Target,
      description:
        "We map those strengths to what top colleges value — prioritizing dream schools first, while ensuring alignment with leadership, research, and innovation.",
    },
    {
      title: "Frame – Build Impact",
      icon: BarChart3,
      description:
        "We guide students to translate activities into measurable outcomes — competitions, research papers, internships, and social impact projects.",
    },
    {
      title: "Flaunt – Stand Out",
      icon: Star,
      description:
        "We package their journey into a compelling USP through essays, resumes, portfolios, websites, and interviews that stand out to admissions officers.",
    },
  ];

  return (
    <section
      id="why"
      className="relative w-full bg-gray-50 py-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Why Families Choose <span className="text-indigo-600">Uni Discovery</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        >
          We uncover each student’s unique strengths, align them with top global universities, and turn their passions into world-class outcomes.
        </motion.p>
      </div>

      {/* Pillars Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <pillar.icon className="h-10 w-10 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
