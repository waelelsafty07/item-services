import { Profile } from '../types';

type FooterProps = {
  profile: Profile;
};

export const Footer = ({ profile }: FooterProps) => (
  <footer className="border-t border-white/10 bg-brand-dark/90 py-10">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-brand-light/60 md:flex-row">
      <p>© {new Date().getFullYear()} {profile.name} — wylz.dev</p>
      <div className="flex gap-4">
        <a href={profile.social.github} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
          GitHub
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
          LinkedIn
        </a>
        <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);
