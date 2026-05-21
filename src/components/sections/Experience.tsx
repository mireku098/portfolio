import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Head of Development / Technical Team Lead",
    company: "Phluowise Company LTD",
    period: "2026 – Present",
    badge: "Current",
    description: "Leading the development of a full-scale e-commerce and customer management platform for water distribution companies and their customers.",
    contributions: [
      "Managing frontend, backend, and mobile development workflows",
      "Designing scalable system architecture and feature planning",
      "Integrating Appwrite backend services and Firebase authentication systems",
      "Building customer-facing interfaces and business management systems",
      "Converting web applications into Android-ready releases using Android Studio",
      "Publishing and maintaining production applications on Google Play Store",
      "Coordinating technical decisions and product implementation workflows",
    ],
    technologies: ["React", "Node.js", "Firebase", "Appwrite", "Android Studio", "MySQL"],
  },
  {
    title: "Web Developer",
    company: "Ropat Systems",
    period: "2025 – Present",
    badge: "Current",
    description: "Contributing to internal and client-facing business systems while supporting backend development, feature implementation, bug fixing, deployment, and system maintenance.",
    contributions: [
      "Optimized production systems and database performance",
      "Refactored legacy codebases for maintainability and scalability",
      "Assisted in deployment, hotfixes, and post-release maintenance",
      "Worked across frontend and backend application layers",
      "Collaborated with stakeholders to implement technical business solutions",
    ],
    technologies: ["PHP (Laravel)", "Node.js", "React", "MySQL", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section className="py-28 relative" id="experience">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.4), transparent)" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/80 mb-3 block">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Professional Experience</h2>
          <div className="h-px w-20 rounded-full" style={{ background: "linear-gradient(90deg, #10b981, #06b6d4)" }} />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-5 top-6 bottom-6 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.5), rgba(6,182,212,0.3), transparent)" }} />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(6,182,212,0.25))", border: "1px solid rgba(16,185,129,0.4)" }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }} />
                </div>

                {/* Card */}
                <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 hover:border-emerald-500/25 hover:bg-white/[0.05] transition-all duration-400 hover-glow">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold font-display text-white/90">{exp.title}</h3>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full text-emerald-300"
                          style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                          {exp.badge}
                        </span>
                      </div>
                      <div className="grad-text font-semibold text-sm">{exp.company}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40 shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-white/60 mb-6 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2.5 mb-7">
                    {exp.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                        <span className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", minWidth: "4px", minHeight: "4px" }} />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium text-emerald-300/80 border border-emerald-500/20 bg-emerald-500/[0.08]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
