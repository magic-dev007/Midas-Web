import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionShell from "../shared/SectionShell";

const benefits = [
  "Senior engineers with 10+ years average experience",
  "U.S.-based leadership with a high-skill global dev team",
  "Expertise across Web, SaaS, AI, Automation & Blockchain",
  "Clean, scalable code built with industry-best practices",
  "Transparent communication and weekly progress updates",
  "Fast turnaround time and flexible project engagement",
  "Focus on reliability, long-term value, and measurable results"
] as const;

const WhyChoose = () => {
  return (
    <SectionShell
      id="why-choose"
      kicker="Why Choose Midas Global Tech?"
      title="🚀 Expertise You Can Trust"
      description=""
    >
      <div className="grid gap-4 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit}
            className="glass-panel group relative flex gap-4 rounded-2xl p-5 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-midas-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midas-gold/20 group-hover:bg-midas-gold/30 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-midas-gold-soft" />
              </div>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed transition-colors duration-300">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

export default WhyChoose;

