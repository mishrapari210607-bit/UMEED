const stats = [
  ["12k+", "citizens can be registered with structured emergency IDs"],
  ["36", "risk zones monitored through imported hazard-map modules"],
  ["6", "operations lanes covering medical, shelter, relief, transport, tracking, and status"],
];

export default function Impact() {
  return (
    <section className="section impact" id="impact">
      <p className="section-kicker">Impact</p>
      <h2>Built for fast decisions when every minute matters.</h2>
      <div className="stat-grid">
        {stats.map(([value, label]) => (
          <article className="stat-card" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
