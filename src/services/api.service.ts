// services/apiService.ts
import { baseURL } from '@/data/api.data';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPosts = async (item:string='') => {
  let params = '';
  if (item !== '') params = `?${item}`;
  const response = await apiClient.get(`/posts${params}`);
  return response.data;
};
