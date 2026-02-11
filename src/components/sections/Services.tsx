import { motion } from "framer-motion";
import { CheckCircle2, Globe, Rocket, Link2, Cloud, Brain, Smartphone } from "lucide-react";
import SectionShell from "../shared/SectionShell";

const services = [
  {
    title: "Web Development",
    body: "Building scalable web apps with modern stacks (React, Next.js, Laravel, Node.js).",
    outcomes: ["Modern UI/UX", "Scalable architecture", "Fast performance"],
    icon: Globe,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "SaaS Product Engineering",
    body: "Improving onboarding, user conversion, and feature growth through smart product design and A/B testing.",
    outcomes: ["Higher conversion", "Better UX", "Growth metrics"],
    icon: Rocket,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Blockchain Solutions",
    body: "Smart contract development, Web3 integration, and secure DeFi/NFT platforms.",
    outcomes: ["Secure contracts", "Web3 integration", "DeFi platforms"],
    icon: Link2,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Cloud & DevOps",
    body: "AWS infrastructure, Dockerization, CI/CD pipelines, and performance monitoring.",
    outcomes: ["Scalable infrastructure", "Automated deployments", "Performance monitoring"],
    icon: Cloud,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "AI & Automation Engineering",
    body: "AI-powered apps, RAG chatbots, machine learning pipelines, CRM automation, and data-driven systems to improve efficiency and scale your business.",
    outcomes: ["AI solutions", "Automated workflows", "Data-driven insights"],
    icon: Brain,
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Mobile App Development",
    body: "Native and cross-platform mobile applications for iOS and Android, built with React Native, Flutter, and Swift for seamless user experiences.",
    outcomes: ["Native apps", "Cross-platform", "Seamless UX"],
    icon: Smartphone,
    gradient: "from-rose-500/20 to-pink-500/20"
  }
] as const;

const Services = () => {
  return (
    <SectionShell
      id="services"
      kicker="Our services"
      title="From idea to resilient, revenue-ready systems."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="glass-panel relative overflow-hidden rounded-2xl p-6 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-midas-gold/20 group-hover:bg-midas-gold/30 transition-colors">
                  <service.icon className="h-6 w-6 text-midas-gold-soft" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">{service.body}</p>
              <div className="flex flex-wrap gap-2">
                {service.outcomes.map((o) => (
                  <span
                    key={o}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-200 group-hover:border-midas-gold/40 transition-colors"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-midas-gold-soft" />
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

export default Services;

