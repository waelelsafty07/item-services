import { motion } from 'framer-motion';
import testimonials from '../../../data/testimonials.json';
import SectionHeading from '../ui/SectionHeading';
import type { Testimonial } from '../../types/content';

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-28 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What partners say"
          description="Operational leaders and engineering managers on collaborating with Wael."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {(testimonials as Testimonial[]).map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-full rounded-3xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:shadow-none"
            >
              <span className="text-4xl text-sky">“</span>
              <p className="mt-4 text-sm leading-relaxed">{testimonial.quote}</p>
              <div className="mt-8">
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/50">{testimonial.role}</p>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
