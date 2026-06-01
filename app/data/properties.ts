export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  description?: string;
  features?: string[];
  image: string;
};

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'BGC, Taguig',
    price: '₱45,000,000',
    beds: 4,
    baths: 4,
    description:
      'A premium villa located in the heart of BGC with modern architecture and smart home features.',
    features: ['Pool', 'Smart Home', 'Garden'],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: 'Minimalist Glass House',
    location: 'Alabang, Muntinlupa',
    price: '₱32,000,000',
    beds: 3,
    baths: 3,
    description: 'A clean minimalist glass home surrounded by nature.',
    features: ['Glass Walls', 'Nature View', 'Open Layout'],
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'Skyline Penthouse',
    location: 'Makati City',
    price: '₱68,000,000',
    beds: 5,
    baths: 5,
    description: 'Luxury penthouse overlooking Makati skyline.',
    features: ['City View', 'Elevator Access', 'Private Deck'],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    title: 'Seaside Modern Estate',
    location: 'Batangas',
    price: '₱38,500,000',
    beds: 4,
    baths: 3,
    description: 'Beachfront modern estate perfect for relaxation.',
    features: ['Beachfront', 'Pool', 'Sun Deck'],
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 5,
    title: 'Urban Smart Condo Suite',
    location: 'Ortigas Center, Pasig',
    price: '₱18,000,000',
    beds: 2,
    baths: 2,
    description: 'Smart condo unit in the business district.',
    features: ['Smart Lock', 'Gym Access', 'City Center'],
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 6,
    title: 'Private Hillside Mansion',
    location: 'Antipolo, Rizal',
    price: '₱55,000,000',
    beds: 6,
    baths: 5,
    description: 'Exclusive mansion with mountain view.',
    features: ['Hill View', 'Infinity Pool', 'Private Gate'],
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 7,
    title: 'Luxury Waterfront Residence',
    location: 'Subic, Zambales',
    price: '₱62,000,000',
    beds: 5,
    baths: 4,
    description: 'Waterfront luxury home with yacht access.',
    features: ['Sea View', 'Dock', 'Private Beach'],
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 8,
    title: 'Modern Tropical Villa',
    location: 'Tagaytay City',
    price: '₱28,500,000',
    beds: 3,
    baths: 3,
    description: 'Cool climate tropical modern villa.',
    features: ['Mountain Air', 'Garden', 'Open Terrace'],
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  },
];
