import { useState } from "react";

const Nav = () => {
  const [activePath, setActivePath] = useState(window.location.pathname);

  const isActive = (path) => (activePath === path ? "active" : "");

  const handleNavLinkClick = (path) => {
    setActivePath(path);
  };

  return (
    <nav className="bg-[#EFC81A] fixed flex justify-center w-full py-4 z-10">
      <div className="top-0 flex items-center justify-between w-4/5">
        <ul className="flex gap-6">
          <li
            className={`text-center px-5 py-2 hover:bg-white hover:text-[#EFC81A] hover:rounded-md transition-all duration-300 ${
              isActive("/") || isActive("/home")
                ? "bg-white text-[#EFC81A] rounded-md"
                : ""
            }`}
          >
            <a
              href="/home"
              onClick={() =>
                handleNavLinkClick("/home") || handleNavLinkClick("/")
              }
            >
              Home
            </a>
          </li>
          <li
            className={`text-center px-5 py-2 hover:bg-white hover:text-[#EFC81A] hover:rounded-md transition-all duration-300 ${
              isActive("/add-menu") ? "bg-white text-[#EFC81A] rounded-md" : ""
            }`}
          >
            <a href="/add-menu" onClick={() => handleNavLinkClick("/add-menu")}>
              Add Menu
            </a>
          </li>
          <li
            className={`text-center px-5 py-2 hover:bg-white hover:text-[#EFC81A] hover:rounded-md transition-all duration-300 ${
              isActive("/search-menu")
                ? "bg-white text-[#EFC81A] rounded-md"
                : ""
            }`}
          >
            <a
              href="/search-menu"
              onClick={() => handleNavLinkClick("/search-menu")}
            >
              Search Menu
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a href="/profile">
            <i
              className="text-4xl fa-regular fa-circle-user"
              aria-hidden="true"
            ></i>
          </a>
          <div className="flex flex-col">
            <strong>User Name</strong>
            <a href="#" className="underline">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
