import React from "react";

const SearchRecipe = ({
  searchRecipe,
  updateSearchFunction,
  getSearchFunction,
}) => {
  return (
    <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
      <form
        onSubmit={getSearchFunction}
        className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <div className="relative flex-grow w-full sm:w-1/2">
          <input
            type="text"
            name="search"
            value={searchRecipe}
            onChange={updateSearchFunction}
            placeholder="Search for recipes..."
            className="w-full py-3 px-4 bg-gray-100 border border-[#E50046] focus:ring-[#D46D8F] focus:border-[#D46D8F] rounded-full text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:shadow-md"
          />
        </div>
        <button
          type="submit"
          className="bg-[#f79788] hover:bg-[#D46D8F] focus:ring-2 focus:ring-[#D46D8F] text-white font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-transform focus:outline-none focus:ring-offset-2"
        >
          Search Recipe
        </button>
      </form>
    </div>
  );
};

export default SearchRecipe;
