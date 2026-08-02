import Logo from './Logo'
import Icon from './Icon'
import { NAV_LINKS } from '../data/site'

const COLS = [
  {
    title: 'Platform',
    links: ['Live Dashboard', 'Early Warning', 'Evacuation Routing', 'Relief Camps', 'Family Reunification'],
  },
  {
    title: 'Network',
    links: ['For Agencies', 'For NGOs', 'Volunteer Corps', 'Partner With Us', 'API & Data'],
  },
  {
    title: 'About',
    links: ['Our Mission', 'Field Stories', 'Transparency', 'Careers', 'Press Kit'],
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* emergency helpline band */}
      <div className="helpline">
        <div className="shell helpline__inner">
          <div className="helpline__left">
            <span className="helpline__pulse"><Icon name="alert" size={22} /></span>
            <div>
              <strong>In an emergency, don&apos;t wait for a website.</strong>
              <span>Call the national disaster helpline: free, 24×7, in every state.</span>
            </div>
          </div>
          <div className="helpline__nums">
            <a href="tel:112" className="helpline__num">
              <Icon name="phone" size={18} /> 112
            </a>
            <a href="tel:1078" className="helpline__num helpline__num--ghost">
              <Icon name="phone" size={18} /> 1078 · NDMA
            </a>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="shell footer__main">
        <div className="footer__brand">
          <Logo />
          <p className="footer__blurb">
            UMEED is a coordination layer for India&apos;s disaster response, built
            so that agencies, NGOs and citizens move as one when minutes matter.
          </p>
          <div className="footer__contact">
            <a href="mailto:response@umeed.org.in"><Icon name="mail" size={16} /> response@umeed.org.in</a>
            <span><Icon name="pin" size={16} /> New Delhi · Guwahati · Bhubaneswar</span>
          </div>
        </div>

        <nav className="footer__cols" aria-label="Footer">
          {COLS.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#top">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="shell footer__bar">
        <p>© {new Date().getFullYear()} UMEED Emergency Response Network. A not-for-profit initiative.</p>
        <div className="footer__legal">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}
