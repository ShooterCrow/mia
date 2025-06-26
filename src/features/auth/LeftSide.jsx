import React from 'react'

const LeftSide = () => {
    return (
        <div className="lg:flex hidden lg:w-[45%] xl:w-[45%] relative">
            <div className="relative w-full h-full bg-[url('/Signup.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden">
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-lg px-8 py-16">
                    <div className="mb-8">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                            </svg>
                        </div>
                    </div>

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
