import { useInView } from '../hooks/useInView'
import Icon from './Icon'
import { OPERATIONS } from '../data/site'

export default function LiveOperations() {
  const [ref, inView] = useInView()

  return (
    <section className="ops" id="agencies" ref={ref}>
      <div className="shell ops__grid">
        <div className={`ops__copy reveal ${inView ? 'in' : ''}`}>
          <span className="eyebrow eyebrow--light">On the ground now</span>
          <h2 className="section-title ops__title">One shared operational picture</h2>
          <p className="ops__lede">
            Every agency sees the same map, the same tasking and the same live
            status. No parallel spreadsheets. No lost hours. When a district
            escalates, the nearest capable team is already moving.
          </p>

          <div className="ops__mini">
            <div>
              <strong>4.2 min</strong>
              <span>median alert-to-assignment</span>
            </div>
            <div>
              <strong>128</strong>
              <span>relief camps synced</span>
            </div>
          </div>

          <a href="#involve" className="btn btn-gold">
            Open the dashboard <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className={`ops__panel reveal ${inView ? 'in' : ''}`}>
          <div className="ops__panel-top">
            <span className="ops__live"><span className="ops__live-dot" /> Live feed</span>
            <span className="ops__clock">Updated just now</span>
          </div>
          <ul className="ops__list">
            {OPERATIONS.map((o) => (
              <li key={o.region} className="op">
                <span className={`op__status op__status--${o.status}`}>
                  <Icon name="pin" size={15} />
                </span>
                <div className="op__body">
                  <div className="op__row">
                    <strong>{o.region}</strong>
                    <span className={`op__badge op__badge--${o.status}`}>{o.status}</span>
                  </div>
                  <span className="op__type">{o.type} · {o.teams} teams</span>
                  <div className="op__bar">
                    <span
                      className="op__bar-fill"
                      style={{ width: inView ? `${o.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
