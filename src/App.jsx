import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
