import { FiHelpCircle, FiMessageCircle, FiArrowRight } from "react-icons/fi";

const FAQHeader = () => {

    return (

        <div
            className="
                max-w-md
                mx-auto
                lg:mx-0

                text-center
                lg:text-left
            "
        >

            {/* Section Badge */}

            <div
                className="
                    inline-flex
                    items-center
                    gap-3

                    rounded-full

                    border
                    border-blue-100

                    bg-blue-50

                    px-5
                    py-3
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500

                        text-white
                        shadow-lg
                    "
                >

                    <FiHelpCircle size={18} />

                </div>

                <span
                    className="
                        font-semibold
                        tracking-wide
                        text-blue-700
                    "
                >

                    Frequently Asked Questions

                </span>

            </div>

            {/* Heading */}

            <h2
                className="
                    mt-8

                    text-4xl
                    sm:text-5xl
                    lg:text-6xl

                    font-black
                    leading-tight

                    text-slate-900
                "
            >

                Still Have

                <span
                    className="
                        block

                        bg-[linear-gradient(90deg,#2563EB,#06B6D4,#2563EB)]
                        bg-[length:250%_250%]

                        bg-clip-text
                        text-transparent

                        animate-gradient-shift
                    "
                >

                    Questions?

                </span>

            </h2>

            {/* Description */}

            <p
                className="
                    mt-6

                    text-base
                    sm:text-lg

                    leading-7
                    sm:leading-8

                    text-slate-600
                "
            >

                We've answered the most common questions about
                biomedical equipment servicing, preventive
                maintenance, repairs, calibration, and technical
                support to help you make an informed decision.

            </p>

            {/* Small Support Card */}

            <div
                className="
                    group

                    mt-10

                    rounded-3xl

                    border
                    border-slate-200

                    bg-white

                    p-5
                    sm:p-6

                    text-left

                    shadow-[0_20px_50px_rgba(15,23,42,0.06)]

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center

                            rounded-2xl

                            bg-gradient-to-br
                            from-blue-600
                            to-cyan-500

                            text-2xl
                            text-white
                        "
                    >

                        <FiMessageCircle />

                    </div>

                    <div>

                        <h4
                            className="
                                text-lg
                                font-bold
                                text-slate-900
                            "
                        >

                            Still need help?

                        </h4>

                        <p
                            className="
                                mt-1
                                text-slate-600
                            "
                        >

                            Our biomedical experts are ready to
                            assist you.

                        </p>

                    </div>

                </div>

                <a
                    href="#contact"
                    className="
                        mt-6

                        inline-flex
                        items-center
                        gap-2

                        font-semibold
                        text-blue-600

                        transition-all
                        duration-300

                        hover:gap-3
                    "
                >

                    Contact Our Team

                    <FiArrowRight />

                </a>

            </div>

        </div>

    );

};

export default FAQHeader;