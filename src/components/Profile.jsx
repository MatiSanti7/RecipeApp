import Nav from "./Nav";
import Footer from "./Footer";
import Recipes from "../assets/data/recipes.json";
import User from "../assets/data/users.json";

const Profile = () => {
  return (
    <div>
      <Nav></Nav>
      <section className="w-5/6 pt-40 pb-16 mx-auto">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h1 className="text-4xl">Your Profile !!!</h1>
        </div>
        <hr className="h-1 w-full bg-[#EFC81A] my-12" />
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-5">
            <div className="w-80 h-80 bg-[#F6F6F6] border-2 border-[#00000020] rounded-md flex items-center justify-center">
              <i className="text-5xl fa-solid fa-image opacity-10"></i>
            </div>
            <button className="bg-[#EFC81A] py-2 px-5 rounded-md">
              Edit Profile
            </button>
          </div>
          <div className="flex flex-col justify-evenly h-80">
            <span className="text-[#EFC81A] flex gap-3 font-medium text-2xl">
              Name: <span className="text-black">{User[0].Name}</span>
            </span>
            <span className="text-[#EFC81A] flex gap-3 font-medium text-2xl">
              Email:
              <span className="text-black">{User[0].Email}</span>
            </span>
            <span className="text-[#EFC81A] flex gap-3 font-medium text-2xl">
              Phone Number: <span className="text-black">{User[0].Phone}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-20 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h1 className="text-4xl">Your Recipes !!!</h1>
        </div>
        <ul className="flex gap-16 text-xl font-medium">
          <a href="" className="myRecipes ">
            <li className="text-[#EFC81A]">Recipes</li>
          </a>
          <a href="" className="likedRecipes active">
            <li>Liked Recipes</li>
          </a>
          <a href="" className="bookmarkedRecipes">
            <li>Bookmarked Recipes</li>
          </a>
        </ul>
        <hr className="h-1 w-full bg-[#EFC81A] my-10" />
        <div className="w-full">
          {Recipes.recipes.map((recipe, key) => {
            if (recipe.author == 0) {
              return (
                <div className="flex gap-10 mb-10" key={key}>
                  <div className="w-1/4 h-72 bg-[#F6F6F6] border-2 border-[#00000020] rounded-md flex items-center justify-center">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-3/4 p-4 my-4">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-2xl font-semibold">{recipe.title}</h2>
                      <ul className="flex flex-wrap gap-4">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li
                            key={index}
                            className="text-xl font-normal bg-[#efc81a67] py-1 px-3 rounded-2xl"
                          >
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                      <p className="text-lg">{recipe.description}</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="bg-[#EFC81A] py-2 px-5 rounded-md text-white">
                        Edit Menu
                      </button>
                      <button className="px-5 py-2 text-white bg-[#FF0000] rounded-md">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
