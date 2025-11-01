import { ApiData } from '../types/api';
import { mockMovies } from './mockData';

export const fetchAllMovies = async (): Promise<ApiData[]> => {
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockMovies;
};

export const fetchMovieById = async (id: string): Promise<ApiData> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const movie = mockMovies.find(m => m.id === id);
  if (!movie) throw new Error('Filme não encontrado');
  return movie;
};
