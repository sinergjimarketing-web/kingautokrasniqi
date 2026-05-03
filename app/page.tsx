import Image from 'next/image';
import { cars } from '@/components/data';

const whyChooseUs = [
  '24/7 Availability across Albania',
  'Airport pickup and delivery service',
  'Premium maintained luxury vehicles',
  'Fast WhatsApp booking support'
];

export default function Home() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <p className="font-display text-xl tracking-wide text-gold">King Auto Krasniqi</p>
          <ul className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-white/80 md:flex">
            {['Cars', 'About', 'Booking', 'Contact'].map((item) => (
              <li key={item} className="transition hover:text-gold">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 text-center">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury car hero"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-charcoal" />
        <div className="relative z-10 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">King Auto Krasniqi</p>
          <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">Premium Car Rental in Albania</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Luxury SUVs and premium cars for airport pickup, business trips, holidays and special occasions. Available 24/7.
          </p>
          <a href="#booking" className="mt-10 inline-block rounded-full border border-gold px-8 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-gold hover:text-black">
            Reserve Your Car
          </a>
        </div>
      </section>

      <section id="cars" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="font-display text-3xl text-gold md:text-4xl">Featured Cars</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cars.map((car) => (
            <article key={car.name} className="group luxury-border overflow-hidden rounded-2xl bg-white/5 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              <div className="relative h-56">
                <Image src={car.image} alt={car.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-display text-2xl">{car.name}</h3>
                <p className="text-sm text-white/75">{car.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-black/40 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-gold md:text-4xl">Why Choose Us</h2>
            <p className="mt-6 text-white/80">
              We deliver a cinematic luxury rental experience with premium service, polished vehicles and effortless booking.
            </p>
          </div>
          <ul className="space-y-4">
            {whyChooseUs.map((item) => (
              <li key={item} className="luxury-border rounded-xl bg-white/5 px-5 py-4 text-white/85">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-display text-center text-3xl text-gold md:text-4xl">Booking Form</h2>
        <form className="luxury-border mt-12 space-y-5 rounded-2xl bg-white/5 p-8">
          <input className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3" placeholder="Full name" />
          <input className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3" placeholder="Phone number" />
          <select className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3">
            <option>Selected car</option>
            {cars.map((car) => (
              <option key={car.name}>{car.name}</option>
            ))}
          </select>
          <div className="grid gap-5 md:grid-cols-2">
            <input type="date" className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3" />
            <input type="date" className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3" />
          </div>
          <textarea rows={4} className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3" placeholder="Message" />
          <button className="w-full rounded-lg bg-gold px-6 py-3 font-semibold text-black transition hover:brightness-110">Send Booking Request</button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/355000000000"
            className="inline-block rounded-full border border-gold px-8 py-3 text-sm uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-black"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-black px-6 py-10 text-center text-white/70">
        <p className="font-display text-xl text-gold">King Auto Krasniqi</p>
        <p className="mt-2">Albania</p>
        <div className="mt-4 flex justify-center gap-6 text-sm uppercase tracking-[0.15em]">
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="https://wa.me/355000000000" className="hover:text-gold">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
