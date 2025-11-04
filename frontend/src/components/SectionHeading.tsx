import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mx-auto max-w-3xl text-center">
    <motion.span
      className="text-sm uppercase tracking-[0.3em] text-brand-accent"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {eyebrow}
    </motion.span>
    <motion.h2
      className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      {title}
    </motion.h2>
    {description ? (
      <motion.p
        className="mt-3 text-base text-brand-light/70"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {description}
      </motion.p>
    ) : null}
  </div>
);
