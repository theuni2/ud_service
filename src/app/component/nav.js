// import React from 'react'

// export default function Nav() {
//   return (
//     <div>

//     </div>
//   )
// }

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ logoSrc = "/logo.png", offset = 120 }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "why", label: "Why Families Choose Us", href: "#why" },
    { id: "programs", label: "Programs & Pricing", href: "#programs" },
    // { id: "pricing", label: "Pricing", href: "#pricing" },
    { id: "timeline", label: "Timeline", href: "#timeline" },
    { id: "experts", label: "Experts", href: "#experts" },
    { id: "results", label: "Results & Testimonials", href: "#results" },
    // { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];

  // Helper: safely resolve a DOM element for a link
  const getElementForLink = (link) => {
    if (typeof window === "undefined") return null;
    // Prefer element with matching id (more common for sections)
    const byId = document.getElementById(link.id);
    if (byId) return byId;

    // Fallback to the selector in href (e.g., "#why")
    try {
      return document.querySelector(link.href);
    } catch (err) {
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;

    const onScroll = () => {
      if (!mounted) return;
      try {
        const fromTop = window.scrollY + offset; // offset for fixed navbar
        let current = links[0].id;

        for (const link of links) {
          const el = getElementForLink(link);
          // IMPORTANT: guard against null before accessing offsetTop
          if (el && typeof el.offsetTop === "number" && el.offsetTop <= fromTop) {
            current = link.id;
          }
        }

        setActive(current);
      } catch (err) {
        // Prevent runtime crashes caused by unexpected DOM changes.
        // In development, log the error to help debugging.
        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line no-console
          console.error("Navbar onScroll error:", err);
        }
      }
    };

    // Run once after a short delay so that sections have a chance to mount
    const t = setTimeout(onScroll, 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      mounted = false;
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // links is static in this component, so empty deps are OK.
    // offset is allowed to be changed by the caller.
  }, [offset]);

  // Smooth scroll handler for anchor links (prevents jump and closes mobile menu)
  const handleNavClick = (e, href) => {
    // Allow opening in new tab (ctrl/cmd/shift/alt click) to behave normally
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
    e.preventDefault();

    try {
      const el = document.querySelector(href);
      if (el && typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Compensate for fixed header by nudging up a bit after the smooth scroll
        // (small timeout so the browser has started scrolling)
        setTimeout(() => window.scrollBy(0, -(offset - 20)), 300);
      } else {
        // Fallback: set the hash so the browser will attempt to jump
        window.location.hash = href;
      }
    } catch (err) {
      if (process.env.NODE_ENV === "development") console.error("handleNavClick error:", err);
      window.location.hash = href;
    }

    setOpen(false);
  };

  // Close mobile menu when URL hash changes (user clicked a plain anchor elsewhere)
  useEffect(() => {
    const closeOnHash = () => setOpen(false);
    window.addEventListener("hashchange", closeOnHash);
    return () => window.removeEventListener("hashchange", closeOnHash);
  }, []);

  return (
    <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img src='/logos/ud.png' alt="Uni Discovery" className="h-10 w-auto" />
              {/* <span className="hidden sm:inline-block font-semibold text-gray-800">Uni Discovery</span> */}
            </Link>
          </div>

          {/* Desktop Links */}
          <nav role="navigation" aria-label="Primary" className="hidden md:flex items-center space-x-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                aria-current={active === l.id ? "page" : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 hover:bg-gray-50 transition ${
                  active === l.id ? "text-indigo-600 underline underline-offset-4" : "text-gray-700"
                }`}
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 transition"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? "block" : "hidden"} border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              aria-current={active === l.id ? "page" : undefined}
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 ${
                active === l.id ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              {l.label}
            </a>
          ))}

          <div className="px-3 py-3">
            <a
              href="https://www.theunidiscovery.com/contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full block text-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
