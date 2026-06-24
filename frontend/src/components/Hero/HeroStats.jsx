import {
    FiHeadphones,
    FiSettings,
    FiTool,
    FiShield,
} from "react-icons/fi";


const stats = [
    {
        icon: <FiHeadphones />,
        value: "24/7",
        label: "Support",
    },
    {
        icon: <FiSettings />,
        value: "AMC",
        label: "Services",
    },
    {
        icon: <FiTool />,
        value: "Expert",
        label: "Repairs",
    },
    {
        icon: <FiShield />,
        value: "100%",
        label: "Genuine",
    },
];

const HeroStats = () => {
    return (
        <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 items-start">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white rounded-[30px] min-h-[220px] flex flex-col
                    justify-center items-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 "
                >
                    {/* Icon */}
                    <div
                        className="w-14 h-14 mx-auto flex items-center justify-center rounded-full 
                        border-2 border-secondary text-secondary text-2xl mb-2 text-blue-700"
                    >
                        {stat.icon}
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-primary">
                            {stat.value}
                        </h3>

                        <p className="text-xl font-medium text-primary">
                            {stat.label}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default HeroStats;