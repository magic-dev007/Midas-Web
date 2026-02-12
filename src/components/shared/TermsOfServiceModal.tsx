import { useEffect } from "react";
import {
  X,
  FileText,
  Briefcase,
  ClipboardList,
  CreditCard,
  Copyright,
  Lock,
  GitBranch,
  Server,
  Users,
  AlertTriangle,
  Package,
  LogOut,
  Globe,
  Scale,
  FileEdit,
  Mail,
} from "lucide-react";

type TermsOfServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm transition-opacity"
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 transition-colors duration-300">
        <div className="flex items-center justify-between flex-shrink-0 border-b border-slate-200 dark:border-slate-700/80 px-6 py-4">
          <h2 id="terms-title" className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            <FileText className="h-5 w-5 text-midas-gold-soft" />
            Terms of Service
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex flex-1 min-h-0 flex-col">
          <div className="absolute left-0 right-3 top-0 h-6 bg-gradient-to-b from-white to-transparent dark:from-slate-900 pointer-events-none z-10" />
          <div className="privacy-modal-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 text-sm text-slate-600 dark:text-slate-300">
            <p className="mb-6 text-slate-500 dark:text-slate-400">
              Last Updated: February 2026
            </p>
            <p className="mb-6">
              Welcome to Midas Global Tech. By accessing or using our website (midasglobaltech.com) or engaging with our services, you agree to these Terms of Service. Please read them carefully.
            </p>
            <p className="mb-6">
              If you do not agree with these terms, please do not use our website or services.
            </p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Briefcase className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              1. Services Provided
            </h3>
            <p className="mb-2">Midas Global Tech offers:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Custom software development</li>
              <li>SaaS platform development</li>
              <li>AI and automation engineering</li>
              <li>Web and mobile application development</li>
              <li>Blockchain and Web3 solutions</li>
              <li>Cloud architecture and DevOps services</li>
            </ul>
            <p className="mb-6">All services are provided based on the agreed project scope, timeline, and payment structure defined in each project proposal or contract.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <ClipboardList className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              2. Project Engagement &amp; Requirements
            </h3>
            <p className="mb-2">To begin any project, clients must provide:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Clear requirements and documentation</li>
              <li>Access to necessary accounts, APIs, or systems</li>
              <li>Timely feedback and approvals</li>
            </ul>
            <p className="mb-6">Delays in providing information may result in project timeline extensions.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <CreditCard className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              3. Payment Terms
            </h3>
            <p className="mb-4">Our payment structure is as follows:</p>
            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">Projects Under $3,000</h4>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>50% upfront</li>
              <li>50% upon final delivery</li>
            </ul>
            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">Projects $3,000+</h4>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>30% upfront</li>
              <li>40% mid-project milestone</li>
              <li>30% upon completion</li>
            </ul>
            <p className="mb-4">All payments are processed through secure third-party payment providers such as Stripe, PayPal, Zelle, Wise, or bank transfer (where applicable).</p>
            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">Refund Policy</h4>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>The upfront payment for a project is refundable ONLY if we fail to deliver the initial agreed-upon scope of the first milestone.</li>
              <li>Once a milestone is delivered and approved, payments for that milestone become non-refundable.</li>
            </ul>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Copyright className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              4. Intellectual Property
            </h3>
            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">4.1 Client Ownership</h4>
            <p className="mb-2">Upon full payment of all project invoices:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>The client owns the final delivered source code, designs, and documentation.</li>
              <li>Any third-party tools, libraries, or services remain subject to their respective licenses.</li>
            </ul>
            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">4.2 Agency Portfolio Usage</h4>
            <p className="mb-2">We reserve the right to showcase project metadata, screenshots, and non-sensitive features in our portfolio, unless the client requests confidentiality in writing.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Lock className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              5. Confidentiality
            </h3>
            <p className="mb-2">We maintain strict confidentiality regarding all client information, code, business data, and internal processes.</p>
            <p className="mb-6">Similarly, clients agree not to disclose our development practices, internal documents, or pricing structures without written consent.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <GitBranch className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              6. Revisions &amp; Scope Changes
            </h3>
            <p className="mb-2">Revisions included in the project will be clearly defined in the proposal.</p>
            <p className="mb-2">Any changes beyond the original scope (new features, redesigns, integrations, etc.) will require:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>A separate quote</li>
              <li>Approval from both parties</li>
              <li>Additional payment, if applicable</li>
            </ul>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Server className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              7. Website &amp; API Access
            </h3>
            <p className="mb-2">If we deploy software on hosting environments, servers, APIs, or third-party platforms:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Access and credentials remain the responsibility of the client.</li>
              <li>We are not responsible for third-party outages, provider failures, or account suspensions.</li>
              <li>Clients must maintain their own backups unless a separate maintenance plan is signed.</li>
            </ul>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Users className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              8. Client Responsibilities
            </h3>
            <p className="mb-2">Clients agree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Provide accurate and timely information</li>
              <li>Respond to messages, approval requests, and questions promptly</li>
              <li>Ensure they have rights to all materials provided (images, logos, data, etc.)</li>
              <li>Use the delivered software responsibly and lawfully</li>
            </ul>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <AlertTriangle className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              9. Limitation of Liability
            </h3>
            <p className="mb-2">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Midas Global Tech is not liable for indirect, incidental, or consequential damages.</li>
              <li>We are not responsible for losses resulting from client misuse, third-party failures, hosting issues, or unauthorized modifications.</li>
              <li>Our liability is limited to the amount paid for the specific service in question.</li>
            </ul>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Package className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              10. Third-Party Tools &amp; Integrations
            </h3>
            <p className="mb-2">We may use third-party APIs, libraries, or services. We are not responsible for changes in their functionality, pricing adjustments, outages, or policy restrictions.</p>
            <p className="mb-6">If a third-party service breaks or changes, additional development may be required at additional cost.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <LogOut className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              11. Termination
            </h3>
            <p className="mb-2">Either party may terminate a project if:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>A payment deadline is missed</li>
              <li>The client becomes unresponsive for 10+ business days</li>
              <li>Either party violates these Terms</li>
            </ul>
            <p className="mb-6">Payments for delivered milestones are non-refundable.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Scale className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              12. Governing Law
            </h3>
            <p className="mb-6">These Terms are governed by the laws of the United States, without regard to conflict-of-law principles.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <FileEdit className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              13. Updates to These Terms
            </h3>
            <p className="mb-6">We may update these Terms of Service at any time. Changes will be posted on this page with a new &quot;Last Updated&quot; date.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Mail className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              14. Contact Us
            </h3>
            <p className="mb-2">For questions, legal inquiries, or support, contact us at:</p>
            <ul className="list-none mb-8 space-y-1">
              <li className="flex items-center gap-2"><Mail className="h-3 w-3 text-midas-gold-soft flex-shrink-0" /><a href="mailto:midasglobaltech.us@gmail.com" className="text-midas-gold-soft hover:underline">midasglobaltech.us@gmail.com</a></li>
              <li className="flex items-center gap-2"><Globe className="h-3 w-3 text-midas-gold-soft flex-shrink-0" /><a href="https://midasglobaltech.com" target="_blank" rel="noopener noreferrer" className="text-midas-gold-soft hover:underline">midasglobaltech.com</a></li>
            </ul>
          </div>
          <div className="absolute left-0 right-3 bottom-0 h-6 bg-gradient-to-t from-white to-transparent dark:from-slate-900 pointer-events-none z-10" />
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
