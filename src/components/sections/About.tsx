import { motion } from "framer-motion";
import { Layers, Zap, Globe } from "lucide-react";
import profileImg from "/assets/Michael.jpeg";

const pillars = [
  {
    icon: Layers,
    title: "Full-Stack Systems",
    desc: "End-to-end ownership from architecture and backend APIs to polished frontend interfaces.",
  },
  {
    icon: Zap,
    title: "Production Focused",
    desc: "Everything I build is deployed, used by real people, and maintained for reliability.",
  },
  {
    icon: Globe,
    title: "Tech Agnostic",
    desc: "Comfortable across Node.js, React, Laravel, Flask, Firebase, Appwrite, and more.",
  },
];

export default function About() {
  return (
    <section
      className="py-28 relative"
      id="about"
      style={{
        background:
          "linear-gradient(180deg, hsl(222 26% 4%) 0%, hsl(222 24% 5.5%) 50%, hsl(222 26% 4%) 100%)",
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(16,185,129,0.4), transparent)",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/80 mb-3 block">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            The Engineer Behind the Work
          </h2>
          <div
            className="h-px w-20 rounded-full"
            style={{ background: "linear-gradient(90deg, #10b981, #06b6d4)" }}
          />
        </motion.div>

        {/* Main grid: photo left, text right */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="relative">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.08)",
                }}
              />
              {/* Gradient border */}
              <div
                className="relative p-px rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.5), rgba(6,182,212,0.4))",
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
              {/* Stats badge */}
              <div
                className="absolute -bottom-5 -right-5 px-5 py-3 rounded-xl border border-white/10 backdrop-blur-md"
                style={{ background: "rgba(6,10,16,0.9)" }}
              >
                <div className="text-2xl font-bold font-display grad-text">
                  3+
                </div>
                <div className="text-xs text-white/45 mt-0.5">
                  Years of Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-5 text-base text-white/55 leading-relaxed"
            >
              <p>
                I'm a full-stack software engineer and technical lead passionate
                about building systems that solve real operational and business
                problems.
              </p>
              <p>
                Over the past{" "}
                <span className="text-white/80 font-medium">3+ years</span>,
                I've worked across frontend development, backend engineering,
                API integrations, database architecture, deployment workflows,
                and mobile application packaging.
              </p>
              <p>
                My experience ranges from developing student collaboration
                systems and OCR platforms to{" "}
                <span className="text-white/80 font-medium">
                  leading the development of production-ready e-commerce and
                  customer management platforms.
                </span>
              </p>
              <p>
                I enjoy turning ideas into scalable digital products while
                balancing system performance, maintainability, and user
                experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] backdrop-blur-sm"
            >
              <span className="text-emerald-400 font-semibold text-sm block mb-2">
                What sets me apart
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                My ability to adapt quickly across technologies, own projects
                from planning to deployment, and contribute both technically and
                strategically during product development.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group p-6 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all duration-300 hover-glow"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.2))",
                  border: "1px solid rgba(16,185,129,0.25)",
                }}
              >
                <pillar.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white/90 mb-2 font-display">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
