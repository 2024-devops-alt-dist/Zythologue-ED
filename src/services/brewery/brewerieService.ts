import { Brewery } from "../../response/breweryResponse";
import axiosClient from "../axios/axiosClient";

export const getBreweries = async (): Promise<Brewery[]> => {
  try {
    const response = await axiosClient.get<Brewery[]>(`/breweries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching breweries:", error);
    throw error;
  }
};

export const getBreweryById = async (id: number): Promise<Brewery> => {
    try {
      const response = await axiosClient.get<Brewery>(`/breweries/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching brewery details:", error);
      throw error;
    }
  };