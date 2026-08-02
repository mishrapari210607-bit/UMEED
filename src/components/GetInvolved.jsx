import { useInView } from '../hooks/useInView'
import Icon from './Icon'
import { INVOLVE } from '../data/site'

export default function GetInvolved() {
  const [ref, inView] = useInView()

  return (
    <section className="involve" id="involve" ref={ref}>
      <div className="shell">
        <div className={`involve__head reveal ${inView ? 'in' : ''}`}>
          <span className="eyebrow">Get involved</span>
          <h2 className="section-title">Three ways to<br />stand with UMEED</h2>
          <p className="section-serif involve__intro">
            Disasters are met by people, not platforms. Choose how you show up.
          </p>
        </div>

        <div className="involve__grid">
          {INVOLVE.map((c, i) => (
            <article
              key={c.tag}
              className={`involve__card involve__card--${c.tone} reveal ${inView ? 'in' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="involve__icon">
                <Icon name={c.icon} size={26} />
              </span>
              <span className="involve__tag">{c.tag}</span>
              <h3 className="involve__title">{c.title}</h3>
              <p className="involve__text">{c.text}</p>
              <a href="#contact" className="involve__cta">
                {c.cta} <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
