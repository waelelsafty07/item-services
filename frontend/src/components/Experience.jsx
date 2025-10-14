export function Experience({ experience }) {
  return (
    <div className="timeline">
      {experience.map((role) => (
        <article key={`${role.company}-${role.startDate}`} className="timeline-item">
          <header>
            <h4>{role.role}</h4>
            <p className="meta">
              {role.company} · {role.startDate} — {role.endDate}
            </p>
          </header>
          <ul>
            {role.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
