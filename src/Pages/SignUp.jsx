import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className=" text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className=" flex justify-center items-center flex-wrap px-6 py-12 max-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={onChange}
              className=" mb-4 w-full px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out"
            />
            <input
              type="email"
              id="email"
              placeholder="email-address"
              value={email}
              onChange={onChange}
              className=" mb-4 w-full px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out"
            />
            <div className=" relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                className="w-full px-4 py-2 text-xl text-gray-700 rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className=" absolute right-3 top-3.5 text-xl cursor-pointer"
                  onClick={() => {
                    setShowPassword((prevState) => !prevState);
                  }}
                />
              ) : (
                <AiFillEye
                  className=" absolute right-3 top-3.5 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className=" mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p>
                Have an Account?
                <Link
                  to="/sign-in"
                  className=" text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className=" text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Forgot Password
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign Up
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
