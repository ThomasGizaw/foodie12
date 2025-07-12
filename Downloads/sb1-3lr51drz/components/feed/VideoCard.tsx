'use client';

import { useState } from 'react';
import { Dish } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2, MessageCircle, ShoppingCart, Star } from 'lucide-react';

interface VideoCardProps {
  dish: Dish;
  onAddToCart: (dish: Dish) => void;
}

export default function VideoCard({ dish, onAddToCart }: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(dish);
  };

  const handleVideoError = () => {
    console.log('Video failed to load:', dish.video);
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully:', dish.video);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: dish.name,
          text: dish.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const discountedPrice = dish.discount 
    ? dish.price * (1 - dish.discount / 100)
    : dish.price;

  return (
    <div className="relative w-full h-full bg-black">
      {/* Video/Image Background */}
      {dish.video && !videoError ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
        >
          <source src={dish.video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={dish.image || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'}
          alt={dish.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 pb-20">
        <div className="space-y-3">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {dish.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant={tag === 'POPULAR' ? 'default' : 'secondary'}
                className={tag === 'POPULAR' ? 'bg-orange-500 text-white' : 'bg-black/30 text-white'}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Dish Info */}
          <div className="space-y-1.5">
            <h2 className="text-xl font-bold text-white">{dish.name}</h2>
            <p className="text-sm text-gray-200 line-clamp-2">{dish.description}</p>
            
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>{dish.restaurant.name}</span>
              <span>•</span>
              <span>{dish.restaurant.distance}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white font-medium">{dish.rating}</span>
                <span className="text-gray-300">({dish.reviews})</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className="text-white hover:bg-white/20 p-2"
              >
                <Heart className={`h-6 w-6 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-white hover:bg-white/20 p-2"
              >
                <Share2 className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-2"
              >
                <MessageCircle className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                {dish.discount && (
                  <p className="text-sm text-gray-300 line-through">
                    US${dish.price.toFixed(2)}
                  </p>
                )}
                <p className="text-lg font-bold text-white">
                  US${discountedPrice.toFixed(2)}
                </p>
              </div>
              <Button
                onClick={handleAddToCart}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}