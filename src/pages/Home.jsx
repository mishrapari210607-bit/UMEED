export default function Home() {
  const modules = [
    {
      title: "Disaster Rescue Management",
      description: "Registration, medical, shelter, relief, transport, and tracking screens from the imported project.",
      href: "/legacy/disaster-rescue-management/index.html",
    },
    {
      title: "Rescue ID Generation",
      description: "Citizen rescue ID generation and emergency dashboard from the UMEED ID project.",
      href: "/legacy/id-generation/index.html",
    },
    {
      title: "Hazard Map Backend",
      description: "Django hazard data models, thresholds, readings, population services, and import commands.",
      href: "#backend-modules",
    },
  ];

  return (
    <main className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">UMEED</p>
        <h1>Relief coordination, made clearer.</h1>
        <p>
          A structured workspace for disaster analysis, emergency IDs,
          migration support, and supply management.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="/legacy/disaster-rescue-management/index.html">
            Open rescue dashboard
          </a>
          <a className="secondary-link" href="/legacy/id-generation/index.html">
            Generate rescue ID
          </a>
        </div>
      </section>

      <section className="module-section" id="backend-modules">
        <div className="section-heading">
          <p className="eyebrow">Imported modules</p>
          <h2>Everything is arranged into the UMEED project.</h2>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <a href={module.href}>Open</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
