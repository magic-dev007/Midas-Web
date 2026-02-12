import { motion } from "framer-motion";
import { Lock, ShieldCheck, CreditCard, DollarSign, FileCheck, CheckCircle2, Wallet } from "lucide-react";
import SectionShell from "../shared/SectionShell";

const Payments = () => {
  return (
    <SectionShell
      id="payments"
      kicker="💰 Payments"
      title="Transparent & Secure Payment Process"
      description="At Midas Global Tech, we believe in transparent and secure payment processes that protect both our clients and our team."
    >
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="glass-panel rounded-2xl p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midas-gold/20">
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">Payment Structure</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative rounded-xl border border-midas-gold/20 bg-gradient-to-br from-slate-100 to-slate-50/80 p-5 transition-colors duration-300 dark:from-slate-900/80 dark:to-slate-800/40">
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-midas-gold/20 px-2.5 py-1 text-xs font-medium text-midas-gold-soft">
                    <Wallet className="h-3 w-3" />
                    Small Projects
                  </span>
                </div>
                <h4 className="text-base font-semibold text-midas-gold-soft mb-4 mt-2">Under $3,000</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-slate-100/80 dark:bg-slate-800/50 p-3 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-midas-gold/20">
                        <CreditCard className="h-4 w-4 text-midas-gold-soft" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors duration-300">Upfront</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">Project initiation</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-midas-gold-soft">50%</div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-100/80 dark:bg-slate-800/50 p-3 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-midas-gold/20">
                        <FileCheck className="h-4 w-4 text-midas-gold-soft" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors duration-300">Final Delivery</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">Upon approval</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-midas-gold-soft">50%</div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl border border-midas-gold/20 bg-gradient-to-br from-slate-100 to-slate-50/80 p-5 transition-colors duration-300 dark:from-slate-900/80 dark:to-slate-800/40">
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-midas-gold/20 px-2.5 py-1 text-xs font-medium text-midas-gold-soft">
                    <Wallet className="h-3 w-3" />
                    Larger Projects
                  </span>
                </div>
                <h4 className="text-base font-semibold text-midas-gold-soft mb-4 mt-2">$3,000+</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-slate-100/80 dark:bg-slate-800/50 p-3 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-midas-gold/20">
                        <CreditCard className="h-4 w-4 text-midas-gold-soft" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors duration-300">Upfront</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">Project initiation</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-midas-gold-soft">30%</div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-100/80 dark:bg-slate-800/50 p-3 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-midas-gold/20">
                        <CheckCircle2 className="h-4 w-4 text-midas-gold-soft" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors duration-300">Mid-Project</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">Key milestone</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-midas-gold-soft">40%</div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-100/80 dark:bg-slate-800/50 p-3 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-midas-gold/20">
                        <FileCheck className="h-4 w-4 text-midas-gold-soft" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors duration-300">Completion</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">Upon approval</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-midas-gold-soft">30%</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 italic transition-colors duration-300">
              Each milestone will have a clear scope and deliverables before payment is requested.
            </p>
          </motion.div>

          <motion.div
            className="glass-panel rounded-2xl p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-5 w-5 text-midas-gold-soft" />
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
                Money-Back Guarantee on Upfront Phase
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
              If we fail to deliver the initial agreed-upon scope in the first milestone, you receive a full refund of the upfront payment. Your investment is protected.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700/70 transition-colors duration-300">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2 transition-colors duration-300">
                <CreditCard className="h-4 w-4 text-midas-gold-soft" />
                Accepted Payment Methods
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 transition-colors duration-300">
                All transactions are encrypted and processed through trusted, industry-standard platforms. Invoices are provided for each milestone.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Stripe", icon: "/images/stripe.jpeg" },
                  { name: "PayPal", icon: "/images/paypal.png" },
                  { name: "Zelle", icon: "/images/zelle.png" },
                  { name: "Venmo", icon: "/images/venmo.png" },
                  { name: "Wise", icon: "/images/wise.png" }
                ].map((method) => (
                  <div
                    key={method.name}
                    className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 p-3 hover:border-midas-gold/40 transition-colors dark:border-slate-700/70 dark:bg-slate-800/50"
                  >
                    <img src={method.icon} alt={method.name} className="h-8 w-8" />
                    <span className="text-base font-medium text-slate-800 dark:text-slate-200 transition-colors duration-300">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2 transition-colors duration-300">
            <Lock className="h-5 w-5 text-midas-gold-soft" />
            Your Payment Security
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
            Payments are processed through secure, encrypted channels. No work begins until a milestone is confirmed. All payments come with official invoices.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "SSL Encrypted", icon: "🔒" },
              { label: "PCI Compliant", icon: "🛡️" },
              { label: "Secure Processing", icon: "✅" }
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-midas-gold/30 bg-midas-gold/10 text-sm font-medium text-midas-gold-soft"
              >
                <span>{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 transition-colors duration-300">
            For billing or payment assistance, contact us at{" "}
            <a href="mailto:midasglobaltech.us@gmail.com" className="text-midas-gold-soft hover:underline">
              midasglobaltech.us@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
};

export default Payments;

