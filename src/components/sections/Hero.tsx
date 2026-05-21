import { motion } from "framer-motion";
import { MapPin, Download, ArrowRight, Code2 } from "lucide-react";
import profileImg from "/assets/michael2.jpeg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="hero"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Ambient glows */}
      <div
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Text column */}
          <div className="md:col-span-8">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-medium text-white/60 tracking-wide">
                Based in Accra, Ghana · Open to Remote Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold font-display leading-[1.08] tracking-tight mb-6"
            >
              Full-Stack Software Engineer Building{" "}
              <span className="grad-text">Scalable Business Systems</span> &
              Production-Ready Digital Products
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/55 mb-6 max-w-2xl leading-relaxed"
            >
              I design, develop, and deploy modern web and mobile applications
              focused on real-world business solutions, scalable backend
              systems, and product-driven engineering.
            </motion.p>

            {/* Quick intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10 max-w-2xl"
            >
              <div className="flex items-start gap-3 px-5 py-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] backdrop-blur-sm">
                <Code2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">
                  I specialize in full-stack engineering, backend architecture,
                  cloud integrations, and technical project leadership — having
                  shipped customer platforms, e-commerce systems, OCR
                  applications, and production-ready business solutions using{" "}
                  <span className="text-white/80">
                    Node.js, React, Laravel, Flask, Firebase, Appwrite, and
                    MySQL.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="btn-view-projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  boxShadow: "0 0 24px -4px rgba(16,185,129,0.45)",
                }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/michael-mireku-cv.pdf"
                download
                data-testid="btn-download-cv"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white/80 border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="btn-contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300 group"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:flex md:col-span-4 justify-center"
          >
            <div className="relative">
              {/* Glow ring behind photo */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.2))",
                  filter: "blur(24px)",
                  transform: "scale(1.1)",
                }}
              />
              {/* Gradient border frame */}
              <div
                className="relative p-px rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.6), rgba(6,182,212,0.5))",
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ background: "hsl(222 22% 7%)" }}
                >
                  <img
                    src={profileImg}
                    alt="Michael Mireku"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Floating name badge */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl border border-white/10 backdrop-blur-md"
                style={{ background: "rgba(6,10,16,0.85)" }}
              >
                <div className="text-sm font-bold font-display text-white/90">
                  Michael Mireku
                </div>
                <div className="text-xs grad-text font-medium">
                  Full-Stack Engineer
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(222 26% 4%), transparent)",
        }}
      />
    </section>
  );
}
