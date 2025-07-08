import { useState, useMemo } from 'react';
import { products, type Product } from '../data/products';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    
    return products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.artisan.toLowerCase().includes(query) ||
      product.story.toLowerCase().includes(query) ||
      product.materials.some(material => material.toLowerCase().includes(query)) ||
      product.features.some(feature => feature.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    hasResults: searchResults.length > 0,
    isSearching: searchQuery.trim().length > 0
  };
};