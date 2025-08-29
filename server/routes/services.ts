import { RequestHandler } from "express";
import { ServicesResponse, Service } from "@shared/services";

// Mock service data
const mockServices: Service[] = [
  {
    id: "1",
    title: "Professional House Cleaning",
    description: "Deep cleaning service for your entire home. We bring all supplies and equipment. Fully insured and bonded.",
    price: {
      from: 80,
      to: 150,
      currency: "USD"
    },
    category: "home",
    merchant: {
      id: "m1",
      name: "Sarah's Cleaning Co",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b142?w=100",
      rating: 4.9,
      reviewCount: 127,
      verified: true
    },
    location: {
      city: "San Francisco",
      state: "CA",
      distance: "2.1 miles"
    },
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400"
    ],
    availability: {
      nextAvailable: "Tomorrow",
      timeSlots: ["9:00 AM", "1:00 PM", "3:00 PM"]
    },
    features: ["Eco-friendly supplies", "Same-day booking", "Satisfaction guaranteed"],
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: "2",
    title: "Premium Hair Styling & Cut",
    description: "Professional hairstyling with the latest trends. Consultation included to find your perfect look.",
    price: {
      from: 45,
      to: 120,
      currency: "USD"
    },
    category: "beauty",
    merchant: {
      id: "m2",
      name: "Maria's Hair Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      rating: 4.8,
      reviewCount: 89,
      verified: true
    },
    location: {
      city: "San Francisco",
      state: "CA",
      distance: "1.5 miles"
    },
    images: [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400"
    ],
    availability: {
      nextAvailable: "Today",
      timeSlots: ["10:00 AM", "2:00 PM", "4:00 PM"]
    },
    features: ["Free consultation", "Premium products", "Latest styles"],
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: "3",
    title: "Dog Walking & Pet Care",
    description: "Reliable and loving pet care services. Daily walks, feeding, and companionship for your furry friends.",
    price: {
      from: 25,
      to: 45,
      currency: "USD"
    },
    category: "pets",
    merchant: {
      id: "m3",
      name: "Happy Paws Services",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      rating: 4.9,
      reviewCount: 156,
      verified: true
    },
    location: {
      city: "San Francisco",
      state: "CA",
      distance: "0.8 miles"
    },
    images: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400"
    ],
    availability: {
      nextAvailable: "Today",
      timeSlots: ["8:00 AM", "12:00 PM", "5:00 PM"]
    },
    features: ["Licensed & insured", "GPS tracking", "Photo updates"],
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: "4",
    title: "Mobile Car Detailing",
    description: "Complete car wash and detailing service that comes to you. Interior and exterior cleaning with premium products.",
    price: {
      from: 60,
      to: 180,
      currency: "USD"
    },
    category: "auto",
    merchant: {
      id: "m4",
      name: "Elite Auto Detail",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      rating: 4.7,
      reviewCount: 73,
      verified: true
    },
    location: {
      city: "San Francisco",
      state: "CA",
      distance: "3.2 miles"
    },
    images: [
      "https://images.unsplash.com/photo-1609705045231-9d4f5e96c8ee?w=400",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400"
    ],
    availability: {
      nextAvailable: "Wednesday",
      timeSlots: ["9:00 AM", "11:00 AM", "2:00 PM"]
    },
    features: ["Mobile service", "Premium products", "Satisfaction guarantee"],
    rating: 4.7,
    reviewCount: 73
  },
  {
    id: "5",
    title: "Personal Training Sessions",
    description: "Certified personal trainer offering customized workout plans. One-on-one sessions in your home or local gym.",
    price: {
      from: 75,
      to: 120,
      currency: "USD"
    },
    category: "fitness",
    merchant: {
      id: "m5",
      name: "FitLife Training",
      avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100",
      rating: 4.8,
      reviewCount: 92,
      verified: true
    },
    location: {
      city: "San Francisco",
      state: "CA",
      distance: "1.2 miles"
    },
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      "https://images.unsplash.com/photo-1549476464-37392f717541?w=400"
    ],
    availability: {
      nextAvailable: "Tomorrow",
      timeSlots: ["6:00 AM", "8:00 AM", "6:00 PM"]
    },
    features: ["Certified trainer", "Custom workout plans", "Flexible scheduling"],
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: "6",
    title: "Plumbing Repair Services",
    description: "Emergency and scheduled plumbing repairs. Licensed plumber with 10+ years experience. Fair pricing guaranteed.",
    price: {
      from: 90,
      to: 250,
      currency: "USD"
    },
    category: "home",
    merchant: {
      id: "m6",
      name: "Bay Area Plumbing",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100",
      rating: 4.6,
      reviewCount: 134,
      verified: true
    },
    location: {
      city: "San Francisco",
      state: "CA",
      distance: "2.8 miles"
    },
    images: [
      "https://images.unsplash.com/photo-1585250003309-694ff34512d7?w=400",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa9?w=400"
    ],
    availability: {
      nextAvailable: "Today",
      timeSlots: ["Emergency available", "10:00 AM", "2:00 PM"]
    },
    features: ["Licensed & bonded", "Emergency service", "Fair pricing"],
    rating: 4.6,
    reviewCount: 134
  }
];

export const handleGetServices: RequestHandler = (req, res) => {
  const category = req.query.category as string;
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = req.query.search as string;

  let filteredServices = mockServices;

  // Filter by category
  if (category && category !== 'all') {
    filteredServices = filteredServices.filter(service => service.category === category);
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredServices = filteredServices.filter(service => 
      service.title.toLowerCase().includes(searchLower) ||
      service.description.toLowerCase().includes(searchLower) ||
      service.merchant.name.toLowerCase().includes(searchLower)
    );
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedServices = filteredServices.slice(startIndex, endIndex);

  const response: ServicesResponse = {
    services: paginatedServices,
    total: filteredServices.length,
    page,
    hasMore: endIndex < filteredServices.length
  };

  res.json(response);
};
