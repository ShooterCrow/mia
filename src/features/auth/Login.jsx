import React, { useState, useEffect } from "react";
import LeftSide from "./LeftSide";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "./authApiSlice";
import { useAuth } from "../../hooks/useAuth";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const LogIn = () => {
  const navigate = useNavigate();
  const [login, { isLoading: emailLoginLoading, isError, error, isSuccess }] = useLoginMutation();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated, "isAuthenticated in Login component");

  // Handle successful login
  useEffect(() => {
    if (isSuccess || isAuthenticated) {
      console.log(emailLoginLoading, isError, error, isSuccess);
      navigate("/dashboard");
    }
  }, [isSuccess, isAuthenticated, navigate]);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      // Send this token to your backend for validation or login
      const loginResult = await login({ googleToken: token });
      console.log(token, "Google token received", loginResult, "Login result from backend");

      if (loginResult.success) {
        console.log("Google sign-in successful");
      } else {
        console.error("Backend login failed:", loginResult.message);
      }
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await login({
        email: formData.email,
        password: formData.password
      }).unwrap();
      // Success handling is done in useEffect
    } catch (error) {
      console.error("Login failed:", error);
      // Error handling can be done here or through the error state
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const isLoading = emailLoginLoading || googleLoading;

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center p-0">
        <div className="w-full lg:pt-[2rem] flex flex-col lg:flex-row overflow-hidden shadow-2xl">
          {/* Left Image Section */}
          <LeftSide />

          {/* Sign In Form Section */}
          <div className="flex-1 bg-white dark:bg-gray-900 flex flex-col justify-center items-center px-6 sm:px-12 py-8 lg:py-16 relative">
            {/* Mobile header for small screens */}
            <div className="w-full pt-5 max-w-md">
              <div className="text-center mb-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-white tracking-tight">
                  Welcome Back
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">Sign in to your account</p>
              </div>

              {/* Error Message */}
              {isError && (
                <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {error?.data?.message || error?.message || "Login failed. Please try again."}
                  </p>
                </div>
              )}

              {/* Google Sign In Button */}
              <div className="mb-3">
                <button
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className={`w-full h-14 rounded-2xl px-6 py-4 flex items-center justify-center gap-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
                    }`}
                  aria-label="Sign in with Google"
                  aria-disabled={isLoading}
                >
                  {googleLoading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-500 border-t-blue-500 rounded-full animate-spin"></div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">Signing in...</span>
                    </div>
                  ) : (
                    <>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium text-base">Continue with Google</span>
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="my-8 flex items-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                <div className="px-6 text-gray-500 dark:text-gray-400 text-sm font-medium bg-white dark:bg-gray-900">Or sign in with email</div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              </div>

              {/* Email Sign In Form */}
              <form onSubmit={handleEmailSignIn} className="space-y-6 mb-8">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 focus:outline-none hover:border-gray-300 dark:hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 focus:outline-none hover:border-gray-300 dark:hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Sign In Button */}
                <button
                  // type="submit"
                  // disabled={isLoading || !formData.agreeToTerms}
                  className={`w-full h-14 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white font-medium text-base transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-800 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`} >
                  {emailLoginLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Don't have an account?{' '}
                  <Link to={"/signup"}>
                    <button className="hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors bg-transparent border-none cursor-pointer">
                      Sign Up
                    </button>
                  </Link>
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-50 blur-xl hidden lg:block"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full opacity-50 blur-lg hidden lg:block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;