import api from './api';
import { Product } from '../types';

export const productService = {
  getAll: () => api.get<Product[]>('/api/products'),
  getById: (id: number) => api.get<Product>(`/api/products/${id}`),
  create: (product: Omit<Product, 'id'>) => api.post<Product>('/api/products', product),
  update: (id: number, product: Partial<Product>) => api.put<Product>(`/api/products/${id}`, product),
  delete: (id: number) => api.delete(`/api/products/${id}`),
  addToCart: (id: number) => api.post(`/api/products/${id}/add-to-cart`),
};