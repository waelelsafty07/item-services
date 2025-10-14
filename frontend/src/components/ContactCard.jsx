export function ContactCard({ profile }) {
  if (!profile) {
    return null;
  }

  const { contact } = profile;

  return (
    <aside className="contact-card">
      <h4>Let's create something</h4>
      <p>
        I'm currently partnering with teams to ship human-centered experiences. Drop me a line and
        let's chat about how we can collaborate.
      </p>
      <a className="cta" href={`mailto:${contact.email}`}>
        Start a conversation
      </a>
      <div className="contact-meta">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </div>
    </aside>
  );
}
