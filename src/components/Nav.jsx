import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const isActive = (path) => (activePath === path ? "active" : "");

  const handleNavLinkClick = (path) => {
    setActivePath(path);
  };

  const handleLogoutClick = () => {
    setShowLogout(true);
  };

  const handleCancelLogout = () => {
    setShowLogout(false);
  };

  const handleConfirmLogout = () => {
    setShowLogout(false);
    navigate("/login");
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
            <Link to="/home" onClick={() => handleNavLinkClick("/home")}>
              Home
            </Link>
          </li>
          <li
            className={`text-center px-5 py-2 hover:bg-white hover:text-[#EFC81A] hover:rounded-md transition-all duration-300 ${
              isActive("/add-menu") ? "bg-white text-[#EFC81A] rounded-md" : ""
            }`}
          >
            <Link
              to="/add-menu"
              onClick={() => handleNavLinkClick("/add-menu")}
            >
              Add Menu
            </Link>
          </li>
          <li
            className={`text-center px-5 py-2 hover:bg-white hover:text-[#EFC81A] hover:rounded-md transition-all duration-300 ${
              isActive("/search-menu")
                ? "bg-white text-[#EFC81A] rounded-md"
                : ""
            }`}
          >
            <Link
              to="/search-menu"
              onClick={() => handleNavLinkClick("/search-menu")}
            >
              Search Menu
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Link to="/profile">
            <i
              className="text-4xl fa-regular fa-circle-user"
              aria-hidden="true"
            ></i>
          </Link>
          <div className="flex flex-col items-start">
            <strong>User Name</strong>
            <button className="underline" onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        </div>
      </div>
      {showLogout && (
        <div className="absolute top-0 w-full h-screen bg-[#00000040] flex items-center justify-center">
          <div className="flex flex-col py-8 bg-white rounded-lg ">
            <strong className="text-[#EFC81A] text-center text-2xl font-medium mx-14">
              Are you sure you want to logout?
            </strong>
            <hr className="my-4" />
            <div className="flex gap-5 mx-auto">
              <button
                className="text-[#EFC81A] w-24 py-1"
                onClick={handleCancelLogout}
              >
                Cancel
              </button>
              <button
                className="w-24 py-1 text-center text-white bg-red-600 rounded-md"
                onClick={handleConfirmLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
