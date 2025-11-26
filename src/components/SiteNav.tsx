import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ContactModal from "./ContactModal";
import { Button } from "./ui/button";

const SiteNav: React.FC = () => {
  const headerRef = React.useRef<HTMLElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const [contactOpen, setContactOpen] = React.useState(false);
  const closeContact = () => setContactOpen(false);

  React.useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--site-nav-height",
        `${headerEl.offsetHeight}px`
      );
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/85 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-4 max-w-6xl py-3 flex items-center gap-6">
        <RouterLink to="/" className="flex items-center gap-2">
          <img src="./images/shielsai_logo.png" alt="Shiels AI" className="h-6 w-auto" />
        </RouterLink>
        <nav className="flex items-center gap-4 text-sm relative">
          <RouterLink
            to="/"
            className="text-slate-700 hover:text-rose-700 dark:text-slate-300 dark:hover:text-rose-300 font-medium"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/blog"
            className="text-slate-700 hover:text-rose-700 dark:text-slate-300 dark:hover:text-rose-300 font-medium"
          >
            Blog
          </RouterLink>
          <div
            className="relative"
            onMouseEnter={() => { cancelClose(); setOpen(true); }}
            onMouseLeave={scheduleClose}
          >
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-rose-700 dark:text-slate-300 dark:hover:text-rose-300 font-medium"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Projects
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}>
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/>
              </svg>
            </button>
            {open && (
              <div
                className="absolute left-0 top-full pt-2 w-56 z-50"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg p-2">
                  <RouterLink to="/projects/flewnt" className="block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200" onClick={() => setOpen(false)}>Flewnt</RouterLink>
                  <RouterLink to="/projects/trust2" className="block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200" onClick={() => setOpen(false)}>TRUST2</RouterLink>
                  <RouterLink to="/projects/axion" className="block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200" onClick={() => setOpen(false)}>Axion</RouterLink>

                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="ml-auto">
          <Button
            type="button"
            onClick={() => setContactOpen(true)}
            className="rounded-full bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400 dark:focus:ring-rose-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <ContactModal open={contactOpen} onClose={closeContact} />
    </header>
  );
};

export default SiteNav;
