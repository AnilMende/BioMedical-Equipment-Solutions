import {
    FiShield,
    FiUsers,
    FiClock,
    FiAward,
} from "react-icons/fi";

const trustItems = [
    {
        icon: <FiShield />,
        title: "Trusted by Hospitals & Clinics",
        subtitle: "Hospitals & Clinics",
    },
    {
        icon: <FiUsers />,
        title: "Expert Biomedical Engineers",
        subtitle: "Engineers",
    },
    {
        icon: <FiClock />,
        title: "Quick Response Time",
        subtitle: "Time",
    },
    {
        icon: <FiAward />,
        title: "Quality You Can Rely On",
        subtitle: "Rely On",
    },
];

const TrustStrip = () => {
    return (
        <div
            className="
            mt-10
            bg-white
            border
            border-slate-100
            rounded-3xl
            shadow-lg
            overflow-hidden
            "
        >
            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                "
            >
                {trustItems.map((item, index) => (
                    <div
                        key={index}
                        className="
                        flex
                        items-center
                        gap-4
                        px-6
                        py-6
                        lg:py-5
                        relative
                        "
                    >
                        {/* Divider */}
                        {index !== trustItems.length - 1 && (
                            <div
                                className="
                                hidden
                                lg:block
                                absolute
                                right-0
                                top-1/2
                                -translate-y-1/2
                                h-10
                                w-px
                                bg-slate-200
                                "
                            />
                        )}

                        {/* Icon */}
                        <div
                            className="w-14 h-14 flex items-center justify-center rounded-full
                            text-secondary text-3xl text-blue-700
                            "
                        >
                            {item.icon}
                        </div>

                        {/* Text */}
                        <div>
                            <p
                                className="text-primary font-semibold text-base leading-5"
                            >
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustStrip;