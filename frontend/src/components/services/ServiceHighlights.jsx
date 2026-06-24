import {
    FiTool,
    FiPackage,
    FiUsers,
    FiHeadphones,
} from "react-icons/fi";

const highlights = [
    {
        icon: FiTool,
        title: "Board-Level Repairs",
    },
    {
        icon: FiPackage,
        title: "Genuine Spare Parts",
    },
    {
        icon: FiUsers,
        title: "Experienced Engineers",
    },
    {
        icon: FiHeadphones,
        title: "Service Support",
    },
];

const ServiceHighlights = () => {

    return (
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {
                highlights.map((item, index) => {

                    const Icon = item.icon;

                    return (
                        <div key={index} className="group bg-white rounded-3xl p-6 shadow-md border border-slate-300
                        flex items-center gap-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                <Icon className="text-secondary text-2xl text-blue-600"/>
                            </div>

                            <h4 className="font-semibold text-primary leading-snug">
                                {item.title}
                            </h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServiceHighlights;