import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import FloatingHireMeButton from './components/common/FloatingHireMeButton';
import Modal from './components/common/Modal';
import ContactForm from './components/forms/ContactForm';

const backgroundOrbs = [
  {
    id: 'bg-left',
    className:
      'absolute -left-32 -top-40 h-[44rem] w-[44rem] rounded-full bg-sky/10 blur-[200px] opacity-60 dark:bg-sky/35 dark:opacity-70',
    animate: {
      x: [0, 40, -20, 0],
      y: [0, -30, 25, 0],
      scale: [1, 1.08, 1]
    },
    transition: { duration: 48, repeat: Infinity, ease: 'easeInOut' as const }
  },
  {
    id: 'bg-right',
    className:
      'absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-sky/5 blur-[220px] opacity-60 dark:bg-sky/25 dark:opacity-70',
    animate: {
      x: [0, -35, 30, 0],
      y: [0, 28, -24, 0],
      scale: [0.95, 1.1, 0.95]
    },
    transition: { duration: 42, repeat: Infinity, ease: 'easeInOut' as const, delay: 4 }
  },
  {
    id: 'bg-bottom',
    className:
      'absolute bottom-[-30%] left-1/3 h-[38rem] w-[38rem] rounded-full bg-white/10 blur-[220px] opacity-40 dark:bg-sky/20 dark:opacity-60',
    animate: {
      x: [0, -20, 25, 0],
      y: [0, 22, -18, 0],
      opacity: [0.4, 0.55, 0.4]
    },
    transition: { duration: 52, repeat: Infinity, ease: 'easeInOut' as const, delay: 2 }
  }
];

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  const scrollToProjects = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const contactForm = useMemo(
    () => (
      <ContactForm compact />
    ),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-500 dark:bg-midnight dark:text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.06),transparent_55%)] opacity-60 dark:opacity-80"
          aria-hidden
        />
        {backgroundOrbs.map((orb) => (
          <motion.div key={orb.id} className={orb.className} animate={orb.animate} transition={orb.transition} aria-hidden />
        ))}
      </div>
      <Header onHireClick={handleOpenModal} />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Hero onViewProjects={scrollToProjects} onHireClick={handleOpenModal} />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      <FloatingHireMeButton onClick={handleOpenModal} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Start a project">
        <p className="mb-6 text-sm text-slate-600 dark:text-white/70">
          Share the processes you need to streamline, the systems you rely on, and any performance targets. Wael will reply within two business days.
        </p>
        {contactForm}
      </Modal>
    </div>
  );
};

export default App;
