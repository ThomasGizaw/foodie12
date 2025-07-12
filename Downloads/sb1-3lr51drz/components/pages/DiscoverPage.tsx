'use client';

import { useState } from 'react';
import { mockCategories, mockDishes } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Clock, MapPin } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addItem } = useCart();

  const trendingDishes = mockDishes.filter(dish => dish.tags.includes('POPULAR'));
  const nearbyRestaurants = [
    { id: '1', name: 'Plantega', distance: '0.9 miles', eta: '25-35 min', rating: 4.5 },
    { id: '2', name: 'Burger Palace', distance: '1.2 miles', eta: '20-30 min', rating: 4.2 },
    { id: '3', name: 'Sushi Master', distance: '2.1 miles', eta: '30-40 min', rating: 4.8 }
  ];

  const handleAddToCart = (dish: any) => {
    addItem(dish);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Discover</h1>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mockCategories.slice(1).map(category => (
              <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trending Now */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            <h2 className="text-lg font-semibold">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trendingDishes.map(dish => (
              <Card key={dish.id} className="overflow-hidden">
                <div className="flex">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-sm">{dish.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{dish.restaurant.name}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs">{dish.rating}</span>
                      </div>
                      <span className="text-sm font-bold text-orange-500">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Nearby Restaurants */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-orange-500" />
            <h2 className="text-lg font-semibold">Nearby Restaurants</h2>
          </div>
          <div className="space-y-3">
            {nearbyRestaurants.map(restaurant => (
              <Card key={restaurant.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{restaurant.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span>{restaurant.rating}</span>
                        </div>
                        <span>{restaurant.distance}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{restaurant.eta}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-orange-500 border-orange-500 hover:bg-orange-50"
                    >
                      View Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}