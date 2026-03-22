export type Language = 'ta' | 'en';

export interface Product {
  id: string;
  name: {
    ta: string;
    en: string;
  };
  description: {
    ta: string;
    en: string;
  };
  benefits: {
    ta: string[];
    en: string[];
  };
  ingredients?: {
    ta: string[];
    en: string[];
  };
  price: number;
  image: string;
  category: 'skincare' | 'health' | 'haircare' | 'wellness';
  size: string;
  usage?: {
    ta: string;
    en: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
