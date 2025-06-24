import React, { useState, useEffect, useRef } from 'react';

const EmailVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
   const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    // Allow only single digit
    if (/^\d?$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Move focus to previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length === 6) {
      console.log('Verification code:', code);
      // Add verification logic here
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

   useEffect(() => {
    const isAllFilled = otp.every((digit) => digit !== '');
    setIsVerified(isAllFilled);
  }, [otp]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

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

        {/* Verification Form Section */}
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col space-y-2">
            <div className="font-semibold text-3xl">
              <p>Enter verification code from Email</p>
            </div>
            <div className=" text-sm font-medium text-gray-400">
              <p>Please enter the code we sent to this email</p>
              <p>emmanuelcoach645@gmail.com</p>
            </div>
          </div>

          <div>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-6">
                <div className="flex justify-center space-x-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB010C]"
                    />
                  ))}
                </div>

                <div>
                <button
                    type="submit"
                    className={`w-full max-w-[403.5px] h-12 rounded-[10px] text-white flex items-center justify-center gap-2.5 px-4 border border-gray-300 transition ${
                      isVerified ? 'bg-[#EB010C] hover:bg-red-600' : 'bg-[#AAAAAA]'
                    }`}
                  >
                    <span>Verify Email</span>
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't receive code?</p>{' '}
                  <a
                    className="flex flex-row items-center text-[#EB010C]"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;