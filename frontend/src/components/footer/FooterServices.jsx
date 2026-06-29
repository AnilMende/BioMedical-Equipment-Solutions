import {
    FiTool,
    FiShield,
    FiSettings,
    FiActivity,
    FiClipboard,
    FiHeadphones,
} from "react-icons/fi";

const services = [
    {
        title: "Equipment Repair",
        icon: FiTool,
    },
    {
        title: "Preventive Maintenance",
        icon: FiShield,
    },
    {
        title: "Installation & Commissioning",
        icon: FiSettings,
    },
    {
        title: "Calibration & Testing",
        icon: FiActivity,
    },
    {
        title: "Annual Maintenance Contracts",
        icon: FiClipboard,
    },
    {
        title: "Technical Support",
        icon: FiHeadphones,
    },
];

const FooterServices = () => {

    return (

        <div>

            {/* Heading */}

            <h3 className="text-lg font-bold text-white">
                Our Services
            </h3>

            {/* Accent Line */}

            <div
                className="
                    mt-3
                    h-1
                    w-14
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                "
            />

            {/* Service List */}

            <ul className="mt-8 space-y-5">

                {services.map((service) => {

                    const Icon = service.icon;

                    return (

                        <li key={service.title}>

                            <div
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    text-slate-400
                                    transition-all
                                    duration-300
                                    hover:text-white
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-slate-800
                                        transition-all
                                        duration-300
                                        group-hover:bg-blue-600
                                        group-hover:scale-105
                                    "
                                >
                                    <Icon
                                        size={16}
                                        className="text-blue-300 group-hover:text-white"
                                    />
                                </div>

                                <span
                                    className="
                                        text-sm
                                        leading-6
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    {service.title}
                                </span>

                            </div>

                        </li>

                    );

                })}

            </ul>

        </div>

    );

};

export default FooterServices;