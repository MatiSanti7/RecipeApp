import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import dataUser from "../assets/data/users.json";
import dataRecipes from "../assets/data/recipes.json";
import { useRef } from "react";

const Recipe = ({ recipes }) => {
  const sectionRef = useRef(null);
  const { recipeId } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));

  const countRecipes = (author) => {
    return dataRecipes.recipes.filter((recipe) => recipe.author === author)
      .length;
  };

  return (
    <div>
      <Nav />
      <section className="w-3/4 pt-40 pb-16 mx-auto" ref={sectionRef}>
        <div className="flex items-center justify-between gap-5 mb-10">
          <div className="flex items-center gap-5">
            <div className="w-1 h-12 bg-[#EFC81A]"></div>
            <i
              className="text-6xl fa-regular fa-circle-user"
              aria-hidden="true"
            ></i>
            <div className="flex flex-col gap-1">
              <span className="text-3xl">{dataUser[recipe.author].Name}</span>
              <span className="text-xl text-[#EFC81A]">
                {countRecipes(recipe.author)} Recipes
              </span>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-2 text-3xl">
              <i
                className={`cursor-pointer fa-heart ${
                  recipe.liked ? "fa-solid text-red-600" : "fa-regular"
                }`}
              ></i>
              <small>Like Recipe</small>
            </div>
            <div className="flex items-center gap-2 text-3xl">
              <i
                className={`fa fa-bookmark ${
                  recipe.bookmarked ? "fa-solid text-[#EFC81A]" : "fa-regular"
                } cursor-pointer`}
                aria-hidden="true"
              ></i>
              <small>Bookmark Recipe</small>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#EFC81A] font-semibold text-5xl text-center">
            {recipe.title}
          </h1>
          <hr className="h-1 w-full bg-[#EFC81A] my-12" />
          <div className="w-2/3 mx-auto h-[500px]">
            <img
              src={recipe.image}
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col my-12">
            <strong className="mb-12 text-3xl">Making Process</strong>
            <div className="flex flex-col gap-8">
              <div className="flex text-2xl">
                <label className="w-1/6 ">Ingredients:</label>
                <div className="flex flex-wrap w-5/6 gap-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className=" font-normal bg-[#efc81a67] py-1 px-3 rounded-2xl"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex text-2xl">
                <label className="w-1/6 ">Description:</label>
                <div className="w-5/6 ">{recipe.description}</div>
              </div>
              <div className="flex text-2xl">
                <label className="w-1/6 ">Video Link:</label>
                <a
                  href={recipe.videolink}
                  className="w-5/6 text-[#EFC81A] hover:underline hover:underline-offset-8"
                  target="_blank"
                >
                  {recipe.videolink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default Recipe;
