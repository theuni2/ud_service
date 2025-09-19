"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Users, Trophy, FileText } from "lucide-react";

export default function TimelineSection() {
  const steps = [
    {
      title: "6th – 8th Grade: Exploration",
      icon: CalendarCheck,
      description:
        "Psychometric tests, early skill showcases, practice & pathways, community service projects — laying the foundation.",
    },
    {
      title: "9th – 10th Grade: Passion Projects",
      icon: Users,
      description:
        "Launch and scale passion projects, lead clubs, internships or mini-projects, and participate in summer programs and competitions.",
    },
    {
      title: "11th Grade: Research & Profile Deepening",
      icon: Trophy,
      description:
        "Research under professors, internships, resume & LinkedIn building, major competitions, PR visibility, and scholarship prep.",
    },
    {
      title: "12th Grade: Applications & Essays",
      icon: FileText,
      description:
        "Finalize college shortlist, essays, scholarships, interviews, and application filing. Alumni interview prep and submission support.",
    },
  ];

  return (
    <section id="timeline" className="relative bg-gray-50 py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Your Journey With Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        >
          A clear, step-by-step roadmap that builds depth and consistency from middle school to final college applications.
        </motion.p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 hidden sm:block" />
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative sm:flex sm:items-center sm:gap-8 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="sm:w-1/2 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
