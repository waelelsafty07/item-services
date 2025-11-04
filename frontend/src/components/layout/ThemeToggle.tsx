import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-slate-900 transition hover:border-sky/70 hover:text-sky dark:border-white/20 dark:bg-white/5 dark:text-white"
    >
      {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
    </motion.button>
  );
};

export default ThemeToggle;
