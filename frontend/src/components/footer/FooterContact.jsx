import {
    FiPhone,
    FiMapPin,
    FiMessageCircle,
    FiInstagram,
} from "react-icons/fi";

import { contactData } from "../../data/contactData.js";

const FooterContact = () => {

    return (

        <div>

            {/* Heading */}

            <h3 className="text-lg font-bold text-white">

                Contact

            </h3>

            {/* Accent */}

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

            {/* Contact Items */}

            <div className="mt-8 space-y-5">

                {contactData.map((item) => {

                    const Icon = item.icon;

                    return (

                        <a
                            key={item.title}
                            href={item.href}
                            target={
                                item.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="
                                group
                                flex
                                items-start
                                gap-4
                                transition-all
                                duration-300
                                hover:translate-x-1
                            "
                        >

                            {/* Icon */}

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    flex-shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-slate-800
                                    transition-all
                                    duration-300
                                    group-hover:bg-blue-600
                                    group-hover:scale-105
                                "
                            >

                                <Icon
                                    size={18}
                                    className="
                                        text-blue-300
                                        transition-colors
                                        duration-300
                                        group-hover:text-white
                                    "
                                />

                            </div>

                            {/* Text */}

                            <div>

                                <p
                                    className="
                                        text-sm
                                        font-semibold
                                        text-slate-200
                                    "
                                >
                                    {item.title}
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-slate-400
                                        transition-colors
                                        duration-300
                                        group-hover:text-white
                                    "
                                >
                                    {item.value}
                                </p>

                            </div>

                        </a>

                    );

                })}

            </div>

        </div>

    );

};

export default FooterContact;