import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MerchantSignup from "./pages/MerchantSignup";
import BrowseServices from "./pages/BrowseServices";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/merchant-signup" element={<MerchantSignup />} />
          <Route path="/browse" element={<BrowseServices />} />
          <Route path="/categories" element={<PlaceholderPage title="Service Categories" description="Explore services organized by category to find exactly what you need." />} />
          <Route path="/become-merchant" element={<MerchantSignup />} />
          <Route path="/login" element={<PlaceholderPage title="Sign In" description="Access your ServiceHub account to manage bookings and preferences." />} />
          <Route path="/register" element={<PlaceholderPage title="Create Account" description="Join thousands of customers finding great local services." />} />
          <Route path="/how-it-works" element={<PlaceholderPage title="How It Works" description="Learn how ServiceHub connects you with trusted local service providers." />} />
          <Route path="/support" element={<PlaceholderPage title="Customer Support" description="Get help with your ServiceHub experience." />} />
          <Route path="/merchant-resources" element={<PlaceholderPage title="Merchant Resources" description="Tools and guides to help grow your service business." />} />
          <Route path="/merchant-support" element={<PlaceholderPage title="Merchant Support" description="Get assistance with your merchant account and business growth." />} />
          <Route path="/about" element={<PlaceholderPage title="About ServiceHub" description="Learn about our mission to connect service providers with customers." />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" description="Join our team building the future of local services." />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="How we protect and handle your personal information." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="The terms and conditions for using ServiceHub." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
