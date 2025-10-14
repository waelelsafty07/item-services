import { ContactCard } from './components/ContactCard.jsx';
import { Experience } from './components/Experience.jsx';
import { Hero } from './components/Hero.jsx';
import { Projects } from './components/Projects.jsx';
import { Section } from './components/Section.jsx';
import { Skills } from './components/Skills.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { Timeline } from './components/Timeline.jsx';
import { usePortfolioData } from './hooks/usePortfolioData.js';

export default function App() {
  const {
    data: { profile, skills, experience, projects, testimonials, timeline },
    loading,
    error
  } = usePortfolioData();

  return (
    <div className="app">
      <Hero profile={profile} />

      <main>
        {loading ? <p className="status">Loading portfolio...</p> : null}
        {error ? (
          <p role="alert" className="status error">
            {error}
          </p>
        ) : null}

        {!loading && !error ? (
          <>
            <Section id="skills" eyebrow="Craft" title="Technical toolkit">
              <Skills skills={skills} />
            </Section>

            <Section id="experience" eyebrow="Impact" title="Selected experience">
              <Experience experience={experience} />
            </Section>

            <Section id="projects" eyebrow="Highlights" title="Projects that spark joy">
              <Projects projects={projects} />
            </Section>

            <Section id="testimonials" eyebrow="Notes" title="Words from collaborators">
              <Testimonials testimonials={testimonials} />
            </Section>

            <Section id="timeline" eyebrow="Journey" title="Milestones">
              <Timeline timeline={timeline} />
            </Section>
          </>
        ) : null}
      </main>

      <ContactCard profile={profile} />

      <footer className="footer">
        <p>© {new Date().getFullYear()} Alex Rivera. Crafted with Fastify & React.</p>
      </footer>
    </div>
  );
}
