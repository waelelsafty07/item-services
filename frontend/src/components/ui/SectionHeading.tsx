import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-3 inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-500 dark:border-sky/30 dark:bg-sky/10 dark:text-sky"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="font-heading text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-base text-slate-600 dark:text-white/70 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
