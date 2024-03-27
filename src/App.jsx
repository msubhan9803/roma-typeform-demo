import React from "react";
import SignupForm from "components/SignupForm";
import SignUpImage from "assets/images/signup_image.webp";
import { BiWorld } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";

function App() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-5 relative h-screen flex flex-col justify-center">
        <h1 className="text-white text-4xl text-center mb-9">
          Sign up <br /> and come on in
        </h1>

        <img
          src={SignUpImage}
          className="w-full mx-auto max-w-[315px]"
          alt="signup_image"
        />

        <span className="text-sm text-gray-100 font-thin absolute left-1/2 -translate-x-1/2 bottom-12">
          © Typeform
        </span>
      </div>

      <div className="col-span-7 my-auto bg-white rounded-s-2xl h-screen relative">
        <div className="absolute top-0 flex justify-between items-center w-full px-6 py-2 min-h-[52px]">
          <div className="flex items-center">
            <BiWorld className="text-gray-600 h-5 w-5 mr-2" />
            <span className="text-sm text-gray-500">English</span>
            <CgChevronDown className="text-gray-600 h-3 w-3 ml-1" />
          </div>

          <div>
            <span className="text-sm text-gray-500 mr-1">
              Already have an account?
            </span>
            &nbsp;
            <button
              type="button"
              class="py-1 px-4 inline-flex items-center gap-x-2 text-xs rounded-md border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-800 dark:text-dark dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Log in
            </button>
          </div>
        </div>

        <SignupForm />
      </div>
    </div>
  );
}

export default App;
