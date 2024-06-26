import Nav from "./Nav";
import Footer from "./Footer";
import "./styles/home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const goSearch = (e) => {
    e.preventDefault();
    const search = document.getElementById("search").value;
    if (search) {
      localStorage.setItem("searchQuery", search);
      window.location.href = `/search-menu`;
    }
  };

  const handleFill = () => {
    setIsActive(!isActive);
  };

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <Nav />
      <div className="w-5/6 mx-auto">
        <header className="grid h-screen grid-cols-2 gap-24">
          <div className="flex flex-col justify-center gap-16">
            <div className="flex items-end">
              <h1 className="text-7xl text-balance text-[#2E266F] leading-tight">
                Discover Recipe & Delicious Food
              </h1>
              <i
                className={`${
                  isActive ? "fa-solid" : "fa-regular"
                } text-4xl fa-bookmark hover:text-[#EFC81A] cursor-pointer transition-all duration-300`}
                onClick={handleFill}
              ></i>
            </div>
            <form
              className="p-2 pl-6 border-2 border-[#EFC81A] rounded-full flex w-min gap-5"
              onSubmit={goSearch}
            >
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Your Favorite Food"
                className="w-[470px] text-2xl focus:outline-none placeholder:opacity-30"
              />
              <button type="submit">
                <i className="p-4 text-2xl fa-solid fa-arrow-right bg-[#EDC81A] rounded-full text-white"></i>
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <img
              src="./src/assets/img/image-1.png"
              alt=""
              className="object-cover h-2/3"
            />
          </div>
        </header>
        <section className="mb-52">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-1 h-12 bg-[#EFC81A]"></div>
            <h2 className="text-4xl">Dish Of The Day</h2>
          </div>
          <div className="flex items-center justify-between gap-16">
            <div className="relative w-1/3 image-section">
              <img src="./src/assets/img/image-2.png" alt="" />
            </div>
            <div className="flex flex-col items-start gap-6 w-[650px]">
              <p className="text-[40px] font-medium">
                Healthy Bites:
                <br />
                Nourishing Sandwich Creations
              </p>
              <hr className="h-1 w-full bg-[#EFC81A]" />
              <p className="text-3xl">
                {`"`}Quick + Easy Veggie Delight Sandwich <br /> - Elevate Your
                Lunch in Minutes!{`"`}
              </p>
              <button className="border-2 border-[#EFC81A] px-10 py-2 rounded-full text-[#EFC81A] hover:bg-[#EFC81A] hover:text-white transition-all duration-300 text-2xl">
                Explore More
              </button>
            </div>
          </div>
        </section>
        <section className="mb-52">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-1 h-12 bg-[#EFC81A]"></div>
            <h2 className="text-4xl">Popular For You !</h2>
          </div>
          <div className="flex items-center justify-between gap-16">
            <div className="flex flex-col items-start w-[770px] gap-6">
              <p className="text-[40px] font-medium">
                Tropical Paradise Crunch:
                <br /> Dive into a Refreshing Salad Oasis of <br /> Exotic
                Delights!
              </p>
              <hr className="h-1 w-full bg-[#EFC81A]" />
              <p className="text-3xl">
                {`"`}Dive into our {"'"}Tropical Paradise Crunch{"'"} - a <br />
                refreshing salad with exotic delights in every bite!{`"`}
              </p>
              <div className="flex justify-end w-full">
                <button className=" border-2 border-[#EFC81A] px-10 py-2 rounded-full text-[#EFC81A] hover:bg-[#EFC81A] hover:text-white transition-all duration-300 text-2xl">
                  Explore More
                </button>
              </div>
            </div>
            <div className="relative w-1/3 image-section">
              <img src="./src/assets/img/image-3.png" alt="" />
            </div>
          </div>
        </section>
        <section className="mb-20">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-1 h-12 bg-[#EFC81A]"></div>
            <h2 className="text-4xl">
              Check Out Other Recipes Of Your Choice !
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <Link
              onClick={scrollToTop}
              to="/category/salad"
              className="flex flex-col gap-4 hover:text-[#EFC81A] "
            >
              <img src="./src/assets/img/image-4.png" alt="" />
              <small className="text-2xl text-center">Salads</small>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/category/appetizer"
              className="flex flex-col gap-4 hover:text-[#EFC81A]"
            >
              <img src="./src/assets/img/image-5.png" alt="" />
              <small className="text-2xl text-center">Appetizer</small>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/category/maincourse"
              className="flex flex-col gap-4 hover:text-[#EFC81A]"
            >
              <img src="./src/assets/img/image-6.png" alt="" />
              <small className="text-2xl text-center">Main Course</small>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/category/dessert"
              className="flex flex-col gap-4 hover:text-[#EFC81A]"
            >
              <img src="./src/assets/img/image-7.png" alt="" />
              <small className="text-2xl text-center">Dessert</small>
            </Link>
          </div>
        </section>
        <section className="mb-20">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-1 h-12 bg-[#EFC81A]"></div>
            <h2 className="text-4xl">Check Out By Region !</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <Link
              onClick={scrollToTop}
              to="/category/europe"
              className="flex flex-col gap-4  hover:text-[#EFC81A]"
            >
              <img src="./src/assets/img/image-8.png" alt="" />
              <small className="text-2xl text-center">Europe</small>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/category/america"
              className="flex flex-col gap-4  hover:text-[#EFC81A]"
            >
              <img src="./src/assets/img/image-9.png" alt="" />
              <small className="text-2xl text-center">America</small>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/category/asia"
              className="flex flex-col gap-4  hover:text-[#EFC81A]"
            >
              <img src="./src/assets/img/image-10.png" alt="" />
              <small className="text-2xl text-center">Asia</small>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/category/middleeast"
              className="flex flex-col gap-4  hover:text-[#EFC81A]"
            >
              <img src="./src/assets/img/image-11.png" alt="" />
              <small className="text-2xl text-center">Middle East</small>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
      <div
        className={`fixed bottom-10 right-8 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="text-3xl bg-[#EFC81A] py-4 px-5 shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-[#EFC81A]  focus:ring-opacity-50 text-white flex justify-center items-center"
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
