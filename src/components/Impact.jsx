import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import Icon from './Icon'
import { STATS } from '../data/site'

function StatCard({ stat, start }) {
  const n = useCountUp(stat.value, { start, duration: 1700 })
  return (
    <article className={`stat ${stat.pulse ? 'stat--alert' : ''}`}>
      <span className={`stat__icon ${stat.pulse ? 'stat__icon--alert' : ''}`}>
        <Icon name={stat.icon} size={26} />
        {stat.pulse && <span className="stat__ping" />}
      </span>
      <div className="stat__num">
        {n.toLocaleString('en-IN')}
        {stat.suffix}
      </div>
      <div className="stat__label">{stat.label}</div>
    </article>
  )
}

export default function Impact() {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <section className="impact" id="impact" ref={ref}>
      <div className="shell">
        <div className={`impact__head reveal ${inView ? 'in' : ''}`}>
          <span className="eyebrow">Real-time impact</span>
          <h2 className="section-title">Real-Time Impact</h2>
          <p className="section-serif">
            Tracking disaster response and saving lives, every second.
          </p>
          <p className="impact__note">
            Live statistics from UMEED&apos;s nationwide emergency response network.
          </p>
        </div>

        <div className="impact__grid">
          {STATS.map((s, i) => (
            <div
              key={s.id}
              className={`reveal ${inView ? 'in' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <StatCard stat={s} start={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
