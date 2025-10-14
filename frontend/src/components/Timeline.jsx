export function Timeline({ timeline }) {
  return (
    <ol className="career-timeline">
      {timeline.map((item) => (
        <li key={item.year}>
          <span className="year">{item.year}</span>
          <span className="label">{item.label}</span>
        </li>
      ))}
    </ol>
  );
}
