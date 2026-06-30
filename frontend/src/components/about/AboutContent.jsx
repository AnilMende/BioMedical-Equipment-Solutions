import aboutData from "../../data/aboutData.js";
import FeatureList from "./FeatureList.jsx";
import AboutImage from "./AboutImage.jsx";
import StatsGrid from "./StatsGrid.jsx";
import useInView from "../../hooks/useInView.js";
import { FiArrowRight, FiMessageSquare,} from "react-icons/fi";

const AboutContent = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.15,
        once: true,
    });

    return (

        <div
            ref={ref}
            className="
                mt-20
                grid
                items-center
                gap-16
                lg:grid-cols-2
            "
        >

            {/* Left Content */}

            <div
                className={`
                    transition-all
                    duration-1000

                    ${isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }
                `}
            >

                <p
                    className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-blue-600
                        text-center lg:text-left
                    "
                >
                    Who We Are
                </p>

                <h3
                    className="
                        mt-4
                        text-4xl
                        font-black
                        leading-tight
                        text-slate-900
                        text-center lg:text-left
                    "
                >
                    Delivering Reliable Biomedical Solutions With Precision
                </h3>

                <p
                    className="
                        mt-6
                        text-lg
                        leading-8
                        text-slate-600
                        text-center lg:text-left"
                >
                    {aboutData.description}
                </p>

                {/* Mission Statement */}

                <div className="relative mt-10 overflow-hidden rounded-3xl border border-blue-100 
                     bg-gradient-to-r  from-blue-50 via-white to-cyan-50 p-5 sm:p-7">

                    {/* Decorative Glow */}

                    <div
                        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/20  blur-3xl"
                    />

                    <div className="relative">

                        {/* Quote Icon */}

                        <div
                            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl 
                            bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg"
                        >

                            <FiMessageSquare className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />

                        </div>

                        {/* Quote */}

                        <p
                            className="mt-5 text-base italic leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8"
                        >
                            "{aboutData.mission}"
                        </p>

                        {/* Signature */}

                        <div className="mt-5 sm:mt-6 flex items-center gap-3">

                            <div className="h-px w-12 bg-blue-300" />

                            <span
                                className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600"
                            >
                                Our Commitment to Healthcare Excellence
                            </span>

                        </div>

                    </div>

                </div>

                <FeatureList />

                <a
                    href={aboutData.buttonLink}
                    className="
                        group
                        mt-10
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        px-7
                        py-4
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-xl
                        w-full sm:w-auto
                    "
                >
                    {aboutData.buttonText}

                    <FiArrowRight
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                    />
                </a>

            </div>

            {/* Right Content */}

            <div
                className={`
                    transition-all
                    duration-1000
                    delay-200

                    ${isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }
                `}
            >

                <AboutImage />

                <StatsGrid />

            </div>

        </div>

    );

};

export default AboutContent;