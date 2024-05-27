const SignUp = () => {
  return (
    <div className="flex flex-col justify-center h-screen mx-auto max-w-[400px]">
      <h2 className="text-[#EFC81A] text-3xl mb-5 text-center">Recipe..</h2>
      <h1 className="text-[#EFC81A] text-4xl text-center">
        Let´s Get you set up !
      </h1>
      <small className="text-[#8692A6] text-center text-lg">
        Create a new account to access all features
      </small>
      <hr className="h-[2px] bg-gray-200 my-6 w-11/12 mx-auto" />
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="p-0 text-xl font-light" htmlFor="">
            Name
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name Here"
            className="px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none placeholder:font-light"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="p-0 text-xl font-light" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email Here"
            className="px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none placeholder:font-light"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="p-0 text-xl font-light" htmlFor="">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Your Password Here"
            className="px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none placeholder:font-light"
          />
        </div>
        <div className="flex items-center gap-4">
          <input type="checkbox" name="" id="" className="w-4 h-4" />
          <label htmlFor="">I agree to teams & conditions</label>
        </div>
        <input
          type="submit"
          value="Register Account"
          className="bg-[#EFC81A] text-white py-2 text-xl rounded-md"
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
