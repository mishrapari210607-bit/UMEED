const rows = [
  ["North district", "Flood watch", "High", "Teams assigned"],
  ["Central shelter", "Capacity check", "Medium", "Stock verified"],
  ["West corridor", "Transport route", "Low", "Clear"],
  ["Relief depot", "Food kits", "Medium", "Dispatch ready"],
];

export default function LiveOperations() {
  return (
    <section className="section operations" id="operations">
      <div>
        <p className="section-kicker">Operations</p>
        <h2>Scan the field picture without losing the details.</h2>
      </div>
      <div className="ops-table" role="table" aria-label="Live operations">
        {rows.map(([area, signal, risk, status]) => (
          <div className="ops-row" role="row" key={area}>
            <span>{area}</span>
            <span>{signal}</span>
            <strong data-risk={risk.toLowerCase()}>{risk}</strong>
            <span>{status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
