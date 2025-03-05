import React from "react";

const Header = () => {
  return (
    <header className="bg-[#C7DB9C] py-4 text-white">
      <div className="container mx-auto text-center">
        <h1
          className="text-3xl sm:text-4xl 
                               md:text-5xl lg:text-6xl
                               font-extrabold tracking-tight"
        >
          <span className="block">Find Your Recipe</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
