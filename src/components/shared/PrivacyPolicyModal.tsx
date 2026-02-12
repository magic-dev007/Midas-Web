import { useEffect } from "react";
import {
  X,
  Shield,
  Database,
  Target,
  Share2,
  Cookie,
  Lock,
  Clock,
  Scale,
  Globe,
  ExternalLink,
  FileEdit,
  Mail,
} from "lucide-react";

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
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
      aria-labelledby="privacy-policy-title"
    >
      {/* Overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm transition-opacity"
        aria-label="Close modal"
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 transition-colors duration-300">
        {/* Header */}
        <div className="flex items-center justify-between flex-shrink-0 border-b border-slate-200 dark:border-slate-700/80 px-6 py-4">
          <h2 id="privacy-policy-title" className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            <Shield className="h-5 w-5 text-midas-gold-soft" />
            Privacy Policy
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

        {/* Scrollable content with slim scrollbar + fade edges */}
        <div className="relative flex flex-1 min-h-0 flex-col">
          <div className="absolute left-0 right-3 top-0 h-6 bg-gradient-to-b from-white to-transparent dark:from-slate-900 pointer-events-none z-10" />
          <div className="privacy-modal-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 text-sm text-slate-600 dark:text-slate-300">
            <p className="mb-6 text-slate-500 dark:text-slate-400">
              Last Updated: February 2026
            </p>
            <p className="mb-6">
              Midas Global Tech is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, submit a project inquiry, or communicate with us.
            </p>
            <p className="mb-6">
              By using our website (midasglobaltech.com), you agree to the practices described in this policy.
            </p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Database className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              1. Information We Collect
            </h3>
            <p className="mb-4">We collect the following types of information:</p>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">1.1 Information You Provide Directly</h4>
            <p className="mb-2">When you fill out forms, request a quote, or contact us, we may collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name (if applicable)</li>
              <li>Project details or messages you submit</li>
              <li>Phone number (if provided)</li>
            </ul>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">1.2 Automatically Collected Information</h4>
            <p className="mb-2">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Pages viewed</li>
              <li>Time spent on the site</li>
              <li>Cookies and usage data</li>
            </ul>
            <p className="mb-6">We may use third-party analytics tools (e.g., Google Analytics) to measure traffic and performance.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Target className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              2. How We Use Your Information
            </h3>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Respond to your inquiries</li>
              <li>Provide project estimates or proposals</li>
              <li>Communicate during ongoing projects</li>
              <li>Improve our website, services, and user experience</li>
              <li>Maintain security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mb-6">We do not sell or rent your personal data.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Share2 className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              3. Sharing Your Information
            </h3>
            <p className="mb-4">We may share your information only under these conditions:</p>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">3.1 Service Providers</h4>
            <p className="mb-2">With trusted partners who help us operate our business, such as:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Hosting providers</li>
              <li>Email and communication tools</li>
              <li>Analytics platforms</li>
            </ul>
            <p className="mb-4">These providers are required to protect your information.</p>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">3.2 Legal Requirements</h4>
            <p className="mb-2">We may disclose information if:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Required by law</li>
              <li>Needed to enforce our policies</li>
              <li>Necessary to protect rights, safety, or security</li>
            </ul>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Cookie className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              4. Cookies and Tracking Technologies
            </h3>
            <p className="mb-2">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Analyze website traffic</li>
              <li>Improve performance</li>
              <li>Enhance user experience</li>
            </ul>
            <p className="mb-6">You may disable cookies through your browser settings, but some features may not work properly.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Lock className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              5. Data Security
            </h3>
            <p className="mb-6">We maintain industry-standard security measures to protect your information from unauthorized access, loss, misuse, and modification. No method of transmission over the internet is 100% secure, but we take reasonable steps to safeguard all data.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Clock className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              6. Data Retention
            </h3>
            <p className="mb-6">We retain your information only as long as necessary to fulfill the purpose for which it was collected and to comply with legal and business requirements. You may request deletion at any time.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Scale className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              7. Your Rights
            </h3>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Access your personal data</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Opt out of communications</li>
            </ul>
            <p className="mb-6">To exercise these rights, contact us at midasglobaltech.us@gmail.com</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Globe className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              8. International Transfers
            </h3>
            <p className="mb-6">As a U.S.-based company working with global clients, your data may be stored or processed in other countries. We take measures to ensure appropriate protection regardless of location.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <ExternalLink className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              9. Third-Party Links
            </h3>
            <p className="mb-6">Our website may contain links to external websites. We are not responsible for the content or practices of those sites.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <FileEdit className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              10. Updates to This Policy
            </h3>
            <p className="mb-6">We may update this Privacy Policy periodically. Changes will be posted on this page with an updated &quot;Last Updated&quot; date.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Mail className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              11. Contact Us
            </h3>
            <p className="mb-2">If you have questions about this Privacy Policy or your data, please contact us:</p>
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

export default PrivacyPolicyModal;
