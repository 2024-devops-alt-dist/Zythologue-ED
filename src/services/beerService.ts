import axios from 'axios';
import { Beer } from '../response/beer';


const API_URL = import.meta.env.VITE_API_BEER_URL;

export const fetchBeers = async (): Promise<Beer[]> => {
  const response = await axios.get<Beer[]>(`${API_URL}/beers`);
  return response.data;
};

export const fetchBeerById = async (id: number): Promise<Beer> => {
  const response = await axios.get<Beer>(`${API_URL}/beers/${id}`);
  return response.data;
};
