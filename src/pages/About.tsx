import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Recycle, Award, Target, Globe } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export const About = (): JSX.Element => {
  const values = [
    {
      icon: Recycle,
      title: "Sustainability",
      description: "We believe in circular fashion that reduces waste and protects our planet for future generations."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Supporting artisans and NGOs with fair wages and sustainable livelihoods through skill development."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a conscious community that values ethical fashion and social responsibility."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Every piece is crafted with attention to detail, ensuring durability and timeless appeal."
    }
  ];

  const milestones = [
    { year: "2023", event: "NavaRupa Founded", description: "Started with a vision to transform textile waste into beautiful fashion" },
    { year: "2023", event: "First Artisan Partnership", description: "Collaborated with 10 artisans across Rajasthan and Gujarat" },
    { year: "2024", event: "1000+ Items Upcycled", description: "Reached our first major milestone of sustainable transformation" },
    { year: "2024", event: "NGO Collaborations", description: "Partnered with 15 NGOs to expand our social impact" },
    { year: "2024", event: "National Recognition", description: "Featured in sustainable fashion awards and media" },
    { year: "2025", event: "50,000+ Items Impact", description: "Continuing to grow our positive environmental and social impact" }
  ];

  const team = [
    {
      name: "Pragyan Paramita Dutta",
      role: "Team Leader & Designer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Leading the vision and design strategy for NavaRupa, bringing creative innovation to sustainable fashion solutions."
    },
    {
      name: "Hansika Debnath",
      role: "Frontend Developer",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Building intuitive and engaging user experiences that connect conscious consumers with sustainable fashion."
    },
    {
      name: "Sneha Rakshit",
      role: "Backend Developer",
      image: "https://images.pexels.com/photos/3756680/pexels-photo-3756680.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Developing robust systems and infrastructure to support our growing sustainable fashion ecosystem."
    },
    {
      name: "Modhuriima Talukdar",
      role: "Research",
      image: "https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Conducting research on sustainable practices and market trends to drive innovation in circular fashion."
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
            About NavaRupa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Kameron'] text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We're on a mission to revolutionize fashion through sustainable upcycling, 
            empowering artisans, and creating a circular economy that benefits everyone.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fdf9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-6">
                Our Mission
              </h2>
              <p className="font-['Kameron'] text-lg text-gray-700 leading-relaxed mb-6">
                To transform the fashion industry by creating a sustainable ecosystem where 
                textile waste becomes beautiful, functional products while empowering artisans 
                and communities across India.
              </p>
              <p className="font-['Kameron'] text-lg text-gray-700 leading-relaxed">
                We believe that every piece of clothing has a story, and through thoughtful 
                upcycling, we give these stories new chapters while supporting traditional 
                craftsmanship and modern sustainability practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Artisan at work"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Our Values
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at NavaRupa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#ffdff9] rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-[#2e3155]" />
                    </div>
                    <h3 className="font-['Bebas_Neue'] text-2xl text-[#2e3155] mb-4">
                      {value.title}
                    </h3>
                    <p className="font-['Kameron'] text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#ffdff9]/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-12"
          >
            Our Impact So Far
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50,000+", label: "Items Upcycled", icon: "♻️" },
              { value: "2,500+", label: "Artisans Empowered", icon: "👥" },
              { value: "25 Tons", label: "Waste Diverted", icon: "🌍" },
              { value: "15,000+", label: "Happy Customers", icon: "❤️" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="font-['Bebas_Neue'] text-4xl text-[#2e3155] mb-2">
                  {stat.value}
                </div>
                <div className="font-['Kameron'] text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Our Journey
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600">
              Key milestones in our mission to transform fashion
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#ffdff9]"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="font-['Bebas_Neue'] text-2xl text-[#2e3155] mb-2">
                        {milestone.event}
                      </div>
                      <div className="font-['Kameron'] text-sm text-gray-600 mb-3">
                        {milestone.year}
                      </div>
                      <p className="font-['Kameron'] text-gray-700">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2e3155] rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fdf9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl text-[#2e3155] mb-4">
              Meet Our Team
            </h2>
            <p className="font-['Kameron'] text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving change in sustainable fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-['Bebas_Neue'] text-xl mb-1">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="bg-[#ffdff9] text-[#2e3155] px-3 py-1 rounded-full text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    
                    <p className="font-['Kameron'] text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};