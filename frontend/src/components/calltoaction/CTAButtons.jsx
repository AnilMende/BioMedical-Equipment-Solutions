import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import useInView from "../../hooks/useInView";

const CTAButtons = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.2,
        once: true,
    });

    return (

        <div
            ref={ref}
            className="
            mt-16
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
            "
        >

            {/* ================= Primary CTA ================= */}

            <a
                href="#contact"
                className={`
                    group
                    relative
                    overflow-hidden
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-9
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    via-blue-500
                    to-cyan-500
                    text-white
                    font-semibold
                    text-lg
                    shadow-[0_20px_45px_rgba(37,99,235,0.35)]
                    transition-all
                    duration-700
                    animate-cta-glow

                    ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }

                    hover:-translate-y-1
                    hover:shadow-[0_25px_60px_rgba(37,99,235,0.5)]
                `}
                style={{
                    transitionDelay: "0ms",
                }}
            >

                {/* Hover Sweep */}

                <span
                    className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                    "
                />

                <span className="relative z-10">
                    Request Service
                </span>

                <FiArrowRight
                    className="
                    relative
                    z-10
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    "
                />

            </a>

            {/* ================= Secondary CTA ================= */}

            <a
                href="tel:+918919977474"
                className={`
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-9
                    py-5
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/5
                    backdrop-blur-xl
                    text-white
                    font-semibold
                    text-lg
                    transition-all
                    duration-700

                    ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }

                    hover:bg-white/10
                    hover:border-cyan-300/40
                    hover:-translate-y-1
                `}
                style={{
                    transitionDelay: "150ms",
                }}
            >

                {/* Phone Icon */}

                <div
                    className="
                    w-11
                    h-11
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:bg-cyan-400
                    group-hover:text-slate-900
                    "
                >

                    <FiPhoneCall />

                </div>

                <span>

                    Call Now

                </span>

            </a>

        </div>

    );

};

export default CTAButtons;