'use client';

import { Home, Bookmark, Compass, Clock, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  vertical?: boolean;
}

export default function BottomNavigation({ activeTab, onTabChange, vertical = false }: BottomNavigationProps) {
  const { itemCount } = useCart();
  const router = useRouter();

  const tabs = [
    { id: 'feed', label: 'Cart', icon: ShoppingCart, onClick: () => router.push('/cart') },
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'activity', label: 'Activity', icon: Clock },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  if (vertical) {
    return (
      <div className="fixed top-1/2 right-2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 p-2">
        {tabs.map(({ id, label, icon: Icon, onClick }) => (
          <Button
            key={id}
            variant="ghost"
            size="icon"
            onClick={onClick || (() => onTabChange(id))}
            className={`flex flex-col items-center gap-1 p-3 bg-transparent border-none shadow-none ${
              activeTab === id ? 'text-orange-500' : 'text-white'
            }`}
          >
            <div className="relative">
              <Icon className={`h-6 w-6 ${activeTab === id ? 'text-orange-500' : 'text-white'}`} />
              {id === 'feed' && itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-1">{label}</span>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent backdrop-blur-sm px-4 py-2 z-50">
      <div className="flex items-center justify-around">
        {tabs.map(({ id, label, icon: Icon, onClick }) => (
          <Button
            key={id}
            variant="ghost"
            size="sm"
            onClick={onClick || (() => onTabChange(id))}
            className={`flex flex-col items-center gap-1 px-3 py-2 backdrop-blur-sm bg-transparent border-none shadow-none ${
              activeTab === id ? 'text-orange-500' : 'text-white'
            }`}
          >
            <div className="relative">
              <Icon className={`h-5 w-5 ${activeTab === id ? 'text-orange-500' : 'text-white'}`} />
              {id === 'feed' && itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="text-xs">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}