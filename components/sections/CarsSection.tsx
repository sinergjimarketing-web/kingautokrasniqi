import Image from 'next/image';
import { cars } from '@/components/data';

export function CarsSection() {
  return (
    <section id="cars" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="section-title">Featured Cars</h2>
      <p className="section-subtitle">Curated premium vehicles with a cinematic style and dependable comfort.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cars.map((car) => (
          <article key={car.name} className="luxury-card group">
            <div className="relative h-56 overflow-hidden">
              <Image src={car.image} alt={`${car.name} placeholder image`} fill className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight">{car.name}</h3>
                <span className="text-sm text-gold">{car.year}</span>
              </div>
              <div className="flex gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
                <span>{car.fuel}</span><span>•</span><span>{car.transmission}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/75">{car.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
