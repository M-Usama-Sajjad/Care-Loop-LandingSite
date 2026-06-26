export type ActivePage = 'home' | 'patients' | 'doctors' | 'pharmacies' | 'about' | 'faq' | 'contact';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
  color: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}
