"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[85vh] w-full overflow-hidden bg-black"
    >
      {/* Background GIF */}
     <img src="/hero.gif" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />

      {/* Overlay Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get Into Top Global Universities With Expert-Backed Strategies
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          1:1 mentorship from Ivy League alumni + tailored profile-building plans — helping you stand out for Yale, Stanford, Oxford, and beyond.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Link
            href="https://forms.gle/K7Q4BP3srgLWdt9E6"
            className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold shadow-lg transition"
          >
            Book Free Consultation
          </Link>
          <Link
            href="#programs"
            className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 text-lg font-semibold hover:bg-white/20 transition"
          >
            See Our Programs
          </Link>
        </motion.div>

        {/* Social Proof Logos */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          {[
            "/logos/harvard.png",
            "/logos/stanford.png",
            "/logos/cu.png",
            "/logos/ivy.jpeg",
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="University Logo"
              className="h-8 sm:h-10 w-auto grayscale hover:grayscale-0 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}