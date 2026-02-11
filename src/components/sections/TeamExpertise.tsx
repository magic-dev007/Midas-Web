import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import SectionShell from "../shared/SectionShell";

const expertise = [
  "SaaS Platforms",
  "AI Systems",
  "Analytics Dashboards",
  "Web3 Apps",
  "Automation Tools",
  "Enterprise Backends"
] as const;

const TeamExpertise = () => {
  return (
    <SectionShell
      id="team-expertise"
      kicker="🚀 Expertise You Can Trust"
      title="Our Team Expertise"
      description="Our developers have contributed to SaaS platforms, AI systems, analytics dashboards, Web3 apps, automation tools, and enterprise-grade backends - now united under Midas Global Tech to deliver modern, high-performance digital solutions."
    >
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {expertise.map((item, index) => (
          <motion.div
            key={item}
            className="glass-panel rounded-2xl p-5 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <Rocket className="h-7 w-7 text-midas-gold-soft mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors duration-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

export default TeamExpertise;
