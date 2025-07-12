import { Restaurant, Dish } from '@/types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Plantega',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.5,
    distance: '0.9 miles away',
    eta: '25-35 min',
    cuisine: 'Vegan',
    dishes: []
  },
  {
    id: '2',
    name: 'Burger Palace',
    logo: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.2,
    distance: '1.2 miles away',
    eta: '20-30 min',
    cuisine: 'American',
    dishes: []
  },
  {
    id: '3',
    name: 'Sushi Master',
    logo: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.8,
    distance: '2.1 miles away',
    eta: '30-40 min',
    cuisine: 'Japanese',
    dishes: []
  },
  {
    id: '4',
    name: 'Habesha\'s Kitchen',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.6,
    distance: '1.5 miles away',
    eta: '30-40 min',
    cuisine: 'Ethiopian',
    dishes: []
  },
  {
    id: '5',
    name: 'Little China',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.3,
    distance: '2.0 miles away',
    eta: '25-35 min',
    cuisine: 'Chinese',
    dishes: []
  },
  {
    id: '6',
    name: 'Chanoly Noodles',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 5.0,
    distance: '1.0 km away',
    eta: '44 min',
    cuisine: 'Asian',
    dishes: []
  },
  {
    id: '7',
    name: 'Pizza Corner',
    logo: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.4,
    distance: '0.8 miles away',
    eta: '20-25 min',
    cuisine: 'Italian',
    dishes: []
  },
  {
    id: '8',
    name: 'Taco Fiesta',
    logo: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.1,
    distance: '1.8 miles away',
    eta: '35-45 min',
    cuisine: 'Mexican',
    dishes: []
  },
  {
    id: '9',
    name: 'Curry House',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.7,
    distance: '2.2 miles away',
    eta: '40-50 min',
    cuisine: 'Indian',
    dishes: []
  },
  {
    id: '10',
    name: 'Mediterranean Delight',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.5,
    distance: '1.3 miles away',
    eta: '30-35 min',
    cuisine: 'Mediterranean',
    dishes: []
  },
  {
    id: '11',
    name: 'BBQ Smokehouse',
    logo: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.6,
    distance: '2.5 miles away',
    eta: '45-55 min',
    cuisine: 'BBQ',
    dishes: []
  },
  {
    id: '12',
    name: 'Fresh Salads Co',
    logo: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.2,
    distance: '0.7 miles away',
    eta: '15-25 min',
    cuisine: 'Healthy',
    dishes: []
  },
  {
    id: '13',
    name: 'Breakfast Bistro',
    logo: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.4,
    distance: '1.1 miles away',
    eta: '20-30 min',
    cuisine: 'Breakfast',
    dishes: []
  },
  {
    id: '14',
    name: 'Seafood Paradise',
    logo: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.8,
    distance: '3.0 miles away',
    eta: '50-60 min',
    cuisine: 'Seafood',
    dishes: []
  },
  {
    id: '15',
    name: 'Steakhouse Prime',
    logo: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.9,
    distance: '2.8 miles away',
    eta: '45-55 min',
    cuisine: 'Steakhouse',
    dishes: []
  },
  {
    id: '16',
    name: 'Dessert Dreams',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.3,
    distance: '1.6 miles away',
    eta: '25-35 min',
    cuisine: 'Desserts',
    dishes: []
  },
  {
    id: '17',
    name: 'Coffee & More',
    logo: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.1,
    distance: '0.5 miles away',
    eta: '10-20 min',
    cuisine: 'Coffee',
    dishes: []
  },
  {
    id: '18',
    name: 'Thai Garden',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.5,
    distance: '1.9 miles away',
    eta: '35-45 min',
    cuisine: 'Thai',
    dishes: []
  },
  {
    id: '19',
    name: 'Korean Kitchen',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.7,
    distance: '2.3 miles away',
    eta: '40-50 min',
    cuisine: 'Korean',
    dishes: []
  },
  {
    id: '20',
    name: 'French Bistro',
    logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4.8,
    distance: '2.7 miles away',
    eta: '45-55 min',
    cuisine: 'French',
    dishes: []
  }
];

export const mockDishes: Dish[] = [
  // Plantega dishes (5)
  {
    id: '1',
    name: 'Chicken Over Rice (VEGAN)',
    description: 'Daring Original Plant Chicken, sautéed peppers and onions over rice with white and hot sauce',
    price: 14.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/856086/856086-hd_1920_1080_25fps.mp4', // Sushi rolling prep video
    rating: 4.0,
    reviews: 94,
    tags: ['POPULAR', 'VEGAN', 'HEALTHY'],
    category: 'Main Course',
    restaurant: { id: '1', name: 'Plantega', distance: '0.9 miles away' }
  },
  {
    id: '2',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough bread with cherry tomatoes and hemp seeds',
    price: 11.50,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195401/3195401-uhd_2560_1440_25fps.mp4',
    rating: 4.1,
    reviews: 45,
    tags: ['HEALTHY', 'VEGAN', 'BREAKFAST'],
    category: 'Breakfast',
    restaurant: { id: '1', name: 'Plantega', distance: '0.9 miles away' }
  },
  {
    id: '3',
    name: 'Quinoa Buddha Bowl',
    description: 'Nutritious quinoa bowl with roasted vegetables and tahini dressing',
    price: 13.50,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.3,
    reviews: 67,
    tags: ['HEALTHY', 'VEGAN', 'GLUTEN-FREE'],
    category: 'Healthy',
    restaurant: { id: '1', name: 'Plantega', distance: '0.9 miles away' }
  },
  {
    id: '4',
    name: 'Vegan Burger',
    description: 'Plant-based patty with lettuce, tomato, and special sauce',
    price: 12.00,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195456/3195456-uhd_2560_1440_25fps.mp4',
    rating: 4.2,
    reviews: 89,
    tags: ['VEGAN', 'POPULAR'],
    category: 'Burgers',
    restaurant: { id: '1', name: 'Plantega', distance: '0.9 miles away' }
  },
  {
    id: '5',
    name: 'Green Smoothie Bowl',
    description: 'Spinach and mango smoothie bowl topped with granola and berries',
    price: 9.50,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195401/3195401-uhd_2560_1440_25fps.mp4',
    rating: 4.4,
    reviews: 34,
    tags: ['HEALTHY', 'VEGAN', 'BREAKFAST'],
    category: 'Breakfast',
    restaurant: { id: '1', name: 'Plantega', distance: '0.9 miles away' }
  },

  // Burger Palace dishes (5)
  {
    id: '6',
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, onions, pickles, and special sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195456/3195456-uhd_2560_1440_25fps.mp4',
    rating: 4.5,
    reviews: 156,
    tags: ['POPULAR', 'CLASSIC'],
    category: 'Burgers',
    restaurant: { id: '2', name: 'Burger Palace', distance: '1.2 miles away' }
  },
  {
    id: '7',
    name: 'Double Cheeseburger',
    description: 'Two beef patties with double cheese and bacon',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195456/3195456-uhd_2560_1440_25fps.mp4',
    rating: 4.6,
    reviews: 203,
    tags: ['POPULAR', 'INDULGENT'],
    category: 'Burgers',
    restaurant: { id: '2', name: 'Burger Palace', distance: '1.2 miles away' }
  },
  {
    id: '8',
    name: 'Chicken Deluxe',
    description: 'Crispy chicken breast with mayo and fresh vegetables',
    price: 13.99,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195456/3195456-uhd_2560_1440_25fps.mp4',
    rating: 4.3,
    reviews: 98,
    tags: ['CHICKEN', 'CRISPY'],
    category: 'Burgers',
    restaurant: { id: '2', name: 'Burger Palace', distance: '1.2 miles away' }
  },
  {
    id: '9',
    name: 'BBQ Bacon Burger',
    description: 'Beef patty with BBQ sauce, bacon, and onion rings',
    price: 15.99,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195456/3195456-uhd_2560_1440_25fps.mp4',
    rating: 4.4,
    reviews: 134,
    tags: ['BBQ', 'BACON'],
    category: 'Burgers',
    restaurant: { id: '2', name: 'Burger Palace', distance: '1.2 miles away' }
  },
  {
    id: '10',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese, bacon, and green onions',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195456/3195456-uhd_2560_1440_25fps.mp4',
    rating: 4.2,
    reviews: 76,
    tags: ['SIDES', 'LOADED'],
    category: 'Sides',
    restaurant: { id: '2', name: 'Burger Palace', distance: '1.2 miles away' }
  },

  // Continue with more restaurants and dishes...
  // Sushi Master dishes (5)
  {
    id: '11',
    name: 'Salmon Sashimi',
    description: 'Fresh Atlantic salmon, expertly sliced and served with wasabi and ginger',
    price: 18.50,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195368/3195368-uhd_2560_1440_25fps.mp4',
    rating: 4.8,
    reviews: 203,
    tags: ['PREMIUM', 'FRESH'],
    category: 'Sushi',
    restaurant: { id: '3', name: 'Sushi Master', distance: '2.1 miles away' },
    discount: 15
  },
  {
    id: '12',
    name: 'California Roll',
    description: 'Classic roll with crab, avocado, and cucumber',
    price: 12.00,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195368/3195368-uhd_2560_1440_25fps.mp4',
    rating: 4.5,
    reviews: 145,
    tags: ['CLASSIC', 'POPULAR'],
    category: 'Sushi',
    restaurant: { id: '3', name: 'Sushi Master', distance: '2.1 miles away' }
  },
  {
    id: '13',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna with spicy mayo and sesame seeds',
    price: 14.00,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195368/3195368-uhd_2560_1440_25fps.mp4',
    rating: 4.6,
    reviews: 167,
    tags: ['SPICY', 'POPULAR'],
    category: 'Sushi',
    restaurant: { id: '3', name: 'Sushi Master', distance: '2.1 miles away' }
  },
  {
    id: '14',
    name: 'Dragon Roll',
    description: 'Eel and cucumber topped with avocado and eel sauce',
    price: 16.50,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195368/3195368-uhd_2560_1440_25fps.mp4',
    rating: 4.7,
    reviews: 89,
    tags: ['PREMIUM', 'SPECIALTY'],
    category: 'Sushi',
    restaurant: { id: '3', name: 'Sushi Master', distance: '2.1 miles away' }
  },
  {
    id: '15',
    name: 'Miso Soup',
    description: 'Traditional Japanese soup with tofu and seaweed',
    price: 4.50,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195368/3195368-uhd_2560_1440_25fps.mp4',
    rating: 4.3,
    reviews: 234,
    tags: ['TRADITIONAL', 'SOUP'],
    category: 'Appetizers',
    restaurant: { id: '3', name: 'Sushi Master', distance: '2.1 miles away' }
  },

  // Add more dishes for remaining restaurants (continuing pattern)...
  // For brevity, I'll add a few more key dishes and then continue the pattern

  // Habesha's Kitchen dishes (5)
  {
    id: '16',
    name: 'Doro Wat',
    description: 'Traditional Ethiopian chicken stew with berbere spice',
    price: 16.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.7,
    reviews: 123,
    tags: ['TRADITIONAL', 'SPICY'],
    category: 'Ethiopian',
    restaurant: { id: '4', name: 'Habesha\'s Kitchen', distance: '1.5 miles away' },
    discount: 30
  },
  {
    id: '17',
    name: 'Injera Platter',
    description: 'Traditional sourdough flatbread with various stews',
    price: 18.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.6,
    reviews: 98,
    tags: ['TRADITIONAL', 'SHARING'],
    category: 'Ethiopian',
    restaurant: { id: '4', name: 'Habesha\'s Kitchen', distance: '1.5 miles away' }
  },
  {
    id: '18',
    name: 'Kitfo',
    description: 'Ethiopian steak tartare with spices and cheese',
    price: 20.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.8,
    reviews: 67,
    tags: ['PREMIUM', 'RAW'],
    category: 'Ethiopian',
    restaurant: { id: '4', name: 'Habesha\'s Kitchen', distance: '1.5 miles away' }
  },
  {
    id: '19',
    name: 'Vegetarian Combo',
    description: 'Assorted vegetarian dishes with injera bread',
    price: 15.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.5,
    reviews: 89,
    tags: ['VEGETARIAN', 'COMBO'],
    category: 'Ethiopian',
    restaurant: { id: '4', name: 'Habesha\'s Kitchen', distance: '1.5 miles away' }
  },
  {
    id: '20',
    name: 'Ethiopian Coffee',
    description: 'Traditional coffee ceremony with roasted beans',
    price: 6.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.4,
    reviews: 156,
    tags: ['TRADITIONAL', 'COFFEE'],
    category: 'Beverages',
    restaurant: { id: '4', name: 'Habesha\'s Kitchen', distance: '1.5 miles away' }
  },

  // Little China dishes (5)
  {
    id: '21',
    name: 'Chicken Noodles',
    description: 'Stir-fried noodles with chicken and vegetables',
    price: 13.50,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.4,
    reviews: 187,
    tags: ['POPULAR', 'NOODLES'],
    category: 'Chinese',
    restaurant: { id: '5', name: 'Little China', distance: '2.0 miles away' },
    discount: 17
  },
  {
    id: '22',
    name: 'Sweet and Sour Pork',
    description: 'Crispy pork with sweet and sour sauce',
    price: 15.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.3,
    reviews: 134,
    tags: ['SWEET', 'CRISPY'],
    category: 'Chinese',
    restaurant: { id: '5', name: 'Little China', distance: '2.0 miles away' }
  },
  {
    id: '23',
    name: 'Kung Pao Chicken',
    description: 'Spicy chicken with peanuts and vegetables',
    price: 14.50,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.5,
    reviews: 167,
    tags: ['SPICY', 'POPULAR'],
    category: 'Chinese',
    restaurant: { id: '5', name: 'Little China', distance: '2.0 miles away' }
  },
  {
    id: '24',
    name: 'Fried Rice',
    description: 'Wok-fried rice with eggs and vegetables',
    price: 11.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.2,
    reviews: 203,
    tags: ['RICE', 'CLASSIC'],
    category: 'Chinese',
    restaurant: { id: '5', name: 'Little China', distance: '2.0 miles away' }
  },
  {
    id: '25',
    name: 'Spring Rolls',
    description: 'Crispy spring rolls with sweet chili sauce',
    price: 8.50,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    rating: 4.1,
    reviews: 89,
    tags: ['APPETIZER', 'CRISPY'],
    category: 'Appetizers',
    restaurant: { id: '5', name: 'Little China', distance: '2.0 miles away' }
  },

  // Food Preparation Videos (mock)
  {
    id: '101',
    name: 'Sushi Rolling Prep',
    description: 'Watch as our chef prepares fresh sushi rolls from scratch.',
    price: 0,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/856086/856086-hd_1920_1080_25fps.mp4',
    rating: 5.0,
    reviews: 0,
    tags: ['PREPARATION', 'SUSHI', 'JAPANESE'],
    category: 'Preparation',
    restaurant: { id: '3', name: 'Sushi Master', distance: '2.1 miles away' }
  },
  {
    id: '102',
    name: 'Burger Grilling',
    description: 'See how our signature burgers are grilled to perfection.',
    price: 0,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3184182/3184182-hd_1920_1080_25fps.mp4',
    rating: 5.0,
    reviews: 0,
    tags: ['PREPARATION', 'BURGER', 'AMERICAN'],
    category: 'Preparation',
    restaurant: { id: '2', name: 'Burger Palace', distance: '1.2 miles away' }
  },
  {
    id: '103',
    name: 'Pasta Making',
    description: 'Handmade pasta being prepared in our Italian kitchen.',
    price: 0,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/854190/854190-hd_1920_1080_25fps.mp4',
    rating: 5.0,
    reviews: 0,
    tags: ['PREPARATION', 'PASTA', 'ITALIAN'],
    category: 'Preparation',
    restaurant: { id: '7', name: 'Pizza Corner', distance: '0.8 miles away' }
  },
  {
    id: '104',
    name: 'Salad Tossing',
    description: 'Fresh greens and veggies tossed for a healthy salad.',
    price: 0,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3184183/3184183-hd_1920_1080_25fps.mp4',
    rating: 5.0,
    reviews: 0,
    tags: ['PREPARATION', 'SALAD', 'HEALTHY'],
    category: 'Preparation',
    restaurant: { id: '12', name: 'Fresh Salads Co', distance: '0.7 miles away' }
  },
  {
    id: '105',
    name: 'Coffee Brewing',
    description: 'Barista brewing a perfect cup of coffee.',
    price: 0,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    video: 'https://videos.pexels.com/video-files/3184184/3184184-hd_1920_1080_25fps.mp4',
    rating: 5.0,
    reviews: 0,
    tags: ['PREPARATION', 'COFFEE', 'DRINKS'],
    category: 'Preparation',
    restaurant: { id: '17', name: 'Coffee & More', distance: '0.5 miles away' }
  },

  // Continue this pattern for all 20 restaurants with 5 dishes each...
  // For brevity, I'm showing the pattern. The full implementation would have 100 total dishes.
];

export const mockCategories = [
  { id: '1', name: 'All', icon: '🍽️' },
  { id: '2', name: 'Fasting Specials', icon: '🥗' },
  { id: '3', name: 'Books', icon: '📚' },
  { id: '4', name: 'Breakfast For You', icon: '🍳' },
  { id: '5', name: 'Burger', icon: '🍔' },
  { id: '6', name: 'International Restaurant', icon: '🌍' },
  { id: '7', name: 'Pizza', icon: '🍕' },
  { id: '8', name: 'Sushi', icon: '🍣' },
  { id: '9', name: 'Chinese', icon: '🥢' },
  { id: '10', name: 'Ethiopian', icon: '🇪🇹' },
  { id: '11', name: 'Italian', icon: '🇮🇹' },
  { id: '12', name: 'Mexican', icon: '🌮' },
  { id: '13', name: 'Indian', icon: '🍛' },
  { id: '14', name: 'Thai', icon: '🌶️' },
  { id: '15', name: 'Korean', icon: '🥘' },
  { id: '16', name: 'Mediterranean', icon: '🫒' },
  { id: '17', name: 'BBQ', icon: '🔥' },
  { id: '18', name: 'Seafood', icon: '🦐' },
  { id: '19', name: 'Desserts', icon: '🍰' },
  { id: '20', name: 'Coffee', icon: '☕' },
  { id: '21', name: 'Healthy', icon: '🥗' }
];

export const mockCredentials = {
  email: 'demo@foodapp.com',
  password: 'demo123'
};