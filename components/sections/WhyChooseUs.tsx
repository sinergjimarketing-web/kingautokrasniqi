const highlights = [
  '24/7 availability for any schedule',
  'Airport pickup and delivery throughout Albania',
  'Professionally maintained luxury fleet',
  'Fast support and WhatsApp booking assistance'
];

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="mt-5 max-w-xl text-white/80">
            King Auto Krasniqi is built for travelers and professionals who expect elevated service, elegant vehicles and a smooth booking experience.
          </p>
        </div>
        <ul className="grid gap-4">
          {highlights.map((item) => (
            <li key={item} className="luxury-border rounded-xl bg-white/5 px-5 py-4 text-white/90">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
