import { FiArrowUp, FiHeart } from "react-icons/fi";

const FooterBottom = () => {

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    return (

        <div className="mt-20">

            {/* Premium Divider */}

            <div className="relative mb-10">

                {/* Base Line */}

                <div className="h-px bg-slate-800" />

                {/* Gradient Line */}

                <div
                    className="
                absolute
                left-1/2
                top-0
                h-px
                w-56
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
            "
                />

                {/* Center Glow */}

                <div
                    className="
                absolute
                left-1/2
                top-1/2
                h-8
                w-8
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-500/10
                blur-xl
            "
                />

                {/* Center Orb */}

                <div
                    className="
                absolute
                left-1/2
                top-1/2
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-cyan-300/60
                bg-gradient-to-br
                from-cyan-300
                to-blue-500
                shadow-[0_0_18px_rgba(34,211,238,0.55)]
            "
                />

            </div>

            {/* Footer Content */}
            <div
                className="
                    flex
                    flex-col
                    gap-8
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >

                {/* Left */}

                <div>

                    <p className="text-sm text-slate-400">

                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-slate-200">
                            Universal Bio-Meds
                        </span>

                        . All rights reserved.

                    </p>

                    <p
                        className="
                            mt-3
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-slate-500
                        "
                    >

                        Built with

                        <FiHeart
                            className="text-red-500"
                            size={14}
                        />

                        for better healthcare.

                    </p>

                </div>

                {/* Right */}

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-6
                    "
                >

                    <a
                        href="#"
                        className="
                            text-sm
                            text-slate-400
                            transition-colors
                            duration-300
                            hover:text-white
                        "
                    >
                        Privacy Policy
                    </a>

                    <a
                        href="#"
                        className="
                            text-sm
                            text-slate-400
                            transition-colors
                            duration-300
                            hover:text-white
                        "
                    >
                        Terms & Conditions
                    </a>

                    <button
                        onClick={scrollToTop}
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-slate-700
                            bg-slate-900
                            px-5
                            py-2.5
                            text-sm
                            text-slate-300
                            transition-all
                            duration-300
                            hover:border-blue-500
                            hover:bg-blue-600
                            hover:text-white
                        "
                    >

                        <FiArrowUp
                            size={16}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-y-1
                            "
                        />

                        Back to Top

                    </button>

                </div>

            </div>

        </div>

    );

};

export default FooterBottom;