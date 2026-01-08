export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  room: Room;
  category: string;
  material?: string;
  dimensions?: string;
  colors?: string[];
  inStock: boolean;
  stockCount?: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isRattan?: boolean;
  tags?: string[];
  createdAt: string;
}

export type Room = 
  | 'living-room'
  | 'bedroom'
  | 'dining'
  | 'kitchen'
  | 'storage'
  | 'accessories'
  | 'lighting'
  | 'outdoor'
  | 'study';

export interface RoomCategory {
  id: Room;
  name: string;
  description: string;
  image: string;
  subcategories: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export const ROOMS: RoomCategory[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    description: 'Create a welcoming space for relaxation and entertainment',
    image: '/placeholder.svg',
    subcategories: ['Sofa', 'Accent Chair', 'Coffee Table', 'Media Console', 'Chaise Lounge', 'Recliner', 'Ottoman', 'Bean Bag'],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'Design your personal sanctuary for rest and rejuvenation',
    image: '/placeholder.svg',
    subcategories: ['Bed Frame', 'Nightstand', 'Dresser', 'Baby Cot', 'Nook'],
  },
  {
    id: 'dining',
    name: 'Dining Area',
    description: 'Gather and dine in style with elegant furniture',
    image: '/placeholder.svg',
    subcategories: ['Dining Table', 'Dining Chair'],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'Functional and stylish additions for your kitchen',
    image: '/placeholder.svg',
    subcategories: ['Bar Stool', 'Wine Bar'],
  },
  {
    id: 'storage',
    name: 'Storage',
    description: 'Organize your space with beautiful storage solutions',
    image: '/placeholder.svg',
    subcategories: ['Wardrobe', 'Shoe Rack', 'Clothes Rack', 'Bookshelf'],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Complete your space with curated accessories',
    image: '/placeholder.svg',
    subcategories: ['Throw Pillow', 'Table Vase', 'Flower Vase', 'Wall Art', 'Wall Frame', 'Mirror', 'Hanging Décor', 'Lobby Console'],
  },
  {
    id: 'lighting',
    name: 'Lighting',
    description: 'Illuminate your space with statement lighting',
    image: '/placeholder.svg',
    subcategories: ['Table Lamp', 'Floor Lamp', 'Drop Light'],
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    description: 'Extend your living space outdoors',
    image: '/placeholder.svg',
    subcategories: ['Rattan Chair', 'Outdoor Seating'],
  },
  {
    id: 'study',
    name: 'Study Room',
    description: 'Create a productive workspace at home',
    image: '/placeholder.svg',
    subcategories: ['Office Table', 'Office Chair'],
  },
];
