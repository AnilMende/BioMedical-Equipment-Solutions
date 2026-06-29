import { FiArrowUpRight } from "react-icons/fi";

const accentStyles = {
    blue: {
        badge: "Direct Support",
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
        badgeBg: "bg-blue-50",
        badgeText: "text-blue-700",
        border: "group-hover:border-blue-300",
        glow: "group-hover:shadow-[0_0_40px_rgba(37,99,235,0.20)]",
        accent: "from-blue-600 to-cyan-400",
        hoverBg: "group-hover:from-white group-hover:to-blue-50/70",
    },

    green: {
        badge: "Instant Chat",
        iconBg: "bg-green-100",
        iconText: "text-green-600",
        badgeBg: "bg-green-50",
        badgeText: "text-green-700",
        border: "group-hover:border-green-300",
        glow: "group-hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]",
        accent: "from-green-500 to-emerald-400",
        hoverBg: "group-hover:from-white group-hover:to-green-50/70",
    },

    cyan: {
        badge: "Office Location",
        iconBg: "bg-cyan-100",
        iconText: "text-cyan-600",
        badgeBg: "bg-cyan-50",
        badgeText: "text-cyan-700",
        border: "group-hover:border-cyan-300",
        glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.20)]",
        accent: "from-cyan-500 to-sky-400",
        hoverBg: "group-hover:from-white group-hover:to-cyan-50/70",
    },

    instagram: {
        badge: "Follow Us",
        iconBg: "bg-pink-100",
        iconText: "text-pink-600",
        badgeBg: "bg-pink-50",
        badgeText: "text-pink-700",
        border: "group-hover:border-pink-300",
        glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.20)]",
        accent: "from-pink-500 via-purple-500 to-orange-400",
        hoverBg: "group-hover:from-white group-hover:to-pink-50/70",
    },
};

const ContactCard = ({
    title,
    subtitle,
    description,
    icon: Icon,
    href,
    accent = "blue",
}) => {

    const style = accentStyles[accent];

    return (

        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`
                group
                relative
                flex
                flex-col
                h-full
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-gradient-to-br
                from-white
                to-white
                ${style.hoverBg}
                px-8
                pt-8
                pb-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_70px_rgba(15,23,42,0.10)]
                ${style.border}
            `}
        >

            {/* Badge */}

            <div
                className={`
                    mb-6
                    inline-flex
                    w-fit
                    items-center
                    rounded-full
                    px-4
                    py-1.5
                    text-xs
                    font-semibold
                    tracking-wide
                    ${style.badgeBg}
                    ${style.badgeText}
                `}
            >
                {style.badge}
            </div>

            {/* Icon */}

            <div
                className={`
                    relative
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-2xl
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    ${style.iconBg}
                    ${style.iconText}
                    ${style.glow}
                `}
            >
                <Icon size={34} />
            </div>

            {/* Title */}

            <h3 className="mt-8 text-[30px] font-bold tracking-tight text-slate-900">
                {title}
            </h3>

            {/* Subtitle */}

            <p className="mt-3 text-xl font-semibold text-slate-700">
                {subtitle}
            </p>

            {/* Description */}

            <p
                className="
                    mt-6
                    flex-1
                    text-[17px]
                    leading-8
                    text-slate-500
                "
            >
                {description}
            </p>

            {/* Arrow */}

            <div
                className="
                    absolute
                    right-8
                    top-8
                    transition-all
                    duration-500
                    group-hover:translate-x-1.5
                    group-hover:-translate-y-1.5
                    group-hover:rotate-12
                "
            >
                <FiArrowUpRight
                    size={24}
                    className="
                        text-slate-400
                        transition-colors
                        duration-500
                        group-hover:text-slate-800
                    "
                />
            </div>

            {/* Bottom Accent */}

            <div
                className={`
                    absolute
                    bottom-0
                    left-0
                    h-1.5
                    w-full
                    rounded-r-full
                    scale-x-0
                    origin-left
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                    bg-gradient-to-r
                    ${style.accent}
                `}
            />

        </a>

    );

};

export default ContactCard;