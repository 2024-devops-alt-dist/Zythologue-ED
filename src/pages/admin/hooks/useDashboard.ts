import { useEffect, useState } from "react";
import { getCategories } from "../../../services/categories/categorieService";
import { createBeer } from "../../../services/beer/beerService";
import { getBreweries } from "../../../services/brewery/brewerieService";
import { Brewery } from "../../../response/breweryResponse";
import { Category } from "../../../response/categoryResponse";

export const useDashboard = () => {
  const [newBeer, setNewBeer] = useState({
    name: "",
    description: "",
    abv: 0,
    brewery_id: 0,
    category_id: 0,
  });

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);  
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const breweriesData = await getBreweries();
        const categoriesData = await getCategories();
        setBreweries(breweriesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBeer((prev) => ({
      ...prev,
      [name]: name === "abv" || name === "brewery_id" || name === "category_id" ? +value : value,
    }));
  };

  const handleCreateBeer = async () => {
    try {
      await createBeer(newBeer);
      setMessage(`Bière créée avec succès : ${newBeer.name}`);
      setNewBeer({
        name: "",
        description: "",
        abv: 0,
        brewery_id: 0,
        category_id: 0,
      });
    } catch (error) {
      setMessage("Erreur lors de la création de la bière. Veuillez réessayer.");
    }
  };

  return {
    newBeer,
    message,
    breweries,
    categories,
    handleInputChange,
    handleCreateBeer,
  };
};
