import Nav from "./Nav";
import Footer from "./Footer";

const SearchMenu = () => {
  return (
    <div>
      <Nav />
      <section className="w-5/6 pt-40 pb-16 mx-auto">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h1 className="text-4xl">Explore Your Cravings Here !!</h1>
        </div>
        <div className="flex items-center gap-5 ">
          <input
            type="text"
            name=""
            id=""
            className="w-1/3 text-xl border-2 border-[#EFC81A] rounded-md focus:outline-none py-3 px-5"
          />
          <button className="bg-[#EFC81A] text-xl px-8 rounded-md text-white py-3 border-[#EFC81A] border-2">
            Search
          </button>
        </div>
        <hr className="h-1 w-full bg-[#EFC81A] my-12" />
        <div className="flex flex-col gap-8">
          <div className="flex gap-16">
            <img
              src="./src/assets/img/image-1.png"
              alt=""
              className="object-cover w-1/5 rounded-md"
            />
            <div className="flex flex-col justify-between 4/5">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-medium">
                  Recipe Title 1 Made By {"<USER NAME>"}
                </h2>
                <strong className="text-xl font-normal">Ingredients</strong>
                <p className="text-lg">Description Here</p>
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SearchMenu;
