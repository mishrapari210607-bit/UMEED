import { useInView } from '../hooks/useInView'
import Icon from './Icon'
import { CAPABILITIES } from '../data/site'

export default function Capabilities() {
  const [ref, inView] = useInView()

  return (
    <section className="caps" id="resources" ref={ref}>
      <div className="shell">
        <div className={`caps__head reveal ${inView ? 'in' : ''}`}>
          <div>
            <span className="eyebrow">Core capabilities</span>
            <h2 className="section-title">Everything a response<br />needs, in one place</h2>
          </div>
          <p className="section-serif caps__intro">
            Built with the people who run relief operations, not for a demo but
            for the worst day a district will ever see.
          </p>
        </div>

        <div className="caps__grid">
          {CAPABILITIES.map((c, i) => (
            <a
              key={c.title}
              className={`cap reveal ${inView ? 'in' : ''}`}
              href={c.href}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="cap__icon">
                <Icon name={c.icon} size={24} />
              </span>
              <h3 className="cap__title">{c.title}</h3>
              <p className="cap__text">{c.text}</p>
              <span className="cap__link">Open feature <Icon name="arrow" size={15} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
