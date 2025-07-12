'use client';

import { useState, useRef, useEffect } from 'react';
import { Dish } from '@/types';
import VideoCard from './VideoCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoFeedProps {
  dishes: Dish[];
  onAddToCart: (dish: Dish) => void;
}

export default function VideoFeed({ dishes, onAddToCart }: VideoFeedProps) {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);

  // Group dishes by restaurant
  const dishGroups = dishes.reduce((groups, dish) => {
    const restaurantId = dish.restaurant.id;
    if (!groups[restaurantId]) {
      groups[restaurantId] = [];
    }
    groups[restaurantId].push(dish);
    return groups;
  }, {} as Record<string, Dish[]>);

  const groupedDishes = Object.values(dishGroups);
  const currentGroup = groupedDishes[currentRestaurantIndex] || [];

  const handleNextDish = () => {
    if (currentDishIndex < currentGroup.length - 1) {
      setCurrentDishIndex(prev => prev + 1);
    } else {
      // Move to next restaurant
      if (currentRestaurantIndex < groupedDishes.length - 1) {
        setCurrentRestaurantIndex(prev => prev + 1);
        setCurrentDishIndex(0);
      }
    }
  };

  const handlePrevDish = () => {
    if (currentDishIndex > 0) {
      setCurrentDishIndex(prev => prev - 1);
    } else {
      // Move to previous restaurant
      if (currentRestaurantIndex > 0) {
        setCurrentRestaurantIndex(prev => prev - 1);
        setCurrentDishIndex(0);
      }
    }
  };

  // Handle touch/swipe gestures for horizontal scrolling
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextDish();
    } else if (isRightSwipe) {
      handlePrevDish();
    }
  };

  if (!currentGroup.length) {
    return (
      <div className="pt-24 pb-20">
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-lg">No dishes available</p>
            <p className="text-sm opacity-75">Please check back later</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div
        ref={feedRef}
        className="h-screen relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <VideoCard
          dish={currentGroup[currentDishIndex]}
          onAddToCart={onAddToCart}
        />

        {/* Horizontal navigation for dishes within restaurant */}
        {currentGroup.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrevDish}
              disabled={currentDishIndex === 0 && currentRestaurantIndex === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 text-white hover:bg-black/30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNextDish}
              disabled={currentDishIndex === currentGroup.length - 1 && currentRestaurantIndex === groupedDishes.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 text-white hover:bg-black/30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dot indicators */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {currentGroup.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDishIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentDishIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Restaurant indicators */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
          {groupedDishes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentRestaurantIndex(index);
                setCurrentDishIndex(0);
              }}
              className={`w-1 h-8 rounded-full transition-all ${
                index === currentRestaurantIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}