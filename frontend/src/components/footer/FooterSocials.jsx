import { FiArrowUpRight } from "react-icons/fi";
import { socialData } from "../../data/socialData.js";

const FooterSocials = () => {

    return (

        <div>

            {/* Heading */}

            <h3 className="text-lg font-bold text-white">

                Stay Connected

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

            {/* Description */}

            <p
                className="
                    mt-8
                    text-sm
                    leading-7
                    text-slate-400
                "
            >
                Follow us for completed projects,
                biomedical service updates,
                maintenance tips and the latest news.
            </p>

            {/* Social Cards */}

            <div className="mt-8 space-y-5">

                {socialData.map((social) => {

                    const Icon = social.icon;

                    return (

                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-900/70
                                p-4
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-slate-700
                            "
                        >

                            {/* Icon */}

                            <div
                                className={`
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-gradient-to-br
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    ${social.accent.bg}
                                    ${social.accent.shadow}
                                `}
                            >

                                <Icon
                                    size={24}
                                    className="text-white"
                                />

                            </div>

                            {/* Text */}

                            <div className="flex-1">

                                <h4
                                    className="
                                        font-semibold
                                        text-white
                                    "
                                >
                                    {social.name}
                                </h4>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-slate-400
                                        transition-colors
                                        duration-300
                                        group-hover:text-slate-300
                                    "
                                >
                                    {social.username}
                                </p>

                            </div>

                            {/* Arrow */}

                            <FiArrowUpRight
                                size={20}
                                className="
                                    text-slate-500
                                    transition-all
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                    group-hover:text-white
                                "
                            />

                        </a>

                    );

                })}

            </div>

        </div>

    );

};

export default FooterSocials;