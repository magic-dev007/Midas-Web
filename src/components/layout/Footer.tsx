import { useState } from "react";
import { Mail } from "lucide-react";
import PrivacyPolicyModal from "../shared/PrivacyPolicyModal";
import TermsOfServiceModal from "../shared/TermsOfServiceModal";
import CookiePolicyModal from "../shared/CookiePolicyModal";

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);

  return (
    <>
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/90 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-midas-gold via-midas-gold-soft to-midas-gold-deep">
                <span className="text-sm font-semibold text-slate-950">M</span>
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">Midas Global Tech</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
              Building high-performance web & blockchain solutions. We combine American leadership with global engineering expertise.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-[0.1em] transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
              <li><a href="#about" className="hover:text-midas-gold-soft transition">About Us</a></li>
              <li><a href="#services" className="hover:text-midas-gold-soft transition">Services</a></li>
              <li><a href="#technologies" className="hover:text-midas-gold-soft transition">Technologies</a></li>
              <li><a href="#portfolio" className="hover:text-midas-gold-soft transition">Portfolio</a></li>
              <li><a href="#team" className="hover:text-midas-gold-soft transition">Team</a></li>
              <li><a href="#payments" className="hover:text-midas-gold-soft transition">Payments</a></li>
              <li><a href="#contact" className="hover:text-midas-gold-soft transition">Contact</a></li>
              <li><a href="#maintenance" className="hover:text-midas-gold-soft transition">Maintenance & Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-[0.1em] transition-colors duration-300">Services</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
              <li><a href="#services" className="hover:text-midas-gold-soft transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-midas-gold-soft transition">SaaS Product Engineering</a></li>
              <li><a href="#services" className="hover:text-midas-gold-soft transition">Blockchain Solutions</a></li>
              <li><a href="#services" className="hover:text-midas-gold-soft transition">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-midas-gold-soft transition">AI & Automation Engineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-[0.1em] transition-colors duration-300">Get In Touch</h4>
            <a
              href="mailto:midasglobaltech.us@gmail.com"
              className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-midas-gold-soft transition mb-4"
            >
              <Mail className="h-3.5 w-3.5" />
              midasglobaltech.us@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.7rem] text-slate-600 dark:border-slate-800/70 dark:text-slate-400 transition-colors duration-300">
          <div>
            © {new Date().getFullYear()} Midas Global Tech. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={() => setIsPrivacyOpen(true)} className="hover:text-midas-gold-soft transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button type="button" onClick={() => setIsTermsOpen(true)} className="hover:text-midas-gold-soft transition">
              Terms of Service
            </button>
            <span>•</span>
            <button type="button" onClick={() => setIsCookieOpen(true)} className="hover:text-midas-gold-soft transition">
              Cookie Policy
            </button>
            <span>•</span>
            <a href="#contact" className="hover:text-midas-gold-soft transition">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
    <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    <CookiePolicyModal isOpen={isCookieOpen} onClose={() => setIsCookieOpen(false)} />
    </>
  );
};

export default Footer;

