import { motion } from 'framer-motion';
import projects from '../../../data/projects.json';
import SectionHeading from '../ui/SectionHeading';
import type { Project } from '../../types/content';

const projectImages = import.meta.glob('../../assets/projects/*.svg', { eager: true, as: 'url' });

const resolveImage = (key: string) => {
  const entry = Object.entries(projectImages).find(([path]) => path.includes(`${key}.svg`));
  return entry ? (entry[1] as string) : '';
};

const Projects = () => {
  const handleNavigate = (url: string) => {
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Highlighted implementations"
          description="Snapshots of ERP, HR, and analytics work delivered for partners across retail, entertainment, and tech."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {(projects as Project[]).map((project, index) => {
            const imageUrl = resolveImage(project.image);

            return (
              <motion.article
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative h-56 overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-500 dark:bg-sky/20 dark:text-sky/80">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent opacity-80 dark:from-midnight dark:via-midnight/40" />
                </div>
                <div className="relative p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-sky">{project.tags[0]}</p>
                  <h3 className="mt-4 font-heading text-2xl text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-white/60">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* <motion.button
                    onClick={() => handleNavigate(project.link)}
                    whileHover={{ x: 4 }}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky"
                  >
                    
                    <span aria-hidden>→</span>
                  </motion.button> */}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
