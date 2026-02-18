import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Payments", href: "#payments" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Contact", href: "#contact" }
] as const;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800/70 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-lg shadow-slate-200/50 dark:bg-slate-950/30 dark:shadow-black/50"
          : "bg-white/95 backdrop-blur-xl shadow-md shadow-slate-200/30 dark:bg-slate-950/85 dark:shadow-black/30"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Midas Global Tech" className="h-9 w-9" />
          <div className="leading-tight hidden sm:block">
            <div className="text-sm font-semibold tracking-[0.18em] text-midas-gold-soft">
              MIDAS GLOBAL TECH
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Web, AI & Blockchain Solutions
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-midas-gold-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-300 transition-all hover:border-midas-gold/40 hover:bg-midas-gold/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-midas-gold px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow-gold transition hover:bg-midas-gold-soft"
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-300 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu: render in portal so fixed is relative to viewport, not sticky header */}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            aria-hidden={!isMenuOpen}
            className={`fixed inset-0 top-[4.5rem] z-[60] overflow-y-auto border-t border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950 md:hidden ${
              isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
            } transition-all duration-300`}
          >
            <nav className="flex flex-col px-6 py-6 gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl py-3 px-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-midas-gold-soft transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3">
                <button
                  onClick={() => { toggleTheme(); closeMenu(); }}
                  className="flex items-center gap-3 rounded-xl py-3 px-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-midas-gold py-3 px-4 text-base font-semibold text-slate-950 shadow-glow-gold hover:bg-midas-gold-soft transition"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;

