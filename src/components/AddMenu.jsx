import Nav from "./Nav";
import Footer from "./Footer";
import { useState, useRef } from "react";

const AddMenu = () => {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const [imageSrc, setImageSrc] = useState(null);

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
  return (
    <div>
      <Nav />
      <div className="w-5/6 mx-auto"></div>
      <section className="w-5/6 mx-auto py-36">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-1 h-12 bg-[#EFC81A]"></div>
          <h2 className="text-4xl">Add The Recipe Of Your Choise !</h2>
        </div>
        <hr className="h-1 w-full bg-[#EFC81A]" />
        <form action="" className="flex flex-col items-end gap-5 mt-10">
          <div className="flex w-full gap-5">
            <div className="flex flex-col w-1/3 gap-3 mx-auto">
              <div className="w-full mx-auto bg-[#F6F6F6] border-2 border-[#00000020] rounded-md h-96 flex items-center justify-center">
                {imageSrc ? (
                  <img src={imageSrc} className="object-cover w-full h-full" />
                ) : (
                  <i className="text-5xl fa-solid fa-image opacity-10"></i>
                )}
              </div>
              <div className="relative inline w-full">
                <button
                  className="bg-[#EFC81A] py-2 text-xl w-full rounded-md text-white"
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
            <div className="flex flex-col w-2/3 gap-3">
              <input
                type="text"
                placeholder="Title"
                className="px-4 py-3 text-2xl bg-[#F6F6F6] rounded-md focus:outline-none"
              />
              <textarea
                name=""
                id=""
                className="px-4 py-3 text-xl bg-[#F6F6F6] rounded-md resize-none h-96 focus:outline-none"
                placeholder="Ingredients & Description"
              ></textarea>
              <div className="flex gap-10 text-xl">
                <label htmlFor="">Category:</label>
                <div className="flex gap-3">
                  <input type="radio" name="category" id="salad" />
                  <label htmlFor="salad">Salad</label>
                </div>
                <div className="flex gap-3">
                  <input type="radio" name="category" id="appetizer" />
                  <label htmlFor="appetizer">Appetizer</label>
                </div>
                <div className="flex gap-3">
                  <input type="radio" name="category" id="main-course" />
                  <label htmlFor="main-course">Main Course</label>
                </div>
                <div className="flex gap-3">
                  <input type="radio" name="category" id="dessert" />
                  <label htmlFor="dessert">Dessert</label>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#EFC81A] py-2 text-xl rounded-md text-white px-10">
            Submit Recipe
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default AddMenu;
