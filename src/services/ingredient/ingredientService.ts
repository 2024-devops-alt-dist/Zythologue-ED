import { Ingredient } from '../../response/ingredientResponse';
import axiosClient from '../axios/axiosClient';


export const getIngredients = async (): Promise<Ingredient[]> => {
  try {
    const response = await axiosClient.get<Ingredient[]>('/ingredients');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des ingrédients :", error);
    throw new Error("Impossible de récupérer la liste des ingrédients.");
  }
};
