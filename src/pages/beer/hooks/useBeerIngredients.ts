import { useState, useEffect } from "react";
import { fetchBeerIngredients } from "../../../services/beer/beerIngredientService";
import { getIngredients } from "../../../services/ingredient/ingredientService";


interface DetailedIngredient {
  id_beer_ingredient: number;
  name: string;
  type: string;
}

export const useBeerIngredients = (beerId: number) => {
  const [ingredients, setIngredients] = useState<DetailedIngredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIngredientsForBeer = async () => {
      try {
        // Étape 1 : Récupére les associations spécifiques à une bière
        const beerIngredients = await fetchBeerIngredients(beerId);

        // Étape 2 : Récupére les détails des ingrédients
        const allIngredients = await getIngredients();

        // Étape 3 : Filtre et croiser les données pour ne garder que les ingrédients de la bière
        const detailedIngredients = beerIngredients
          .filter((beerIngredient) => beerIngredient.beer_id === beerId) // Filtrage par beer_id
          .map((beerIngredient) => {
            const matchedIngredient = allIngredients.find(
              (ingredient) => ingredient.id_ingredient === beerIngredient.ingredient_id
            );

            return matchedIngredient
              ? {
                  id_beer_ingredient: beerIngredient.id_beer_ingredient,
                  name: matchedIngredient.name,
                  type: matchedIngredient.type,
                }
              : null;
          })
          .filter((ingredient) => ingredient !== null) as DetailedIngredient[];

        setIngredients(detailedIngredients);
      } catch (err) {
        setError("Erreur lors de la récupération des ingrédients.");
      } finally {
        setLoading(false);
      }
    };

    fetchIngredientsForBeer();
  }, [beerId]);

  return { ingredients, loading, error };
};
