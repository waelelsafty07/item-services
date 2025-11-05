import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

interface HeaderProps {
  onHireClick: () => void;
}

const Header = ({ onHireClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-xl bg-white/70 shadow-lg shadow-sky/10 dark:bg-midnight/80'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-heading text-lg tracking-[0.35em] uppercase text-slate-900 transition hover:text-sky dark:text-white"
        >
          WYLZ<span className="text-sky">.</span>dev
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 transition hover:text-sky dark:text-white/80 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onHireClick}
            className="rounded-full border border-sky/70 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-sky/90 hover:text-white dark:text-white"
          >
            Schedule a call
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
