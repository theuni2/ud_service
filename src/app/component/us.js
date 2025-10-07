// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, XCircle } from "lucide-react";

// export default function PricingUSA() {
//   return (
//     <section id="pricing-usa" className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-24 px-6 sm:px-8 lg:px-12">
//       <div className="max-w-6xl mx-auto text-center mb-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-extrabold text-gray-900 tracking-tight"
//         >
//           USA ++ Program Pricing
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="mt-6 max-w-3xl mx-auto text-lg text-gray-700"
//         >
//           Explore our structured admissions package — covering college strategy, profile building, and application execution.
//         </motion.p>
//       </div>

//       {/* Modern Pricing Layout */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8"
//       >
//         {/* Coverage */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition">
//           <h3 className="text-xl font-bold text-indigo-700 mb-4">Coverage</h3>
//           <ul className="space-y-3 text-gray-700 text-sm">
//             <li><CheckCircle className="h-4 w-4 text-indigo-600 inline mr-2" />10–12 colleges across 2–3 countries</li>
//             <li><CheckCircle className="h-4 w-4 text-indigo-600 inline mr-2" />Example: 7–8 USA, 2–3 AU, 1 UCAS (5 colleges)</li>
//             <li><CheckCircle className="h-4 w-4 text-indigo-600 inline mr-2" />Extracurriculars: 5–8 activities covered</li>
//           </ul>
//         </div>

//         {/* Admissions Strategy */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition">
//           <h3 className="text-xl font-bold text-indigo-700 mb-4">Admissions Strategy</h3>
//           <ul className="space-y-3 text-gray-700 text-sm">
//             {[
//               "Assessment",
//               "Shortlisting",
//               "End-to-End Counselling & Planning",
//               "Essay Editing",
//               "Application Filing & Final Submission",
//             ].map((item, i) => (
//               <li key={i}><CheckCircle className="h-4 w-4 text-indigo-600 inline mr-2" />{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Profile Building */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition">
//           <h3 className="text-xl font-bold text-indigo-700 mb-4">Profile Building</h3>
//           <ul className="space-y-3 text-gray-700 text-sm">
//             {[
//               "1 Research Project",
//               "1 Main Project",
//               "1 Mini Project",
//               "2 Internships",
//               "4–5 Competitions",
//               "PR & Visibility",
//             ].map((item, i) => (
//               <li key={i}><CheckCircle className="h-4 w-4 text-indigo-600 inline mr-2" />{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Price */}
//         <div className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Price (INR)</h3>
//             <p className="text-4xl font-extrabold">₹12,00,000</p>
//             <p className="text-sm opacity-90 mt-2 mb-6">Category 1 – 5.5 Lakhs | Category 2 – 6.5 Lakhs</p>
//             <ul className="space-y-3 text-sm">
//               <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />10% discount if signed within 2 weeks (₹10.8L)</li>
//               <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Installments available: 3–4</li>
//               <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Grade 7/8 early start: ~₹1.5L per year</li>
//             </ul>
//           </div>
//           <a
//             href="#cta"
//             className="mt-8 block w-full text-center bg-white text-indigo-700 font-semibold py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
//           >
//             Book Free Consultation
//           </a>
//         </div>
//       </motion.div>

//       {/* Additional Info Section */}
//       <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-12">
//         {/* What We Cover */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-gradient-to-tr from-green-50 to-white rounded-3xl shadow-xl p-10 border border-green-100 hover:shadow-2xl transition"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">✅ What We Cover</h3>
//           <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
//             <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Psychometric Assessment</li>
//             <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Brainstorming & Planning</li>
//             <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Execution Support</li>
//             <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Weekly to Bi-Weekly Calls</li>
//             <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Competition & Publication Recommendations</li>
//           </ul>
//         </motion.div>

//         {/* What We Don't Cover */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="bg-gradient-to-tr from-red-50 to-white rounded-3xl shadow-xl p-10 border border-red-100 hover:shadow-2xl transition"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">❌ What We Don’t Cover</h3>
//           <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
//             <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />Publisher costs for papers/books/websites</li>
//             <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />Prototype procurement costs (robots, devices)</li>
//             <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />School tuitions (SAT, AP, IELTS, IB, etc.)</li>
//             <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />College application or summer school fees</li>
//             <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />VISA costs</li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, GraduationCap, ClipboardList, Briefcase } from "lucide-react";

export default function PricingUSA() {
  return (
    <section id="pricing-usa" className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900"
        >
          USA ++ Program Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-700"
        >
          A complete solution that guides students from strategy to execution, ensuring global admissions success.
        </motion.p>
      </div>

      {/* Pricing Layout */}
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">Coverage</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
              <li><CheckCircle className="h-5 w-5 text-indigo-600 inline mr-2" />10–12 colleges across 2–3 countries</li>
              <li><CheckCircle className="h-5 w-5 text-indigo-600 inline mr-2" />Example: 7–8 USA, 2–3 AU, 1 UCAS (5 colleges)</li>
              <li><CheckCircle className="h-5 w-5 text-indigo-600 inline mr-2" />Extracurriculars: 5–8 activities covered</li>
            </ul>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">Admissions Strategy</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-sm sm:text-base">
              {["Assessment","Shortlisting","Counselling & Planning","Essay Editing","Application Submission"].map((item,i)=>(
                <li key={i}><CheckCircle className="h-4 w-4 text-indigo-600 inline mr-2" />{item}</li>
              ))}
            </ul>

            <h4 className="mt-6 mb-3 text-lg font-semibold text-gray-900 flex items-center gap-2"><Briefcase className="h-5 w-5 text-indigo-600" /> Profile Building</h4>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-sm sm:text-base">
              {["1 Research Project","1 Main Project","1 Mini Project","2 Internships","4–5 Competitions","PR & Visibility"].map((item,i)=>(
                <li key={i}><CheckCircle className="h-4 w-4 text-indigo-600 inline mr-2" />{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Price Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold mb-3">Price (INR)</h3>
            <p className="text-4xl sm:text-5xl font-extrabold">₹12,00,000</p>
            <p className="text-xs sm:text-sm opacity-90 mt-2 mb-6">Category 1 – 5.5 Lakhs | Category 2 – 6.5 Lakhs</p>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />10% discount if signed within 2 weeks (₹10.8L)</li>
              <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Installments available: 3–4</li>
              <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Grade 7/8 early start: ~₹1.5L per year</li>
            </ul>
          </div>
          <a
            href="https://www.theunidiscovery.com/contact"
            className="mt-8 block w-full text-center bg-white text-indigo-700 font-semibold py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-7xl mx-auto mt-20 grid gap-8 md:grid-cols-2">
        {/* What We Cover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-tr from-green-50 to-white rounded-2xl shadow-md p-6 sm:p-10 border border-green-100 hover:shadow-xl transition"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">✅ What We Cover</h3>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
            <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Psychometric Assessment</li>
            <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Brainstorming & Planning</li>
            <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Execution Support</li>
            <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Weekly to Bi-Weekly Calls</li>
            <li><CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />Competition & Publication Recommendations</li>
          </ul>
        </motion.div>

        {/* What We Don't Cover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-tr from-red-50 to-white rounded-2xl shadow-md p-6 sm:p-10 border border-red-100 hover:shadow-xl transition"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">❌ What We Don’t Cover</h3>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
            <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />Publisher costs for papers/books/websites</li>
            <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />Prototype procurement costs (robots, devices)</li>
            <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />School tuitions (SAT, AP, IELTS, IB, etc.)</li>
            <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />College application or summer school fees</li>
            <li><XCircle className="h-5 w-5 text-red-500 inline mr-2" />VISA costs</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
