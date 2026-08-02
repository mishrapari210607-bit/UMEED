import Icon from "./Icon";

const capabilities = [
  {
    icon: "map",
    title: "Hazard map",
    text: "Django hazard models, thresholds, readings, and population services.",
    href: "/legacy/disaster-rescue-management/index.html",
  },
  {
    icon: "id",
    title: "Rescue IDs",
    text: "Emergency ID generation, validation, and citizen support flows.",
    href: "/legacy/id-generation/index.html",
  },
  {
    icon: "supply",
    title: "Relief supply",
    text: "Inventory and relief routing from the rescue management module.",
    href: "/legacy/disaster-rescue-management/relief.html",
  },
  {
    icon: "radio",
    title: "Live tracking",
    text: "Transport, medical, shelter, and victim status coordination.",
    href: "/legacy/disaster-rescue-management/status.html",
  },
];

export default function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <p className="section-kicker">Capabilities</p>
      <h2>Your imported modules, organized into one UMEED shell.</h2>
      <div className="capability-grid">
        {capabilities.map((capability) => (
          <a className="capability-card" href={capability.href} key={capability.title}>
            <Icon name={capability.icon} />
            <h3>{capability.title}</h3>
            <p>{capability.text}</p>
            <span>Open module</span>
          </a>
        ))}
      </div>
    </section>
  );
}
