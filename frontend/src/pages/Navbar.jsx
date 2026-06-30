import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Container from "../components/common/Container.jsx";

import Logo from "../components/navbar/Logo.jsx";
import DesktopNav from "../components/navbar/DesktopNav.jsx";
import MobileMenu from "../components/navbar/MobileMenu.jsx";
import CTAButton from "../components/navbar/CTAButton.jsx";
import useActiveSection from "../hooks/useActiveSection.js";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Temporary active section while smooth scrolling
    const [manualActive, setManualActive] = useState(null);

    // Active section detected from scrolling
    const scrollActiveSection = useActiveSection();

    // Display manual selection immediately, otherwise use scroll state
    const activeSection = manualActive ?? scrollActiveSection;

    /* ---------------- Navigation ---------------- */

    // const handleNavigate = (href) => {

    //     const section = document.querySelector(href);

    //     if (!section) return;

    //     const id = href.replace("#", "");

    //     // Highlight immediately
    //     setManualActive(id);

    //     const navbarHeight = 90;

    //     window.scrollTo({

    //         top: section.offsetTop - navbarHeight,

    //         behavior: "smooth",

    //     });

    //     setMobileOpen(false);

    // };
    const handleNavigate = (href) => {

        const section = document.querySelector(href);

        if (!section) return;

        setManualActive(href.replace("#", ""));

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setMobileOpen(false);

    };

    /* ---------------- Navbar Background ---------------- */

    useEffect(() => {

        const handleScroll = () => {

            setIsScrolled(window.scrollY > 40);

        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    /* ---------------- Synchronize Manual Active ---------------- */

    useEffect(() => {

        if (manualActive === scrollActiveSection) {

            setManualActive(null);

        }

    }, [scrollActiveSection, manualActive]);

    /* ---------------- Prevent Body Scroll ---------------- */

    useEffect(() => {

        document.body.style.overflow = mobileOpen
            ? "hidden"
            : "auto";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [mobileOpen]);

    return (

        <>

            <header
                className={`
                    fixed
                    top-0
                    left-0
                    z-50
                    w-full
                    transition-all
                    duration-500

                    ${isScrolled
                        ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
                        : "bg-transparent"
                    }
                `}
            >

                <Container>

                    <div
                        className="
                            flex
                            h-20
                            items-center
                            justify-between
                        "
                    >

                        <Logo />

                        <DesktopNav
                            activeSection={activeSection}
                            onNavigate={handleNavigate}
                        />

                        <CTAButton />

                        <button
                            onClick={() => setMobileOpen(true)}
                            className="
                                lg:hidden
                                rounded-xl
                                p-2
                                transition-all
                                duration-300
                                hover:bg-blue-50
                            "
                        >

                            <HiOutlineMenuAlt3
                                size={30}
                                className="text-blue-700"
                            />

                        </button>

                    </div>

                </Container>

            </header>

            <MobileMenu
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                activeSection={activeSection}
                onNavigate={handleNavigate}
            />

        </>

    );

};

export default Navbar;