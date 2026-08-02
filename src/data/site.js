// Central content for the UMEED landing page.
// Kept in one place so copy is easy to review and edit without touching markup.

// Hero collage. Drop matching files into /public/hero (see README there).
// `fallback` is the colour shown until the photo is present, so no broken images.
export const HERO_IMAGES = {
  family:  { src: '/hero/flood-family.jpg', fallback: '#5b6b73', label: 'Evacuated to safety · Assam',        pos: '38% 30%' },
  crew:    { src: '/hero/firefighters.jpg', fallback: '#4a5a3f', label: 'Fire & rescue on scene',             pos: '50% 40%' },
  heli:    { src: '/hero/heli-rescue.jpg',  fallback: '#6a6f74', label: 'Air lift · Himalayan flood zone',    pos: '50% 40%' },
}

export const NAV_LINKS = [
  { label: 'Dashboard', href: '#impact' },
  { label: 'Features', href: '#resources' },
  { label: 'Live Alerts', href: '#alerts' },
  { label: 'Operations', href: '#operations' },
  { label: 'Contact', href: '#contact' },
]

// Scrolling alert ticker (mimics a live feed).
export const ALERTS = [
  { level: 'severe',  region: 'Assam',        text: 'Brahmaputra above danger mark, evacuation underway in 42 villages' },
  { level: 'high',    region: 'Uttarakhand',  text: 'Cloudburst warning issued for Chamoli & Rudraprayag districts' },
  { level: 'watch',   region: 'Odisha',       text: 'Cyclonic circulation over Bay of Bengal being monitored' },
  { level: 'high',    region: 'Himachal',     text: 'Landslide blocks NH-5 near Kinnaur, SDRF teams deployed' },
  { level: 'watch',   region: 'Gujarat',      text: 'Heatwave advisory extended for Saurashtra region' },
]

// Real-time impact counters.
export const STATS = [
  { id: 'rescued',  value: 3654, suffix: '',      label: 'Individuals Rescued', icon: 'people' },
  { id: 'states',   value: 36,   suffix: '/36',   label: 'States Monitoring',   icon: 'map' },
  { id: 'agencies', value: 1248, suffix: '',      label: 'Agencies Registered', icon: 'bank' },
  { id: 'ngos',     value: 2317, suffix: '',      label: 'NGOs Registered',     icon: 'hands' },
  { id: 'active',   value: 7,    suffix: '',      label: 'Active Operations',   icon: 'alert', pulse: true },
]

export const STEPS = [
  {
    n: '01',
    title: 'Report & Detect',
    text: 'Citizens, field officers and IMD sensors raise an alert. UMEED geo-tags it and pushes it to the nearest response cell within seconds.',
  },
  {
    n: '02',
    title: 'Verify & Assign',
    text: 'District coordinators confirm severity, then the system auto-assigns NDRF, SDRF and vetted NGOs based on proximity and capacity.',
  },
  {
    n: '03',
    title: 'Mobilise & Track',
    text: 'Teams move with live maps, shelter routing and supply manifests. Every unit is visible on one shared operational picture.',
  },
  {
    n: '04',
    title: 'Recover & Report',
    text: 'Displacement, relief camps and rehabilitation are logged for transparent, auditable recovery long after the headlines fade.',
  },
]

export const CAPABILITIES = [
  {
    icon: 'radar',
    title: 'Hazard Map',
    text: 'Hazard models, thresholds, readings and population services from the imported hazard-map backend.',
    href: '/legacy/disaster-rescue-management/index.html',
  },
  {
    icon: 'shield',
    title: 'Rescue ID Generator',
    text: 'Generate emergency rescue IDs and citizen support records from the UMEED rescue ID module.',
    href: '/legacy/id-generation/index.html',
  },
  {
    icon: 'tent',
    title: 'Migration Centres',
    text: 'View migration centres and coordinate movement for displaced citizens.',
    href: '/legacy/disaster-rescue-management/migration-center.html',
  },
  {
    icon: 'route',
    title: 'Transport',
    text: 'Manage transport routes and vehicle movement for evacuation and response.',
    href: '/legacy/disaster-rescue-management/transport.html',
  },
  {
    icon: 'people',
    title: 'Victim Registration',
    text: 'Register affected citizens and keep response records organized.',
    href: '/legacy/disaster-rescue-management/registration.html',
  },
  {
    icon: 'hands',
    title: 'Medical Support',
    text: 'Coordinate medical needs, triage and relief support for affected people.',
    href: '/legacy/disaster-rescue-management/medical.html',
  },
  {
    icon: 'tent',
    title: 'Shelter Management',
    text: 'Track shelter capacity, allocation and availability.',
    href: '/legacy/disaster-rescue-management/shelter.html',
  },
  {
    icon: 'truck',
    title: 'Relief Supply',
    text: 'Manage relief depots, supplies and distribution readiness.',
    href: '/legacy/disaster-rescue-management/relief.html',
  },
  {
    icon: 'alert',
    title: 'Victim Status',
    text: 'Follow rescue and victim status updates through the tracking module.',
    href: '/legacy/disaster-rescue-management/status.html',
  },
]

// Mock live operations for the "on the ground now" panel.
export const OPERATIONS = [
  { region: 'Majuli, Assam',        type: 'Flood Evacuation',   teams: 6, status: 'active',   pct: 72 },
  { region: 'Joshimath, Uttarakhand', type: 'Landslide Relief', teams: 4, status: 'active',   pct: 45 },
  { region: 'Puri, Odisha',         type: 'Cyclone Standby',    teams: 3, status: 'standby',  pct: 20 },
  { region: 'Kutch, Gujarat',       type: 'Heatwave Response',  teams: 2, status: 'active',   pct: 58 },
]

// Partner names for the marquee.
export const PARTNERS = [
  'NDRF', 'SDRF', 'IMD', 'ISRO', 'NDMA', 'Indian Red Cross',
  'CWC', 'Goonj', 'SEEDS India', 'Doctors For You', 'HAM Radio Corps', 'Sphere India',
]

export const INVOLVE = [
  {
    icon: 'hand-heart',
    tag: 'Volunteer',
    title: 'Join the response corps',
    text: 'Trained and untrained volunteers alike. Get matched to tasks near you, from packing kits to camp coordination.',
    cta: 'Become a volunteer',
    tone: 'teal',
  },
  {
    icon: 'building',
    tag: 'For Agencies',
    title: 'Onboard your team',
    text: 'Government bodies and NGOs get a verified dashboard, live tasking and a shared map with every other responder.',
    cta: 'Register an agency',
    tone: 'ink',
  },
  {
    icon: 'gift',
    tag: 'Support',
    title: 'Fund the frontline',
    text: 'Every rupee is traced to a camp, a kit or a rescue. Transparent ledgers, no middle layer, receipts within minutes.',
    cta: 'Contribute',
    tone: 'gold',
  },
]
