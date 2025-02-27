import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg 
                    overflow-hidden hover:shadow-xl 
                    transition-transform hover:scale-105"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover 
                                object-center rounded-t-lg"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      </div>
      <div className="p-4">
        <h1
          className="text-2xl font-semibold text-gray-800 
                                mb-2 capitalize"
        >
          {recipe.strMeal}
        </h1>
        <div className="text-gray-600 mb-4">
          <span className="block mb-1">
            <b>Instructions:</b>
          </span>
          <span className="block pl-4">
            {recipe.strInstructions.substring(0, 250) + "..."}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 font-semibold 
                                    hover:underline"
          >
            View Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
