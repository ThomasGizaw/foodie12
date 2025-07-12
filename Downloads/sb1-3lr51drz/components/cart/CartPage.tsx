'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus, Minus, ShoppingBag, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();
  const router = useRouter();

  if (itemCount === 0) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious food to get started!</p>
          <Button
            onClick={() => router.push('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/')}
              className="p-2"
            >
              <Home className="h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-600">{itemCount} items</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {items.map((item) => {
            const discountedPrice = item.dish.discount 
              ? item.dish.price * (1 - item.dish.discount / 100)
              : item.dish.price;

            return (
              <Card key={item.dish.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {item.dish.video ? (
                      <video
                        src={item.dish.video}
                        className="w-16 h-16 object-cover rounded-lg"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.dish.image || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'}
                        alt={item.dish.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop';
                        }}
                      />
                    )}
                    
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.dish.name}</h3>
                      <p className="text-sm text-gray-600">{item.dish.restaurant.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {item.dish.discount && (
                          <span className="text-sm text-gray-400 line-through">
                            ${item.dish.price.toFixed(2)}
                          </span>
                        )}
                        <span className="text-sm font-bold text-orange-500">
                          ${discountedPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.dish.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$2.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(total + 2.99 + total * 0.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={() => router.push('/checkout')}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}