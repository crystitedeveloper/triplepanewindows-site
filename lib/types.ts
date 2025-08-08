
export interface Lead {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  zipCode?: string;
  projectType?: 'renovation' | 'new_construction' | 'replacement';
  budget?: 'under_5k' | '5k_15k' | '15k_30k' | 'over_30k';
  timeline?: 'immediate' | '3_months' | '6_months' | '1_year';
  source?: string;
  notes?: string;
  subscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  formType: 'contact' | 'quote_request' | 'consultation';
  status: 'new' | 'responded' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Newsletter {
  id: string;
  email: string;
  firstName?: string;
  interests: string[];
  subscribed: boolean;
  source?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured: boolean;
  publishedAt: Date;
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  downloadUrl: string;
  category: string;
  featured: boolean;
}
