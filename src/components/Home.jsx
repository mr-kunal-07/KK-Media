import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, once: true });
    }, []);

    return (
        <div className="relative flex flex-col justify-center mb-20 w-full items-center bg-gradient-to-b from-[#FFF4EB] to-white overflow-hidden select-none px-4">
            {/* Decorative Floating PNGs */}
            <img
                src="/arrow.png"
                alt="Arrow"
                data-aos="fade-up"
                data-aos-delay="200"
                className="absolute top-[55%] left-[15%] w-8 md:w-12 animate-float-slow opacity-70 pointer-events-none"
            />
            <img
                src="/dot-arrow.png"
                alt="Dot Arrow"
                data-aos="fade-up"
                data-aos-delay="200"
                className="absolute sm:top-[9%] md:top-[20%] right-[8%] w-12 md:w-20 animate-float opacity-50 pointer-events-none"
            />

            {/* Main Content */}
            <div className='flex flex-col justify-center mt-20 items-center '>
                <h1
                    className="aos-init text-3xl md:text-6xl font-sans font-bold leading-tight text-center relative z-10"
                    data-aos="fade-up"
                >
                    Build Your First{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10">Website</span>
                        <img
                            src="/Circle.png"
                            alt="Circle"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160%] md:w-[150%] z-0"
                        />
                    </span>
                </h1>

                <h1
                    className="text-3xl md:text-6xl font-sans font-bold text-center z-10 mt-2 md:mt-0"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    With Us
                </h1>

                <h3
                    className="font-sans mt-4 md:mt-6 text-sm md:text-lg text-gray-600 font-semibold text-center z-10 max-w-xl"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    If you also want to make a Website for your startup then book free <br className="hidden md:block" /> consultancy today and let's start your startup together.
                </h3>

                <div
                    className="flex gap-4 sm:gap-7 z-10 mt-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <img src="./wp-cta.webp" className="h-12 md:h-14 rounded-xl cursor-pointer shadow-lg" alt="WhatsApp CTA" />
                    <img src="./insta-cta.webp" className="h-12 md:h-14 rounded-xl cursor-pointer shadow-lg" alt="Instagram CTA" />
                </div>
            </div>
        </div>
    );
};

export default Home;
