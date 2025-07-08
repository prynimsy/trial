export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  story: string;
  artisan: string;
  isNew: boolean;
  discount: number;
  description: string;
  materials: string[];
  sizes: string[];
  features: string[];
  care: string[];
  images: string[];
  artisanDetails: {
    name: string;
    location: string;
    experience: string;
    specialty: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Navigating The Sea Denim Jacket",
    price: "₹1,499",
    originalPrice: "₹2,999",
    image: "/rectangle-16.png",
    rating: 4.8,
    reviews: 124,
    category: "clothing",
    story: "Upcycled from 3 old denim pieces",
    artisan: "Meera Collective, Rajasthan",
    isNew: true,
    discount: 50,
    description: "A beautifully crafted denim jacket made from upcycled materials, featuring unique patchwork design and traditional embroidery. Each piece tells a story of transformation and sustainability.",
    materials: ["100% Upcycled Denim", "Natural Indigo Dye", "Cotton Thread", "Brass Buttons"],
    sizes: ["XS", "S", "M", "L", "XL"],
    features: [
      "Unique patchwork design",
      "Traditional block printing",
      "Hand-embroidered details",
      "Sustainable materials",
      "Fair trade certified"
    ],
    care: [
      "Machine wash cold",
      "Hang dry recommended",
      "Iron on medium heat",
      "Do not bleach"
    ],
    images: [
      "/rectangle-16.png",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Meera Collective",
      location: "Jaipur, Rajasthan",
      experience: "15+ years",
      specialty: "Block Printing & Embroidery"
    }
  },
  {
    id: 2,
    name: "Vintage Patchwork Kurta",
    price: "₹899",
    originalPrice: "₹1,799",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 89,
    category: "clothing",
    story: "Made from vintage saree fabrics",
    artisan: "Kala Niketan, Gujarat",
    isNew: false,
    discount: 50,
    description: "An elegant kurta crafted from vintage saree fabrics, showcasing traditional Indian craftsmanship with modern styling.",
    materials: ["Upcycled Silk Sarees", "Cotton Lining", "Natural Dyes", "Wooden Buttons"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "Vintage saree fabric",
      "Traditional embroidery",
      "Comfortable cotton lining",
      "Handcrafted details",
      "Cultural heritage preservation"
    ],
    care: [
      "Dry clean recommended",
      "Hand wash with mild detergent",
      "Iron on low heat",
      "Store in cool, dry place"
    ],
    images: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679747/pexels-photo-7679747.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Kala Niketan",
      location: "Ahmedabad, Gujarat",
      experience: "20+ years",
      specialty: "Saree Upcycling & Traditional Embroidery"
    }
  },
  {
    id: 3,
    name: "Eco-Friendly Tote Bag",
    price: "₹599",
    originalPrice: "₹999",
    image: "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 156,
    category: "accessories",
    story: "Crafted from old cotton shirts",
    artisan: "Green Hands, Kerala",
    isNew: false,
    discount: 40,
    description: "A sturdy and stylish tote bag made from upcycled cotton shirts, perfect for daily use and environmentally conscious shopping.",
    materials: ["Upcycled Cotton Shirts", "Recycled Polyester Lining", "Hemp Handles", "Metal Rivets"],
    sizes: ["One Size"],
    features: [
      "Spacious interior",
      "Reinforced handles",
      "Inner pocket",
      "Durable construction",
      "Machine washable"
    ],
    care: [
      "Machine wash cold",
      "Air dry only",
      "Iron if needed",
      "Spot clean for stains"
    ],
    images: [
      "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Green Hands",
      location: "Kochi, Kerala",
      experience: "8+ years",
      specialty: "Textile Upcycling & Bag Making"
    }
  },
  {
    id: 4,
    name: "Upcycled Silk Scarf",
    price: "₹799",
    originalPrice: "₹1,299",
    image: "https://images.pexels.com/photos/7679747/pexels-photo-7679747.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 67,
    category: "accessories",
    story: "Transformed from old silk sarees",
    artisan: "Silk Route Artisans, Karnataka",
    isNew: true,
    discount: 38,
    description: "A luxurious silk scarf created from vintage silk sarees, featuring beautiful patterns and colors that tell stories of the past.",
    materials: ["Pure Silk Sarees", "Natural Dyes", "Hand-rolled Edges"],
    sizes: ["One Size"],
    features: [
      "Pure silk material",
      "Vintage patterns",
      "Hand-rolled edges",
      "Lightweight and breathable",
      "Versatile styling options"
    ],
    care: [
      "Dry clean only",
      "Store flat or rolled",
      "Avoid direct sunlight",
      "Handle with care"
    ],
    images: [
      "https://images.pexels.com/photos/7679747/pexels-photo-7679747.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Silk Route Artisans",
      location: "Bangalore, Karnataka",
      experience: "12+ years",
      specialty: "Silk Processing & Scarf Making"
    }
  },
  {
    id: 5,
    name: "Patchwork Cushion Cover",
    price: "₹449",
    originalPrice: "₹799",
    image: "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 92,
    category: "home-decor",
    story: "Made from fabric scraps",
    artisan: "Home Craft Collective, Punjab",
    isNew: false,
    discount: 44,
    description: "A vibrant cushion cover made from carefully selected fabric scraps, bringing color and sustainability to your home decor.",
    materials: ["Mixed Fabric Scraps", "Cotton Backing", "Hidden Zipper", "Polyester Filling"],
    sizes: ["16x16 inches", "18x18 inches", "20x20 inches"],
    features: [
      "Colorful patchwork design",
      "Hidden zipper closure",
      "Machine washable",
      "Fade-resistant colors",
      "Soft and comfortable"
    ],
    care: [
      "Machine wash gentle cycle",
      "Tumble dry low",
      "Iron on low heat",
      "Wash with similar colors"
    ],
    images: [
      "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Home Craft Collective",
      location: "Amritsar, Punjab",
      experience: "10+ years",
      specialty: "Home Textiles & Patchwork"
    }
  },
  {
    id: 6,
    name: "Recycled Denim Skirt",
    price: "₹1,199",
    originalPrice: "₹2,199",
    image: "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 78,
    category: "clothing",
    story: "Redesigned from old jeans",
    artisan: "Denim Dreams, Tamil Nadu",
    isNew: true,
    discount: 45,
    description: "A stylish denim skirt created from upcycled jeans, featuring modern cuts and traditional stitching techniques.",
    materials: ["Upcycled Denim Jeans", "Cotton Thread", "Metal Buttons", "YKK Zipper"],
    sizes: ["XS", "S", "M", "L", "XL"],
    features: [
      "A-line silhouette",
      "Functional pockets",
      "Adjustable waist",
      "Durable construction",
      "Vintage wash finish"
    ],
    care: [
      "Machine wash cold",
      "Hang dry recommended",
      "Iron on medium heat",
      "Wash inside out"
    ],
    images: [
      "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=600",
      "/rectangle-16.png",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Denim Dreams",
      location: "Chennai, Tamil Nadu",
      experience: "7+ years",
      specialty: "Denim Upcycling & Modern Tailoring"
    }
  },
  {
    id: 7,
    name: "Handwoven Cotton Shawl",
    price: "₹1,299",
    originalPrice: "₹2,499",
    image: "https://images.pexels.com/photos/7679747/pexels-photo-7679747.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 45,
    category: "accessories",
    story: "Woven from organic cotton scraps",
    artisan: "Weaver's Guild, Odisha",
    isNew: true,
    discount: 48,
    description: "A beautiful handwoven shawl made from organic cotton scraps, showcasing traditional weaving techniques passed down through generations.",
    materials: ["Organic Cotton Scraps", "Natural Dyes", "Traditional Loom Weaving"],
    sizes: ["One Size"],
    features: [
      "Handwoven texture",
      "Natural organic cotton",
      "Traditional patterns",
      "Lightweight and warm",
      "Eco-friendly dyes"
    ],
    care: [
      "Hand wash gently",
      "Air dry in shade",
      "Iron on low heat",
      "Store folded carefully"
    ],
    images: [
      "https://images.pexels.com/photos/7679747/pexels-photo-7679747.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Weaver's Guild",
      location: "Bhubaneswar, Odisha",
      experience: "25+ years",
      specialty: "Traditional Handloom Weaving"
    }
  },
  {
    id: 8,
    name: "Upcycled Wall Hanging",
    price: "₹899",
    originalPrice: "₹1,599",
    image: "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 34,
    category: "home-decor",
    story: "Created from textile waste",
    artisan: "Art & Craft Collective, Rajasthan",
    isNew: false,
    discount: 44,
    description: "A stunning wall hanging created from textile waste, featuring intricate patterns and vibrant colors that brighten any space.",
    materials: ["Mixed Textile Waste", "Wooden Frame", "Natural Fibers", "Eco-friendly Adhesives"],
    sizes: ["Small (12x18)", "Medium (18x24)", "Large (24x36)"],
    features: [
      "Unique artistic design",
      "Sustainable materials",
      "Ready to hang",
      "Lightweight construction",
      "Conversation starter"
    ],
    care: [
      "Dust gently with soft brush",
      "Avoid direct sunlight",
      "Keep away from moisture",
      "Handle with care"
    ],
    images: [
      "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679747/pexels-photo-7679747.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    artisanDetails: {
      name: "Art & Craft Collective",
      location: "Jodhpur, Rajasthan",
      experience: "18+ years",
      specialty: "Textile Art & Wall Decor"
    }
  }
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "clothing", name: "Clothing", count: products.filter(p => p.category === "clothing").length },
  { id: "accessories", name: "Accessories", count: products.filter(p => p.category === "accessories").length },
  { id: "home-decor", name: "Home Decor", count: products.filter(p => p.category === "home-decor").length },
];

export const priceRanges = [
  { id: "under-500", label: "Under ₹500", min: 0, max: 500 },
  { id: "500-1000", label: "₹500 - ₹1000", min: 500, max: 1000 },
  { id: "1000-2000", label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { id: "above-2000", label: "Above ₹2000", min: 2000, max: Infinity },
];