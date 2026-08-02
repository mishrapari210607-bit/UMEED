const partners = [
  ["NDRF", "/legacy/disaster-rescue-management/index.html"],
  ["Local shelters", "/legacy/disaster-rescue-management/shelter.html"],
  ["Medical teams", "/legacy/disaster-rescue-management/medical.html"],
  ["Relief depots", "/legacy/disaster-rescue-management/relief.html"],
  ["Volunteers", "/legacy/disaster-rescue-management/registration.html"],
];

export default function Partners() {
  return (
    <section className="partners" aria-label="Partners">
      {partners.map(([partner, href]) => (
        <a href={href} key={partner}>
          {partner}
        </a>
      ))}
    </section>
  );
}
