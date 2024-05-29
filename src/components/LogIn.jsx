import users from "../assets/data/users.json";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const verificatedLogin = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;
    const tAC = e.target.tAC.checked;
    const verifyUser = users.find(
      (user) => user.Email === emailValue && user.Password === passwordValue
    );
    if (verifyUser && tAC) {
      navigate("/home");
    } else if (!verifyUser || !tAC) {
      alert(
        "Email or Password is incorrect or You must accept the terms and conditions"
      );
    } else {
      alert("Some fields are empty");
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen mx-auto max-w-[400px]">
      <h2 className="text-[#EFC81A] text-3xl mb-5 text-center">Recipe..</h2>
      <h1 className="text-[#EFC81A] text-4xl text-center">
        Let´s Get Started!
      </h1>
      <small className="text-[#8692A6] text-center text-lg">
        Log into your exisiting account
      </small>
      <hr className="h-[2px] bg-gray-200 my-6 w-11/12 mx-auto" />
      <form
        action=""
        className="flex flex-col gap-3"
        onSubmit={verificatedLogin}
      >
        <div className="flex flex-col gap-1">
          <label className="p-0 text-xl font-light" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Here"
            className="px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none placeholder:font-light"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="p-0 text-xl font-light" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your Password Here"
            className="px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none placeholder:font-light"
          />
        </div>
        <div className="flex items-center gap-4">
          <input type="checkbox" id="tAC" name="tAC" className="w-4 h-4" />
          <label htmlFor="tAC">I agree to teams & conditions</label>
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-[#EFC81A] text-white py-2 text-xl rounded-md cursor-pointer"
        />
      </form>
      <small className="mt-4 text-base text-center">
        Forgot your password?
        <a href="" className="text-[#EFC81A] ml-1">
          Click here
        </a>
      </small>
      <small className="mt-12 text-base text-center">
        Don´t have an account?
        <a href="/signup" className="text-[#EFC81A] ml-1">
          Sign up
        </a>
      </small>
    </div>
  );
};

export default LogIn;
