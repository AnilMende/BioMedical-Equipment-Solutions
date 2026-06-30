

const FloatingCard = ({
    icon,
    title,
    className,
}) => {

    return (

        <div
            className={`
                group

                absolute
                z-20

                flex
                items-center
                gap-4

                rounded-3xl

                border
                border-white/60

                bg-white/80
                backdrop-blur-xl

                px-5
                py-4

                shadow-[0_20px_45px_rgba(15,23,42,0.08)]

                transition-all
                duration-500

                hover:scale-105
                hover:shadow-[0_30px_60px_rgba(15,23,42,0.15)]

                animate-[float_5s_ease-in-out_infinite]

                ${className}
            `}
        >

            <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500

                    text-white

                    transition-transform
                    duration-500

                    group-hover:scale-110
                    group-hover:rotate-6
                "
            >

                {icon}

            </div>

            <div>

                <h4 className="font-bold text-slate-900">

                    {title}

                </h4>

            </div>

        </div>

    );

};

export default FloatingCard;