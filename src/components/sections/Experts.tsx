import { motion } from "framer-motion";
import SectionShell from "../shared/SectionShell";

const specialties = [
  {
    label: "Full-Stack Engineering",
    emoji: "💻"
  },
  {
    label: "AI/ML Development",
    emoji: "🤖"
  },
  {
    label: "Blockchain & Web3",
    emoji: "⛓️"
  },
  {
    label: "Cloud Architecture",
    emoji: "☁️"
  }
] as const;

const Experts = () => {
  return (
    <SectionShell
      id="team"
      kicker="👥 Our Team"
      title="Expert Engineers Delivering Excellence"
      description="A specialized team of senior developers building world-class digital solutions"
    >
      <div className="space-y-6">
        <motion.div
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300">Our Team</h3>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">
            At Midas Global Tech, we work with a specialized team of Senior Full-Stack, AI/ML, Blockchain, and Cloud engineers.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.label}
              className="glass-panel group relative rounded-2xl p-6 text-center overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-midas-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{specialty.emoji}</div>
                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300">{specialty.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
            Our developers bring years of professional experience building scalable, modern, and high-performance digital products for startups and established companies worldwide.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-3 transition-colors duration-300">
            We collaborate closely across frontend, backend, automation, DevOps, and Web3 to deliver fast, reliable, and future-proof solutions tailored to your business needs.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-3 font-semibold text-midas-gold-soft transition-colors duration-300">
            Together, we combine strategy, code, and creativity to deliver top-tier engineering.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
};

export default Experts;

