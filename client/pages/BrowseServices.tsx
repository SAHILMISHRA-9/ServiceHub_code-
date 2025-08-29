import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Star, 
  MapPin, 
  Clock, 
  Search,
  Filter,
  Heart,
  Shield,
  Calendar,
  DollarSign
} from "lucide-react";
import type { Service, ServicesResponse } from "@shared/services";

export default function BrowseServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "home", label: "Home Services" },
    { value: "beauty", label: "Beauty & Wellness" },
    { value: "pets", label: "Pet Services" },
    { value: "auto", label: "Auto Services" },
    { value: "fitness", label: "Fitness & Health" }
  ];

  const fetchServices = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10"
      });
      
      if (category !== "all") params.append("category", category);
      if (searchQuery) params.append("search", searchQuery);

      const response = await fetch(`/api/services?${params}`);
      const data: ServicesResponse = await response.json();
      
      if (page === 1) {
        setServices(data.services);
      } else {
        setServices(prev => [...prev, ...data.services]);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchServices();
  }, [category, searchQuery]);

  useEffect(() => {
    if (page > 1) {
      fetchServices();
    }
  }, [page]);

  const formatPrice = (service: Service) => {
    if (service.price.to) {
      return `$${service.price.from} - $${service.price.to}`;
    }
    return `Starting at $${service.price.from}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-purple-50 to-background py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Browse Services</h1>
            <p className="text-lg text-muted-foreground">Find trusted professionals for any service you need</p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search services, providers, or keywords..."
                className="pl-12 text-lg h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container px-4">
          {loading && page === 1 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-80 animate-pulse">
                    <CardContent className="p-6">
                      <div className="bg-muted h-40 rounded-lg mb-4"></div>
                      <div className="bg-muted h-4 rounded mb-2"></div>
                      <div className="bg-muted h-3 rounded mb-4"></div>
                      <div className="bg-muted h-6 rounded"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className="cursor-pointer group"
                >
                  <Card className="overflow-hidden h-full hover:border-primary/50 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        className="absolute top-3 right-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </motion.div>
                      
                      {service.merchant.verified && (
                        <Badge className="absolute top-3 left-3 bg-green-500">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Merchant Info */}
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={service.merchant.avatar}
                          alt={service.merchant.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-sm">{service.merchant.name}</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">
                              {service.rating} ({service.reviewCount})
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Location & Availability */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{service.location.distance} • {service.location.city}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Available {service.availability.nextAvailable}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-primary">
                            {formatPrice(service)}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" className="gap-1">
                            <Calendar className="h-4 w-4" />
                            Book Now
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Load More */}
          {services.length > 0 && !loading && (
            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setPage(prev => prev + 1)}
                >
                  Load More Services
                </Button>
              </motion.div>
            </div>
          )}

          {services.length === 0 && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No services found</h3>
                <p>Try adjusting your search or category filters</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
