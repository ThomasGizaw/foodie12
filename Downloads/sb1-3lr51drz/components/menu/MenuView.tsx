'use client';

import { useState } from 'react';
import { Dish } from '@/types';
import { mockCategories } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Star, ShoppingCart, MapPin, Search } from 'lucide-react';

interface MenuViewProps {
  dishes: Dish[];
}

export default function MenuView({ dishes }: MenuViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = selectedCategory === 'All' 
    ? dishes 
    : dishes.filter(dish => 
        dish.category === selectedCategory || 
        dish.tags.includes(selectedCategory.toUpperCase())
      );

  const specialOffers = dishes.filter(dish => dish.discount && dish.discount > 0);
  
  // Group restaurants for the "All Restaurants Nearby" section
  const restaurantGroups = dishes.reduce((groups, dish) => {
    const restaurantId = dish.restaurant.id;
    if (!groups[restaurantId]) {
      groups[restaurantId] = {
        id: restaurantId,
        name: dish.restaurant.name,
        distance: dish.restaurant.distance,
        rating: dish.rating,
        cuisine: dish.category,
        dishes: []
      };
    }
    groups[restaurantId].dishes.push(dish);
    return groups;
  }, {} as Record<string, any>);

  const restaurants = Object.values(restaurantGroups);

  return (
    <div className="pt-16 pb-20 bg-gray-50 min-h-screen">
      {/* Header with location */}
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-800">BL_03_672 Street, Addis ababa, Ethiopia</span>
          </div>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-100 px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search your taste"
            className="pl-10 bg-white border-gray-200 rounded-full"
          />
        </div>
      </div>

      <div className="px-4">
        {/* Special Offers Banner */}
        {specialOffers.length > 0 && (
          <div className="my-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {specialOffers.slice(0, 3).map(dish => (
                <div key={dish.id} className="flex-shrink-0 w-80 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-4 text-white relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-sm">🍽️</span>
                        </div>
                        <span className="text-sm font-medium">ORDER NOW</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{dish.restaurant.name}</h3>
                      <div className="text-3xl font-bold">
                        {dish.discount}%<span className="text-lg">off</span>
                      </div>
                    </div>
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      {/* Category Filter */}
        <div className="my-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
          {mockCategories.map(category => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                selectedCategory === category.name 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-orange-100 text-orange-500'
              }`}>
                {category.icon}
              </div>
              <span className="text-xs text-center font-medium text-gray-700 max-w-[80px] leading-tight">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

        {/* Special Offers Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Special Offers</h2>
            <Button variant="outline" size="sm" className="text-orange-500 border-orange-500">
              Filter
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {specialOffers.slice(0, 3).map(dish => (
              <Card key={dish.id} className="overflow-hidden">
                <div className="flex">
                  <div className="relative w-24 h-24">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1">
                      {dish.discount}.0% OFF
                    </Badge>
                  </div>
                  <div className="flex-1 p-3">
                    <h3 className="font-semibold text-sm mb-1">{dish.name}</h3>
                    <p className="text-xs text-gray-600 mb-1">{dish.restaurant.name}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold">{(dish.price * 0.83).toFixed(1)} Br</span>
                        <span className="text-xs text-gray-400 line-through ml-1">{(dish.price * 1.2).toFixed(1)} Br</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Restaurants Nearby */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">All Restaurants Nearby</h2>
            <Button variant="outline" size="sm" className="text-orange-500 border-orange-500">
              Filter
            </Button>
          </div>
          <div className="space-y-4">
            {restaurants.slice(0, 20).map(restaurant => (
              <Card key={restaurant.id} className="overflow-hidden">
                <div className="flex items-center p-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {restaurant.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{restaurant.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-orange-500 fill-current" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-orange-500 border-orange-500">
                        Around 1KM
                      </Badge>
                      <Badge variant="outline" className="text-orange-500 border-orange-500">
                        Around 44 min
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Avg 659 Br per person</p>
                    <p className="text-xs text-gray-500">Delivery • Breakfast • Lunch • Dinner</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}