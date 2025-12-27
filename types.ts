
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatar: string;
}
