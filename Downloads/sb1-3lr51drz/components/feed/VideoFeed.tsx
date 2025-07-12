'use client';

import { useRef } from 'react';
import { Dish } from '@/types';
import VideoCard from './VideoCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoFeedProps {
  dishes: Dish[];
  onAddToCart: (dish: Dish) => void;
}

export default function VideoFeed({ dishes, onAddToCart }: VideoFeedProps) {
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

  return (
    <div
      className="h-screen w-full overflow-y-auto snap-y snap-mandatory"
      style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {groupedDishes.map((dishes, restIdx) => (
        <section
          key={restIdx}
          className="h-screen w-full flex flex-col snap-start relative"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div
            className="flex-1 flex flex-row overflow-x-auto snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {dishes.map((dish, dishIdx) => (
              <div
                key={dish.id}
                className="w-full h-full flex-shrink-0 snap-center"
                style={{ minWidth: '100vw', minHeight: '100vh', scrollSnapAlign: 'center' }}
              >
                <VideoCard dish={dish} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
          {/* Optional: Horizontal navigation arrows for desktop */}
          {/* You can add left/right arrows here if desired */}
        </section>
      ))}
      <style jsx global>{`
        /* Hide scrollbars for both axes */
        .snap-y::-webkit-scrollbar, .snap-x::-webkit-scrollbar {
          display: none;
        }
        .snap-y, .snap-x {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}