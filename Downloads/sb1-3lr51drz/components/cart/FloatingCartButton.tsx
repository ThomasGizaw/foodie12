'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';

export default function FloatingCartButton() {
  const { itemCount, total } = useCart();
  const router = useRouter();

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-20 left-4 z-50">
      <Button
        onClick={() => router.push('/cart')}
        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg rounded-full px-4 py-3 flex items-center gap-2"
      >
        <div className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        </div>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </Button>
    </div>
  );
} 