import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'; // We'll define custom animations here

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, once: true });

    }, []);

    return (
        <div className="relative h-[90vh] flex flex-col justify-center w-screen items-center bg-gradient-to-b from-[#FFF4EB] to-white overflow-hidden select-none">
            {/* Decorative Floating PNGs */}
            <img
                src="/arrow.png"
                alt="Arrow"
                data-aos="fade-up"
                data-aos-delay="200"
                className="absolute top-[30%] left-[13%] w-12 animate-float-slow opacity-70 pointer-events-none"
            />
            <img
                src="/dot-arrow.png"
                alt="Dot Arrow"
                data-aos="fade-up"
                data-aos-delay="200"
                className="absolute top-[20%] right-[10%] w-20  animate-float opacity-50 pointer-events-none"
            />
            {/* Main Content */}
            <h1
                className="aos-init text-6xl font-sans font-semibold mt-[-100px] leading-tight relative z-10"
                data-aos="fade-up"
            >
                Build Your First{' '}
                <span className="relative inline-block">
                    <span className="relative z-10">Website</span>
                    <img
                        src="/Circle.png"
                        alt="Circle"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] z-0"
                    />
                </span>
            </h1>

            <h1
                className="text-6xl font-sans font-semibold text-center z-10"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                With Us
            </h1>
            <h3
                className="font-sans mt-6 text-lg text-gray-600 font-semibold text-center z-10"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                If you also want to make a Website for your startup then book free <br /> consultancy today and let's start your startup together.
            </h3>
            <div
                className="flex gap-7 z-10"
                data-aos="fade-up"
                data-aos-delay="600"
            >
                <img src="./wp-cta.webp" className='h-13 rounded-xl mt-6 cursor-pointer shadow-lg' alt="WhatsApp CTA" />
                <img src="./insta-cta.webp" className='h-13 rounded-xl mt-6 cursor-pointer shadow-lg' alt="Instagram CTA" />
            </div>
        </div>
    );
};

export default Home;
