import Nav from "./Nav";
import Footer from "./Footer";
import { useState, useRef, useEffect } from "react";

const AddMenu = () => {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleIngredientsChange = (event) => {
    const value = event.target.value;

    if (value.includes(" ")) {
      const words = value.split(" ").map((word) => word.replace(/-/g, " "));
      const newIngredients = [...ingredients, ...words.filter((word) => word)];
      setIngredients(newIngredients);
      setIngredientInput("");
    } else if (value.includes("-")) {
      const words = value.split("-").map((word) => word.trim());
      const newIngredients = [
        ...ingredients,
        ...words.map((word) => word).filter((word) => word),
      ];
      setIngredients(newIngredients);
      setIngredientInput("");
    } else {
      setIngredientInput(value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" && ingredientInput === "") {
      setIngredients((prevIngredients) => prevIngredients.slice(0, -1));
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    setIsCompleted(
      imageSrc && title && ingredients.length > 0 && description && category
    );
  }, [imageSrc, title, ingredients, description, category]);

  return (
    <div>
      <Nav />
      <section className="w-5/6 mx-auto py-36">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h2 className="text-4xl">Add The Recipe Of Your Choice!</h2>
        </div>
        <hr className="h-1 w-full bg-[#EFC81A]" />
        <form action="" className="flex flex-col items-end gap-5 mt-10">
          <div className="flex w-full gap-5">
            <div className="flex flex-col w-1/3 gap-3 mx-auto">
              <div className="w-full mx-auto bg-[#F6F6F6] border-2 border-[#00000020] rounded-md h-80 flex items-center justify-center">
                {imageSrc ? (
                  <img src={imageSrc} className="object-cover w-full h-full" />
                ) : (
                  <i className="text-5xl fa-solid fa-image opacity-10"></i>
                )}
              </div>
              <div className="relative inline w-full">
                <button
                  className={`bg-[#EFC81A] py-2 text-xl w-full rounded-md text-white`}
                  onClick={handleClick}
                >
                  Upload Photo
                </button>
                <input
                  type="file"
                  onChange={handleImageChange}
                  ref={hiddenFileInput}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
            <div className="flex flex-col w-2/3 gap-5">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                onChange={handleTitleChange}
                className="px-4 py-3 text-xl bg-[#F6F6F6] rounded-md focus:outline-none"
              />
              <div className="px-4 py-3 text-xl bg-[#F6F6F6] rounded-md focus:outline-none flex flex-wrap gap-2">
                {ingredients.map((ingredient, index) => (
                  <span key={index} className="bg-[#efc81a67] px-3 rounded-2xl">
                    {ingredient}
                  </span>
                ))}
                <input
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  placeholder="Ingredients"
                  value={ingredientInput}
                  onChange={handleIngredientsChange}
                  onKeyDown={handleKeyDown}
                  className="flex-grow bg-transparent focus:outline-none"
                />
              </div>
              <textarea
                name="description"
                id="description"
                onChange={handleDescriptionChange}
                className="px-4 py-3 text-xl bg-[#F6F6F6] rounded-md resize-none h-56 focus:outline-none"
                placeholder="Description"
              ></textarea>
              <div className="flex gap-4 text-xl">
                <label htmlFor="">Category:</label>
                <div className="flex gap-8" onChange={handleCategoryChange}>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="category"
                      id="salad"
                      value="Salad"
                    />
                    <label htmlFor="salad">Salad</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="category"
                      id="appetizer"
                      value="Appetizer"
                    />
                    <label htmlFor="appetizer">Appetizer</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="category"
                      id="main-course"
                      value="Main Course"
                    />
                    <label htmlFor="main-course">Main Course</label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="category"
                      id="dessert"
                      value="Dessert"
                    />
                    <label htmlFor="dessert">Dessert</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className={`bg-[#EFC81A] py-2 min-w-80 text-xl rounded-md text-white px-10 ${
              !isCompleted ? "cursor-not-allowed opacity-40" : "cursor-pointer"
            }`}
            disabled={!isCompleted}
          >
            Submit Recipe
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default AddMenu;
