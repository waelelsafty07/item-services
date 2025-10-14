export function Hero({ profile }) {
  if (!profile) {
    return null;
  }

  const { name, title, location, introduction, contact } = profile;

  return (
    <header className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p className="intro">{introduction}</p>
      <div className="hero-meta">
        <span>{location}</span>
        <div className="links">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.website} target="_blank" rel="noreferrer">
            Website
          </a>
        </div>
      </div>
    </header>
  );
}
