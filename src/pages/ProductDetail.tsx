import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Heart, Share2, ShoppingBag, Truck, Shield, RotateCcw, ArrowLeft } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { products } from "../data/products";

export const ProductDetail = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart, addToWishlist, isInWishlist, isInCart } = useCart();

  // Find product by ID
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fdf9f9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-4">
            Product Not Found
          </h1>
          <p className="font-['Kameron'] text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-[#2e3155] hover:bg-[#2e3155]/90">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get related products from same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, quantity, selectedSize);
  };

  const handleBuyNow = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, quantity, selectedSize);
    navigate('/checkout');
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      // Could add remove from wishlist functionality here
      return;
    }
    addToWishlist(product);
  };
  return (
    <div className="min-h-screen bg-[#fdf9f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 mb-8"
        >
          <Link
            to="/shop"
            className="flex items-center space-x-2 text-gray-600 hover:text-[#2e3155] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-['Kameron']">Back to Shop</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Upcycled
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  -{product.discount}% OFF
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#2e3155] shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-['Kameron'] text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="font-['Bebas_Neue'] text-3xl text-[#2e3155]">
                  {product.price}
                </span>
                <span className="font-['Kameron'] text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Save {product.discount}%
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="font-['Kameron'] text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-['Kameron'] font-semibold text-[#2e3155] mb-3">
                  Select Size
                </h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? "border-[#2e3155] bg-[#2e3155] text-white"
                          : "border-gray-300 hover:border-[#2e3155]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-['Kameron'] font-semibold text-[#2e3155] mb-3">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="font-['Kameron'] font-medium text-lg w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-6">
                <Button 
                  onClick={handleBuyNow}
                  className="flex-1 h-[50px] bg-[#2e3155] hover:bg-[#2e3155]/90 text-white rounded-full font-['Bebas_Neue'] text-lg"
                >
                  Buy Now
                </Button>
                
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  className="flex-1 h-[50px] border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white rounded-full font-['Bebas_Neue'] text-lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              {/* Secondary Actions */}
              <div className="flex space-x-4 mb-6">
                <Button
                  onClick={handleWishlistToggle}
                  variant="outline"
                  className={`flex-1 h-[45px] border-2 rounded-full transition-all ${
                    isInWishlist(product.id)
                      ? "border-red-500 bg-red-50 text-red-600 hover:bg-red-100"
                      : "border-[#2e3155] hover:bg-[#2e3155] hover:text-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                  {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                </Button>
                
                <Button
                  variant="outline"
                  className="h-[45px] px-6 border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white rounded-full"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Truck className="w-4 h-4 text-green-600" />
                  <span className="font-['Kameron'] text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="font-['Kameron'] text-gray-600">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <RotateCcw className="w-4 h-4 text-purple-600" />
                  <span className="font-['Kameron'] text-gray-600">Easy Returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Story */}
            <Card className="shadow-lg border-0 rounded-2xl">
              <div className="bg-[#ffdff9] p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                  The Story Behind This Piece
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="font-['Kameron'] text-gray-700 leading-relaxed mb-4">
                  {product.story}
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-['Kameron'] font-semibold text-[#2e3155] mb-2">
                    Artisan Details
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Name:</span> {product.artisanDetails.name}</p>
                    <p><span className="font-medium">Location:</span> {product.artisanDetails.location}</p>
                    <p><span className="font-medium">Experience:</span> {product.artisanDetails.experience}</p>
                    <p><span className="font-medium">Specialty:</span> {product.artisanDetails.specialty}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Materials & Features */}
            <Card className="shadow-lg border-0 rounded-2xl">
              <div className="bg-green-100 p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                  Materials & Features
                </h3>
              </div>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="font-['Kameron'] font-semibold text-[#2e3155] mb-3">
                    Materials Used
                  </h4>
                  <ul className="space-y-2">
                    {product.materials.map((material, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-['Kameron'] text-sm text-gray-700">
                          {material}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-['Kameron'] font-semibold text-[#2e3155] mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-['Kameron'] text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Care Instructions */}
            <Card className="shadow-lg border-0 rounded-2xl">
              <div className="bg-blue-100 p-6">
                <h3 className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                  Care Instructions
                </h3>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#2e3155] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="font-['Kameron'] text-gray-700">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="font-['Kameron'] text-sm text-gray-700">
                    <strong>Note:</strong> This is a handmade, upcycled product. 
                    Slight variations in color and texture are natural and add to its unique character.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-['Bebas_Neue'] text-3xl text-[#2e3155] mb-8 text-center">
            You Might Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Upcycled
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-['Kameron'] font-semibold text-[#2e3155] mb-2">
                      {relatedProduct.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-[#2e3155] text-lg">
                        {relatedProduct.price}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {relatedProduct.rating}
                        </span>
                      </div>
                    </div>
                    
                    <Button
                      asChild
                      className="w-full h-[40px] bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full"
                    >
                      <Link to={`/product/${relatedProduct.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};