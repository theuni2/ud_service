"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResultsTestimonials() {
  const admits = [
    { name: "Aprajita", college: "University of Melbourne", logo: "/logos/uom.png", image: "/testimonial/img1.png" },
    // { name: "Bhavya", college: "University of Illinois", logo: "/testimonial/illinois.png", image: "/students/bhavya.jpg" },
    { name: "Hetvi", college: "New York Institute of Technology", logo: "/logos/nyi.png", image: "/testimonial/img2.png" },
    { name: "Jaskirat", college: "London School of Economics", logo: "/logos/lse.png", image: "/testimonial/img3.png" },
    { name: "Bhavya", college: "Columbia University", logo: "/logos/cu.png", image: "/testimonial/img4.png" },
    { name: "Suhani", college: "Imperial College", logo: "/logos/imperial.png", image: "/testimonial/img5.png" },
    { name: "Loshinee", college: "Imperial College", logo: "/logos/warwick.png", image: "/testimonial/img6.png" },
    // { name: "Loshinee", college: "Imperial College", logo: "/logos/durham_uni.png", image: "/testimonial/img6.png" },
    { name: "Safira", college: "Columbia University", logo: "/logos/cu.png", image: "/testimonial/img7.png" },
    { name: "Ishaani", college: "Darthmouth University", logo: "/logos/dartmouth.png", image: "/testimonial/img8.png" },
    // { name: "Riti", college: "Cornell University", logo: "/logos/cornell.png", image: "/students/riti.jpg" },
    // { name: "Suhani", college: "Imperial College London", logo: "/logos/imperial.png", image: "/students/suhani.jpg" },
    // { name: "Loshinee", college: "University of Toronto", logo: "/logos/toronto.png", image: "/students/loshinee.jpg" },
    // { name: "Safira", college: "Columbia University", logo: "/logos/columbia.png", image: "/students/safira.jpg" },
    // { name: "Ishaani", college: "Daulat Ram College", logo: "/logos/dram.png", image: "/students/ishaani.jpg" },
  ];

  return (
    <section id="results" className="relative bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Student Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
        >
          Our students have been admitted to top global universities. Here’s a snapshot of their achievements.
        </motion.p>
      </div>

      {/* Admits Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {admits.map((admit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative bg-[#FFB800] rounded-2xl shadow-md p-6 flex flex-col items-center justify-between text-center border border-yellow-400"
          >
            <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 rounded">
              ADMITTED
            </span>
            <img
              src={admit.image}
              alt={admit.name}
              className="h-40 w-30 rounded-xl object-cover border-2 border-white shadow mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">{admit.name}</h3>
            <div className="flex items-center gap-2 mt-3">
              <img
                src={admit.logo}
                alt={admit.college}
                className="h-8 w-auto"
              />
              <span className="text-sm font-medium text-gray-900">
                {admit.college}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
