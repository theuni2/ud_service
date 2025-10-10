"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, ClipboardList, Briefcase } from "lucide-react";

export default function RestWorldProgram() {
  return (
    <section
      id="rest-world"
      className="relative bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900"
        >
          Rest of the World Program
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-700"
        >
          Covering UK, SG, Canada, AU, Private Universities in India, Europe, and HK — tailored to maximize your admissions potential.
        </motion.p>
      </div>

      {/* Content Layout */}
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2">
        {/* Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-orange-600" />
            <h3 className="text-xl font-bold text-gray-900">Coverage</h3>
          </div>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li>
              <CheckCircle className="h-5 w-5 text-orange-600 inline mr-2" />
              10–12 colleges across 2–3 countries
            </li>
            <li>
              <CheckCircle className="h-5 w-5 text-orange-600 inline mr-2" />
              Regions: UK, SG, Canada, AU, India, Europe, HK
            </li>
            <li>
              <CheckCircle className="h-5 w-5 text-orange-600 inline mr-2" />
              Extracurriculars: 2–4 activities covered
            </li>
          </ul>
        </motion.div>

        {/* Admissions Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="h-8 w-8 text-orange-600" />
            <h3 className="text-xl font-bold text-gray-900">Admissions Strategy</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-sm sm:text-base">
            {[
              "Assessment",
              "Shortlisting",
              "Counselling & Planning",
              "Essay Editing",
              "Application Submission",
            ].map((item, i) => (
              <li key={i}>
                <CheckCircle className="h-4 w-4 text-orange-600 inline mr-2" />
                {item}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 mb-3 text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-orange-600" /> Profile Building
          </h4>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-sm sm:text-base">
            {[
              "1 Research Project",
              "1 Mini Project",
              "1 Internship",
              "3 Competitions",
              "PR & Visibility",
            ].map((item, i) => (
              <li key={i}>
                <CheckCircle className="h-4 w-4 text-orange-600 inline mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
