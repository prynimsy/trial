import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star } from "lucide-react";
import { useSearch } from "../hooks/useSearch";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { searchQuery, setSearchQuery, searchResults, hasResults, isSearching } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleProductClick = () => {
    setSearchQuery('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for products, artisans, materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg font-['Kameron'] outline-none placeholder-gray-400"
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {!isSearching && (
                <div className="p-8 text-center">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="font-['Kameron'] text-gray-500">
                    Start typing to search for sustainable fashion products
                  </p>
                </div>
              )}

              {isSearching && !hasResults && (
                <div className="p-8 text-center">
                  <p className="font-['Kameron'] text-gray-500 mb-2">
                    No products found for "{searchQuery}"
                  </p>
                  <p className="font-['Kameron'] text-sm text-gray-400">
                    Try searching for clothing, accessories, or artisan names
                  </p>
                </div>
              )}

              {hasResults && (
                <div className="p-4">
                  <p className="font-['Kameron'] text-sm text-gray-600 mb-4 px-2">
                    Found {searchResults.length} product{searchResults.length !== 1 ? 's' : ''}
                  </p>
                  
                  <div className="space-y-2">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={handleProductClick}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-['Kameron'] font-semibold text-[#2e3155] group-hover:text-[#2e3155]/80 transition-colors truncate">
                            {product.name}
                          </h3>
                          
                          <p className="font-['Kameron'] text-sm text-gray-600 truncate">
                            {product.story} • By {product.artisan}
                          </p>
                          
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="font-['Kameron'] font-bold text-[#2e3155]">
                              {product.price}
                            </span>
                            <span className="font-['Kameron'] text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="font-['Kameron'] text-xs text-gray-600">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                            Upcycled
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};