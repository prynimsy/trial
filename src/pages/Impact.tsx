import React from "react";
import { motion } from "framer-motion";
import { Recycle, Users, Globe, Heart, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export const Impact = (): JSX.Element => {
  const impactMetrics = [
    {
      icon: Recycle,
      value: "50,000+",
      label: "Items Upcycled",
      description: "Pieces of clothing given new life",
      color: "bg-green-500"
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Artisans Empowered",
      description: "Skilled craftspeople supported",
      color: "bg-blue-500"
    },
    {
      icon: Globe,
      value: "25 Tons",
      label: "Waste Diverted",
      description: "Textile waste kept from landfills",
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      value: "25,000+",
      label: "Happy Customers",
      description: "Conscious consumers served",
      color: "bg-red-500"
    },
    {
      icon: TrendingUp,
      value: "₹2.5 Cr",
      label: "Artisan Income",
      description: "Fair wages distributed",
      color: "bg-yellow-500"
    },
    {
      icon: Award,
      value: "15",
      label: "NGO Partners",
      description: "Organizations collaborated with",
      color: "bg-indigo-500"
    }
  ];

  const stories = [
    {
      name: "Meera Devi",
      location: "Jaipur, Rajasthan",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Through NavaRupa, I've been able to support my family of four while preserving traditional block printing techniques. In the past year, I've earned ₹45,000 creating beautiful upcycled pieces.",
      craft: "Block Printing & Embroidery",
      itemsCreated: 150
    },
    {
      name: "Kiran Collective",
      location: "Ahmedabad, Gujarat",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Our women's collective has grown from 5 to 25 members thanks to consistent work from NavaRupa. We've transformed over 2,000 old garments into contemporary fashion pieces.",
      craft: "Patchwork & Tailoring",
      itemsCreated: 2000
    },
    {
      name: "Arjun Singh",
      location: "Varanasi, UP",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "As a third-generation weaver, I was struggling to make ends meet. NavaRupa's partnership has allowed me to combine traditional weaving with modern upcycling, creating unique textiles.",
      craft: "Handloom Weaving",
      itemsCreated: 300
    }
  ];

  const environmentalImpact = [
    {
      metric: "Water Saved",
      value: "2.5 Million Liters",
      description: "Equivalent to 1,000 households' annual water consumption",
      icon: "💧"
    },
    {
      metric: "CO2 Reduced",
      value: "150 Tons",
      description: "Same as planting 6,800 trees",
      icon: "🌱"
    },
    {
      metric: "Energy Saved",
      value: "500 MWh",
      description: "Enough to power 150 homes for a year",
      icon: "⚡"
    },
    {
      metric: "Chemicals Avoided",
      value: "10,000 Kg",
      description: "Toxic dyes and chemicals not used",
      icon: "🧪"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdf9f9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2e3155] to-[#4a4d7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Bebas_Neue'] text-5xl md:text-6xl mb-6"
          >
            Our Impact Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Kameron'] text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Every purchase, every donation, every partnership creates ripples of positive change. 
            Here's how we're transforming lives and protecting our planet together.
          </motion.p>
        </div>
      </div>

      {/* Impact Metrics */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fdf9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Impact by Numbers
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable change across social, environmental, and economic dimensions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden">
                  <div className={`${metric.color} p-6`}>
                    <metric.icon className="w-12 h-12 text-white mx-auto mb-4" />
                    <div className="font-['Bebas_Neue'] text-4xl text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="font-['Kameron'] font-semibold text-white text-lg">
                      {metric.label}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="font-['Kameron'] text-gray-600">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Environmental Impact
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              How upcycling is helping heal our planet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalImpact.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{impact.icon}</div>
                    <h3 className="font-['Bebas_Neue'] text-xl text-[#2e3155] mb-2">
                      {impact.metric}
                    </h3>
                    <div className="font-['Kameron'] font-bold text-2xl text-green-600 mb-3">
                      {impact.value}
                    </div>
                    <p className="font-['Kameron'] text-sm text-gray-600 leading-relaxed">
                      {impact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Stories */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Artisan Success Stories
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              Real people, real impact - meet the artisans whose lives have been transformed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-['Bebas_Neue'] text-xl mb-1">
                        {story.name}
                      </h3>
                      <p className="font-['Kameron'] text-sm opacity-90">
                        {story.location}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="bg-[#ffdff9] text-[#2e3155] px-3 py-1 rounded-full text-sm font-medium">
                        {story.craft}
                      </span>
                    </div>
                    
                    <p className="font-['Kameron'] text-gray-700 leading-relaxed mb-4 text-sm">
                      "{story.story}"
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="font-['Bebas_Neue'] text-2xl text-[#2e3155]">
                          {story.itemsCreated}
                        </div>
                        <div className="font-['Kameron'] text-xs text-gray-600">
                          Items Created
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-['Bebas_Neue'] text-2xl text-green-600">
                          ⭐ 4.9
                        </div>
                        <div className="font-['Kameron'] text-xs text-gray-600">
                          Quality Rating
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#ffdff9]/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Our 2025 Goals
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              Ambitious targets for even greater impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { target: "100,000", label: "Items Upcycled", icon: "♻️" },
              { target: "5,000", label: "Artisans Empowered", icon: "👥" },
              { target: "50 Tons", label: "Waste Diverted", icon: "🌍" },
              { target: "25 Cities", label: "Expansion", icon: "🏙️" }
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{goal.icon}</div>
                    <div className="font-['Bebas_Neue'] text-3xl text-[#2e3155] mb-2">
                      {goal.target}
                    </div>
                    <div className="font-['Kameron'] text-gray-600">
                      {goal.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="font-['Kameron'] text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Together, we can create a fashion industry that works for people and planet. 
              Every donation, every purchase, every share brings us closer to these goals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};