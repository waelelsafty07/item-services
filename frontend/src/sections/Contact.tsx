import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { Profile } from '../types';

type ContactProps = {
  profile: Profile;
};

export const Contact = ({ profile }: ContactProps) => (
  <section id="contact" className="section-padding">
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div>
        <motion.span
          className="text-sm uppercase tracking-[0.35em] text-brand-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s collaborate
        </motion.span>
        <motion.h2
          className="mt-4 font-display text-3xl text-white md:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Let’s build something amazing together.
        </motion.h2>
        <motion.p
          className="mt-6 text-base text-brand-light/75"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Share your vision and I’ll help turn it into an experience that feels effortless and unforgettable.
        </motion.p>
        <motion.div
          className="mt-10 space-y-4 text-sm text-brand-light/70"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <p className="text-brand-light/50">Email</p>
            <a href={`mailto:${profile.email}`} className="font-medium text-brand-accent">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-brand-light/50">Phone</p>
            <a href={`tel:${profile.phone}`} className="font-medium text-white">
              {profile.phone}
            </a>
          </div>
          <div className="flex gap-4 text-brand-light/60">
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
              GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
              LinkedIn
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <ContactForm />
      </div>
    </div>
  </section>
);
