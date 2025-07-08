import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter, Grid, List, Star, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { products, categories, priceRanges, type Product } from "../data/products";

export const Shop = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const handlePriceRangeChange = (rangeId: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(rangeId) 
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  const getProductPrice = (priceString: string): number => {
    return parseInt(priceString.replace('₹', '').replace(',', ''));
  };

  const filteredProducts = React.useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price ranges
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(product => {
        const price = getProductPrice(product.price);
        return selectedPriceRanges.some(rangeId => {
          const range = priceRanges.find(r => r.id === rangeId);
          if (!range) return false;
          return price >= range.min && price <= range.max;
        });
      });
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => getProductPrice(a.price) - getProductPrice(b.price));
        break;
      case "price-high":
        filtered.sort((a, b) => getProductPrice(b.price) - getProductPrice(a.price));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Keep original order for "featured"
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRanges, sortBy]);

  const handleQuickAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  const handleWishlistToggle = (product: Product) => {
    if (!isInWishlist(product.id)) {
      addToWishlist(product);
    }
  };
  return (
    <div className="min-h-screen bg-[#fdf9f9]">
      {/* Header */}
      <div className="bg-[#2e3155] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Bebas_Neue'] text-5xl md:text-6xl mb-4"
          >
            Sustainable Fashion Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Kameron'] text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Every purchase supports artisan livelihoods and reduces textile waste
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-['Kameron'] font-bold text-[#2e3155] text-lg mb-6">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-[#ffdff9] text-[#2e3155] font-semibold"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-['Kameron']">{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-['Kameron'] font-bold text-[#2e3155] mb-4">
                  Price Range
                </h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        className="rounded"
                        checked={selectedPriceRanges.includes(range.id)}
                        onChange={() => handlePriceRangeChange(range.id)}
                      />
                      <span className="font-['Kameron'] text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <span className="font-['Kameron'] text-gray-600">
                  Showing {filteredProducts.length} products
                </span>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-['Kameron'] text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#ffdff9] focus:border-[#2e3155]"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-md">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid" ? "bg-[#2e3155] text-white" : "text-gray-600"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list" ? "bg-[#2e3155] text-white" : "text-gray-600"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
                
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>
                    Filter
                    {(selectedPriceRanges.length > 0 || selectedCategory !== "all") && (
                      <span className="ml-1 bg-[#2e3155] text-white rounded-full px-2 py-0.5 text-xs">
                        {selectedPriceRanges.length + (selectedCategory !== "all" ? 1 : 0)}
                      </span>
                    )}
                  </span>
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                    <div className={`relative overflow-hidden ${
                      viewMode === "list" ? "w-48 flex-shrink-0" : ""
                    }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === "list" ? "w-full h-full" : "w-full h-64"
                        }`}
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Upcycled
                        </div>
                        {product.isNew && (
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            New
                          </div>
                        )}
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          -{product.discount}%
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={() => handleWishlistToggle(product)}
                          className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-colors ${
                            isInWishlist(product.id)
                              ? "bg-red-50 text-red-500"
                              : "hover:bg-red-50 text-gray-600 hover:text-red-500"
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                        </button>
                        <button 
                          onClick={() => handleQuickAddToCart(product)}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors"
                        >
                          <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                        </button>
                      </div>
                    </div>
                    
                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-['Kameron'] font-semibold text-[#2e3155] text-lg leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">
                        {product.story} • By {product.artisan}
                      </p>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-[#2e3155] text-xl">
                            {product.price}
                          </span>
                          <span className="text-gray-500 text-sm line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          asChild
                          className="flex-1 h-[45px] bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full"
                        >
                          <Link to={`/product/${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button
                          onClick={() => handleQuickAddToCart(product)}
                          variant="outline"
                          className="h-[45px] px-4 rounded-full border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="h-[50px] px-8 rounded-full border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white transition-all duration-300"
              >
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};