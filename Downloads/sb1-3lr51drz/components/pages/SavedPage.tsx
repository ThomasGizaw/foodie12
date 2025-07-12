'use client';

import { useState } from 'react';
import { mockDishes } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function SavedPage() {
  const [savedDishes] = useState(mockDishes.slice(0, 3)); // Mock saved dishes
  const { addItem } = useCart();

  const handleAddToCart = (dish: any) => {
    addItem(dish);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Saved Items</h1>
          <p className="text-sm text-gray-600">{savedDishes.length} items</p>
        </div>

        {savedDishes.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No saved items yet</h2>
            <p className="text-gray-600">Start saving your favorite dishes!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedDishes.map(dish => (
              <Card key={dish.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2"
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                  </Button>
                  {dish.discount && (
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                      {dish.discount}% OFF
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold">{dish.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{dish.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-2">{dish.description}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{dish.restaurant.name}</span>
                      <span>•</span>
                      <span>{dish.restaurant.distance}</span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        {dish.discount && (
                          <span className="text-sm text-gray-400 line-through">
                            ${dish.price.toFixed(2)}
                          </span>
                        )}
                        <span className="text-lg font-bold text-orange-500">
                          ${dish.discount 
                            ? (dish.price * (1 - dish.discount / 100)).toFixed(2)
                            : dish.price.toFixed(2)
                          }
                        </span>
                      </div>
                      
                      <Button
                        onClick={() => handleAddToCart(dish)}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}