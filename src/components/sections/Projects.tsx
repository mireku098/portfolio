import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Phluowise Business Platform",
    subtitle: "Water Distribution E-Commerce & Customer Management System",
    description: "A production-ready business platform designed for water distribution companies and their customers. The system provides customer ordering workflows, account management, business operations support, authentication systems, messaging functionality, and mobile deployment support.",
    highlights: [
      "Full-stack business platform architecture",
      "Firebase authentication and messaging integration",
      "Appwrite backend services implementation",
      "Android deployment workflows (AAB/APK)",
      "Production-ready customer application",
      "Responsive frontend design",
    ],
    technologies: ["React", "Node.js", "Firebase", "Appwrite", "Android Studio"],
    github: "https://github.com/mireku098",
    live: "#",
    buttons: ["View GitHub", "View Live System"],
  },
  {
    number: "02",
    title: "Citsa Konnect",
    subtitle: "Student Collaboration & Networking Platform",
    description: "A centralized collaboration platform designed to improve communication and networking among students and alumni. Built to replace fragmented communication systems and provide a structured digital platform for collaboration, networking, and interaction.",
    highlights: [
      "Authentication & role-based access",
      "Private messaging system",
      "Student networking features",
      "Centralized communication workflows",
      "Backend service architecture",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/mireku098",
    live: "#",
    buttons: ["View GitHub", "View Case Study"],
  },
  {
    number: "03",
    title: "OCR Hub",
    subtitle: "AI-Powered OCR & Document Processing Platform",
    description: "A web-based OCR application designed to extract text from images and PDF documents using integrated OCR services and backend processing workflows.",
    highlights: [
      "OCR extraction from images and PDFs",
      "API integrations and backend workflows",
      "File processing pipelines",
      "Responsive frontend interface",
      "Publicly accessible deployment",
    ],
    technologies: ["PHP", "Flask", "OCR APIs", "Bootstrap"],
    github: "https://github.com/mireku098",
    live: "#",
    buttons: ["View Live Demo", "View GitHub"],
  },
];

export default function Projects() {
  return (
    <section className="py-28 relative" id="projects"
      style={{ background: "linear-gradient(180deg, hsl(222 26% 4%) 0%, hsl(222 24% 5.5%) 50%, hsl(222 26% 4%) 100%)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(16,185,129,0.4), transparent)" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/80 mb-3 block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
          <div className="h-px w-20 rounded-full" style={{ background: "linear-gradient(90deg, #10b981, #06b6d4)" }} />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              data-testid={`card-project-${index}`}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-emerald-500/25 hover:bg-white/[0.05]"
              style={{ transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
              whileHover={{ y: -4, boxShadow: "0 0 40px -8px rgba(16,185,129,0.2), 0 0 80px -20px rgba(6,182,212,0.12)" }}
            >
              {/* Large ghost number */}
              <div className="absolute -right-6 -top-8 text-[12rem] font-bold font-display pointer-events-none select-none leading-none"
                style={{ color: "rgba(255,255,255,0.025)", transition: "opacity 0.3s" }}>
                {project.number}
              </div>

              <div className="relative z-10 p-8 md:p-10 grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8 space-y-5">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400/70 mb-2 block">{project.subtitle}</span>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-white/90">{project.title}</h3>
                  </div>

                  <p className="text-white/50 leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400/70 mb-3 block">Highlights</span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-white/45">
                          <span className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", minWidth: 4, minHeight: 4 }} />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium text-white/60 border border-white/10 bg-white/[0.04] hover:border-emerald-500/30 hover:text-emerald-300/80 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="md:col-span-4 flex flex-col gap-3 md:justify-end md:h-full">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-medium text-sm text-white/70 border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    {project.buttons[0]}
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", boxShadow: "0 0 20px -6px rgba(16,185,129,0.5)" }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    {project.buttons[1]}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
