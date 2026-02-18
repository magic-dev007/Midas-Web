import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Globe2, Mail, Loader2, AlertCircle } from "lucide-react";
import SectionShell from "../shared/SectionShell";
import Field from "../shared/Field";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_TEMPLATE_REPLY_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY_ID ?? "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!name || !email || !message) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage("Email is not configured. Please email us directly.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const templateParams = {
        name: name,
        email: email,
        message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // if (EMAILJS_TEMPLATE_REPLY_ID) {
      //   await new Promise((r) => setTimeout(r, 500));
      //   await emailjs.send(
      //     EMAILJS_SERVICE_ID,
      //     EMAILJS_TEMPLATE_REPLY_ID,
      //     { from_name: name, to_email: email },
      //     { publicKey: EMAILJS_PUBLIC_KEY }
      //   );
      // }

      form.reset();
      window.location.hash = "thank-you";
      window.scrollTo(0, 0);
    } catch (err) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Failed to send.";
      setErrorMessage(msg || "Something went wrong. Please email us directly.");
    }
  };

  return (
    <SectionShell
      id="contact"
      kicker="Get In Touch"
      title="Let's talk about your project. We'll reply within 24 hours."
      description=""
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel relative space-y-5 rounded-2xl p-6 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-midas-gold/10 blur-3xl" />
          <div className="relative">
          {status === "error" && (
            <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-700 dark:text-red-300">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">Could not send</p>
                <p className="mt-0.5">{errorMessage}</p>
                <a href="mailto:midasglobaltech.us@gmail.com" className="mt-2 inline-block font-medium underline">Email us directly</a>
              </div>
            </div>
          )}
          <Field label="Name" required>
            <input
              name="name"
              required
              placeholder="Your name"
              disabled={status === "sending"}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-midas-gold-soft focus:outline-none disabled:opacity-70 dark:border-slate-700/70 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-400 transition-colors duration-300"
            />
          </Field>
          <Field label="Email" required>
            <input
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              disabled={status === "sending"}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-midas-gold-soft focus:outline-none disabled:opacity-70 dark:border-slate-700/70 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-400 transition-colors duration-300"
            />
          </Field>
          <Field label="Message" required>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell us about your project..."
              disabled={status === "sending"}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-midas-gold-soft focus:outline-none disabled:opacity-70 dark:border-slate-700/70 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-400 transition-colors duration-300"
            />
          </Field>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-shimmer group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-midas-gold to-midas-gold-soft px-6 py-4 text-base font-semibold text-slate-950 shadow-glow-gold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-midas-gold/50 disabled:pointer-events-none disabled:opacity-80"
          >
            {status === "sending" ? (
              <>
                Sending…
                <Loader2 className="h-5 w-5 animate-spin" />
              </>
            ) : (
              <>
                Get a free quote
                <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
              </>
            )}
          </button>
          </div>
        </motion.form>

        <div className="space-y-4">
          <motion.div
            className="glass-panel relative rounded-2xl p-6 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-midas-gold/10 blur-2xl" />
            <div className="relative">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2 transition-colors duration-300">
                <Mail className="h-5 w-5 text-midas-gold-soft" />
                Or reach us directly
              </h3>
              <a
                href="mailto:midasglobaltech.us@gmail.com"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-base text-slate-800 hover:border-midas-gold/40 hover:bg-slate-200 transition-all group dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-midas-gold/20 group-hover:bg-midas-gold/30 transition-colors">
                  <Mail className="h-5 w-5 text-midas-gold-soft" />
                </div>
                <span className="font-medium">midasglobaltech.us@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel relative rounded-2xl p-5 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-midas-gold/20">
                <Globe2 className="h-5 w-5 text-midas-gold-soft" />
              </div>
              <div>
                <div className="font-semibold text-base text-slate-900 dark:text-slate-100 transition-colors duration-300">United States</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">Online Chat Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Contact;

