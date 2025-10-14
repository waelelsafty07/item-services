export function Testimonials({ testimonials }) {
  return (
    <div className="card-grid testimonials">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="card testimonial">
          <blockquote>“{testimonial.quote}”</blockquote>
          <figcaption>
            <span className="name">{testimonial.name}</span>
            <span className="role">{testimonial.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
