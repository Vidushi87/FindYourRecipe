import React from "react";

const RecipeFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div className="p-4 rounded-lg bg-white shadow-md flex flex-wrap gap-4 justify-center">
      {/* Dietary Filters */}
      {[
        { name: "vegetarian", label: "Vegetarian" },
        { name: "vegan", label: "Vegan" },
        { name: "glutenFree", label: "Gluten Free" },
      ].map(({ name, label }) => (
        <label key={name} className="flex items-center gap-2">
          <input
            type="checkbox"
            name={name}
            checked={filters[name]}
            onChange={handleFilterChange}
            className="h-5 w-5 text-[#E50046] border-[#E50046] focus:ring-[#E50046]"
          />
          <span className="text-gray-700">{label}</span>
        </label>
      ))}

      {/* Dish Type Dropdown */}
      <select
        name="courseType"
        value={filters.courseType}
        onChange={(e) =>
          setFilters((prevFilters) => ({
            ...prevFilters,
            courseType: e.target.value,
          }))
        }
        className="p-2 bg-white border-2 border-[#FDAB9E] text-gray-700 rounded-md p-2 focus:ring-[#E50046] focus:border-[#E50046] outline-none"
      >
        <option value="">All Courses</option>
        <option value="main course">Main Course</option>
        <option value="dessert">Dessert</option>
        <option value="appetizer">Appetizer</option>
      </select>
    </div>
  );
};

export default RecipeFilters;
