import { motion } from 'framer-motion';

interface SkillBadgeProps {
  label: string;
  index: number;
}

const SkillBadge = ({ label, index }: SkillBadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/80"
    >
      {label}
    </motion.span>
  );
};

export default SkillBadge;
