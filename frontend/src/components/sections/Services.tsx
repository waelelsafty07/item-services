import { motion } from 'framer-motion';
import services from '../../../data/services.json';
import SectionHeading from '../ui/SectionHeading';
import type { Service } from '../../types/content';

const Services = () => {
  return (
    <section id="services" className="bg-slate-50 py-28 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end expertise for bold digital products"
          description="From validating ideas to scaling platforms, Wael partners with teams to architect, design, and ship experiences that feel timeless."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(services as Service[]).map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky/0 via-sky/0 to-sky/10 opacity-0 transition group-hover:opacity-100 dark:to-sky/20" />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-sky">{service.pill}</span>
                <h3 className="mt-4 font-heading text-2xl text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
