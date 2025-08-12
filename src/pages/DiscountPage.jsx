import React, { useState, useEffect } from "react";

const DiscountPage = () => {
  /* ----------  Countdown timer (shared state) ---------- */
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 20,
    minutes: 50,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* ----------  Reusable Product Card ---------- */
  const ProductCard = ({ discount }) => (
    <div className="bg-white rounded-2xl border-2 ">
      <div className="p-8">
        <div className="flex justify-between items-start">
          {/* LEFT: Text block */}
          <div className="flex-1">
            <h3 className="w-[395px] h-[118px] opacity-100 font-normal text-[49px] leading-[120%] tracking-normal  font-dm-sans">
              White Comfy Canvas
            </h3>

            {/* Repeat the two Lorem lines twice */}
            {Array(1)
              .fill(0)
              .map((_, idx) => (
                <p
                  key={idx}
                  className="text-[#8B8B8B] text-sm leading-relaxed mb-3"
                >
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              ))}

            {/* Price */}
            <div className="flex items-center gap-3 my-4">
              <span className="text-3xl font-bold text-gray-800">$100</span>
              <span className="text-xl text-[#EB010C] line-through">$200</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              <span className="text-gray-600 text-sm">(30k)</span>
            </div>

            {/* Countdown duplicated */}
            <div className="flex gap-4">
              {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                <div key={label} className="text-center">
                  <div className="w-[54px] h-[24px] opacity-100 font-medium text-[25px] leading-[120%] tracking-normal  font-dm-sans">
                    {timeLeft[label.toLowerCase()]}
                  </div>
                  <div className="w-[54px] h-[14px] opacity-100 font-normal text-[13px] leading-[139%] tracking-[2%]  font-dm-sans">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image + discount badge */}
          <div className=" ml-6">
            {/* Discount badge */}
            <div className="">
              <div className="">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                    discount === 50 ? "bg-red-500" : "bg-orange-500"
                  }`}
                >
                  {discount}%
                </div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className=""
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%,-50%) rotate(${
                        i * 45
                      }deg) translateY(-24px)`,
                      clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* ----------  Page Layout ---------- */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ height: "70vh", backgroundImage: "url(/discount.png)" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
          <h1 className="text-6xl font-bold tracking-wide mb-4">
            Discount Product
          </h1>
          <h2 className="text-[32px] font-medium leading-[120%] mb-4">
            Shop your favorite items at unbeatable prices
          </h2>
          <p className="max-w-3xl text-[16px] leading-[145%] tracking-[5%]">
            Shop your favorite items at unbeatable prices and enjoy massive
            savings across a wide range of products. From fashion and
            electronics to home essentials and more, these deals are live for a
            limited time only. No discount codes needed.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <ProductCard discount={40} />
          <ProductCard discount={50} />
        </div>
      </div>
    </div>
  );
};

export default DiscountPage;
