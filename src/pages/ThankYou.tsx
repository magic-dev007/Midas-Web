import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Mail } from "lucide-react";

const ThankYou = () => {

  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-16">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-64 w-96 rounded-full bg-midas-gold/15 blur-3xl" />
      </div>
      <motion.div
        className="relative flex max-w-lg flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.6, 0.35, 1] }}
      >
        <motion.div
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 ring-4 ring-green-500/20 dark:bg-green-500/15 dark:ring-green-500/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        >
          <CheckCircle2 className="h-10 w-10 text-green-500 dark:text-green-400" />
        </motion.div>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 sm:text-4xl">
          Thank you for reaching out!
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          We&apos;ve received your message and will get back to you within{" "}
          <span className="font-semibold text-midas-gold-soft">24 hours</span>.
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Check your email for a confirmation. If it&apos;s urgent, you can also contact us directly.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-midas-gold px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow-gold transition-all hover:bg-midas-gold-soft hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <a
            href="mailto:midasglobaltech.us@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-midas-gold/40 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Mail className="h-4 w-4" />
            Email us directly
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
