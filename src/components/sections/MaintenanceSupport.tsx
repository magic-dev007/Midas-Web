import { motion } from "framer-motion";
import {
  Wrench,
  FileText,
  Zap,
  Shield,
  Cloud,
  Layers,
  AlertTriangle,
  CreditCard,
  Clock,
  UserCheck,
  FileX,
  Scale,
  Key,
  Image,
  CheckCircle2,
  Bug,
  Package,
  Server,
  BarChart3,
  MessageSquare,
  RefreshCw,
  Globe,
  Lock,
  Database,
} from "lucide-react";
import SectionShell from "../shared/SectionShell";

const MaintenanceSupport = () => {
  return (
    <SectionShell
      id="maintenance"
      kicker="Maintenance & Support"
      title="Ongoing care after launch"
      description="This Agreement defines the ongoing services we deliver after your project is completed—ensuring stability, security, and continuous improvement."
      viewportAmount={0.05}
    >
      <div className="space-y-8">
        {/* Purpose */}
        <motion.div
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midas-gold/20">
              <FileText className="h-5 w-5 text-midas-gold-soft" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Purpose of Agreement</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            This Maintenance & Support Agreement defines the ongoing services Midas Global Tech will deliver after the primary development project is completed and approved by the Client. It ensures continuous system stability, security, optimization, and improvements.
          </p>
        </motion.div>

        {/* Services Included - Plans */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            <Layers className="h-5 w-5 text-midas-gold-soft" />
            2. Services Included (Choose Your Plan)
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {/* Base Plan */}
            <motion.div
              className="glass-panel rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-5 w-5 text-midas-gold-soft" />
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">A. Monthly Maintenance (Base Plan)</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
                <li className="flex items-start gap-2"><Bug className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Routine bug fixes (non-critical, non-urgent)</li>
                <li className="flex items-start gap-2"><Package className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Dependency updates (frameworks, libraries, packages)</li>
                <li className="flex items-start gap-2"><Shield className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Security patches</li>
                <li className="flex items-start gap-2"><Server className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Server/hosting optimization (if we manage hosting)</li>
                <li className="flex items-start gap-2"><BarChart3 className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Performance monitoring</li>
                <li className="flex items-start gap-2"><FileText className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Monthly health check with report</li>
              </ul>
              <p className="text-xs text-slate-500 dark:text-slate-400"><strong>Response:</strong> 2–3 business days · Business hours only</p>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              className="glass-panel rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-midas-gold-soft" />
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">B. Priority Support (Premium Plan)</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Everything in the Base Plan plus:</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2"><Zap className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Fast bug resolution (24–48 hours)</li>
                <li className="flex items-start gap-2"><MessageSquare className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Direct communication channel</li>
                <li className="flex items-start gap-2"><Wrench className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Minor feature tweaks (up to 3 hours/month)</li>
                <li className="flex items-start gap-2"><RefreshCw className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Automatic deployments & backups</li>
                <li className="flex items-start gap-2"><BarChart3 className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Uptime monitoring</li>
              </ul>
            </motion.div>
          </div>

          {/* Hosting Add-On */}
          <motion.div
            className="glass-panel rounded-2xl p-6 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="h-5 w-5 text-midas-gold-soft" />
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">C. Hosting & Infrastructure Management (Optional Add-On)</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><Cloud className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Cloud infrastructure setup & management (AWS, Vercel, DigitalOcean, etc.)</li>
              <li className="flex items-start gap-2"><Key className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Credential management & environment configuration</li>
              <li className="flex items-start gap-2"><Server className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Ongoing server monitoring</li>
              <li className="flex items-start gap-2"><Database className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Backup scheduling and recovery procedures</li>
              <li className="flex items-start gap-2"><Globe className="h-4 w-4 text-midas-gold-soft mt-0.5 flex-shrink-0" />Domain, SSL, DNS management</li>
            </ul>
          </motion.div>

          {/* Feature Updates - Not Included */}
          <motion.div
            className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/40 p-5 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Layers className="h-5 w-5 text-midas-gold-soft" />
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">D. Feature Updates (Separate From Maintenance)</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Feature updates are NOT included in monthly maintenance. Examples: new dashboards, adding modules, UI redesigns, new automations, new integrations, expansion of functionalities. These require separate estimates and follow the normal project cycle.</p>
          </motion.div>
        </div>

        {/* What Is Not Included */}
        <motion.div
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
              <AlertTriangle className="h-5 w-5 text-red-500 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">3. What Is Not Included</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">This Agreement does NOT cover:</p>
          <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
            <li>Work caused by Client misuse</li>
            <li>Fixing issues in third-party apps or plugins we did not build</li>
            <li>Recovery from Client-side credential leaks</li>
            <li>Emergency fixes due to Client changes without approval</li>
            <li>Issues caused by hosting providers</li>
            <li>Upgrades that involve rebuilding major parts of the system</li>
            <li>Data loss caused by Client actions</li>
          </ul>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">These require new quotes.</p>
        </motion.div>

        {/* Payment Terms */}
        <motion.div
          className="glass-panel rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midas-gold/20">
              <CreditCard className="h-5 w-5 text-midas-gold-soft" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">4. Payment Terms</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
            <li>Monthly plans are billed in advance.</li>
            <li>No work begins until payment is confirmed.</li>
            <li>Late payments over 7 days may pause maintenance services.</li>
            <li>Plans may be upgraded or downgraded with 30-day written notice.</li>
          </ul>
        </motion.div>

        {/* Response & Resolution Times - Table */}
        <motion.div
          className="glass-panel rounded-2xl p-6 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midas-gold/20">
              <Clock className="h-5 w-5 text-midas-gold-soft" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">5. Response & Resolution Times</h3>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700/80">
            <table className="w-full text-sm text-slate-600 dark:text-slate-300">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50">
                  <th className="text-left font-semibold text-slate-900 dark:text-slate-100 p-3">Issue Type</th>
                  <th className="text-left font-semibold text-slate-900 dark:text-slate-100 p-3">Response Time</th>
                  <th className="text-left font-semibold text-slate-900 dark:text-slate-100 p-3">Resolution Window</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200/80 dark:border-slate-700/50">
                  <td className="p-3">Critical outage</td>
                  <td className="p-3">12–24 hours</td>
                  <td className="p-3">As soon as reasonably possible</td>
                </tr>
                <tr className="border-b border-slate-200/80 dark:border-slate-700/50">
                  <td className="p-3">Major bug</td>
                  <td className="p-3">24–48 hours</td>
                  <td className="p-3">1–5 days</td>
                </tr>
                <tr className="border-b border-slate-200/80 dark:border-slate-700/50">
                  <td className="p-3">Minor bug</td>
                  <td className="p-3">2–3 business days</td>
                  <td className="p-3">3–7 days</td>
                </tr>
                <tr>
                  <td className="p-3">Non-urgent requests</td>
                  <td className="p-3">Up to 5 days</td>
                  <td className="p-3">Based on scope</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Client Responsibilities, Term, Liability, Ownership, Portfolio, Acceptance */}
        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            className="glass-panel rounded-2xl p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <UserCheck className="h-5 w-5 text-midas-gold-soft" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">6. Client Responsibilities</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">To ensure smooth maintenance, the Client agrees to: provide timely access; avoid unauthorized code or server changes; keep credentials secure; notify before installing third-party tools; approve updates before deployment. If the Client breaks these rules, delays or issues are not the Provider&apos;s responsibility.</p>
          </motion.div>

          <motion.div
            className="glass-panel rounded-2xl p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.03 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FileX className="h-5 w-5 text-midas-gold-soft" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">7. Term & Cancellation</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">This Agreement begins when the Client pays for the monthly plan. Either party may cancel with 30 days&apos; notice. No refunds are given for unused time in the current billing cycle.</p>
          </motion.div>

          <motion.div
            className="glass-panel rounded-2xl p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.03 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Scale className="h-5 w-5 text-midas-gold-soft" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">8. Liability Limitation</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">Provider is not liable for: downtime caused by hosting providers; third-party API failures; issues caused by Client-side configuration; data loss if backups were turned off by the Client. Maximum liability is limited to the amount paid in the last 30 days.</p>
          </motion.div>

          <motion.div
            className="glass-panel rounded-2xl p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.03 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Lock className="h-5 w-5 text-midas-gold-soft" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">9. Ownership & Access</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">Client retains ownership of their system. Provider retains ownership of internal tools, proprietary frameworks, and automation scripts not included in the original project. Provider may request emergency access to fix outages.</p>
          </motion.div>
        </div>

        <motion.div
          className="glass-panel rounded-2xl p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Image className="h-5 w-5 text-midas-gold-soft" />
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">10. Portfolio Rights</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">Provider may showcase the system in portfolios unless the Client requests confidentiality in writing.</p>
        </motion.div>

        {/* Acceptance */}
        <motion.div
          className="rounded-2xl border-2 border-midas-gold/30 bg-midas-gold/5 dark:bg-midas-gold/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-midas-gold/20">
              <CheckCircle2 className="h-6 w-6 text-midas-gold-soft" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Acceptance</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">By paying the maintenance invoice, the Client agrees to the terms above.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
};

export default MaintenanceSupport;
