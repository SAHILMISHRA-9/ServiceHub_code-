"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Home,
  Scissors,
  Heart,
  Car,
  Star,
  Shield,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Confetti
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Link from "next/link"; // ✅ fixed import for Next.js

export default function IndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: Home },
    { name: "Salon", icon: Scissors },
    { name: "Healthcare", icon: Heart },
    { name: "Auto", icon: Car },
  ];

  const services = [
    {
      title: "Premium Hair Styling",
      category: "Salon",
      description: "Get the perfect haircut or style from top professionals.",
      price: "₹499",
      icon: Scissors,
      rating: 4.8,
    },
    {
      title: "Dental Care Package",
      category: "Healthcare",
      description: "Professional dental cleaning and check-up by experts.",
      price: "₹999",
      icon: Shield,
      rating: 4.9,
    },
    {
      title: "Car Spa & Cleaning",
      category: "Auto",
      description: "Deep cleaning and polishing for your vehicle.",
      price: "₹799",
      icon: Car,
      rating: 4.7,
    },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background text-foreground">
      <Navigation />

      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-primary tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Local Services with <span className="text-primary">Ease</span>
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Find trusted professionals for all your needs — anytime, anywhere.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={selectedCategory === cat.name ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.name)}
              className="flex items-center gap-2"
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </Button>
          ))}
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={index}
            className="transform rotate-2 cursor-pointer" // ✅ merged className
            whileHover={{
              rotate: 1,
              scale: 1.05,
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.98, rotate: 3 }}
            animate={{
              y: [0, -5, 0],
              rotate: [2, 3, 2],
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Card className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20">
              <CardContent className="p-6">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge>{service.category}</Badge>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4" />
                    <span>{service.rating}</span>
                  </div>
                </div>
                <div className="mt-4 font-bold text-lg text-primary">
                  {service.price}
                </div>
                <Button className="mt-4 w-full">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Second floating card section */}
        <motion.div
          className="transform -rotate-2 mt-8 cursor-pointer" // ✅ merged className
          whileHover={{
            rotate: -1,
            scale: 1.05,
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          whileTap={{ scale: 0.98, rotate: -3 }}
          animate={{
            y: [0, 5, 0],
            rotate: [-2, -3, -2],
          }}
          transition={{
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Card className="bg-gradient-to-br from-white to-green-50 border-2 border-green-200">
            <CardContent className="p-6">
              <Sparkles className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Featured Professionals
              </h3>
              <p className="text-muted-foreground mb-4">
                Top-rated experts delivering trusted and quality service.
              </p>
              <Button className="w-full">
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
