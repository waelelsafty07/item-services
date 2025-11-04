import { motion } from 'framer-motion';
import { Project } from '../types';
import { SectionHeading } from '../components/SectionHeading';

type ProjectsProps = {
  projects: Project[];
};

export const Projects = ({ projects }: ProjectsProps) => (
  <section id="projects" className="section-padding">
    <div className="mx-auto w-full max-w-6xl px-6">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A snapshot of platforms, products, and campaigns delivered for visionary teams."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
          >
            <div className="relative h-60 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
            </div>
            <div className="relative px-6 pb-8 pt-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-brand-light/70">{project.description}</p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-brand-accent">
                View project →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
