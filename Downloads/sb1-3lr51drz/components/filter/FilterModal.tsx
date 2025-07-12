'use client';

import { useState } from 'react';
import { FilterOptions } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export default function FilterModal({ isOpen, onClose, filters, onFiltersChange }: FilterModalProps) {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const cuisines = ['American', 'Asian', 'Italian', 'Mexican', 'Vegan', 'Japanese', 'Indian'];

  const handleCuisineChange = (cuisine: string, checked: boolean) => {
    setLocalFilters(prev => ({
      ...prev,
      cuisine: checked 
        ? [...prev.cuisine, cuisine]
        : prev.cuisine.filter(c => c !== cuisine)
    }));
  };

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
    onClose();
  };

  const handleResetFilters = () => {
    const resetFilters: FilterOptions = {
      cuisine: [],
      priceRange: [0, 50],
      rating: 0,
      distance: 10
    };
    setLocalFilters(resetFilters);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle>Filter Options</SheetTitle>
          <SheetDescription>
            Customize your search preferences
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Cuisine */}
          <div>
            <Label className="text-base font-medium mb-3 block">Cuisine</Label>
            <div className="grid grid-cols-2 gap-3">
              {cuisines.map(cuisine => (
                <div key={cuisine} className="flex items-center space-x-2">
                  <Checkbox
                    id={cuisine}
                    checked={localFilters.cuisine.includes(cuisine)}
                    onCheckedChange={(checked) => handleCuisineChange(cuisine, !!checked)}
                  />
                  <Label htmlFor={cuisine} className="text-sm">{cuisine}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <Label className="text-base font-medium mb-3 block">
              Price Range: ${localFilters.priceRange[0]} - ${localFilters.priceRange[1]}
            </Label>
            <Slider
              value={localFilters.priceRange}
              onValueChange={(value) => setLocalFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
              max={50}
              min={0}
              step={1}
              className="w-full"
            />
          </div>

          {/* Rating */}
          <div>
            <Label className="text-base font-medium mb-3 block">
              Minimum Rating: {localFilters.rating} stars
            </Label>
            <Slider
              value={[localFilters.rating]}
              onValueChange={(value) => setLocalFilters(prev => ({ ...prev, rating: value[0] }))}
              max={5}
              min={0}
              step={0.1}
              className="w-full"
            />
          </div>

          {/* Distance */}
          <div>
            <Label className="text-base font-medium mb-3 block">
              Distance: {localFilters.distance} miles
            </Label>
            <Slider
              value={[localFilters.distance]}
              onValueChange={(value) => setLocalFilters(prev => ({ ...prev, distance: value[0] }))}
              max={20}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-6">
          <Button
            variant="outline"
            onClick={handleResetFilters}
            className="flex-1"
          >
            Reset
          </Button>
          <Button
            onClick={handleApplyFilters}
            className="flex-1 bg-orange-500 hover:bg-orange-600"
          >
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}