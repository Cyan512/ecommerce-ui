export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  active: boolean;
}

export interface User {
  id: number;
  email: string;
  name: string;
  imageUrl?: string;
  role?: string;
}