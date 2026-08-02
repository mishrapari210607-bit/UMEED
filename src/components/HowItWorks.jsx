import { useInView } from '../hooks/useInView'
import { STEPS } from '../data/site'

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section className="how" id="how" ref={ref}>
      <div className="shell">
        <div className={`how__head reveal ${inView ? 'in' : ''}`}>
          <span className="eyebrow">How UMEED works</span>
          <h2 className="section-title">From first alert<br />to full recovery</h2>
          <p className="section-serif how__intro">
            A single thread runs through every disaster: detection, response and
            the long road back. UMEED keeps that thread unbroken.
          </p>
        </div>

        <ol className="how__track">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={`how__step reveal ${inView ? 'in' : ''}`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <span className="how__num">{s.n}</span>
              <h3 className="how__title">{s.title}</h3>
              <p className="how__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
