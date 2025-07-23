import React from "react";

const TrendingProducts = () => {
  const products = [
    {
      id: "1",
      title: "Loud JBL Headset",
      price: 75.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We've slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they're gone.",
      image: "/headset.png",
      textColor: "text-white",
    },
    {
      id: "2",
      title: "Loud JBL Headset",
      price: 75.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We've slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they're gone.",
      image: "/shoe.png",
      textColor: "text-white",
    },
    {
      id: "3",
      title: "Loud JBL Headset",
      price: 249.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We've slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they're gone.",
      image: "/airpod.png",
      textColor: "text-white",
    },
    {
      id: "4",
      title: "Loud JBL Headset",
      price: 45.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We've slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they're gone.",
      image: "/cream.png",
      textColor: "text-white",
    },
  ];

  const handleViewProduct = (productId) => {
    console.log(`Viewing product: ${productId}`);
    // Handle product view logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className=" mx-auto mb-8">
        <div className="flex justify-between items-center my-4">
          <h1 className="font-dm-sans font-medium text-[39px] leading-[1.2] w-[1129px] h-[37px] ">
            Trending Product
          </h1>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            Filter
          </button>
        </div>

        <p className="font-normal text-base leading-[1.45] tracking-[0.05em] w-[1129px] h-[92px] opacity-100 bg-[var(--upam-paragraph, #8B8B8B)] font-family-[DM Sans]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Products Grid */}
      <div className=" mx-auto space-y-8">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-2xl overflow-hidden shadow-2xl min-h-[400px] transform hover:scale-[1.02] transition-transform duration-300"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Content */}
            <div
              className={`  p-10 md:p-12 flex flex-col justify-center min-h-[400px] max-w-lg ${product.textColor}`}
            >
              <h2 className="font-dm-sans font-normal text-[64px] leading-[1.2] w-[618px] h-[77px] opacity-100 ">
                {product.title}
              </h2>

              <p className="font-dm-sans font-normal text-[16px] leading-[1.45] tracking-[0.05em] w-[618px] h-[138px]">
                {product.description}
              </p>

              <div className="my-8">
                <span className="text-4xl md:text-5xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => handleViewProduct(product.id)}
                className={`
                  px-8 py-3 border-2 rounded-lg font-medium transition-all duration-300 w-fit
                  ${
                    product.textColor === "text-white"
                      ? "border-white text-white hover:bg-white hover:text-gray-900"
                      : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                  }
                  transform hover:scale-105
                `}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
