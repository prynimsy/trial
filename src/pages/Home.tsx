import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, Users, Heart, Star, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { products } from "../data/products";

export const Home = (): JSX.Element => {
  const featuredProducts = products.slice(0, 3);
  const { addToCart } = useCart();

  const impactStats = [
    { icon: Recycle, value: "50,000+", label: "Items Upcycled" },
    { icon: Users, value: "2,500+", label: "Artisans Empowered" },
    { icon: Heart, value: "25,000+", label: "Happy Customers" },
  ];

  return (
    <div className="w-full bg-[#fdf9f9]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:h-[700px] border-t border-[#2e3155] flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Bebas_Neue'] font-normal text-[#2e3155] text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Reviving Style.
              <br />
              Redefining You.
            </h1>

            <p className="font-['Kameron'] font-normal text-black text-lg md:text-xl mb-8 max-w-[500px] leading-relaxed">
              Breathe new life into fashion with thoughtfully upcycled and
              sustainable clothing. Each piece tells a story — unique,
              conscious, and made with care by skilled artisans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-[#2e3155] hover:bg-[#2e3155]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/donate" className="flex items-center justify-center space-x-2">
                  <span className="font-['Bebas_Neue'] font-normal text-xl">DONATE</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto h-[50px] px-8 rounded-full border-2 border-[#2e3155] hover:bg-[#ffdff9] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/shop" className="flex items-center justify-center space-x-2">
                  <span className="font-['Bebas_Neue'] font-normal text-xl text-[#2e3155]">SHOP</span>
                  <ShoppingBag className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-[#2e3155] mx-auto mb-2" />
                  <div className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                    {stat.value}
                  </div>
                  <div className="font-['Kameron'] text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 bg-[#ffdff9] relative min-h-[400px] lg:min-h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Featured Product Card */}
            <Card className="absolute w-[90%] max-w-[372px] h-auto top-8 left-4 lg:left-[-75px] bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl border-0 z-10">
              <CardContent className="p-0 flex">
                <img
                  className="w-[120px] h-[160px] m-3 object-cover rounded-xl"
                  alt="Featured Product"
                  src={featuredProducts[0].image}
                />
                <div className="flex flex-col p-4 flex-1">
                  <h3 className="font-['Kameron'] font-semibold text-[#2e3155] text-lg mb-2 leading-tight">
                    {featuredProducts[0].name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(featuredProducts[0].rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({featuredProducts[0].rating})
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="font-['Kameron'] font-bold text-[#2e3155] text-lg">
                      {featuredProducts[0].price}
                    </span>
                    <span className="font-['Kameron'] text-gray-500 text-sm line-through">
                      {featuredProducts[0].originalPrice}
                    </span>
                  </div>

                  <Button
                    asChild
                    className="w-full h-[40px] bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link 
                      to={`/product/${featuredProducts[0].id}`}
                      onClick={() => addToCart(featuredProducts[0])}
                    >
                      <span className="font-['Bebas_Neue'] font-normal text-white text-lg">
                        BUY NOW
                      </span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Main Hero Image */}
            <img
              className="absolute w-[80%] max-w-[478px] h-[400px] lg:h-[478px] top-16 lg:top-[84px] left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[81px] object-cover rounded-2xl shadow-2xl"
              alt="Hero Fashion"
              src={featuredProducts[0]?.image || "/home-image-1.png"}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fdf9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Featured Upcycled Collection
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              Discover unique pieces crafted by talented artisans from donated materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Upcycled
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-['Kameron'] font-semibold text-[#2e3155] text-lg mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {product.story} • By {product.artisan}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-[#2e3155] text-xl">
                          {product.price}
                        </span>
                        <span className="text-gray-500 text-sm line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    
                    <Button
                      asChild
                      className="w-full h-[45px] bg-[#2e3155] hover:bg-[#2e3155]/90 rounded-full"
                    >
                      <Link 
                        to={`/product/${product.id}`}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="h-[50px] px-8 rounded-full border-2 border-[#2e3155] hover:bg-[#2e3155] hover:text-white transition-all duration-300"
            >
              <Link to="/shop">
                View All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#ffdff9]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              How NavaRupa Works
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              Join our circular fashion ecosystem in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Donate Your Clothes",
                description: "Send us your old clothes, fabrics, or materials. We'll arrange pickup from your doorstep.",
                icon: "♻️"
              },
              {
                step: "02",
                title: "Artisans Create Magic",
                description: "Our partner artisans and NGOs transform your donations into beautiful, unique pieces.",
                icon: "✨"
              },
              {
                step: "03",
                title: "Shop Consciously",
                description: "Purchase sustainable fashion while supporting artisan livelihoods and reducing waste.",
                icon: "🛍️"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#2e3155] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  {item.icon}
                </div>
                <div className="font-['Bebas_Neue'] text-6xl text-[#2e3155] mb-2">
                  {item.step}
                </div>
                <h3 className="font-['Kameron'] font-bold text-[#2e3155] text-xl mb-4">
                  {item.title}
                </h3>
                <p className="font-['Kameron'] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};