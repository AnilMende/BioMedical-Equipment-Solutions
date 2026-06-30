import aboutImageData from "../../data/aboutImageData.js";
import useInView from "../../hooks/useInView.js";
import { FiShield } from "react-icons/fi";

const AboutImage = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.2,
        once: true,
    });

    return (

        <div
            ref={ref}
            className={`
                relative
                mx-auto
                w-full
                max-w-xl
                transition-all
                duration-1000

                ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
            `}
        >

            {/* ================= Background Glow ================= */}

            <div
                className="
                    absolute
                    inset-0
                    rounded-full
                    bg-cyan-400/10
                    blur-3xl
                    scale-110
                "
            />

            {/* Decorative Ring */}

            <div
                className="
                    absolute
                    -top-8
                    -right-8
                    h-32
                    w-32
                    rounded-full
                    border
                    border-cyan-200/50
                    animate-spin-slow
                "
            />

            {/* Decorative Ring */}

            <div
                className="
                    absolute
                    -bottom-10
                    -left-10
                    h-24
                    w-24
                    rounded-full
                    border
                    border-blue-200/50
                    animate-spin-slow-reverse
                "
            />

            {/* Image */}

            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_30px_70px_rgba(15,23,42,0.08)]
                "
            >

                <img
                    src={aboutImageData.image}
                    alt="Biomedical Engineers"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                    "
                />

            </div>

            {/* Floating Trust Badge */}

            <div
                className="
                    absolute
                    top-3
                    left-3

                    flex
                    items-center
                    gap-3

                    px-3
                    py-3

                    rounded-2xl

                    border
                    border-white/60

                    bg-white/85
                    backdrop-blur-xl

                    shadow-xl

                    sm:top-6 
                    sm:left-6 
                    sm:px-5 
                    sm:py-4 
                    sm:gap-4

                    animate-badge-travel
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-xl

                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500

                        text-white
                        sm:h-12
                        sm:w-12
                    "
                >

                    <FiShield className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />

                </div>

                {/* Text on Floatin Trust Badge */}
                <div>

                    <h4 className="text-sm font-bold leading-tight text-slate-900 sm:text-base">

                        {aboutImageData.badge.title}

                    </h4>

                    <p className="mt-1 text-[11px] leading-4  text-slate-600 sm:text-sm sm:leading-5">

                        {aboutImageData.badge.subtitle}

                    </p>

                </div>

            </div>

        </div>

    );

};

export default AboutImage;