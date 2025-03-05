import React from "react";
import { FaBreadSlice, FaDrumstickBite, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden 
                 hover:shadow-xl transition-transform hover:scale-105 cursor-pointer flex flex-col h-full"
      onClick={handleClick} // Open new page on click
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center rounded-t-lg"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow justify-between">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 capitalize">
          {recipe.title}
        </h1>
        <div className="text-gray-600 mb-4">
          <span className="block mb-1">
            <p>
              <b>Ready In : </b>
              {recipe.readyInMinutes} Minutes
            </p>
          </span>
          <span className="block mb-1">
            <p>
              <b>Recipe By : </b>
              {recipe.sourceName}
            </p>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={recipe.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f79788] font-semibold hover:underline"
          >
            View Recipe on Website
          </a>
        </div>
        <div className="flex space-x-2 mt-auto pt-2">
          {recipe.vegetarian ? (
            <FaLeaf className="text-green-500 text-xl" title="Vegetarian" />
          ) : (
            <FaDrumstickBite
              className="text-red-500 text-xl"
              title="Non-Vegetarian"
            />
          )}
          {recipe.glutenFree && (
            <FaBreadSlice
              className="text-blue-500 text-xl"
              title="Gluten-Free"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
