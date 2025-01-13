import React from "react";
import { Beer } from "../response/beer";

interface BeerDetailProps {
    beer: Beer;
}

const BeerDetail: React.FC<BeerDetailProps> = ({ beer }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{beer.name}</h1>
        
        <div className="bg-white mt-6 p-6 rounded-lg shadow-md max-w-xl w-full">
        <p className="text-gray-700 text-lg mb-4">
        <span className="font-semibold">Description :</span>{" "}
        {beer.description}
        </p>
        <p className="text-gray-700 text-lg mb-4">
        <span className="font-semibold">Taux d'alcool :</span> {beer.abv}%
        </p>
        </div>
        </div>
    );
};

export default BeerDetail;
