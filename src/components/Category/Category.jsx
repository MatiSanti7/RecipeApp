import Nav from "../Nav";
import Footer from "../Footer";
import PropTypes from "prop-types";
import recipesData from "../../assets/data/recipes.json";
import users from "../../assets/data/users.json";
import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";

const Category = ({ category }) => {
  const sectionRef = useRef(null);

  let recipes = [];
  let isCategoryRegion =
    category == "europe" ||
    category == "america" ||
    category == "asia" ||
    category == "middleeast";
  if (isCategoryRegion) {
    recipes = recipesData.filter((r) => {
      return r.region == category;
    });
  } else {
    recipes = recipesData.filter((r) => {
      return r.category == category;
    });
  }

  const location = useLocation();

  const getHeaderText = () => {
    const path = location.pathname;
    switch (path) {
      case "/category/europe":
        return "European Elegance: A Culinary Journey Awaits!";
      case "/category/america":
        return "All-American Favorites: Taste the USA!";
      case "/category/asia":
        return "Asian Delights: Discover Far Eastern Flavors!";
      case "/category/middleeast":
        return "Middle Eastern Marvels: Explore Exotic Spices!";
      case "/category/salad":
        return "Have A Safe Diet !!!";
      case "/category/appetizer":
        return "Savor the Appetizer: Unwrap Flavorful Beginnings !!!";
      case "/category/maincourse":
        return "Main Course Magic: Where Every Bite Tells a Delicious Story !!!";
      case "/category/dessert":
        return "Sweet Endings, Happy Beginnings: Indulge in Dessert Delights !!!";
      default:
        return "Have A Safe Diet !!!";
    }
  };

  return (
    <div>
      <Nav />
      <section className="w-5/6 pt-40 pb-16 mx-auto">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h1 className="text-4xl">{getHeaderText()}</h1>
        </div>
        <hr className="h-1 w-full bg-[#EFC81A] my-12" />
        <div className="flex flex-col gap-8">
          {recipes.map((recipe, key) => {
            return (
              <div className="flex gap-16" key={key}>
                <div className="w-1/5 h-56">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between w-4/5">
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/recipe/${recipe.id}`}
                      onClick={() => {
                        sectionRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      <h2 className="mt-2 text-3xl font-medium hover:underline hover:underline-offset-8">
                        {recipe.title} Made By
                        <span className="text-[#EFC81A]">
                          {" " + users[recipe.author].Name}
                        </span>
                      </h2>
                    </Link>
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
                  <div className="flex gap-10">
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
                        } cursor-pointer`}
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
      </section>
      <Footer />
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
