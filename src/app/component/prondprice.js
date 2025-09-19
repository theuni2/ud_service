"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe2, BookOpen } from "lucide-react";

export default function ProgramsAndPricing() {
  const programs = [
    {
      title: "USA ++ Program",
      icon: GraduationCap,
      price: "₹12,00,000",
      description:
        "End-to-end USA admissions support + mix and match up to 2 other countries. Includes 10-12 colleges, 5-8 extracurriculars, essay editing, research, internships, projects, competitions, and PR visibility.",
      highlight: "Most Comprehensive",
      link:"/usplus"
    },
    {
      title: "Rest of the World Program",
      icon: Globe2,
      price: "₹6,20,000",
      description:
        "UK, Canada, Singapore, Australia, and Europe. Covers 10-12 colleges, 2-4 extracurriculars, essays, research, internships, and competitions. Ideal for non-USA focused students.",
      highlight: "Popular Choice",
      link:"/priceforrestworld"
    },
    {
      title: "Grades 6-8 Foundation Program",
      icon: BookOpen,
      price: "₹1,20,000 / year",
      description:
        "Foundation building for younger students. Choose 2 activities per year (e.g. launch a newsletter, build a prototype, social media page, AI chatbot). Includes mentorship calls + brainstorming sessions.",
      highlight: "Start Early",
      link:"/thirdprice"
    },
  ];

  return (
    <section id="programs" className="relative w-full bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Our Programs & Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        >
          Choose a program that matches your aspirations. Pay in easy installments. Get additional 10% discount if signed up within 2 weeks.
        </motion.p>
      </div>

      {/* Program Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-gray-100"
          >
            {program.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {program.highlight}
              </span>
            )}
            <div className="flex justify-center mb-6">
              <program.icon className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              {program.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
              {program.description}
            </p>
            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-gray-900">{program.price}</span>
            </div>
            <div className="flex justify-center">
              <a
                href={program.link}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        ))}
      </div> 
      
    </section>
  );
}
