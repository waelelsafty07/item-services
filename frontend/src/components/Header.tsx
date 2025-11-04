import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export const Header = () => {
  const items = useMemo(() => navItems, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-brand-dark/80 py-5 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-light/80 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition hover:text-brand-accent"
            >
              <motion.span whileHover={{ y: -2 }}>{item.label}</motion.span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            className="hidden rounded-full border border-brand-accent/50 bg-brand-accent/10 px-4 py-2 text-sm font-medium text-brand-light shadow-md transition hover:bg-brand-accent/20 md:inline-flex"
            whileHover={{ translateY: -2 }}
          >
            Let&apos;s talk
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
