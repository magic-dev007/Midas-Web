import { useState, useEffect } from "react";
import { ArrowRight, Moon, Sun } from "lucide-react";
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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800/70 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-lg shadow-slate-200/50 dark:bg-slate-950/30 dark:shadow-black/50"
          : "bg-white/95 backdrop-blur-xl shadow-md shadow-slate-200/30 dark:bg-slate-950/85 dark:shadow-black/30"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Midas Global Tech" className="h-9 w-9" />
          <div className="leading-tight">
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
      </div>
    </header>
  );
};

export default Header;

