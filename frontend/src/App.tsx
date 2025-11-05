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
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-midnight dark:text-white">
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
