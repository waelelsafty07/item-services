import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

type HireMeButtonProps = {
  onClick: () => void;
};

export const HireMeButton = ({ onClick }: HireMeButtonProps) => (
  <motion.button
    type="button"
    onClick={onClick}
    className="fixed bottom-8 right-8 z-40 flex items-center gap-2 rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-accent/30 transition hover:bg-brand-accent/90"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ translateY: -4 }}
    whileTap={{ scale: 0.95 }}
  >
    <FiSend />
    Hire Me
  </motion.button>
);
