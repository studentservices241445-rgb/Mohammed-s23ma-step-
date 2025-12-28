
export interface Plan {
  id: string;
  title: string;
  priceSAR: number;
  priceStars: number;
  type: 'course' | 'resource';
}

export interface Course extends Plan {
  description: string;
  features: string[];
  duration: string;
  level: string;
  type: 'course';
}

export interface Resource extends Plan {
  description: string;
  features: string[];
  fileCount: number;
  type: 'resource';
}

export interface Testimonial {
  id: number;
  name: string;
  avatarUrl: string;
  quote: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
}

export enum PaymentMethod {
  None,
  BankTransfer,
  TelegramStars,
}
