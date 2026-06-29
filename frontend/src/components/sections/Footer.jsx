import Container from "../common/Container.jsx";

import FooterBrand from "../footer/FooterBrand.jsx";
import FooterLinks from "../footer/FooterLinks.jsx";
import FooterServices from "../footer/FooterServices.jsx";
import FooterContact from "../footer/FooterContact.jsx";
import FooterSocials from "../footer/FooterSocials.jsx";
import FooterBottom from "../footer/FooterBottom.jsx";

import useInView from "../../hooks/useInView.js";

const Footer = () => {

    const { ref, isVisible } = useInView({ threshold: 0.15, once: true });

    return (

        <footer
            className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-slate-900
                via-slate-950
                to-slate-950
                text-white
            "
        >
            {/* Contact → Footer Transition */}

            <div
                className="
                absolute
                top-0
                left-1/2
                h-32
                w-[70%]
                -translate-x-1/2
                bg-gradient-to-b
                from-cyan-400/10
                via-blue-500/5
                to-transparent
                blur-3xl
                pointer-events-none"
            />

            {/* ================= Background ================= */}

            {/* Top Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-1/2
                    h-[420px]
                    w-[420px]
                    -translate-x-1/2
                    rounded-full
                    bg-blue-600/10
                    blur-3xl
                "
            />

            {/* Bottom Right Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-44
                    -right-44
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                "
            />

            {/* ================= Ambient Background ================= */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* Glow Orb */}

                <div
                    className="absolute left-[12%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/5
                    blur-3xl animate-footer-float"
                />

                {/* Glow Orb */}

                <div
                    className="absolute right-[8%] bottom-[15%] h-36 w-36 rounded-full bg-blue-500/5
                     blur-3xl animate-footer-float"
                    style={{
                        animationDuration: "24s",
                        animationDelay: "2s",
                    }}
                />

                {/* Dot */}

                <div
                    className="absolute left-[18%] top-[65%] h-2 w-2 rounded-full bg-cyan-300/30
                    animate-footer-float"
                    style={{
                        animationDuration: "16s",
                    }}
                />

                {/* Dot */}

                <div
                    className="absolute right-[25%] top-[28%] h-1.5 w-1.5 rounded-full bg-blue-300/30
                     animate-footer-float"
                    style={{
                        animationDelay: "3s",
                        animationDuration: "20s",
                    }}
                />

                {/* Ring */}

                <div
                    className="absolute left-[42%] top-[22%] h-5 w-5 rounded-full border
                     border-cyan-400/15 animate-footer-float"
                    style={{
                        animationDuration: "22s",
                    }}
                />

                {/* Ring */}

                <div
                    className="absolute right-[12%]  bottom-[35%] h-6 w-6 rounded-full border
                     border-blue-400/15 animate-footer-float "
                    style={{
                        animationDelay: "4s",
                        animationDuration: "18s",
                    }}
                />

                {/* Sparkle */}

                <div
                    className="absolute left-[60%] top-[18%] text-cyan-300/40 text-sm animate-footer-twinkle"
                >
                    ✦
                </div>

                {/* Sparkle */}

                <div
                    className="absolute left-[72%] bottom-[20%] text-blue-300/40 text-xs animate-footer-twinkle"
                    style={{
                        animationDelay: "2s",
                    }}
                >
                    ✦
                </div>

            </div>

            {/* Grid Pattern */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.025]
                    [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
                    [background-size:48px_48px]
                    [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
                "
            />

            {/* ================= Content ================= */}

            <Container className="relative z-10 py-24">

                {/* Main Footer */}

                <div
                    ref={ref}
                    className="
                        grid
                        gap-16
                        md:grid-cols-2
                        xl:grid-cols-[1.5fr_1fr_1.2fr_1.2fr_1fr]
                    "
                >
                    {/* Footer Brand */}
                    <div
                        className={`
                            transition-all
                            duration-700
                            ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }
                        `}
                    >

                        <FooterBrand />

                    </div>

                    {/* Footer Links */}
                    <div
                        className={`
                            transition-all
                            duration-700
                            ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }
                        `}
                        style={{
                            transitionDelay: "120ms",
                        }}
                    >

                        <FooterLinks />

                    </div>

                    {/* Footer Services */}
                    <div
                        className={`
                            transition-all
                            duration-700
                            ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }
                        `}
                        style={{
                            transitionDelay: "240ms",
                        }}
                    >

                        <FooterServices />

                    </div>

                    {/* Footer Contact */}
                    <div
                        className={`
                            transition-all
                            duration-700
                            ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }
                        `}
                        style={{
                            transitionDelay: "360ms",
                        }}
                    >

                        <FooterContact />

                    </div>

                    {/* Footer Socials */}
                    <div
                        className={`
                            transition-all
                            duration-700
                            ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }
                        `}
                        style={{
                            transitionDelay: "480ms",
                        }}
                    >

                        <FooterSocials />

                    </div>

                </div>

                {/* Bottom */}
                <div
                    className={`
                        transition-all
                        duration-700
                        ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }
                    `}
                    style={{
                        transitionDelay: "600ms",
                    }}
                >

                    <FooterBottom />

                </div>

            </Container>

        </footer>

    );

};

export default Footer;