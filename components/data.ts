import { Car } from './types';

export const cars: Car[] = [
  {
    name: 'BMW X5 35d xDrive',
    year: '2008',
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80',
    description: 'A commanding luxury SUV with executive comfort, panoramic road presence and confident all-wheel-drive handling.'
  },
  {
    name: 'Audi Q5 2.0 TDI',
    year: '2011',
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80',
    description: 'Refined, efficient and business-ready — ideal for airport transfers, premium city travel and long-distance routes.'
  },
  {
    name: 'Porsche Cayenne 3.0 Diesel',
    year: '2012',
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1600&q=80',
    description: 'A signature luxury performance SUV that combines prestige, comfort and a striking arrival at every destination.'
  }
];

export const navItems = [
  { label: 'Cars', href: '#cars' },
  { label: 'About', href: '#about' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' }
];
