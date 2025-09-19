"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Brand Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Uni Discovery
          </motion.h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Guiding students on their journey to top global universities with
            personalized mentorship, programs, and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#why" className="hover:text-white transition">Why Families Choose Us</a></li>
            <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
            <li><a href="#timeline" className="hover:text-white transition">Timeline</a></li>
            <li><a href="#experts" className="hover:text-white transition">Experts</a></li>
            <li><a href="#results" className="hover:text-white transition">Results</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-indigo-400" />
              <a href="mailto:info@unidiscovery.com" className="hover:text-white transition">
                info@theunidiscovery.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-indigo-400" />
              <a href="tel:+911234567890" className="hover:text-white transition">
                +91 8146768347
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-indigo-400" />
              <span>Delhi, India</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to our newsletter for updates on programs and admissions.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Uni Discovery. All rights reserved.
      </div>
    </footer>
  );
}