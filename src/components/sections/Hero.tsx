import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative border-b border-slate-200 dark:border-slate-800/70 overflow-hidden scroll-mt-24 transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-72 w-[38rem] rounded-full bg-midas-gold/25 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:pt-20">
        <motion.div
          className="relative space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
        >
          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl transition-colors duration-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Building High-Performance
            <span className="block bg-gradient-to-r from-midas-gold via-midas-gold-soft to-slate-900 bg-clip-text text-transparent dark:to-slate-100">
              Web, AI & Blockchain Solutions
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            We help startups and businesses scale with full-stack, SaaS, and blockchain development - fast, reliable, and built for growth.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.45 }}
          >
            <Link
              to="/contact"
              className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-midas-gold to-midas-gold-soft px-8 py-4 text-base font-semibold text-slate-950 shadow-glow-gold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-midas-gold/50"
            >
              Let's Work Together
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <motion.div
            className="glass-panel relative overflow-hidden rounded-3xl p-5 shadow-xl"
            whileHover={{ y: -4, boxShadow: "0 24px 80px rgba(15,23,42,0.75)" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-midas-gold/10 blur-3xl" />
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 transition-colors duration-300">
              AMERICAN LEADERSHIP, GLOBAL EXPERTISE
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-200 transition-colors duration-300">
              We combine American leadership with global engineering expertise to deliver world-class software solutions that drive real business growth.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300 transition-colors duration-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-midas-gold-soft" />
                <span>10+ years average developer experience</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-midas-gold-soft" />
                <span>30+ combined years team experience</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-midas-gold-soft" />
                <span>Fast response time & transparent communication</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="glass-panel grid gap-3 rounded-3xl p-4 text-xs text-slate-600 dark:text-slate-300 transition-colors duration-300"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 210, damping: 20 }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-midas-gold-soft" />
              <span className="font-semibold text-slate-800 dark:text-slate-100 transition-colors duration-300">
                U.S. Leadership & Global Talent
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-[0.7rem] text-slate-500 dark:text-slate-400 transition-colors duration-300">
              <span className="rounded-full border border-slate-300 px-3 py-1 transition-colors duration-300 dark:border-slate-600/70">
                Web Development
              </span>
              <span className="rounded-full border border-slate-300 px-3 py-1 transition-colors duration-300 dark:border-slate-600/70">
                AI & Automation
              </span>
              <span className="rounded-full border border-slate-300 px-3 py-1 transition-colors duration-300 dark:border-slate-600/70">
                Blockchain Solutions
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

