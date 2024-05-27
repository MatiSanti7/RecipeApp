const Footer = () => {
  return (
    <div className="bg-[#EFC81A]">
      <div className="flex flex-col w-4/5 py-8 mx-auto gap-14">
        <img src="./src/assets/img/logo.png" alt="" className="mx-auto w-28" />
        <div className="relative flex items-center justify-between">
          <ul className="absolute flex mx-auto transform -translate-x-1/2 gap-14 left-1/2">
            <li className="text-xl hover:text-white">
              <a href="/home">Home</a>
            </li>
            <li className="text-xl hover:text-white">
              <a href="/add-menu">Add Menu</a>
            </li>
            <li className="text-xl hover:text-white">
              <a href="/search-menu">Search Menu</a>
            </li>
            <li className="text-xl hover:text-white">
              <a href="/profile">Your Recipes</a>
            </li>
          </ul>
          <ul className="flex gap-3 ml-auto">
            <li className="text-2xl hover:text-white">
              <a href="https://www.facebook.com" target="_blank">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li className="text-2xl hover:text-white">
              <a href="https://www.instagram.com" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="text-2xl hover:text-white">
              <a href="https://www.youtube.com" target="_blank">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </li>
            <li className="text-2xl hover:text-white">
              <a href="https://www.pinterest.com" target="_blank">
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
