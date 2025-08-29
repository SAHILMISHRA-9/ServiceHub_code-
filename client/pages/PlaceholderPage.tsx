import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="p-12">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Construction className="h-10 w-10 text-muted-foreground" />
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{description}</p>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  This page is under construction. Continue prompting to help build out this section!
                </p>
                
                <Button asChild variant="outline">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
