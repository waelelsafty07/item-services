import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Experience as ExperienceType } from '../types';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

type ExperienceProps = {
  experiences: ExperienceType[];
};

export const Experience = ({ experiences }: ExperienceProps) => (
  <section id="experience" className="section-padding">
    <div className="mx-auto w-full max-w-6xl px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Roles that shaped my craft"
        description="From enterprise ERPNext delivery to coaching teams, I thrive on solving operational challenges."
      />
      <motion.div
        className="mt-12 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {experiences.map((experience) => (
          <motion.article
            key={experience.id}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-brand-accent/10"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-brand-accent">
                  <span>{experience.workType}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                <p className="text-sm text-brand-light/70">
                  {experience.company} • {experience.location}
                </p>
                <p className="text-sm text-brand-light/80">{experience.summary}</p>
              </div>
              <div className="shrink-0 text-right text-sm text-brand-light/60">
                <p className="font-medium text-brand-light/70">
                  {experience.start} — {experience.end}
                </p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 text-sm text-brand-light/70 md:grid-cols-2">
              {experience.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-2 rounded-2xl border border-white/10 bg-brand-dark/40 p-4"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);
