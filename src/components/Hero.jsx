import Icon from './Icon'
import { HERO_IMAGES } from '../data/site'

/** A collage tile backed by a photo, with a colour fallback if the file is absent. */
function Tile({ img, className }) {
  return (
    <div
      className={`hero__tile ${className}`}
      role="img"
      aria-label={img.label}
      style={{
        backgroundColor: img.fallback,
        backgroundImage: `url("${img.src}")`,
        backgroundPosition: img.pos,
      }}
    >
      <span className="hero__tile-label">{img.label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <Icon name="shield" size={16} /> Built for rescue agencies &amp; relief NGOs · India
          </span>

          <h1 className="hero__wordmark">UMEED</h1>

          <p className="hero__lede">
            Unified <span className="hero__accent">Emergency</span> Management,
            Evacuation &amp; Displacement
          </p>

          <p className="hero__sub">
            The shared command layer for India&apos;s rescue agencies and relief
            NGOs. One live map, one tasking system, one operational picture when
            every minute counts.
          </p>

          <div className="hero__actions">
            <a href="#involve" className="btn btn-dark">
              Onboard your agency <Icon name="arrow" size={18} />
            </a>
            <a href="#involve" className="btn btn-ghost">Partner as an NGO</a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-live">
              <span className="hero__pulse" /> 7 operations live now
            </span>
            <span>Coordinating NDRF · SDRF · NDMA &amp; 2,300+ NGOs</span>
          </div>
        </div>

        <div className="hero__art">
          <div className="hero__collage">
            <Tile img={HERO_IMAGES.family} className="hero__tile--a" />
            <Tile img={HERO_IMAGES.crew} className="hero__tile--b" />
            <Tile img={HERO_IMAGES.heli} className="hero__tile--c" />
          </div>
          <div className="hero__badge">
            <strong>24/7</strong>
            <span>Response desk</span>
          </div>
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true" />
    </section>
  )
}
