import { FiUsers } from "react-icons/fi";
import aboutData from "../../data/aboutData.js";
import useInView from "../../hooks/useInView.js";

const AboutHeader = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.2,
        once: true,
    });

    return (

        <div
            ref={ref}
            className={`
                mx-auto
                max-w-4xl
                text-center
                transition-all
                duration-1000

                ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                }
            `}
        >

            {/* Section Badge */}

            <div
                className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-full
                    border
                    border-blue-100
                    bg-blue-50
                    px-5
                    py-3
                "
            >

                {/* Badge Shimmer */}

                <span
                    className="
                        absolute
                        inset-y-0
                        -left-16
                        w-12
                        rotate-12
                        bg-white/50
                        blur-md
                        animate-badge-shimmer
                    "
                />

                {/* Icon */}

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
                    <FiUsers size={18} />
                </div>

                <span className="font-semibold tracking-wide text-blue-700">
                    {aboutData.badge}
                </span>

            </div>

            {/* Heading */}

            <h2
                className="
                    mt-8
                    text-5xl
                    font-black
                    leading-tight
                    text-slate-900
                    lg:text-6xl
                "
            >

                {aboutData.title}

                <span
                    className="
                        mt-2
                        block
                        bg-[linear-gradient(90deg,#2563EB,#06B6D4,#2563EB)]
                        bg-[length:250%_250%]
                        bg-clip-text
                        text-transparent
                        animate-gradient-shift
                    "
                >
                    {aboutData.highlight}
                </span>

            </h2>

            {/* Description */}

            <p
                className="
                    mx-auto
                    mt-8
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-600
                "
            >
                {aboutData.info}
            </p>

        </div>

    );

};

export default AboutHeader;