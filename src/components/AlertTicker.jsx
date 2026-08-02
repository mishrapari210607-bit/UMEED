import { ALERTS } from '../data/site'

const LEVEL_LABEL = { severe: 'Severe', high: 'High', watch: 'Watch' }

export default function AlertTicker() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...ALERTS, ...ALERTS]

  return (
    <div className="ticker" id="alerts" aria-label="Live disaster alerts">
      <div className="ticker__tag">
        <span className="ticker__dot" />
        Live Alerts
      </div>
      <div className="ticker__viewport">
        <div className="ticker__track">
          {loop.map((a, i) => (
            <span className="ticker__item" key={i}>
              <span className={`ticker__level ticker__level--${a.level}`}>
                {LEVEL_LABEL[a.level]}
              </span>
              <strong>{a.region}</strong>
              <span className="ticker__text">{a.text}</span>
              <span className="ticker__sep">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
