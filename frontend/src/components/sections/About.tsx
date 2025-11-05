import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';

const skills = ['ERPNext', 'Frappe', 'Python', 'Node.js', 'MySQL', 'Redis'];

const About = () => {
  return (
    <section id="about" className="relative bg-white py-28 dark:bg-transparent">
      <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)] dark:block" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start">
        <div className="md:w-1/2">
          <SectionHeading
            eyebrow="About"
            title="Backend engineer focused on operational excellence"
            description="Wael maps business processes into ERPNext and backend services, making it easy for teams to trust their tools and data."
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
            Wael has spent the last several years crafting ERPNext implementations and backend platforms for retailers, entertainment venues, and HR teams. He translates requirements into dependable workflows, integrations, and analytics that let stakeholders make confident decisions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg leading-relaxed text-slate-500 dark:text-white/60"
          >
            He leans on proven engineering practices—performance profiling, testing, and automation—to keep deployments stable long after launch.
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
