import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Client & Business Solutions" },
  { value: "Live", label: "Production Systems in Use" },
  { value: "Pub", label: "Apps on Google Play Store" },
  { value: "E2E", label: "Systems Built Concept to Deploy" },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(222 26% 4%) 0%, hsl(222 24% 5.5%) 50%, hsl(222 26% 4%) 100%)" }}>
      {/* Gradient band */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.06) 50%, rgba(16,185,129,0.04) 100%)" }} />
      {/* Top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.35) 50%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.35) 50%, transparent 100%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center space-y-2 p-4"
            >
              <div
                className="text-4xl md:text-5xl font-bold font-display"
                style={{
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 18px rgba(16,185,129,0.4))"
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium text-white/45 max-w-[130px] leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
