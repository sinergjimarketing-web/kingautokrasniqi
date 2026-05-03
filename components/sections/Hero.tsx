import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80"
        alt="Luxury hero car placeholder"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.65),#0d0d0f)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-8">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Luxury Mobility in Albania</p>
        <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">Premium Car Rental in Albania</h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Luxury SUVs and premium cars for airport pickup, business trips, holidays and special occasions. Available 24/7.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#booking" className="gold-btn">Book Your Car</a>
          <a href="#cars" className="ghost-btn">Explore Fleet</a>
        </div>
      </div>
    </section>
  );
}
