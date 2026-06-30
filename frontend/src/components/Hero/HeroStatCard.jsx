const accentStyles = {

    blue: {
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
        border: "hover:border-blue-200",
        glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]",
        accent: "from-blue-600 to-cyan-400",
    },

    green: {
        iconBg: "bg-green-100",
        iconText: "text-green-600",
        border: "hover:border-green-200",
        glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]",
        accent: "from-green-500 to-emerald-400",
    },

    cyan: {
        iconBg: "bg-cyan-100",
        iconText: "text-cyan-600",
        border: "hover:border-cyan-200",
        glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
        accent: "from-cyan-500 to-sky-400",
    },

    purple: {
        iconBg: "bg-violet-100",
        iconText: "text-violet-600",
        border: "hover:border-violet-200",
        glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]",
        accent: "from-violet-500 to-fuchsia-400",
    },

};

const HeroStatCard = ({ stat }) => {

    const Icon = stat.icon;
    const style = accentStyles[stat.accent];

    return (

        <div
            className={`
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                px-5
                py-6
                
                transition-all
                duration-500
                hover:shadow-2xl
                hover:border-secondary/20

                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
                ${style.border}
            `}
        >

            <div
                className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    transition-all
                    duration-500

                    group-hover:scale-110

                    ${style.iconBg}
                    ${style.iconText}
                    ${style.glow}
                `}
            >

                <Icon size={26} />

            </div>

            <h3 className="mt-6 text-3xl font-black text-slate-900">

                {stat.value}

            </h3>

            <h4 className="mt-2 text-base font-semibold text-slate-800">

                {stat.title}

            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">

                {stat.description}

            </p>

            <div
                className={`
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    scale-x-0
                    origin-left
                    transition-transform
                    duration-500

                    group-hover:scale-x-100

                    bg-gradient-to-r
                    ${style.accent}
                `}
            />

        </div>

    );

};

export default HeroStatCard;