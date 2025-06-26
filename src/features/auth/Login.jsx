import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full sm:rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left Image Section for large screens */}
        <div className="lg:flex hidden lg:w-1/2 xl:w-5/12">
          <div className="relative w-full h-[90%] rounded-[10px] bg-[url('/Signup.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="text-center max-w-lg px-6 py-12">
              <div className="font-sans font-normal text-[39px] text-[#666666] leading-[100%] tracking-[0.05em] text-center">
                Welcome to Upam Stores Your OneStop Online Marketplace
              </div>
              <div className="font-sans font-normal text-[#666666] text-[16px] leading-[145%] tracking-[0.05em] text-center mt-4">
                Upam Stores is a trusted and growing e-commerce platform
                designed to bring convenience, variety, and value right to your
                fingertips. Whether you're shopping for fashion, electronics,
                home essentials, beauty products, or gadgets
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Form Section */}
        <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            {/* Title */}
            <div className="flex items-center justify-center mb-8">
              <h2 className="font-sans font-medium text-[31px] leading-[120%] tracking-0 text-center text-[#444444]">
                Sign up on Upam Stores
              </h2>
            </div>

            <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div class="mb-1 flex flex-col gap-6">
                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-sm text-slate-600">Name</label>
                  <input
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Name"
                  />
                </div>
                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-sm text-slate-600">Email</label>
                  <input
                    type="email"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Email"
                  />
                </div>
                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-sm text-slate-600">
                    Password
                  </label>
                  <input
                    type="password"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Password"
                  />
                </div>
              </div>
              <div class="inline-flex  items-center mt-2">
                <label
                  class="flex items-center mb-6 cursor-pointer relative"
                  for="check-2"
                >
                  <input
                    type="checkbox"
                    class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                    id="check-2"
                  />
                  <span class="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <p className="font-dm-sans ml-2 font-normal text-[13px] leading-[1.39] text-[#666666] tracking-[0.02em] text-center">
                    I agree with Upam
                    <a href="#" className="underline">
                      Terms of Service
                    </a>
                    and
                    <a href="#" className="underline">
                      Privacy Policies
                    </a>
                  </p>
                </label>
              </div>
              <Link to={"/signup"}>
                <button className="w-full max-w-[403.5px] h-12 rounded-[10px] bg-[#EB010C] text-white flex items-center justify-center gap-2.5 px-4 border border-gray-300 hover:bg-red-600 transition">
                  <span>Sign Up</span>
                </button>
              </Link>
              <p class="flex justify-center text-[#666666] font-sans font-normal mt-6  text-base">
                Already have an account?
                <Link to={"/signup"}
                  class="ml-1 text-sm font-semibold text-[#666666]  underline"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
