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
  { id: 1, delay: 0, style: { top: '18%', left: '10%' } },
  { id: 2, delay: 2.5, style: { top: '60%', left: '55%' } },
  { id: 3, delay: 4, style: { top: '28%', left: '78%' } }
];

const gradientLayers = [
  {
    id: 'top-left',
    className:
      'absolute h-[28rem] w-[28rem] rounded-full bg-sky/10 blur-[120px] opacity-60 mix-blend-screen dark:bg-sky/30 dark:opacity-70',
    style: { top: '-14%', left: '-8%' },
    initial: { opacity: 0.35, scale: 0.75 },
    animate: { opacity: [0.35, 0.5, 0.35], scale: [0.75, 1.05, 0.75] },
    transition: { duration: 22, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
  },
  {
    id: 'bottom-right',
    className:
      'absolute h-[30rem] w-[30rem] rounded-full bg-sky/5 blur-[140px] opacity-70 mix-blend-screen dark:bg-sky/40 dark:opacity-60',
    style: { bottom: '-20%', right: '-12%' },
    initial: { opacity: 0.3, scale: 0.85 },
    animate: { opacity: [0.3, 0.55, 0.3], scale: [0.85, 1.15, 0.85] },
    transition: { duration: 26, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 2 }
  },
  {
    id: 'center',
    className:
      'absolute h-[18rem] w-[18rem] rounded-full bg-white/40 blur-[100px] opacity-40 mix-blend-screen dark:bg-sky/25 dark:opacity-50',
    style: { top: '32%', left: '45%' },
    initial: { opacity: 0.25, scale: 0.9 },
    animate: { opacity: [0.25, 0.45, 0.25], scale: [0.9, 1.1, 0.9] },
    transition: { duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1.2 }
  }
];

const Hero = ({ onViewProjects, onHireClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative flex min-h-[95vh] items-center overflow-hidden bg-hero-gradient-light dark:bg-hero-gradient-dark"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 opacity-60 mix-blend-screen dark:opacity-80" style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1), transparent 65%), radial-gradient(circle at 80% 15%, rgba(14, 165, 233, 0.12), transparent 55%)'
        }}
        />
        {gradientLayers.map((layer) => (
          <motion.div
            key={layer.id}
            className={layer.className}
            style={layer.style}
            initial={layer.initial}
            animate={layer.animate}
            transition={layer.transition}
            aria-hidden
          />
        ))}
      </div>

      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="pointer-events-none absolute h-56 w-56 rounded-full bg-sky/10 blur-3xl opacity-40 mix-blend-screen sm:h-64 sm:w-64 dark:bg-sky/30 dark:opacity-60"
          animate={{
            x: [0, 18, -12, 0],
            y: [0, -28, 18, 0],
            opacity: [0.25, 0.5, 0.35, 0.25]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut'
          }}
          style={orb.style}
          aria-hidden
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
            Backend Engineer
          </span>
          <h1 className="font-heading text-4xl text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            Hi, I’m <span className="text-sky">Wael Elsafty</span>.
          </h1>
          <p className="mt-6 text-lg text-slate-600 md:text-xl dark:text-white/70">
            I build dependable ERPNext and backend platforms that automate operations, surface the right data, and keep teams aligned.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewProjects}
              className="rounded-full bg-sky px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky/30"
            >
              Explore work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onHireClick}
              className="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-900 hover:border-sky/60 dark:border-white/20 dark:text-white"
            >
              Schedule a call
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="relative mt-16 flex w-full max-w-md items-center justify-center md:mt-0"
        >
          <div
            className="absolute inset-0 -z-10 rounded-[40px] bg-white/60 blur-3xl opacity-70 mix-blend-screen dark:bg-sky/20 dark:opacity-80"
            aria-hidden
          />
          <div className="relative rounded-[32px] border border-slate-200 bg-white/70 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-white/60">ERP & Backend Specialist</p>
            <p className="mt-6 text-lg text-slate-700 dark:text-white/80">
              Designing reliable services, integrations, and databases that let businesses scale with clarity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-slate-500 dark:text-white/60">
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">ERPNext</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">Frappe</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">Python</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">MySQL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
