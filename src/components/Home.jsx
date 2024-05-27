import Nav from "./Nav";
import Footer from "./Footer";
import "./styles/home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <head className="grid h-screen grid-cols-2 gap-24">
          <div className="flex flex-col justify-center gap-16">
            <div className="flex items-end">
              <h1 className="text-7xl text-balance text-[#2E266F] leading-tight">
                Discover Recipe & Delicious Food
              </h1>
              <i className="text-4xl fa-regular fa-bookmark hover:text-[#EFC81A] cursor-pointer"></i>
            </div>
            <form className="p-2 pl-6 border-2 border-[#EFC81A] rounded-full flex w-min gap-5">
              <input
                type="text"
                placeholder="Search Your Favorite Food"
                className="w-[470px] text-2xl focus:outline-none placeholder:opacity-30"
              />
              <button>
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
        </head>
        <section className="mb-52">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-1 h-12 bg-[#EFC81A]"></div>
            <h2 className="text-4xl">Dish Of The Day</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative w-1/3 image-section">
              <img src="./src/assets/img/image-2.png" alt="" />
            </div>
            <div className="flex flex-col items-start gap-6">
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
              <button className="border-2 border-[#EFC81A] px-10 py-2 rounded-full text-[#EFC81A] hover:bg-[#EFC81A] hover:text-white transition-all duration-300">
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
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-6">
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
                <button className=" border-2 border-[#EFC81A] px-10 py-2 rounded-full text-[#EFC81A] hover:bg-[#EFC81A] hover:text-white transition-all duration-300">
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
          <div className="flex items-center justify-between">
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-4.png" alt="" />
              <small className="text-2xl text-center">Salads</small>
            </a>
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-5.png" alt="" />
              <small className="text-2xl text-center">Appetizer</small>
            </a>
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-6.png" alt="" />
              <small className="text-2xl text-center">Main Course</small>
            </a>
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-7.png" alt="" />
              <small className="text-2xl text-center">Dessert</small>
            </a>
          </div>
        </section>
        <section className="mb-20">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-1 h-12 bg-[#EFC81A]"></div>
            <h2 className="text-4xl">Check Out By Region !</h2>
          </div>
          <div className="flex items-center justify-between">
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-8.png" alt="" />
              <small className="text-2xl text-center">Salads</small>
            </a>
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-9.png" alt="" />
              <small className="text-2xl text-center">Appetizer</small>
            </a>
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-10.png" alt="" />
              <small className="text-2xl text-center">Main Course</small>
            </a>
            <a href="" className="flex flex-col gap-4">
              <img src="./src/assets/img/image-11.png" alt="" />
              <small className="text-2xl text-center">Dessert</small>
            </a>
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
