import { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftSide from "./LeftSide";
import { useRegisterMutation } from "./authApiSlice";

// Email Verification
const EmailVerificationModal = ({ isOpen, onClose, userEmail }) => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    onClose();
    navigate("/login")
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform transition-all duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Check Your Email!</h2>
          <p className="text-green-100 text-sm">We've sent you a verification link</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 mb-4">
              <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                We've sent a verification email to:
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-2 break-all">
                {userEmail}
              </p>
            </div>

            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">1</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Check your email inbox (and spam folder)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">2</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Click the verification link in the email
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">3</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Return to login with your verified account
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleLoginRedirect}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800"
            >
              Go to Login
            </button>

            <button
              onClick={onClose}
              className="w-full h-12 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800"
            >
              I'll do this later
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Didn't receive the email? Check your spam folder or{' '}
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">
                resend verification email
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [register, { isSuccess, isLoading: emailRegisterLoading, isError, status }] = useRegisterMutation();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',    
    agreeToTerms: false
  });

  const [formErrors, setFormErrors] = useState({});

  console.log(status)

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
     
    if (!formData.agreeToTerms) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      const result = await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      }).unwrap();

      toast.success('Account created successfully! Please check your email for verification.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        password: '',
      });

      // Optionally navigate to login or verification page
      setShowVerificationModal(true);

    } catch (error) {
      console.error('Registration failed:', error);
      toast.error(error.data?.message || 'Registration failed. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
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
      {/* Email Verification Modal */}
      <EmailVerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
        userEmail={formData.email}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center p-0">
        <div className="w-full h-screen flex flex-col lg:flex-row overflow-hidden shadow-2xl">
          {/* Left Image Section */}
          <LeftSide />

          {/* Sign Up Form Section */}
          <div className="flex-1 bg-white dark:bg-gray-900 flex flex-col justify-center items-center px-4 pt-40 sm:px-6 lg:px-12 py-4 lg:py-200 relative overflow-y-auto">
            {/* Mobile header for small screens */}
            <div className="w-full max-w-md">
              <div className="text-center mb-4 lg:mb-2">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-white mb-2 lg:mb-3 tracking-tight">
                  Create Account
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">Join thousands of happy customers</p>
              </div>

              {!showEmailForm ? (
                <>
                  {/* Google Sign Up Button */}
                  <div className="mb-6 lg:mb-8">
                    <button
                      onClick={handleGoogleSignUp}
                      disabled={isLoading}
                      className={`w-full h-12 sm:h-14 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-3 sm:gap-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
                        }`}
                      aria-label="Sign up with Google"
                      aria-disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-300 dark:border-gray-500 border-t-blue-500 rounded-full animate-spin"></div>
                          <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">Creating account...</span>
                        </div>
                      ) : (
                        <>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">Continue with Google</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="my-6 lg:my-8 flex items-center">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                    <div className="px-4 sm:px-6 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium bg-white dark:bg-gray-900">Or continue with</div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                  </div>

                  {/* Email Button */}
                  <div className="mb-6 lg:mb-8">
                    <button
                      onClick={() => setShowEmailForm(true)}
                      className="w-full h-12 sm:h-14 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-800 font-medium text-sm sm:text-base"
                      aria-label="Continue with Email"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span>Continue with Email</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Email Form */
                <form onSubmit={handleEmailSignUp} className="space-y-4 mb-4 lg:mb-6 px-2 mt-6 lg:space-y-6">
                  {/* Back Button */}
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors mb-4"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Back to options</span>
                  </button>

                  {/* Full Name Field */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full h-12 px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 transition-all duration-200 ${formErrors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                        }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full h-12 px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 transition-all duration-200 ${formErrors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                        }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full h-12 px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 transition-all duration-200 ${formErrors.password
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                        }`}
                      placeholder="Enter your password"
                    />
                    {formErrors.password && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full h-12 px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 transition-all duration-200 ${formErrors.confirmPassword
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
                        }`}
                      placeholder="Confirm your password"
                    />
                    {formErrors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-3">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-2 transition-colors cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed cursor-pointer">
                      I agree with Upam{' '}
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={emailRegisterLoading || !formData.agreeToTerms}
                    className={`w-full h-12 sm:h-14 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-100 dark:focus:ring-red-800 font-medium text-sm sm:text-base ${emailRegisterLoading || !formData.agreeToTerms ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    {emailRegisterLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <span>Create Account</span>
                    )}
                  </button>
                </form>
              )}

              {/* Terms */}
              {/* <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-4 lg:mb-6 px-2 mt-6">
                By creating an account you agree with our{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors">
                  Privacy Policy
                </a>
              </p> */}

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Already have an account?{' '}
                  <Link to={"/login"}>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors bg-transparent border-none cursor-pointer">
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