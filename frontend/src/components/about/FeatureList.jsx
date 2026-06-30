import featureData from "../../data/featureData.js";
import useInView from "../../hooks/useInView.js";
import { FiArrowUpRight } from "react-icons/fi";

const FeatureList = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.2,
        once: true,
    });

    return (

        <div
            ref={ref}
            className="mt-12 space-y-6"
        >

            {featureData.map((feature, index) => {

                const Icon = feature.icon;

                return (

                    <div
                        key={feature.id}
                        className={`
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]

                            ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }
                        `}
                        style={{
                            transitionDelay: `${index * 150}ms`,
                        }}
                    >

                        {/* Left Accent */}

                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-1
                                origin-top
                                scale-y-0
                                bg-gradient-to-b
                                from-blue-600
                                to-cyan-500
                                transition-transform
                                duration-500
                                group-hover:scale-y-100
                            "
                        />

                        <div className="flex items-start gap-5">

                            {/* Icon */}

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-blue-600
                                    to-cyan-500
                                    text-white
                                    shadow-lg
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    group-hover:rotate-6
                                "
                            >
                                <Icon size={24} />
                            </div>

                            {/* Content */}

                            <div className="flex-1">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-xl font-bold text-slate-900">

                                        {feature.title}

                                    </h3>

                                    <FiArrowUpRight
                                        className="
                                            text-slate-400
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                            group-hover:text-blue-600
                                        "
                                        size={20}
                                    />

                                </div>

                                <p
                                    className="
                                        mt-3
                                        leading-7
                                        text-slate-600
                                    "
                                >
                                    {feature.description}
                                </p>

                            </div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

};

export default FeatureList;