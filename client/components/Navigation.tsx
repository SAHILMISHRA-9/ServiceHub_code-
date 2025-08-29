import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Bell, Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.div
            className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-white font-bold text-sm"
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
              S
            </motion.span>
          </motion.div>
          <motion.span
            className="font-bold text-xl"
            whileHover={{
              scale: 1.05,
              color: "#8b5cf6"
            }}
          >
            ServiceHub
          </motion.span>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search services, merchants..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/browse" className="text-sm font-medium hover:text-primary transition-colors">
            Browse Services
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link to="/become-merchant" className="text-sm font-medium hover:text-primary transition-colors">
            Become a Merchant
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="ghost" size="icon" className="relative">
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Bell className="h-5 w-5" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: ["0 0 0 0 rgba(239, 68, 68, 0.4)", "0 0 0 10px rgba(239, 68, 68, 0)", "0 0 0 0 rgba(239, 68, 68, 0)"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </motion.div>
            </Button>
          </motion.div>

          {/* Shopping Bag */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link to="/login" className="w-full">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/register" className="w-full">Create Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/merchant-signup" className="w-full">Merchant Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link to="/browse" className="w-full">Browse Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/categories" className="w-full">Categories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/become-merchant" className="w-full">Become a Merchant</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search services, merchants..."
            className="pl-10 w-full"
          />
        </div>
      </div>
    </header>
  );
}
