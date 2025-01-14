import axios from "axios";
import { Brewery } from "../response/brewery";

const API_URL = import.meta.env.VITE_API_BEER_URL;


export const getBreweries = async (): Promise<Brewery[]> => {
  try {
    const response = await axios.get<Brewery[]>(`${API_URL}/breweries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching breweries:", error);
    throw error;
  }
};

export const getBreweryById = async (id: number): Promise<Brewery> => {
    try {
      const response = await axios.get<Brewery>(`${API_URL}/breweries/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching brewery details:", error);
      throw error;
    }
  };