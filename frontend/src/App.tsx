import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { HireMeButton } from './components/HireMeButton';
import { Modal } from './components/Modal';
import { ContactForm } from './components/ContactForm';
import { experiencesData, profileData, projectsData, servicesData, skillsData, testimonialsData } from './data';

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const profile = useMemo(() => profileData, []);
  const skills = useMemo(() => skillsData, []);
  const experiences = useMemo(() => experiencesData, []);
  const services = useMemo(() => servicesData, []);
  const projects = useMemo(() => projectsData, []);
  const testimonials = useMemo(() => testimonialsData, []);

  return (
    <div className="relative min-h-screen bg-brand-dark text-brand-light">
      <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-70" />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          variants={pageVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Hero profile={profile} onHireClick={openModal} />
          <About profile={profile} skills={skills} />
          <Experience experiences={experiences} />
          <Services services={services} />
          <Projects projects={projects} />
          <Testimonials testimonials={testimonials} />
          <Contact profile={profile} />
        </motion.main>
      </AnimatePresence>
      <Footer profile={profile} />
      <HireMeButton onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Start a project">
        <ContactForm onSuccess={closeModal} />
      </Modal>
    </div>
  );
};

export default App;
