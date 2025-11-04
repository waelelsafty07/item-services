import { motion } from 'framer-motion';
import { Testimonial } from '../types';
import { SectionHeading } from '../components/SectionHeading';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export const Testimonials = ({ testimonials }: TestimonialsProps) => (
  <section id="testimonials" className="section-padding bg-white/5">
    <div className="mx-auto w-full max-w-6xl px-6">
      <SectionHeading
        eyebrow="Testimonials"
        title="Partners who trusted the vision"
        description="A few words from clients who have launched and scaled with Wael."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-brand-dark/80 p-8 text-brand-light shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.span
              className="text-5xl text-brand-accent"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 0.2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
            >
              “
            </motion.span>
            <p className="mt-4 text-sm leading-relaxed text-brand-light/80">{testimonial.quote}</p>
            <footer className="mt-6 text-sm">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-brand-light/60">{testimonial.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);
