import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { getConsent, setConsent } from "../../lib/cookies";

export const COOKIE_PREFS_EVENT = "show-cookie-preferences";
export const OPEN_COOKIE_POLICY_EVENT = "open-cookie-policy";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() !== null) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    const handleShowPrefs = () => setVisible(true);
    window.addEventListener(COOKIE_PREFS_EVENT, handleShowPrefs);
    return () => window.removeEventListener(COOKIE_PREFS_EVENT, handleShowPrefs);
  }, []);

  const openCookiePolicy = () => {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_POLICY_EVENT));
  };

  const handleAccept = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 md:flex md:items-center md:justify-between md:gap-6 md:px-6 md:py-4">
        <div className="flex items-start gap-3 p-4 md:p-0 md:flex-1">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-midas-gold/20">
            <Cookie className="h-5 w-5 text-midas-gold-soft" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              We use cookies to improve your experience, analyze traffic, and support site functionality.
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              By clicking &quot;Accept&quot; you agree to our use of cookies. Read our{" "}
              <button
                type="button"
                onClick={openCookiePolicy}
                className="text-midas-gold-soft hover:underline font-medium"
              >
                Cookie Policy
              </button>{" "}
              for details.
            </p>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2 p-4 pt-0 md:p-0 md:flex-row">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-xl bg-midas-gold px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-glow-gold hover:bg-midas-gold-soft transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
