import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchRecipe from "./SearchRecipe";
import Header from "./Header";
import RecipeFilters from "./RecipeFilters";

const Recipes = () => {
  const [foodRecipe, setFoodRecipe] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchQuery, setSearchQuery] = useState("chicken");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    courseType: "",
  });

  const API_KEY = "9ab87f7b254948e89df4a4692b1ced55";

  useEffect(() => {
    setFoodRecipe([]);
    setOffset(0);
    getRecipesFunction(0);
  }, [searchQuery]);

  const getRecipesFunction = async (newOffset) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${API_KEY}&number=16&offset=${newOffset}&addRecipeInformation=true`
      );
      const data = await response.json();
      setFoodRecipe((prevRecipes) => [...prevRecipes, ...(data.results || [])]);
      setOffset(newOffset + 16);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  // 🔥 Update Filtered Recipes when `filters` or `foodRecipe` changes
  useEffect(() => {
    const filtered = foodRecipe.filter((recipe) => {
      if (filters.vegetarian && !recipe.vegetarian) return false;
      if (filters.vegan && !recipe.vegan) return false;
      if (filters.glutenFree && !recipe.glutenFree) return false;
      if (
        filters.courseType &&
        recipe.dishTypes &&
        !recipe.dishTypes.includes(filters.courseType)
      )
        return false;
      return true;
    });

    setFilteredRecipes(filtered);
  }, [filters, foodRecipe]);

  return (
    <div className="bg-yellow-50 min-h-screen font-sans">
      <Header />
      <SearchRecipe
        updateSearchFunction={(e) => setSearchRecipe(e.target.value)}
        getSearchFunction={(e) => {
          e.preventDefault();
          setSearchQuery(searchRecipe);
          setSearchRecipe("");
        }}
        searchRecipe={searchRecipe}
      />
      <RecipeFilters filters={filters} setFilters={setFilters} />

      <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={recipe.id ? `${recipe.id}-${index}` : `recipe-${index}`}
                recipe={recipe}
              />
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-600">
              No recipes found.
            </p>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => getRecipesFunction(offset)}
            disabled={loading}
            className="bg-[#f79788] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#e67b72] transition-all"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
