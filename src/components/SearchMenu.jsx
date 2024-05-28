import { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import recipesData from "../assets/data/recipes.json";
import users from "../assets/data/users.json";

const recipesPerPage = 4;
const SearchMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem("searchQuery") || "";
  });
  const [searchTermConfirmed, setSearchTermConfirmed] = useState(() => {
    return localStorage.getItem("searchQuery") || "";
  });
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const searchQuery = localStorage.getItem("searchQuery");
    if (searchQuery) {
      setSearchTerm(searchQuery);
      setSearchTermConfirmed(searchQuery);
    }
    const filteredRecipes = recipesData.recipes.filter((recipe) => {
      return (
        recipe.title &&
        recipe.title.toLowerCase().includes(searchTermConfirmed.toLowerCase())
      );
    });
    setFilteredRecipes(filteredRecipes);
    setCurrentPage(1);
  }, [searchTermConfirmed]);

  const indexOfLast = currentPage * recipesPerPage;
  const indexOfFirst = indexOfLast - recipesPerPage;
  let currentRecipes = filteredRecipes.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage) - 1;

  const scrollToTop = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    scrollToTop();
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop();
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTermConfirmed(searchTerm);
    localStorage.setItem("searchQuery", searchTerm);
  };

  return (
    <div>
      <Nav />
      <section className="w-5/6 pt-40 pb-16 mx-auto" ref={sectionRef}>
        <div className="flex items-center gap-5 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h1 className="text-4xl">Explore Your Cravings Here !!</h1>
        </div>
        <form className="flex items-center gap-5" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            name="search"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-96 text-xl border-2 border-[#EFC81A] rounded-md focus:outline-none py-3 px-5"
          />
          <button
            type="submit"
            className="bg-[#EFC81A] text-xl px-8 rounded-md text-white py-3 border-[#EFC81A] border-2"
          >
            Search
          </button>
        </form>
        <hr className="h-1 w-full bg-[#EFC81A] my-12" />
        <div className="flex flex-col gap-8">
          {currentRecipes.map((recipe, key) => {
            return (
              <div key={key} className="flex gap-16">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-1/5 h-56 rounded-md"
                />
                <div className="flex flex-col justify-between w-4/5">
                  <div className="flex flex-col gap-3">
                    <h2 className="mt-2 text-3xl font-medium">
                      {recipe.title} Made By
                      <span className="text-[#EFC81A]">
                        {" " + users[recipe.author].Name}
                      </span>
                    </h2>
                    <ul className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((i, index) => {
                        return (
                          <li
                            key={index}
                            className="text-xl font-normal bg-[#efc81a67] py-1 px-3 rounded-2xl"
                          >
                            {i}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="text-lg">{recipe.description}</p>
                  </div>
                  <div className="flex gap-10 mt-8">
                    <div className="flex items-center gap-2 text-xl">
                      <i
                        className={`cursor-pointer fa-heart ${
                          recipe.liked ? "fa-solid text-red-600" : "fa-regular"
                        }`}
                      ></i>
                      <small>Like Recipe</small>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                      <i
                        className={`fa fa-bookmark ${
                          recipe.bookmarked
                            ? "fa-solid text-[#EFC81A]"
                            : "fa-regular"
                        }  cursor-pointer`}
                        aria-hidden="true"
                      ></i>
                      <small>Bookmark Recipe</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-between gap-6 pt-10 md:flex-row md:gap-0">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`py-1 2xl:text-2xl md:text-lg text-xl px-7 rounded-3xl text-neutral-400 ${
              currentPage === 1 ? "cursor-not-allowed opacity-25" : ""
            }`}
          >
            <i className="mr-5 fa-solid fa-arrow-left"></i>
            Previous
          </button>
          <ul className="flex gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => setPage(index + 1)}
                  className={`2xl:text-2xl md:text-lg text-xl w-10 h-10 ${
                    currentPage === index + 1
                      ? "font-bold bg-[#EFC81A] text-white rounded-md"
                      : "font-normal "
                  } `}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`py-1 2xl:text-2xl md:text-lg text-xl px-7 rounded-3xl text-neutral-400 ${
              currentPage === totalPages ? "cursor-not-allowed opacity-25" : ""
            }`}
          >
            Next
            <i className="ml-5 fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SearchMenu;
