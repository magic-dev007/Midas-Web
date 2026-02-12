import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  kicker: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Viewport amount (0–1) needed to trigger section animation; default 0.3. Use 0.05 for sections at bottom of page. */
  viewportAmount?: number;
};

const SectionShell = ({
  id,
  kicker,
  title,
  description,
  children,
  viewportAmount = 0.3
}: SectionShellProps) => {
  return (
    <motion.section
      id={id}
      className="border-b border-slate-200 dark:border-slate-800/70 scroll-mt-24 transition-colors duration-300"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-midas-gold-soft">
            {kicker}
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl transition-colors duration-300">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg transition-colors duration-300">
              {description}
            </p>
          ) : null}
        </motion.div>
        <div className="mt-8">{children}</div>
      </div>
    </motion.section>
  );
};

export default SectionShell;

