import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const checkbox = e.target.querySelector("input[type='checkbox']").checked;
    const name = e.target.querySelector("input[name='name']").value;
    const email = e.target.querySelector("input[name='email']").value;
    const password = e.target.querySelector("input[name='password']").value;

    if (checkbox && name && email && password) {
      navigate("/home");
    } else {
      alert("Please fill all the fields and agree to the terms and conditions");
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen mx-auto max-w-[400px]">
      <h2 className="text-[#EFC81A] text-3xl mb-5 text-center">Recipe..</h2>
      <h1 className="text-[#EFC81A] text-4xl text-center">
        Let´s Get you set up!
      </h1>
      <small className="text-[#8692A6] text-center text-lg">
        Create a new account to access all features
      </small>
      <hr className="h-[2px] bg-gray-200 my-6 w-11/12 mx-auto" />
      <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
        <div className="flex flex-col gap-1">
          <label className="p-0 text-xl font-light" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name Here"
            className="px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none placeholder:font-light"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="p-0 text-xl font-light" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
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
            name="password"
            id="password"
            placeholder="Your Password Here"
            className="px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none placeholder:font-light"
          />
        </div>
        <div className="flex items-center gap-4">
          <input type="checkbox" id="terms" className="w-4 h-4" />
          <label htmlFor="terms">I agree to terms & conditions</label>
        </div>
        <input
          type="submit"
          value="Register Account"
          className="bg-[#EFC81A] text-white py-2 text-xl rounded-md cursor-pointer"
        />
      </form>
      <small className="mt-12 text-base text-center">
        Already have an account?
        <a href="/" className="text-[#EFC81A] ml-1">
          Log in here
        </a>
      </small>
    </div>
  );
};

export default SignUp;
