import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-white shadow-lg backdrop-blur transition hover:border-brand-accent/40 hover:bg-brand-accent/20"
      aria-label="Toggle light and dark mode"
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        key={theme}
        initial={{ y: theme === 'dark' ? -20 : 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="text-lg"
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </motion.span>
    </motion.button>
  );
};
