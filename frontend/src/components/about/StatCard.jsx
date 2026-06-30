import AnimatedCounter from "../common/AnimatedCounter.jsx";
import useInView from "../../hooks/useInView.js";

const StatCard = ({ stat }) => {

    const { ref, isVisible } = useInView({ threshold: 0.15,once: true });

    return (

        <div
            ref={ref}
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-4
                text-3xl
                text-base
                text-xs 

                sm:p-6
                sm:text-4xl
                sm:text-lg
                sm:text-sm
                
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
            "
        >

            {/* Top Accent */}

            <div
                className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                "
            />

            {/* Number */}

            <h3
                className="
                    text-4xl
                    font-black
                    tracking-tight
                    text-blue-600
                "
            >
                <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    startAnimation={isVisible}
                />

            </h3>

            {/* Label */}

            <h4
                className="
                    mt-3
                    text-lg
                    font-semibold
                    text-slate-900
                "
            >
                {stat.label}
            </h4>

            {/* Description */}

            <p
                className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                "
            >
                {stat.description}
            </p>

        </div>

    );

};

export default StatCard;