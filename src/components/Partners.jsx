import { PARTNERS } from '../data/site'

export default function Partners() {
  const loop = [...PARTNERS, ...PARTNERS]
  return (
    <section className="partners" aria-label="Partner agencies and organisations">
      <div className="shell">
        <p className="partners__label">
          Coordinating {PARTNERS.length}+ agencies, relief bodies and NGOs across India
        </p>
      </div>
      <div className="partners__viewport">
        <div className="partners__track">
          {loop.map((p, i) => (
            <span className="partners__item" key={i}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
