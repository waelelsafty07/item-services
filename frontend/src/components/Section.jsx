export function Section({ title, eyebrow, children, id }) {
  return (
    <section className="section" id={id}>
      <div className="section-header">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3>{title}</h3>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
