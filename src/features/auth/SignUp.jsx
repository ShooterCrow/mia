import { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftSide from "./LeftSide";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result)
      const user = result.user;
      console.log(user)
      console.log("User signed in now:", {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        photoURL: user.photoURL,
      });
      // Delay navigation slightly to allow toast to be visible
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
      let errorMessage = "An error occurred during sign-in. Please try again.";
      switch (error.code) {
        case "auth/popup-closed-by-user":
          errorMessage = "Sign-in was cancelled. Please try again.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection and try again.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many attempts. Please try again later.";
          break;
        default:
          errorMessage = error.message;
      }
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignUp = () => {
    navigate("/signup/email");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center p-0">
        <div className="w-full h-screen flex flex-col lg:flex-row overflow-hidden shadow-2xl">
          {/* Left Image Section */}
          <LeftSide />

          {/* Sign Up Form Section */}
          <div className="flex-1 bg-white dark:bg-gray-900 flex flex-col justify-center items-center px-6 sm:px-12 py-8 lg:py-16 relative">
            {/* Mobile header for small screens */}
            <div className="w-full max-w-md">
              <div className="text-center mb-2">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-white mb-3 tracking-tight">
                  Create Account
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">Join thousands of happy customers</p>
              </div>

              {/* Google Sign Up Button */}
              <div className="mb-8">
                <button
                  onClick={handleGoogleSignUp}
                  disabled={isLoading}
                  className={`w-full h-14 rounded-2xl px-6 py-4 flex items-center justify-center gap-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : "hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
                  }`}
                  aria-label="Sign up with Google"
                  aria-disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-500 border-t-blue-500 rounded-full animate-spin"></div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">Creating account...</span>
                    </div>
                  ) : (
                    <>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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
                <div className="px-6 text-gray-500 dark:text-gray-400 text-sm font-medium bg-white dark:bg-gray-900">Or continue with</div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              </div>

              {/* Email Button */}
              <div className="mb-8">
                <button
                  onClick={handleEmailSignUp}
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white flex items-center justify-center gap-3 px-6 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-800 font-medium text-base"
                  aria-label="Continue with Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Continue with Email</span>
                </button>
              </div>

              {/* Terms */}
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6 px-2">
                By creating an account you agree with our{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors">
                  Privacy Policy
                </a>
              </p>

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Already have an account?{' '}
                  <Link to={"/login"}>
                    <button className="hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors bg-transparent border-none cursor-pointer">
                      Login
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
}

export default SignUp