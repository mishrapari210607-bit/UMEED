// Lightweight inline icon set. Stroke-based so they inherit currentColor
// and stay crisp at any size. Kept in one file for easy reuse.

const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M15.5 6.2a2.6 2.6 0 0 1 0 5" />
      <path d="M3.5 20c0-3.2 2.5-5 5.5-5s5.5 1.8 5.5 5" />
      <path d="M16 15.4c2.4.3 4.5 2 4.5 4.6" />
    </>
  ),
  map: (
    <>
      <path d="M12 3c3.6 0 6 2.3 6 5.6 0 3.7-3.7 8.3-6 12.4C9.7 16.9 6 12.3 6 8.6 6 5.3 8.4 3 12 3Z" />
      <circle cx="12" cy="8.4" r="2.1" />
    </>
  ),
  bank: (
    <>
      <path d="M4 9.5 12 4l8 5.5" />
      <path d="M5 9.5h14" />
      <path d="M6.5 10v7M10 10v7M14 10v7M17.5 10v7" />
      <path d="M4 20.5h16" />
    </>
  ),
  hands: (
    <>
      <path d="M3 13c1.3-1.6 3-1 4 0l2 2" />
      <path d="M21 13c-1.3-1.6-3-1-4 0l-2 2" />
      <path d="M9 15c1.4 1.4 4.6 1.4 6 0" />
      <path d="M8.5 8.5 12 5l3.5 3.5" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4c-2.2 0-4 1.9-4 4.3V13H6.5a1 1 0 0 0-.7 1.7L7 16h10l1.2-1.3a1 1 0 0 0-.7-1.7H16V8.3C16 5.9 14.2 4 12 4Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
      <path d="M12 2.5v1.2" />
    </>
  ),
  radar: (
    <>
      <path d="M12 12 19 6" />
      <path d="M12 4a8 8 0 1 0 8 8" />
      <path d="M12 8a4 4 0 1 0 4 4" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h6a3 3 0 0 0 0-6H10a3 3 0 0 1 0-6h6" />
    </>
  ),
  tent: (
    <>
      <path d="M12 4 4 20h16L12 4Z" />
      <path d="M12 4v16" />
      <path d="M12 20 8 12" />
      <path d="M12 20l4-8" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v8H3z" />
      <path d="M14 10h4l3 3v2h-7z" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.5v5.2c0 4.4 3 7.6 7 9.3 4-1.7 7-4.9 7-9.3V5.5L12 3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </>
  ),
  'hand-heart': (
    <>
      <path d="M12 8.5c1-1.6 4-1.2 4 1 0 1.7-2.4 3.2-4 4.2-1.6-1-4-2.5-4-4.2 0-2.2 3-2.6 4-1Z" />
      <path d="M4 15c1.3-1.2 3-.7 4 .3l1.8 1.7c1 1 2.8 1 3.8 0L18 14" />
      <path d="M4 15v5" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V6l7-3 7 3v15" />
      <path d="M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01" />
      <path d="M10 21v-3.5a2 2 0 0 1 4 0V21" />
    </>
  ),
  gift: (
    <>
      <path d="M4 11h16v9H4z" />
      <path d="M4 8h16v3H4z" />
      <path d="M12 8v12" />
      <path d="M12 8C10.5 4.5 6.5 5.5 8 8M12 8c1.5-3.5 5.5-2.5 4 0" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M6 4h3l1.5 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4Z" />
  ),
  pin: (
    <>
      <path d="M12 21c4-4.5 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  bolt: <path d="M13 3 5 13h5l-1 8 8-11h-5l1-7Z" />,
}

export default function Icon({ name, size = 24, className = '', ...rest }) {
  const glyph = paths[name]
  if (!glyph) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...S}
      {...rest}
    >
      {glyph}
    </svg>
  )
}
