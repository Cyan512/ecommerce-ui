import api from './api';
import { User } from '../types';

export const authService = {
  getMe: () => api.get<User>('/api/auth/me'),
  loginWithGoogle: () => api.get('/oauth2/authorization/google'),
  loginWithGithub: () => api.get('/oauth2/authorization/github'),
};