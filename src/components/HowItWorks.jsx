const steps = [
  "Read hazard signals and classify risk.",
  "Register affected citizens and generate rescue IDs.",
  "Route teams, shelters, medical aid, and supplies.",
  "Track status until the request is resolved.",
];

export default function HowItWorks() {
  return (
    <section className="section workflow" id="workflow">
      <p className="section-kicker">Workflow</p>
      <h2>One operating rhythm from alert to recovery.</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <article className="timeline-item" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
