import { BeerIngredient } from "../../response/beerIngredientResponse";
import axiosClient from "../axios/axiosClient";


export const fetchBeerIngredients = async (beerId: number): Promise<BeerIngredient[]> => {
  try {
    const response = await axiosClient.get<BeerIngredient[]>(`/beer-ingredients?beer_id=${beerId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des ingrédients pour la bière :", error);
    throw new Error("Impossible de récupérer les ingrédients de la bière.");
  }
};
