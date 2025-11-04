import { motion } from 'framer-motion';

interface HeroProps {
  onViewProjects: () => void;
  onHireClick: () => void;
}

const heroVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const floatingOrbs = [
  { id: 1, delay: 0 },
  { id: 2, delay: 2.5 },
  { id: 3, delay: 4 }
];

const Hero = ({ onViewProjects, onHireClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative flex min-h-[95vh] items-center overflow-hidden bg-gradient-to-b from-slate-100 via-white to-white dark:bg-hero-gradient"
    >
      <div className="absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:block" />

      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute hidden h-60 w-60 rounded-full bg-sky/20 blur-3xl dark:block"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut'
          }}
          style={{
            top: orb.id === 1 ? '20%' : orb.id === 2 ? '65%' : '30%',
            left: orb.id === 1 ? '15%' : orb.id === 2 ? '55%' : '75%'
          }}
        />
      ))}

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:justify-between">
        <motion.div
          variants={heroVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            Creative Technologist
          </span>
          <h1 className="font-heading text-4xl text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            Hi, I’m <span className="text-sky">Wael Elsafty</span>.
          </h1>
          <p className="mt-6 text-lg text-slate-600 md:text-xl dark:text-white/70">
            I craft end-to-end digital solutions—merging strategy, design, and robust engineering to transform ideas into immersive experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewProjects}
              className="rounded-full bg-sky px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky/30"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onHireClick}
              className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-900 hover:border-sky/60 dark:border-white/20 dark:text-white"
            >
              Hire Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="relative mt-16 flex w-full max-w-md items-center justify-center md:mt-0"
        >
          <div className="absolute hidden h-60 w-60 rounded-full bg-sky/20 blur-3xl dark:block" />
          <div className="relative rounded-[32px] border border-slate-200 bg-white/70 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-white/60">Full-Stack Developer</p>
            <p className="mt-6 text-lg text-slate-700 dark:text-white/80">
              Turning ideas into digital experiences that feel bespoke, scalable, and future-ready.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-slate-500 dark:text-white/60">
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">React</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">TypeScript</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">ERPNext</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">UX Strategy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
