import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <section className="py-24 bg-card/30" id="github">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">GitHub Activity</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <img 
              src="https://github-readme-stats.vercel.app/api?username=mireku098&show_icons=true&theme=dark&bg_color=0a0f0a&title_color=22c55e&icon_color=22c55e&text_color=e5e7eb&border_color=262626&hide_border=false" 
              alt="Mireku's GitHub Stats" 
              className="w-full rounded-xl shadow-lg border border-border"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mireku098&layout=compact&theme=dark&bg_color=0a0f0a&title_color=22c55e&text_color=e5e7eb&border_color=262626&hide_border=false" 
              alt="Mireku's Top Languages" 
              className="w-full rounded-xl shadow-lg border border-border"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
