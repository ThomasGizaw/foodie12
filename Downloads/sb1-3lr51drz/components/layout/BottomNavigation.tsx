'use client';

import { Home, Bookmark, Compass, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const { itemCount } = useCart();

  const tabs = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'activity', label: 'Activity', icon: Clock },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent backdrop-blur-sm px-4 py-2 z-50">
      <div className="flex items-center justify-around">
        {tabs.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center gap-1 px-3 py-2 backdrop-blur-sm ${
              activeTab === id ? 'text-orange-500 bg-white/20' : 'text-white bg-black/10 hover:bg-white/20'
            }`}
          >
            <div className="relative">
              <Icon className="h-5 w-5" />
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