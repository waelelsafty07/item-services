import { motion } from 'framer-motion';
import ContactForm from '../forms/ContactForm';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s map your next system"
          description="Share the workflows you need to automate and the data you rely on. Wael will help plan a backend that fits."
          align="center"
        />
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 grid gap-6 md:grid-cols-2"
          >
            <div>
              <h3 className="font-heading text-3xl text-slate-900 dark:text-white">Collaborate with Wael</h3>
              <p className="mt-4 text-sm text-slate-600 dark:text-white/70">
                Looking to launch an ERPNext workspace, integrate services, or tune database performance? Let’s scope it together.
              </p>
              <div className="mt-6 space-y-2 text-sm text-slate-500 dark:text-white/50">
                <p>📍 Ismailia, Egypt · Remote worldwide</p>
                <p>✉️ w.elsafty07@gmail.com</p>
              </div>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
