import { Ingredient } from '../../response/ingredient';
import axiosClient from '../axios/axiosClient';


export const fetchIngredients = async (): Promise<Ingredient[]> => {
  try {
    const response = await axiosClient.get<Ingredient[]>('/ingredients');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des ingrédients :", error);
    throw new Error("Impossible de récupérer la liste des ingrédients.");
  }
};
