import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="section-kicker">National disaster response network</p>
        <h1>Prepared today. Protected tomorrow.</h1>
        <p>
          UMEED brings hazard intelligence, rescue IDs, shelters, relief stock,
          and field teams into one command-ready interface.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/legacy/disaster-rescue-management/index.html">
            Open dashboard
          </a>
          <a className="button button-secondary" href="/legacy/id-generation/index.html">
            Generate rescue ID
          </a>
        </div>
      </div>

      <div className="response-panel" aria-label="Response grid summary">
        <div className="panel-top">
          <span>Response grid</span>
          <strong>Online</strong>
        </div>
        <div className="radar-map">
          <span className="radar-ring" />
          <span className="map-pin pin-one" />
          <span className="map-pin pin-two" />
          <span className="map-pin pin-three" />
          <Icon name="map" size={74} />
        </div>
        <div className="panel-stats">
          <div>
            <small>Active zones</small>
            <strong>36</strong>
          </div>
          <div>
            <small>Teams</small>
            <strong>248</strong>
          </div>
          <div>
            <small>Avg response</small>
            <strong>08m</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
