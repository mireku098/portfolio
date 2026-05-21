import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: "rgba(6,10,16,0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 30px -8px rgba(0,0,0,0.5)"
      } : {}}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => { setActiveSection(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-xl font-bold font-display tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-white/90">Mireku</span>
          <span className="grad-text">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                data-testid={`nav-link-${link.id}`}
                className="relative text-sm font-medium transition-colors duration-200 group"
              >
                <span className={isActive ? "text-white/90" : "text-white/40 group-hover:text-white/75"}>
                  {link.name}
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #10b981, #06b6d4)",
                    width: isActive ? "100%" : "0%",
                  }}
                />
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 rounded-full opacity-50"
                    style={{ background: "linear-gradient(90deg, #10b981, #06b6d4)" }} />
                )}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo("contact")}
            data-testid="nav-hire-me"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", boxShadow: "0 0 16px -4px rgba(16,185,129,0.4)" }}
          >
            Hire Me
          </button>
        </nav>

        <button className="md:hidden text-white/60 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
