import { trustHighlights } from "../../data/ctaData.js";
import useInView from "../../hooks/useInView.js";

const TrustHighlights = () => {

    const { ref, isVisible } = useInView({ once : false });


    return (

        <div
            ref={ref}
            className="
            mt-14
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-5
            "
        >

            {trustHighlights.map((item, index) => {

                const Icon = item.icon;

                return (

                    <div
                        key={index}
                        className={`
                            group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5
                            backdrop-blur-xl px-6 py-7 transition-all duration-700 cursor-pointer
                            ${
                                isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }
                             hover:-translate-y-2  hover:border-cyan-300/30 hover:bg-white/10
                        `}
                         style={{
                             transitionDelay: `${index * 150}ms`
                            }}
                    >

                        {/* Glow */}

                        <div
                            className="
                            absolute
                            -right-10
                            -top-10
                            w-24
                            h-24
                            rounded-full
                            bg-cyan-400/10
                            blur-3xl
                            opacity-0
                            transition-all
                            duration-500
                            group-hover:opacity-100
                            "
                        />

                        {/* Icon */}

                        <div
                            className="
                            relative
                            w-14
                            h-14
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-500
                            to-cyan-400
                            flex
                            items-center
                            justify-center
                            text-white
                            text-2xl
                            shadow-lg
                            transition-transform
                            duration-500
                            group-hover:scale-110
                            group-hover:rotate-6
                            "
                        >

                            <Icon />

                        </div>

                        {/* Text */}

                        <h4
                            className="
                            mt-6
                            text-white
                            font-bold
                            text-lg
                            "
                        >
                            {item.title}
                        </h4>

                        <p
                            className="
                            text-slate-300
                            mt-1
                            "
                        >
                            {item.subtitle}
                        </p>

                    </div>

                );

            })}

        </div>

    );

};

export default TrustHighlights;