import React from "react";

const TrendingProducts = () => {
  const products = [
    {
      id: "1",
      title: "Loud JBL Headset",
      price: 75.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We’ve slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they’re gone.",
      image: "/headset.png",
      textColor: "text-white",
    },
    {
      id: "2",
      title: "Loud JBL Headset",
      price: 75.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We’ve slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they’re gone.",
      image: "/shoe.png",
      textColor: "text-white",
    },
    {
      id: "3",
      title: "Loud JBL Headset",
      price: 249.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We’ve slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they’re gone.",
      image: "/airpod.png",
      textColor: "text-white",
    },
    {
      id: "4",
      title: "Loud JBL Headset",
      price: 45.0,
      description:
        "Enjoy unbeatable deals across all categories — from fashion and gadgets to home essentials. We’ve slashed prices so you can shop more and save big, whether you're treating yourself or checking off your wish list. Hurry — offers are valid while stocks last and only for a limited time! Browse, add to cart, and connect with sellers directly to grab your discounted favorites before they’re gone.",
      image: "/cream.png",
      textColor: "text-white",
    },
  ];

  const handleViewProduct = (productId) => {
    console.log(`Viewing product: ${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto ">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="font-dm-sans text-3xl font-medium leading-none sm:text-4xl md:text-[39px]">
            Trending Product
          </h1>
          <button className="rounded-md px-4 py-2 text-gray-600 transition-colors hover:text-gray-900">
            Filter
          </button>
        </div>

        <p className="max-w-3xl text-base leading-relaxed tracking-wider text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Products Grid */}
      <div className="mx-auto mt-10 grid  gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Gradient overlay for readability */}
            <div className="" />

            {/* Content */}
            <div
              className={`relative z-10 flex h-full flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 ${product.textColor}`}
            >
              <h2 className="font-dm-sans text-3xl font-normal leading-tight sm:text-4xl md:text-5xl lg:text-[64px]">
                {product.title}
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed sm:text-base">
                {product.description}
              </p>

              <div className="mt-6">
                <span className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => handleViewProduct(product.id)}
                className={`
                  mt-6 inline-block w-fit rounded-lg border-2 px-6 py-3 font-medium
                  transition-all duration-300 hover:scale-105
                  ${
                    product.textColor === "text-white"
                      ? "border-white text-white hover:bg-white hover:text-gray-900"
                      : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                  }
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