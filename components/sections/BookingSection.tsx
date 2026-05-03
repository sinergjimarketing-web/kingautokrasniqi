import { cars } from '@/components/data';

export function BookingSection() {
  return (
    <section id="booking" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="section-title text-center">Booking Form</h2>
      <p className="section-subtitle text-center">Share your trip details and we will confirm quickly.</p>
      <form className="luxury-border mt-10 rounded-2xl bg-white/[0.03] p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="input-field" placeholder="Full name" />
          <input className="input-field" placeholder="Phone number" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <select className="input-field md:col-span-2">
            <option>Selected car</option>
            {cars.map((car) => <option key={car.name}>{`${car.name} ${car.year}`}</option>)}
          </select>
          <input type="date" className="input-field" aria-label="Pickup date" />
          <input type="date" className="input-field" aria-label="Return date" />
        </div>
        <textarea rows={4} className="input-field mt-4" placeholder="Message" />
        <button type="button" className="gold-btn mt-6 w-full justify-center">Send Booking Request</button>
      </form>

      <div className="mt-8 text-center">
        <a href="https://wa.me/355000000000" className="ghost-btn">Book via WhatsApp</a>
      </div>
    </section>
  );
}
