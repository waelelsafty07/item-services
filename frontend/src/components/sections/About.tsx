import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';

const skills = [
  'React',
  'Node.js',
  'TypeScript',
  'ERPNext',
  'REST APIs',
  'UI/UX Strategy'
];

const About = () => {
  return (
    <section id="about" className="relative bg-white py-28 dark:bg-transparent">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)] dark:block" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start">
        <div className="md:w-1/2">
          <SectionHeading
            eyebrow="About"
            title="Creative Full-Stack Developer & Digital Solutions Expert"
            description="Wael blends business acumen with technical craftsmanship to design and build products that accelerate growth, streamline operations, and delight users."
          />
        </div>
        <div className="md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg leading-relaxed text-slate-600 dark:text-white/75"
          >
            With over 8 years partnering with startups and enterprises across the MENA region, Wael guides teams from strategy to shipping. He architected ERP systems for healthcare networks, built interactive commerce platforms, and designed mobile apps that scale to millions of sessions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg leading-relaxed text-slate-500 dark:text-white/60"
          >
            His toolkit fuses modern frameworks with systems thinking—bridging technology, design, and marketing to deliver measurable impact.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} label={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
