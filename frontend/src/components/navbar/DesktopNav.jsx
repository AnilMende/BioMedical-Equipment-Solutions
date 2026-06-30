import { motion } from "framer-motion";
import navbarData from "../../data/navbarData.js";
import NavLink from "./NavLink.jsx";

const DesktopNav = ({
    activeSection,
    onNavigate,
}) => {

    return (

        <nav
            className="
                hidden
                lg:flex
                items-center
                gap-8
            "
        >

            {navbarData.map((link) => {

                const isActive =
                    activeSection === link.href.replace("#", "");

                return (

                    <div
                        key={link.id}
                        className="relative"
                    >

                        <NavLink
                            link={link}
                            activeSection={activeSection}
                            onNavigate={onNavigate}
                        />

                        {isActive && (

                            <motion.div

                                layoutId="navbar-indicator"

                                className="
                                    absolute
                                    -bottom-1
                                    left-0

                                    h-[3px]
                                    w-full

                                    rounded-full

                                    bg-gradient-to-r
                                    from-blue-600
                                    to-cyan-500
                                "

                                transition={{
                                    type: "spring",
                                    stiffness: 450,
                                    damping: 35,
                                }}

                            />

                        )}

                    </div>

                );

            })}

        </nav>

    );

};

export default DesktopNav;