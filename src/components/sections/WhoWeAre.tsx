import { motion } from "framer-motion";
import SectionShell from "../shared/SectionShell";

const stats = [
  {
    label: "Years Avg. Developer Experience",
    value: "10+"
  },
  {
    label: "Combined Years Team Experience",
    value: "30+"
  },
  {
    label: "Response Time",
    value: "Fast"
  },
  {
    label: "Leadership & Talent",
    value: "U.S."
  }
] as const;

const WhoWeAre = () => {
  return (
    <SectionShell
      id="about"
      kicker="About Midas Global Tech"
      title="Building Tomorrow's Digital Solutions"
      description="We combine American leadership with global engineering expertise to deliver world-class software solutions"
    >
      <div className="space-y-8">
        <motion.div
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300">Who We Are</h3>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">
            Midas Global Tech is a U.S.-based software development agency that bridges the gap between ambitious businesses and world-class engineering talent.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">
            Founded by <span className="text-midas-gold-soft font-semibold">Michael De Bari</span>, we combine strategic American leadership with international technical expertise to deliver high-quality software solutions that drive real business growth.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
            Our mission is simple: to build technology that scales with your business and exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-panel group relative rounded-2xl p-6 text-center overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.05,
                duration: 0.45,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-midas-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-midas-gold via-midas-gold-soft to-midas-gold bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

export default WhoWeAre;

