export interface Service {
  id: string;
  title: string;
  description: string;
  price: {
    from: number;
    to?: number;
    currency: string;
  };
  category: string;
  merchant: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
  };
  location: {
    city: string;
    state: string;
    distance?: string;
  };
  images: string[];
  availability: {
    nextAvailable: string;
    timeSlots: string[];
  };
  features: string[];
  rating: number;
  reviewCount: number;
}

export interface ServicesResponse {
  services: Service[];
  total: number;
  page: number;
  hasMore: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

export interface CategoriesResponse {
  categories: ServiceCategory[];
}
