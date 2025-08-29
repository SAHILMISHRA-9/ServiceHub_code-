import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
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

export default function Index() {
  const categories = [
    { icon: Home, name: "Home Services", count: "1,200+", color: "bg-blue-500" },
    { icon: Scissors, name: "Beauty & Wellness", count: "800+", color: "bg-pink-500" },
    { icon: Heart, name: "Pet Services", count: "600+", color: "bg-green-500" },
    { icon: Car, name: "Auto Services", count: "450+", color: "bg-orange-500" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected transactions with industry-leading security"
    },
    {
      icon: Clock,
      title: "Real-time Booking",
      description: "Instant scheduling with automatic confirmations"
    },
    {
      icon: Star,
      title: "Verified Reviews",
      description: "Authentic feedback from real customers"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Tools to scale your service business"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Merchants" },
    { number: "2M+", label: "Happy Customers" },
    { number: "10M+", label: "Services Booked" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50 to-background">
        <div className="container px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Trusted by 50,000+ Service Providers
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Connect with 
                  <span className="text-primary"> Local Service </span>
                  Experts
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Find trusted professionals for any service or grow your business by reaching thousands of customers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95, rotate: -1 }}
                  className="group"
                >
                  <Button asChild size="lg" className="text-lg px-8 relative overflow-hidden">
                    <Link to="/browse">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <Zap className="mr-2 h-5 w-5" />
                      Find Services
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95, rotate: 1 }}
                  className="group"
                >
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 relative overflow-hidden">
                    <Link to="/merchant-signup">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-10"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <Sparkles className="mr-2 h-5 w-5" />
                      Start Selling
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
            
            <div className="relative">
              {/* Floating sparkles background */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="absolute top-4 right-4 h-6 w-6 text-primary/30" />
                <Sparkles className="absolute bottom-8 left-8 h-4 w-4 text-purple-400/40" />
                <Star className="absolute top-1/2 left-4 h-5 w-5 text-yellow-400/30" />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="transform rotate-2"
                  whileHover={{
                    rotate: 1,
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.98, rotate: 3 }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [2, 3, 2]
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="cursor-pointer"
                >
                  <Card className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Scissors className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">Hair Styling</h3>
                          <div className="flex items-center gap-1">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                            <span className="text-sm text-muted-foreground">4.9 (120)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Professional cuts & styling</p>
                      <motion.p
                        className="font-semibold mt-2 text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        Starting at $45
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  className="transform -rotate-2 mt-8"
                  whileHover={{
                    rotate: -1,
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.98, rotate: -3 }}
                  animate={{
                    y: [0, 5, 0],
                    rotate: [-2, -3, -2]
                  }}
                  transition={{
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="cursor-pointer"
                >
                  <Card className="bg-gradient-to-br from-white to-green-50 border-2 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center"
                          whileHover={{ rotate: -360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Home className="h-5 w-5 text-green-500" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">House Cleaning</h3>
                          <div className="flex items-center gap-1">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.8, repeat: Infinity }}
                            >
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                            <span className="text-sm text-muted-foreground">4.8 (89)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Deep cleaning services</p>
                      <motion.p
                        className="font-semibold mt-2 text-green-600"
                        whileHover={{ scale: 1.1 }}
                      >
                        Starting at $80
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Popular Categories</h2>
            <p className="text-xl text-muted-foreground">Discover services in your area</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to="/browse" className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      rotate: Math.random() > 0.5 ? 2 : -2,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    whileTap={{
                      scale: 0.98,
                      rotate: Math.random() > 0.5 ? -5 : 5
                    }}
                    className="cursor-pointer"
                  >
                    <Card className="text-center transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-purple-50 border-2 hover:border-primary/30">
                      <CardContent className="p-8">
                        <motion.div
                          className={`h-16 w-16 rounded-2xl ${category.color} flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}
                          whileHover={{
                            rotate: 360,
                            scale: 1.2,
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                              x: ["-100%", "100%"],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <Icon className="h-8 w-8 text-white relative z-10" />
                        </motion.div>
                        <motion.h3
                          className="text-lg font-semibold mb-2"
                          whileHover={{ scale: 1.1, color: "#8b5cf6" }}
                        >
                          {category.name}
                        </motion.h3>
                        <motion.p
                          className="text-muted-foreground"
                          whileHover={{ scale: 1.05 }}
                        >
                          {category.count} services
                        </motion.p>

                        {/* Fun confetti effect on hover */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-primary rounded-full"
                              style={{
                                top: `${20 + i * 15}%`,
                                left: `${20 + i * 15}%`
                              }}
                              animate={{
                                y: [-10, -20, -10],
                                x: [0, 10, 0],
                                scale: [0, 1, 0],
                                rotate: [0, 180, 360]
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1
                              }}
                            />
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose ServiceHub?</h2>
            <p className="text-xl text-muted-foreground">Built for both customers and service providers</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-100 flex items-center justify-center mx-auto mb-4 relative"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                      background: "linear-gradient(135deg, rgb(139, 92, 246, 0.2), rgb(168, 85, 247, 0.2))"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="h-8 w-8 text-primary group-hover:text-purple-600 transition-colors" />
                    </motion.div>

                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-lg font-semibold mb-2"
                    whileHover={{
                      scale: 1.1,
                      color: "#8b5cf6"
                    }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground"
                    whileHover={{ scale: 1.02 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Sparkle effects */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${30 + i * 20}%`,
                          left: `${30 + i * 20}%`
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <Sparkles className="h-3 w-3 text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{
                  scale: 1.1,
                  y: -5
                }}
                className="cursor-pointer group"
              >
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2 relative"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  whileHover={{
                    scale: 1.15,
                    textShadow: "0 0 8px rgb(139, 92, 246, 0.5)"
                  }}
                >
                  {stat.number}

                  {/* Glowing effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-20 rounded-lg"
                    whileHover={{ opacity: 0.2 }}
                  />

                  {/* Floating particles */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{
                          top: `${25 + i * 15}%`,
                          left: `${25 + i * 15}%`
                        }}
                        animate={{
                          y: [-5, -15, -5],
                          x: [0, 5, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-muted-foreground"
                  whileHover={{
                    scale: 1.05,
                    color: "#6b7280"
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 text-white">
            {/* For Customers */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold">For Customers</h3>
                <p className="text-lg opacity-90">
                  Book trusted local services with confidence. Compare prices, read reviews, and schedule instantly.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Verified service providers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Instant booking & scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Secure payment protection</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="secondary" size="lg" className="text-primary relative overflow-hidden group">
                  <Link to="/browse">
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    Browse Services
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* For Merchants */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold">For Service Providers</h3>
                <p className="text-lg opacity-90">
                  Grow your business and reach more customers. Create your professional profile in minutes.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Easy business management tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Access to thousands of customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Automated scheduling & payments</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="secondary" size="lg" className="text-primary relative overflow-hidden group">
                  <Link to="/merchant-signup">
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    Start Your Business
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-xl">ServiceHub</span>
              </div>
              <p className="text-muted-foreground">
                Connecting service providers with customers in a trusted marketplace.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/browse" className="block hover:text-primary">Browse Services</Link>
                <Link to="/how-it-works" className="block hover:text-primary">How It Works</Link>
                <Link to="/support" className="block hover:text-primary">Customer Support</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Merchants</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/merchant-signup" className="block hover:text-primary">Join as Merchant</Link>
                <Link to="/merchant-resources" className="block hover:text-primary">Resources</Link>
                <Link to="/merchant-support" className="block hover:text-primary">Merchant Support</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/about" className="block hover:text-primary">About Us</Link>
                <Link to="/careers" className="block hover:text-primary">Careers</Link>
                <Link to="/privacy" className="block hover:text-primary">Privacy Policy</Link>
                <Link to="/terms" className="block hover:text-primary">Terms of Service</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ServiceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
