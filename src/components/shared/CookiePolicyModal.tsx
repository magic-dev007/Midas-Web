import { useEffect } from "react";
import {
  X,
  Cookie,
  HelpCircle,
  ShieldOff,
  Sliders,
  FileEdit,
  Mail,
} from "lucide-react";

type CookiePolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CookiePolicyModal = ({ isOpen, onClose }: CookiePolicyModalProps) => {
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
      aria-labelledby="cookie-policy-title"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm transition-opacity"
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 transition-colors duration-300">
        <div className="flex items-center justify-between flex-shrink-0 border-b border-slate-200 dark:border-slate-700/80 px-6 py-4">
          <h2 id="cookie-policy-title" className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            <Cookie className="h-5 w-5 text-midas-gold-soft" />
            Cookie Policy
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
              Last updated: February 2026
            </p>
            <p className="mb-6">
              This Cookie Policy explains how Midas Global Tech (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website at midasglobaltech.com and any related pages (the &quot;Site&quot;).
            </p>
            <p className="mb-6">
              By using our Site, you agree to the use of cookies as described in this policy.
            </p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <HelpCircle className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              1. What Are Cookies?
            </h3>
            <p className="mb-2">Cookies are small text files placed on your device when you visit a website. They help the site function properly, improve performance, and provide a better user experience.</p>
            <p className="mb-2">Cookies can be:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li><strong>Essential</strong> – required for the site to function.</li>
              <li><strong>Analytics</strong> – measure traffic and usage.</li>
              <li><strong>Functional</strong> – remember preferences.</li>
              <li><strong>Marketing</strong> – used for advertising and tracking.</li>
            </ul>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Cookie className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              2. How We Use Cookies
            </h3>
            <p className="mb-4">Midas Global Tech uses cookies for the following purposes:</p>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">a. Essential Cookies</h4>
            <p className="mb-4">These enable core functionality such as navigation, security, and form submissions. Without these cookies, the site may not work properly.</p>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">b. Performance &amp; Analytics Cookies</h4>
            <p className="mb-2">These help us understand how visitors use our Site, so we can improve:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Page load speed</li>
              <li>Content layout</li>
              <li>Navigation flow</li>
            </ul>
            <p className="mb-2">Tools that may use analytics cookies include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Vercel Analytics</li>
              <li>Google Analytics (if activated in the future)</li>
            </ul>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">c. Functionality Cookies</h4>
            <p className="mb-2">Used to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Remember your form inputs</li>
              <li>Provide consistent appearance</li>
              <li>Maintain your browsing preferences</li>
            </ul>

            <h4 className="mt-4 mb-2 font-medium text-slate-800 dark:text-slate-200">d. Third-Party Cookies</h4>
            <p className="mb-2">Some third-party services may place cookies on your device, including:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Vercel hosting infrastructure</li>
              <li>Email/contact form services</li>
              <li>Payment or integration tools (Stripe, PayPal, etc.)</li>
              <li>Embedded scripts or fonts</li>
            </ul>
            <p className="mb-6">These providers have their own privacy policies.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <ShieldOff className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              3. Cookies We Do NOT Use
            </h3>
            <p className="mb-2">We do not intentionally use:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Advertising cookies</li>
              <li>Behavioral targeting cookies</li>
              <li>Social media tracking pixels</li>
            </ul>
            <p className="mb-6">If this changes, we will update this policy.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Sliders className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              4. How to Control Cookies
            </h3>
            <p className="mb-2">You can manage or disable cookies anytime through your browser settings.</p>
            <p className="mb-2">Common options include:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Receive warnings before cookies are stored</li>
            </ul>
            <p className="mb-6">Please note: disabling cookies may impact parts of the Site&apos;s functionality.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <FileEdit className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              5. Updates to This Policy
            </h3>
            <p className="mb-2">We may update this Cookie Policy from time to time to reflect:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Changes in technology</li>
              <li>Legal requirements</li>
              <li>Updates to our Site</li>
            </ul>
            <p className="mb-6">The date at the top of this page indicates the latest revision.</p>

            <h3 className="mt-8 mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <Mail className="h-4 w-4 text-midas-gold-soft flex-shrink-0" />
              6. Contact Us
            </h3>
            <p className="mb-2">If you have questions about this Cookie Policy or your data, contact us at:</p>
            <ul className="list-none mb-8 space-y-1">
              <li className="flex items-center gap-2">
                <Mail className="h-3 w-3 text-midas-gold-soft flex-shrink-0" />
                <a href="mailto:midasglobaltech.us@gmail.com" className="text-midas-gold-soft hover:underline">midasglobaltech.us@gmail.com</a></li>
            </ul>
          </div>
          <div className="absolute left-0 right-3 bottom-0 h-6 bg-gradient-to-t from-white to-transparent dark:from-slate-900 pointer-events-none z-10" />
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
