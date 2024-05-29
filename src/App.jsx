import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import AddMenu from "./components/AddMenu";
import SearchMenu from "./components/SearchMenu";
import CategoryPage from "./components/Category/CategoryPage";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import dataRecipe from "./assets/data/recipes.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-menu" element={<AddMenu />} />
        <Route path="/search-menu" element={<SearchMenu />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/recipe/:recipeId"
          element={<Recipe recipes={dataRecipe} />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
