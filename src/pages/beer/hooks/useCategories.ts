import { useState, useEffect } from "react";
import { fetchCategories } from "../../../services/categories/categorieService";

interface Category {
  id_category: number;
  name: string;
}

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        setLoading(true);
        const data = await fetchCategories();
        setCategories(data);
      } catch (err: any) {
        console.error("Erreur lors de la récupération des catégories :", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCategories();
  }, []);

  return { categories, loading, error };
};
