import { motion } from 'framer-motion';

interface FloatingHireMeButtonProps {
  onClick: () => void;
}

const FloatingHireMeButton = ({ onClick }: FloatingHireMeButtonProps) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Open contact form"
    className="fixed bottom-8 right-6 z-40 rounded-full bg-sky px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky/40"
  >
    Schedule a call
  </motion.button>
);

export default FloatingHireMeButton;
