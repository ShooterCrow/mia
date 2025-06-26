import React from 'react'

const LeftSide = () => {
    return (
        <div className="lg:flex hidden lg:w-[45%] xl:w-[45%] relative">
            <div className="relative w-full h-full bg-[url('/Rectangle6.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden">
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-lg px-8 py-16">
                    <h1 className="font-bold text-4xl xl:text-5xl text-white leading-tight mb-6 tracking-tight">
                        Welcome to <span className="text-yellow-300">Upam Stores</span>
                    </h1>
                    <p className="font-medium text-xl text-white/90 leading-relaxed mb-4">
                        Your OneStop Online Marketplace
                    </p>
                    <p className="font-normal text-white/80 text-lg leading-relaxed">
                        A trusted and growing e-commerce platform designed to bring convenience, variety, and value right to your fingertips. Shop for fashion, electronics, home essentials, beauty products, and more.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default LeftSide
