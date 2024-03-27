import React from "react";
import SignupForm from "components/SignupForm";
import SignUpImage from "assets/images/signup_image.webp";

function App() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-5 relative h-screen flex flex-col justify-center">
        <h1 className="text-white text-4xl text-center mb-9">
          Sign up <br /> and come on in
        </h1>

        <img src={SignUpImage} className="w-3/4 mx-auto" alt="signup_image" />

        <span className="text-sm text-white absolute left-1/2 -translate-x-1/2 bottom-12">
          © Typeform
        </span>
      </div>

      <div className="col-span-7 my-auto bg-white rounded-s-2xl h-screen w-full">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
