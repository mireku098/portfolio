import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "#10b981",
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Responsive UI Development"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "#06b6d4",
    skills: ["Node.js", "Express.js", "PHP (Laravel)", "Flask", "Django", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    color: "#10b981",
    skills: ["MySQL", "MongoDB", "Firebase", "Appwrite"],
  },
  {
    icon: Wrench,
    title: "Tools & Deployment",
    color: "#06b6d4",
    skills: ["Git & GitHub", "Linux", "cPanel", "Android Studio", "Deployment & Maintenance"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section className="py-28 relative" id="skills">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.4), transparent)" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/80 mb-3 block">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Technical Skills</h2>
          <div className="h-px w-20 rounded-full" style={{ background: "linear-gradient(90deg, #10b981, #06b6d4)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-8 hover:border-emerald-500/20 hover:bg-white/[0.05] transition-all duration-400 hover-glow"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                    border: `1px solid ${category.color}35`
                  }}>
                  <category.icon className="w-4 h-4" style={{ color: category.color }} />
                </div>
                <h3 className="font-bold font-display text-white/85">{category.title}</h3>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 border border-white/[0.08] bg-white/[0.04] hover:border-emerald-500/30 hover:text-emerald-300/80 hover:bg-emerald-500/[0.08] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
