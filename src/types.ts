export interface BusinessInfo {
  name: string;
  tagline: string;
  shortAbout: string;
  businessTypes: string[];
  yearStarted: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  googleMapsUrl: string;
  businessHours: string;
  moq: number;
  acceptBulk: boolean;
  customManufacturing: boolean;
  privateLabel: boolean;
  sampleProvided: boolean;
}

export interface MarketplaceStore {
  name: string;
  tag: string;
  link: string;
  description: string;
  badgeColor: string;
  featuredProduct?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  details: string;
  iconName: string;
  highlight?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Women' | 'Men' | 'Kids' | 'General';
  description: string;
  moq: number;
  leadTime: string;
  sampleTime: string;
  popularFabric: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
  isSpecial?: boolean;
  icon: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phoneOrWhatsApp: string;
  email: string;
  garmentType: string;
  estimatedQuantity: number;
  needsSampling: boolean;
  specifications: string;
}
