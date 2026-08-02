import Icon from "./Icon";

export default function Navbar() {
  const links = ["Impact", "Workflow", "Capabilities", "Operations", "Join"];

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="UMEED home">
        <span className="brand-mark">
          <Icon name="shield" size={19} />
        </span>
        <span>
          UMEED
          <small>Disaster response grid</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>

      <a className="nav-action" href="/legacy/id-generation/index.html">
        Rescue ID
      </a>
    </header>
  );
}
