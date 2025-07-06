import React from 'react'
import PrimaryButton from './buttons/PrimaryButton'

const HeroSection = ({text, btnTxt, border, image}) => {
    const words = text.split(" ");
    const chunks = [
        words.slice(0, 6).join(" "),
        words.slice(6, 13).join(" "),
        words.slice(13).join(" "),
    ];
    return (
        <div className={`mt-5 mb-5 max-w-7xl mx-auto relative gap-4 ${border && "rounded-lg"} flex flex-col h-[50vh] md:h-[80vh] justify-center items-center overflow-hidden bg-gradient-to-br from-red-400 to-red-600 dark:from-red-500 dark:to-red-700`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
                style={{
                    backgroundImage: `url(${image})`
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-60" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold leading-tight'>
                    {chunks.map((chunk, index) => (
                        <React.Fragment key={index}>
                            {chunk}
                            {index < chunks.length - 1 && (
                                <>
                                    <br className="hidden sm:block" />
                                    <span className="sm:hidden"> </span>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </h2>
                <div className="mt-6">
                    <PrimaryButton text={btnTxt} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
