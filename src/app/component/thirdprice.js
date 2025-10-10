// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, ClipboardList, BookOpen } from "lucide-react";

// export default function PricingMiddleGrades() {
//   return (
//     <section id="pricing-middle" className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900"
//         >
//           Deliverables for 6–8 Graders
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-700"
//         >
//           Foundation-building packages designed for Grades 6, 7, and 8 with tailored activities and mentorship.
//         </motion.p>
//       </div>

//       <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
//         {/* Psychometric Assessment */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <BookOpen className="h-8 w-8 text-yellow-600" />
//             <h3 className="text-xl font-bold text-gray-900">Psychometric Assessment</h3>
//           </div>
//           <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
//             <li><CheckCircle className="h-5 w-5 text-yellow-600 inline mr-2" />Detailed career breakdown</li>
//             <li><CheckCircle className="h-5 w-5 text-yellow-600 inline mr-2" />Brainstorming session with counselor & founder</li>
//             <li><CheckCircle className="h-5 w-5 text-yellow-600 inline mr-2" />List of ideas and directions to pursue</li>
//           </ul>
//           <p className="mt-4 text-sm text-gray-500">Pricing: ₹30,000 (adjustable with overall package)</p>
//         </motion.div>

//         {/* Grade Activities */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <ClipboardList className="h-8 w-8 text-yellow-600" />
//             <h3 className="text-xl font-bold text-gray-900">Grades 6–8 Activities</h3>
//           </div>
//           <p className="text-sm sm:text-base text-gray-700 mb-4">Choose <span className="font-semibold">2 activities</span> in a given year:</p>
//           <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
//             <li>Launch a poem/storybook</li>
//             <li>Launch social media page (24 posts incl. edits & script)</li>
//             <li>Launch a robot/prototype</li>
//             <li>Launch a YouTube channel</li>
//             <li>Launch a newsletter</li>
//             <li>Launch a website (HTML/coding)</li>
//             <li>Launch an AI chatbot</li>
//             <li>Brainstorm capstones (no launch)</li>
//             <li>Launch poster campaign</li>
//           </ol>
//           <p className="mt-6 text-sm text-gray-500">Complimentary: 1–2 mentorship talks on pros/cons of different fields</p>
//         </motion.div>

//         {/* Pricing */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-between"
//         >
//           <div>
//             {/* <h3 className="text-xl font-bold mb-3">Price (INR)</h3> */}
//             {/* <p className="text-4xl sm:text-5xl font-extrabold">₹1,20,000 / grade</p> */}
//             <p className="text-xs sm:text-sm opacity-90 mt-2 mb-6">Covers 2 activities + mentorship for 1 year</p>
//             <ul className="space-y-3 text-sm sm:text-base">
//               <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Projects last 12–15 weeks</li>
//               <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Sessions held evenings/weekends for convenience</li>
//               <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Calls spaced monthly considering school & travel</li>
//             </ul>
//           </div>
//           <a
//             href="https://www.theunidiscovery.com/contact"
//             className="mt-8 block w-full text-center bg-white text-yellow-700 font-semibold py-3 rounded-lg shadow hover:bg-gray-100 transition"
//           >
//             Book Free Consultation
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, BookOpen } from "lucide-react";

export default function PricingMiddleGrades() {
  return (
    <section id="pricing-middle" className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900"
        >
          Deliverables for 6–8 Graders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-700"
        >
          Foundation-building packages designed for Grades 6, 7, and 8 with tailored activities and mentorship.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
        {/* Psychometric Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-yellow-600" />
            <h3 className="text-xl font-bold text-gray-900">Psychometric Assessment</h3>
          </div>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li><CheckCircle className="h-5 w-5 text-yellow-600 inline mr-2" />Detailed career breakdown</li>
            <li><CheckCircle className="h-5 w-5 text-yellow-600 inline mr-2" />Brainstorming session with counselor & founder</li>
            <li><CheckCircle className="h-5 w-5 text-yellow-600 inline mr-2" />List of ideas and directions to pursue</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">Pricing: ₹30,000 (adjustable with overall package)</p>
        </motion.div>

        {/* Grade Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="h-8 w-8 text-yellow-600" />
            <h3 className="text-xl font-bold text-gray-900">Grades 6–8 Activities</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-700 mb-4">Choose <span className="font-semibold">2 activities</span> in a given year:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Launch a poem/storybook</li>
            <li>Launch social media page (24 posts incl. edits & script)</li>
            <li>Launch a robot/prototype</li>
            <li>Launch a YouTube channel</li>
            <li>Launch a newsletter</li>
            <li>Launch a website (HTML/coding)</li>
            <li>Launch an AI chatbot</li>
            <li>Brainstorm capstones (no launch)</li>
            <li>Launch poster campaign</li>
          </ol>
          <p className="mt-6 text-sm text-gray-500">Complimentary: 1–2 mentorship talks on pros/cons of different fields</p>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            {/* <h3 className="text-xl font-bold mb-3">Price (INR)</h3> */}
            {/* <p className="text-4xl sm:text-5xl font-extrabold">₹1,20,000 / grade</p> */}
            <p className="text-xs sm:text-sm opacity-90 mt-2 mb-6">Covers 2 activities + mentorship for 1 year</p>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Projects last 12–15 weeks</li>
              <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Sessions held evenings/weekends for convenience</li>
              <li><CheckCircle className="h-4 w-4 text-green-300 inline mr-2" />Calls spaced monthly considering school & travel</li>
            </ul>
          </div>
          <a
            href="https://forms.gle/K7Q4BP3srgLWdt9E6"
            className="mt-8 block w-full text-center bg-white text-yellow-700 font-semibold py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

