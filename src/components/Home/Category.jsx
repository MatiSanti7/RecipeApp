import Nav from "../Nav";
import Footer from "../Footer";
import PropTypes from "prop-types";
import recipesData from "../../assets/data/recipes.json";
import users from "../../assets/data/users.json";

const Category = ({ category }) => {
  let recipes = [];
  if (
    category == "europe" ||
    category == "america" ||
    category == "asia" ||
    category == "middleeast"
  ) {
    recipes = recipesData.recipes.filter((r) => {
      return r.region == category;
    });
  } else {
    recipes = recipesData.recipes.filter((r) => {
      return r.category == category;
    });
  }

  return (
    <div>
      <Nav />
      <section className="w-5/6 pt-40 pb-16 mx-auto">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h1 className="text-4xl">Have A Safe Diet !!!</h1>
        </div>
        <hr className="h-1 w-full bg-[#EFC81A] my-12" />
        <div className="flex flex-col gap-8">
          {recipes.map((recipe, key) => {
            return (
              <div className="flex h-56 gap-16" key={key}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-1/5 rounded-md"
                />
                <div className="flex flex-col justify-between 4/5">
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
                  <div className="flex gap-10">
                    <div className="flex items-center gap-2 text-xl">
                      <i
                        className="cursor-pointer fa fa-heart-o hover:text-red-600"
                        aria-hidden="true"
                      ></i>
                      <small>Like Recipe</small>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                      <i
                        className="fa fa-bookmark-o hover:text-[#EFC81A] cursor-pointer"
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
