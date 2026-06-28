import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { testimonials } from "../../data/testimonialData.js";
import TestimonialCard from "./TestimonialCard.jsx";

const TestimonialSlider = () => {

    const [current, setCurrent] = useState(0);

    const total = testimonials.length;

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) => (prev + 1) % total);

        }, 6000);

        return () => clearInterval(interval);

    }, [total]);

    const previousIndex =
        (current - 1 + total) % total;

    const nextIndex =
        (current + 1) % total;

    const previous = () => {

        setCurrent((prev) => (prev - 1 + total) % total);

    };

    const next = () => {

        setCurrent((prev) => (prev + 1) % total);

    };

    return (

        <div className="relative mt-20">

            {/* ================= Desktop ================= */}

            <div
                className="hidden lg:flex justify-center items-center overflow-hidden relative"
            >

                <div
                    className="flex items-center justify-center gap-8 transition-all 
                    duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >

                    {/* Previous */}
                    <div
                        className="w-[24%] opacity-45 scale-90 transition-all duration-700 cursor-pointer"
                    >
                        <TestimonialCard
                            {...testimonials[previousIndex]}
                        />
                    </div>

                    {/* Current */}
                    <div
                        className="w-[48%] scale-105 z-20 transition-all duration-700 cursor-pointer"
                    >
                        <TestimonialCard
                            {...testimonials[current]}
                        />
                    </div>

                    {/* Next */}
                    <div
                        className="w-[24%] opacity-45 scale-90 transition-all duration-700 cursor-pointer"
                    >
                        <TestimonialCard
                            {...testimonials[nextIndex]}
                        />
                    </div>

                </div>

            </div>

            {/* ================= Mobile ================= */}

            <div className="lg:hidden">

                <TestimonialCard
                    {...testimonials[current]}
                />

            </div>

            {/* Navigation */}

            <div
                className="
                flex
                items-center
                justify-center
                gap-6
                mt-12
                "
            >

                <button
                    onClick={previous}
                    className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    shadow-md
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    "
                >
                    <FiArrowLeft className="mx-auto text-lg" />
                </button>

                {/* Indicators */}

                <div className="flex items-center gap-3">

                    {testimonials.map((_, index) => {

                        const active = current === index;

                        return (

                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className="relative h-3 rounded-full transition-all duration-700 ease-out overflow-hidden"
                            >

                                <div
                                    className={`
                                        h-full
                                        rounded-full
                                        transition-all
                                        duration-700
                                        ease-[cubic-bezier(.22,1,.36,1)]
                                        ${active
                                            ? "w-10 bg-blue-600"
                                            : "w-3 bg-slate-300 hover:bg-blue-300"
                                        }
                                    `}
                                />

                            </button>

                        );

                    })}

                </div>


                <button
                    onClick={next}
                    className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    shadow-md
                    hover:bg-blue-600
                    hover:text-white
                    hover:scale-110
                    active:scale-95
                    transition-all
                    duration-300
                    cursor-pointer
                    "
                >
                    <FiArrowRight className="mx-auto text-lg" />
                </button>

            </div>

        </div>

    );

};

export default TestimonialSlider;