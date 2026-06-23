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
        value: "Board Level",
        label: "Repairs",
    },
    {
        icon: <FiShield />,
        value: "100%",
        label: "Genuine Parts",
    },
];

const HeroStats = () => {
    return (
        <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white rounded-3xl border border-slate-100 shadow-md px-4 py-6 flex flex-col
                    items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                    {/* Icon */}
                    <div
                        className="w-14 h-14 flex items-center justify-center rounded-full 
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