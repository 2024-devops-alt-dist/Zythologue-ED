import { Beer } from '../../response/beerResponse';
import axiosClient from '../axios/axiosClient';



export const fetchBeers = async (): Promise<Beer[]> => {
  try {
  const response = await axiosClient.get<Beer[]>(`/beers`);
  return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des bières :", error);
    throw error;
  };
}
export const fetchBeerById = async (id: number): Promise<Beer> => {
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