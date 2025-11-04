import { motion } from 'framer-motion';

export const Logo = () => (
  <motion.div
    className="inline-flex items-center gap-2 text-lg font-semibold tracking-wide"
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent font-display text-xl">
      W
    </span>
    <span className="font-display text-brand-light dark:text-white">Wael Elsafty</span>
  </motion.div>
);
