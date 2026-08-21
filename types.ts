export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  category: 'fragrance' | 'air-care' | 'car-care' | 'personal-care';
  image: string;
  specs: string[];
}

export interface CapabilityCard {
  title: string;
  description: string;
  badge?: string;
}

export interface QualityStandard {
  title: string;
  description: string;
}

export interface PartnershipTier {
  id: string;
  tierName: string;
  description: string;
  bulletPoints: string[];
  ctaText: string;
  isPrimary?: boolean;
  whatsappMessage: string;
}

export interface CategoryCard {
  title: string;
  description: string;
  categoryKey: string;
}

export const WHATSAPP_NUMBER = '919324985630';
export const DISPLAY_PHONE = '+91-9324985630';
export const CONTACT_EMAIL = 'isupport@amariproducts.com';
export const COMPANY_ADDRESS = {
  line1: 'C-20, Royal Industrial Estate,',
  line2: 'Naigaon Cross Road, Wadala,',
  city: 'Mumbai - 400031.',
  state: 'Maharashtra, India.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello Amari Products, I am interested in your manufacturing and private-label solutions. Please share more details.';
