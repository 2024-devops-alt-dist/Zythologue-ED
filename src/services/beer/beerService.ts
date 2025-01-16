import { Beer } from '../../response/beerResponse';
import axiosClient from '../axios/axiosClient';


export const getBeers = async (): Promise<Beer[]> => {
  try {
  const response = await axiosClient.get<Beer[]>(`/beers`);
  return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des bières :", error);
    throw error;
  };
}
export const getBeerById = async (id: number): Promise<Beer> => {
  try {
  const response = await axiosClient.get<Beer>(`/beers/${id}`);
  return response.data; 
  } catch (error) {
    console.error("Erreur lors de la récupération de la bière :", error);
    throw error;
  }
};

export const getBeersByBreweryId = async (breweryId: number): Promise<Beer[]> => {
  try {
    const response = await axiosClient.get<Beer[]>(`/breweries/${breweryId}/beers`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des bières :", error);
    throw error;
  }
};

export const createBeer = async (beer: {
  name: string;
  description: string;
  abv: number;
  brewery_id: number;
  category_id: number;
}): Promise<Beer> => {
  try {
    const response = await axiosClient.post<Beer>(`/beers`, beer);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de la bière :", error);
    throw error;
  }
};
