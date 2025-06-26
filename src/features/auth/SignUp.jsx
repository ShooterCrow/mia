import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User signed in:", {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      navigate("/");
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full sm:rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left Image Section */}
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
            <div className="flex items-center justify-center mb-8">
              <h2 className="font-sans font-medium text-[31px] leading-[120%] tracking-0 text-center text-[#444444]">
                Sign up on Upam Stores
              </h2>
            </div>

            <div className="flex justify-center mb-8">
              <button
                onClick={handleGoogleSignUp}
                className="w-full max-w-[403.5px] h-12 rounded-[10px] px-3 py-1.5 flex items-center justify-center gap-2.5 border-[2px] hover:bg-gray-100 transition"
              >
                <div className="bg-white p-2 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4"
                    viewBox="0 0 533.5 544.3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4 text-[#666666]">Sign up with Google</span>
              </button>
            </div>

            <div className="my-12 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="px-4 text-[#666666] text-sm font-medium">Or</div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="w-full flex justify-center mb-4">
              <button className="w-full max-w-[403.5px] h-12 rounded-[10px] bg-[#EB010C] text-white flex items-center justify-center gap-2.5 px-4 border border-gray-300 hover:bg-red-600 transition">
                <span>Continue with Email</span>
              </button>
            </div>

            <p className="font-dm-sans font-normal text-[13px] leading-[1.39] text-[#666666] tracking-[0.02em] text-center">
              By creating an account you agree with Upam
              <a href="#" className="underline">
                Terms of Service
              </a>
              and
              <a href="#" className="underline">
                Privacy Policies
              </a>
            </p>

            <div className="mt-6 font-sans font-normal text-[#666666] text-base leading-[1.45] tracking-[0.05em] text-center">
              Already have an account?
              <a href="#" className="underline">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;