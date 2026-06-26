import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Container from "../common/Container.jsx";
import { FiPhone } from "react-icons/fi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Equipment", href: "#equipment" },
    { name : "WhyUs", href : "#why-us"},
    { name: "Contact", href: "#contact" }
];

const Navabr = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-lg shadow-md"
                    : "bg-transparent"
                    }`}
            >
                <Container>
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <div className="flex flex-col">
                            <h1 className="text-xl font-extrabold text-primary">
                                Universal Bio-Meds
                            </h1>

                            <span className="text-xs text-muted hidden sm:block">
                                Biomedical Equipment Solutions
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-700 font-medium transition hover:text-secondary"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <a
                            href="tel:8919977474"
                            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600
                            bg-secondary text-white font-semibold shadow-md transition hover:scale-105"
                        >
                            <FiPhone size={20} /> Call Now
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden text-primary"
                        >
                            <HiOutlineMenuAlt3 size={30} />
                        </button>
                    </div>
                </Container>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white z-[60] transition-all ease-in-out duration-300 
                    lg:hidden ${mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
            >
                <div className="flex justify-between items-center px-6 h-20 border-b">

                    <h2 className="text-xl font-extrabold text-primary">
                        Universal Bio-Meds
                    </h2>

                    <button
                        className="p-2 rounded-full transition-all duration-300 hover:bg-slate-100"
                        onClick={() => setMobileOpen(false)}>
                        <HiOutlineX size={30} />
                    </button>

                </div>

                <div className="flex flex-col px-6 py-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="group py-4 text-xl font-medium border-b border-slate-100 
                            transition-all duration-300 hover:text-secondary hover:translate-x-2"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="tel:8919977474"
                        className="mt-8 w-full flex items-center justify-center gap-2 bg-secondary text-white 
                        text-center py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 bg-blue-700 
                        hover:bg-blue-500 active:scale-95"
                    >
                        <FiPhone size={20} /> Call Now
                    </a>
                </div>
            </div>
        </>
    )
}
export default Navabr;