import {
    HiOutlineX,
} from "react-icons/hi";

import {
    FiArrowRight,
} from "react-icons/fi";

import navbarData from "../../data/navbarData.js";

import Logo from "./Logo.jsx";
import NavLink from "./NavLink.jsx";
import CTAButton from "./CTAButton.jsx";

const MobileMenu = ({
    mobileOpen,
    setMobileOpen,
    activeSection,
    onNavigate
}) => {

    return (

        <div
            className={`
                fixed
                inset-0
                z-[60]

                lg:hidden

                transition-all
                duration-500

                ${mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0 pointer-events-none"
                }
            `}
        >

            {/* Background */}

            <div
                className="
                    absolute
                    inset-0

                    bg-white/95
                    backdrop-blur-xl
                "
            />

            {/* Content */}

            <div
                className="
                    relative

                    flex
                    h-full
                    flex-col
                "
            >

                {/* ================= Header ================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-between

                        border-b
                        border-slate-200

                        px-6
                        py-5
                    "
                >

                    <Logo />

                    <button

                        onClick={() => setMobileOpen(false)}

                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center

                            rounded-full

                            border
                            border-slate-200

                            bg-white

                            transition-all
                            duration-300

                            hover:bg-slate-50
                            hover:rotate-90
                        "
                    >

                        <HiOutlineX size={24} />

                    </button>

                </div>

                {/* ================= Links ================= */}

                <div
                    className="
                        flex-1

                        overflow-y-auto

                        px-6
                        pt-8
                    "
                >

                    <nav
                        className="
                            flex
                            flex-col
                            gap-2
                        "
                    >

                        {navbarData.map((link, index) => (

                            <div

                                key={link.id}

                                style={{
                                    transitionDelay: `${index * 70}ms`,
                                }}

                                className={`
                                    transition-all
                                    duration-500

                                    ${mobileOpen
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-10 opacity-0"
                                    }
                                `}
                            >

                                <a

                                    href={link.href}

                                    onClick={() => setMobileOpen(false)}

                                    className={`
                                        group

                                        flex
                                        items-center
                                        justify-between

                                        rounded-2xl

                                        px-5
                                        py-4

                                        font-semibold
                                        text-lg

                                        transition-all
                                        duration-300

                                        ${activeSection ===
                                            link.href.replace("#", "")

                                            ? "bg-blue-50 text-blue-600"

                                            : "text-slate-700 hover:bg-slate-50"
                                        }
                                    `}
                                >

                                    {/* <NavLink

                                        link={link}

                                        activeSection={activeSection}

                                    /> */}
                                    <NavLink
                                        link={link}
                                        activeSection={activeSection}
                                        onNavigate={onNavigate}
                                        onClick={() => setMobileOpen(false)}
                                        className="
                                        w-full
                                        justify-between
                                        rounded-2xl
                                        px-5
                                        py-4
                                        text-lg
                                        hover:bg-slate-50
                                        "
                                    />

                                    <FiArrowRight

                                        className="
                                            transition-transform
                                            duration-300

                                            group-hover:translate-x-1
                                        "

                                        size={18}

                                    />

                                </a>

                            </div>

                        ))}

                    </nav>

                </div>

                {/* ================= Bottom ================= */}

                <div
                    className="
                        border-t
                        border-slate-200

                        p-6
                    "
                >

                    <a

                        href="tel:8919977474"

                        className="
                            flex
                            w-full
                            items-center
                            justify-center

                            rounded-2xl

                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-500

                            px-6
                            py-4

                            font-semibold
                            text-white

                            shadow-lg

                            transition-all
                            duration-300

                            hover:shadow-xl
                            active:scale-95
                        "
                    >

                        Call Now

                    </a>

                </div>

            </div>

        </div>

    );

};

export default MobileMenu;