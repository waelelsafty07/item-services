import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-2xl dark:border-white/10 dark:bg-midnight/95 dark:text-white"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-slate-400 transition hover:text-sky dark:text-white/60 dark:hover:text-white"
              aria-label="Close"
            >
              <FiX size={22} />
            </button>
            <h3 className="mb-3 font-heading text-2xl text-slate-900 dark:text-white">{title}</h3>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
