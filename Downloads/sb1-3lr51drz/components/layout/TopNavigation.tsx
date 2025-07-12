'use client';

import { Search, MapPin, SlidersHorizontal, LayoutGrid, Play, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';

interface TopNavigationProps {
  viewMode: 'feed' | 'menu';
  onViewModeChange: (mode: 'feed' | 'menu') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterClick: () => void;
}

export default function TopNavigation({
  viewMode,
  onViewModeChange,
  searchQuery,
  onSearchChange,
  onFilterClick
}: TopNavigationProps) {
  const { itemCount } = useCart();
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 bg-transparent z-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/30"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm">Allow access to location</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewModeChange(viewMode === 'feed' ? 'menu' : 'feed')}
          className="p-2 text-white bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/30"
        >
          {viewMode === 'feed' ? <LayoutGrid className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="flex items-center gap-3 mt-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search your taste"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-white/90 backdrop-blur-sm border-white/20 placeholder:text-gray-500"
          />
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onFilterClick}
          className="p-2 text-white bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/30"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}