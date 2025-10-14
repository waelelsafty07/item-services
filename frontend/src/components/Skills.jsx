export function Skills({ skills }) {
  return (
    <div className="card-grid">
      {skills.map((group) => (
        <div key={group.category} className="card">
          <h4>{group.category}</h4>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
