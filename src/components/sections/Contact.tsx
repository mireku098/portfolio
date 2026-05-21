import { motion } from "framer-motion";
import { Mail, Github, MapPin, Phone, Download } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-28 relative" id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(16,185,129,0.4), transparent)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-10 md:p-16">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center mb-10"
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/80 mb-3 block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-5">
                Let's Build <span className="grad-text">Something Great</span>
              </h2>
              <p className="text-white/45 max-w-2xl mx-auto text-sm leading-relaxed">
                Open to remote opportunities · Full-stack engineering roles · Backend roles · Technical lead positions · Freelance & contract · Startup collaborations
              </p>
            </motion.div>

            {/* Contact pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative z-10 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 mb-10"
            >
              {[
                { href: "mailto:michaelmireku098@gmail.com", icon: Mail, label: "michaelmireku098@gmail.com" },
                { href: "tel:+233206546759", icon: Phone, label: "+233 20 654 6759" },
                { href: "tel:+233531377527", icon: Phone, label: "+233 53 137 7527" },
                { href: null, icon: MapPin, label: "Accra, Ghana" },
              ].map(({ href, icon: Icon, label }) =>
                href ? (
                  <a key={label} href={href}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm text-white/55 border border-white/[0.08] bg-white/[0.04] hover:border-emerald-500/30 hover:text-white/80 hover:bg-emerald-500/[0.07] transition-all duration-300">
                    <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                    {label}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm text-white/55 border border-white/[0.08] bg-white/[0.04]">
                    <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                    {label}
                  </div>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex flex-wrap justify-center gap-4"
            >
              <a href="mailto:michaelmireku098@gmail.com" data-testid="btn-contact-me"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", boxShadow: "0 0 28px -6px rgba(16,185,129,0.5)" }}>
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a href="/michael-mireku-cv.pdf" download data-testid="btn-download-cv"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white/75 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300">
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a href="https://github.com/mireku098" target="_blank" rel="noreferrer" data-testid="btn-view-github"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white/75 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300">
                <Github className="w-4 h-4" />
                View GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/[0.05] pt-8 text-center text-sm text-white/25">
        <p>© {new Date().getFullYear()} Michael Mireku. All rights reserved.</p>
        <p className="mt-1.5">Built with React, Tailwind CSS & Framer Motion.</p>
      </footer>
    </section>
  );
}
