import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => (
  <AnimatePresence>
    {isOpen ? (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/80 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-brand-dark p-8 text-brand-light shadow-2xl"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 text-brand-light/60 transition hover:text-brand-accent"
            aria-label="Close modal"
          >
            ×
          </button>
          <h3 className="mb-6 font-display text-2xl text-white">{title}</h3>
          {children}
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);
