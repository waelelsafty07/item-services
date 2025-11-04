import { motion } from 'framer-motion';
import { Profile } from '../types';

type HeroProps = {
  profile: Profile;
  onHireClick: () => void;
};

export const Hero = ({ profile, onHireClick }: HeroProps) => (
  <section
    id="home"
    className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-brand-dark"
  >
    <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-90" />
    <motion.div
      className="absolute -right-40 top-10 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
    />
    <motion.div
      className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
    />

    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center md:py-32">
      <div className="flex-1">
        <motion.span
          className="text-sm uppercase tracking-[0.35em] text-brand-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WYLZ.dev
        </motion.span>
        <motion.h1
          className="mt-6 font-display text-4xl font-semibold text-white md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, I&apos;m {profile.name}.
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-brand-light/80 md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.p
          className="mt-6 max-w-2xl text-base text-brand-light/70"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/20 transition hover:bg-brand-accent/90"
            whileHover={{ translateY: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.button
            onClick={onHireClick}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-brand-light transition hover:border-brand-accent/50 hover:text-white"
            whileHover={{ translateY: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.button>
        </motion.div>
      </div>
      <div className="flex-1">
        <motion.div
          className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl border border-brand-accent/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          <div className="relative flex flex-col gap-4 text-brand-light">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Capabilities</p>
            <p className="text-lg font-medium text-white">{profile.title}</p>
            <p className="text-sm text-brand-light/70">Based in {profile.location}</p>
            <div className="grid grid-cols-2 gap-3 text-xs text-brand-light/70">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">ERPNext Delivery</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Backend APIs</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Data Automation</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Problem Solving</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
