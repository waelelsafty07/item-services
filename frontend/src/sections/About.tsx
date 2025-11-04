import { motion } from 'framer-motion';
import { Profile, Skill } from '../types';

const badgeVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + index * 0.05, duration: 0.4 }
  })
};

type AboutProps = {
  profile: Profile;
  skills: Skill[];
};

export const About = ({ profile, skills }: AboutProps) => (
  <section id="about" className="section-padding">
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
      <div>
        <motion.span
          className="text-sm uppercase tracking-[0.35em] text-brand-accent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.span>
        <motion.h2
          className="mt-4 font-display text-3xl text-white md:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Engineering dependable systems for fast-moving teams.
        </motion.h2>
        <motion.p
          className="mt-6 text-base text-brand-light/75"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {profile.about}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-6 text-sm text-brand-light/60"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <p className="text-brand-light/50">Location</p>
            <p className="font-medium text-white">{profile.location}</p>
          </div>
          <div>
            <p className="text-brand-light/50">Email</p>
            <a href={`mailto:${profile.email}`} className="font-medium text-brand-accent">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-brand-light/50">Phone</p>
            <a href={`tel:${profile.phone}`} className="font-medium text-white">
              {profile.phone}
            </a>
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              custom={index}
              variants={badgeVariants}
              className="flex items-center justify-center rounded-xl border border-brand-accent/20 bg-white/5 px-5 py-4 text-center text-sm font-medium text-brand-light shadow-lg shadow-brand-accent/10"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
