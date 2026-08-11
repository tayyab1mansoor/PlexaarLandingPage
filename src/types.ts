export type ThemeMode = 'dark' | 'light';

export type ProductId = 'buzzcom' | 'calendex' | 'ireach' | 'ondel' | 'salexplex';

export interface ProductInfo {
  id: ProductId;
  name: string;
  tagline: string;
  category: string;
  description: string;
  color: string;
  gradient: string;
  borderGlow: string;
  bgGlow: string;
  iconName: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
}

export interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  phone: string;
  country: string;
  companySize: string;
  selectedProducts: ProductId[];
  managementGoals: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Products' | 'Enterprise' | 'Security';
}

export interface RoleView {
  id: 'ceo' | 'operations' | 'hr' | 'finance' | 'marketing';
  title: string;
  roleName: string;
  subtitle: string;
  metrics: { title: string; value: string; change: string; isPositive: boolean }[];
  primaryProduct: ProductId;
  secondaryProducts: ProductId[];
  keyFocus: string[];
}

export interface JourneyStep {
  stepNumber: string;
  title: string;
  productId: ProductId;
  productName: string;
  action: string;
  description: string;
  iconName: string;
}
