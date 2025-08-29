import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  Upload,
  Star
} from "lucide-react";

export default function MerchantSignup() {
  const benefits = [
    { icon: Users, title: "Access 2M+ Customers", description: "Reach a massive customer base actively looking for services" },
    { icon: TrendingUp, title: "Grow Your Revenue", description: "Increase bookings by up to 300% on average" },
    { icon: Shield, title: "Secure Payments", description: "Get paid safely with our protected payment system" },
    { icon: Store, title: "Professional Profile", description: "Showcase your services with a beautiful storefront" }
  ];

  const categories = [
    "Home Services", "Beauty & Wellness", "Pet Services", "Auto Services", 
    "Fitness & Health", "Education & Tutoring", "Technology", "Events & Entertainment"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-purple-50 to-background py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Join 50,000+ Service Providers
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Your Journey as a 
              <span className="text-primary"> Merchant</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create your professional profile and start connecting with customers in minutes
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No monthly fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Benefits Sidebar */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Join ServiceHub?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "ServiceHub transformed my business. I've tripled my client base in just 6 months!"
                </p>
                <p className="text-sm font-medium mt-2">- Sarah, Hair Stylist</p>
              </CardContent>
            </Card>
          </div>

          {/* Signup Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create Your Merchant Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Business Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" placeholder="John's Hair Studio" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Service Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your services, experience, and what makes you special..."
                      className="h-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Input id="address" placeholder="123 Main St, City, State 12345" />
                  </div>
                </div>

                {/* Profile Image */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Profile Setup</h3>
                  <div className="space-y-2">
                    <Label>Profile Image</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Upload a professional photo (recommended)
                      </p>
                      <Button variant="outline" className="mt-2">
                        Choose File
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                      {" "}and{" "}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="text-sm">
                      I'd like to receive marketing emails about tips and opportunities
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button size="lg" className="w-full">
                  Create Merchant Account
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary hover:underline">Sign in</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
