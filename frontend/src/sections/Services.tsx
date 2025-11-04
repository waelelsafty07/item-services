import { motion } from 'framer-motion';
import { FiFigma, FiGlobe, FiLayers, FiMonitor, FiSmartphone, FiTrendingUp } from 'react-icons/fi';
import { Service, ServiceId } from '../types';
import { SectionHeading } from '../components/SectionHeading';

type ServicesProps = {
  services: Service[];
};

const iconMap: Record<ServiceId, JSX.Element> = {
  web: <FiMonitor className="text-2xl" />,
  mobile: <FiSmartphone className="text-2xl" />,
  erp: <FiLayers className="text-2xl" />,
  uiux: <FiFigma className="text-2xl" />,
  branding: <FiGlobe className="text-2xl" />,
  social: <FiTrendingUp className="text-2xl" />
};

export const Services = ({ services }: ServicesProps) => (
  <section id="services" className="section-padding bg-white/5">
    <div className="mx-auto w-full max-w-6xl px-6">
      <SectionHeading
        eyebrow="Services"
        title="End-to-end digital innovation"
        description="Strategy, design, and engineering brought together to ship impactful solutions."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-dark/80 p-8 shadow-lg shadow-brand-accent/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-accent/40 bg-brand-accent/10 text-brand-accent">
              {iconMap[service.id]}
            </div>
            <h3 className="relative mt-6 text-xl font-semibold text-white">{service.title}</h3>
            <p className="relative mt-3 text-sm text-brand-light/70">{service.description}</p>
            <motion.span
              className="relative mt-6 inline-flex items-center text-sm font-medium text-brand-accent"
              whileHover={{ x: 4 }}
            >
              Explore service →
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
