import { FiArrowRight } from "react-icons/fi";

const links = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Why Choose Us",
        href: "#why-us",
    },
    {
        label: "Process",
        href: "#process",
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const FooterLinks = () => {

    return (

        <div>

            {/* Heading */}

            <h3
                className="
                    text-lg
                    font-bold
                    text-white
                "
            >
                Quick Links
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

            {/* Navigation */}

            <ul className="mt-8 space-y-5">

                {links.map((link) => (

                    <li key={link.href}>

                        <a
                            href={link.href}
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                                text-slate-400
                                transition-all
                                duration-300
                                hover:text-white
                            "
                        >

                            <FiArrowRight
                                size={15}
                                className="
                                    -translate-x-1
                                    opacity-0
                                    transition-all
                                    duration-300
                                    group-hover:translate-x-0
                                    group-hover:opacity-100
                                    text-blue-400
                                "
                            />

                            <span
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            >
                                {link.label}
                            </span>

                        </a>

                    </li>

                ))}

            </ul>

        </div>

    );

};

export default FooterLinks;