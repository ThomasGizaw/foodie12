export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  logo: string;
  rating: number;
  distance: string;
  eta: string;
  cuisine: string;
  dishes: Dish[];
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  video?: string;
  rating: number;
  reviews: number;
  tags: string[];
  category: string;
  restaurant: {
    id: string;
    name: string;
    distance: string;
  };
  discount?: number;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
  address: string;
  notes?: string;
  paymentMethod: string;
  createdAt: string;
  eta: string;
}

export interface FilterOptions {
  cuisine: string[];
  priceRange: [number, number];
  rating: number;
  distance: number;
}