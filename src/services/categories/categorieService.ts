
import { Category } from '../../response/categoryResponse';
import axiosClient from '../axios/axiosClient';


export const getCategories = async (): Promise<Category[]> => {
    try {
        const response = await axiosClient.get<Category[]>('/categories');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
        throw error;
    }
};

export const getCategoryById = async (id: number): Promise<Category> => {
    try {
        const response = await axiosClient.get<Category>(`/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de la catégorie :", error);
        throw error;
    }
};
