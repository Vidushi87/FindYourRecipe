import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
