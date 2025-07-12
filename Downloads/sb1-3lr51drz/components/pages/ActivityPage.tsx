'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ShoppingBag, Star, ChevronRight } from 'lucide-react';

export default function ActivityPage() {
  const [pastOrders] = useState([
    {
      id: 'FD123456',
      date: '2024-01-15',
      total: 24.99,
      status: 'delivered',
      items: [
        { name: 'Chicken Over Rice (VEGAN)', restaurant: 'Plantega', quantity: 1, price: 14.00 },
        { name: 'Avocado Toast', restaurant: 'Plantega', quantity: 1, price: 11.50 }
      ]
    },
    {
      id: 'FD123455',
      date: '2024-01-12',
      total: 18.99,
      status: 'delivered',
      items: [
        { name: 'Classic Burger', restaurant: 'Burger Palace', quantity: 1, price: 12.99 }
      ]
    },
    {
      id: 'FD123454',
      date: '2024-01-10',
      total: 32.50,
      status: 'delivered',
      items: [
        { name: 'Salmon Sashimi', restaurant: 'Sushi Master', quantity: 1, price: 18.50 },
        { name: 'Margherita Pizza', restaurant: 'Plantega', quantity: 1, price: 16.00 }
      ]
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'preparing': return 'bg-orange-100 text-orange-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Order History</h1>
          <p className="text-sm text-gray-600">{pastOrders.length} orders</p>
        </div>

        {pastOrders.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No orders yet</h2>
            <p className="text-gray-600">Your order history will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pastOrders.map(order => (
              <Card key={order.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{formatDate(order.date)}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">${order.total.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">{order.items.length} items</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div>
                          <span className="font-medium">{item.quantity}x {item.name}</span>
                          <p className="text-gray-600">{item.restaurant}</p>
                        </div>
                        <span className="text-gray-600">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Star className="h-4 w-4 mr-1" />
                        Rate
                      </Button>
                      <Button variant="outline" size="sm">
                        Reorder
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-orange-500">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
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