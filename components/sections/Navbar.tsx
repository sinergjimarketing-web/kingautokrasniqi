import { navItems } from '@/components/data';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="font-display text-xl tracking-[0.14em] text-gold">King Auto Krasniqi</a>
        <ul className="flex gap-5 text-[11px] uppercase tracking-[0.2em] text-white/80 md:gap-8 md:text-xs">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors duration-300 hover:text-gold">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
