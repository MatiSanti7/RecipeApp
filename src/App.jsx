import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp";
import AddMenu from "./components/AddMenu";
import SearchMenu from "./components/SearchMenu";
import CategoryPage from "./components/Home/CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-menu" element={<AddMenu />} />
        <Route path="/search-menu" element={<SearchMenu />} />
        <Route path="/category/:category" Component={CategoryPage} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
