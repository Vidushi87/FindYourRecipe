import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GiChefToque } from "react-icons/gi"; // Importing Chef Hat Icon
import Header from "./Header";

const RecipeDetail = () => {
  const { state } = useLocation();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_KEY = "9ab87f7b254948e89df4a4692b1ced55"; // Replace with your API key

  useEffect(() => {
    if (!state?.recipe) return;

    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${state.recipe.id}/information?includeNutrition=true&apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setRecipeDetails(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [state]);

  if (!state?.recipe) {
    return (
      <div className="text-center text-red-500 mt-10">Recipe not found!</div>
    );
  }

  if (loading) {
    return (
      <div className="text-center text-gray-700 mt-10">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 min-h-screen font-sans">
      <Header />

      {/* Back Button */}
      <button
        className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md 
          hover:bg-gray-200 z-10"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* Recipe Details Container */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        {/* Recipe Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {recipeDetails.title}
        </h1>

        {/* Image - Centered & Bigger with Rounded Corners */}
        <div className="flex justify-center mb-4">
          <img
            src={recipeDetails.image}
            alt={recipeDetails.title}
            className="w-80 h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Cooking Time*/}
        <div className="flex justify-center items-center bg-orange-200 text-orange-700 font-semibold text-lg px-4 py-2 rounded-full shadow-md w-fit mx-auto mb-4">
          ⏳ Cooking Time: {recipeDetails.readyInMinutes} min
        </div>

        {/* Dish Types & Diets */}
        <div className="flex flex-wrap gap-2 mb-4">
          {recipeDetails.dishTypes.map((type, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-200 text-green-700 rounded-full text-sm"
            >
              {type}
            </span>
          ))}
          {recipeDetails.vegetarian && (
            <span className="px-3 py-1 bg-orange-200 text-orange-700 rounded-full text-sm">
              Vegetarian
            </span>
          )}
          {recipeDetails.glutenFree && (
            <span className="px-3 py-1 bg-blue-200 text-blue-700 rounded-full text-sm">
              Gluten-Free
            </span>
          )}
        </div>

        {/* Nutritional Value */}
        {recipeDetails.nutrition?.nutrients && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Nutritional Value (Per Serving):
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-600">
              {recipeDetails.nutrition.nutrients
                .filter((nutrient) =>
                  ["Calories", "Carbohydrates", "Protein", "Fat"].includes(
                    nutrient.name
                  )
                )
                .map((nutrient, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded-md">
                    <strong>{nutrient.name}:</strong> {nutrient.amount}{" "}
                    {nutrient.unit}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Recipe Summary */}
        {recipeDetails.summary && (
          <div className="mb-6">
            <p
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
            />
          </div>
        )}

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Ingredients:
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            {recipeDetails.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        </div>

        {/* Recipe Instructions */}
        {recipeDetails.analyzedInstructions?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              How to Cook:
            </h2>
            <ul className="list-decimal pl-5 text-gray-600">
              {recipeDetails.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number} className="mb-2">
                  {step.step}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recipe Source Link */}
        <div className="text-center">
          <a
            href={recipeDetails.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f79788] font-semibold hover:underline"
          >
            Visit the Website for Full Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
