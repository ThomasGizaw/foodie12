'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { FilterOptions } from '@/types';
import { mockDishes } from '@/data/mockData';
import Loading from '@/components/ui/loading';
import LoginForm from '@/components/auth/LoginForm';
import TopNavigation from '@/components/layout/TopNavigation';
import BottomNavigation from '@/components/layout/BottomNavigation';
import VideoFeed from '@/components/feed/VideoFeed';
import MenuView from '@/components/menu/MenuView';
import FilterModal from '@/components/filter/FilterModal';
import ProfilePage from '@/components/profile/ProfilePage';
import SavedPage from '@/components/pages/SavedPage';
import DiscoverPage from '@/components/pages/DiscoverPage';
import ActivityPage from '@/components/pages/ActivityPage';

export default function Home() {
  const { user, isLoading } = useAuth();
  const [viewMode, setViewMode] = useState<'feed' | 'menu'>('feed');
  const [activeTab, setActiveTab] = useState('profile'); // Start from profile since cart is removed
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    cuisine: [],
    priceRange: [0, 50],
    rating: 0,
    distance: 10
  });

  // Only cycle through non-cart tabs
  const tabOrder = ['profile', 'saved', 'discover', 'activity'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabOrder.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabOrder.length;
        return tabOrder[nextIndex];
      });
    }, 3000); // Change tab every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Filter dishes based on search and filters, but always include PREPARATION videos
  const filteredDishes = mockDishes.filter(dish => {
    const isPreparation = dish.tags.includes('PREPARATION');
    if (isPreparation) return true;

    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dish.restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCuisine = filters.cuisine.length === 0 || 
                          filters.cuisine.some(cuisine => 
                            dish.tags.includes(cuisine.toUpperCase()) ||
                            dish.category.toLowerCase().includes(cuisine.toLowerCase())
                          );
    
    const matchesPrice = dish.price >= filters.priceRange[0] && dish.price <= filters.priceRange[1];
    const matchesRating = dish.rating >= filters.rating;
    
    return matchesSearch && matchesCuisine && matchesPrice && matchesRating;
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <LoginForm />;
  }

  const renderContent = () => {
    if (activeTab === 'profile') {
      return <ProfilePage />;
    }
    
    if (activeTab === 'saved') {
      return <SavedPage />;
    }
    
    if (activeTab === 'discover') {
      return <DiscoverPage />;
    }
    
    if (activeTab === 'activity') {
      return <ActivityPage />;
    }

    // Default to feed view
    if (viewMode === 'feed') {
      return <VideoFeed dishes={filteredDishes} />;
    } else {
      return <MenuView dishes={filteredDishes} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {activeTab !== 'feed' && (
        <TopNavigation
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onFilterClick={() => setShowFilterModal(true)}
        />
      )}
      
      <main className="relative">
        {renderContent()}
      </main>

      {viewMode === 'feed' ? (
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          vertical={true}
        />
      ) : (
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      )}

      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />

    </div>
  );
}