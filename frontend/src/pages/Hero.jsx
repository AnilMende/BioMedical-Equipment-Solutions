
import patientMonitor from "../assets/images/modern-patient-monitor.png";
import { FiShield } from "react-icons/fi";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { FiShoppingCart, FiTool, FiSettings, FiHeadphones } from "react-icons/fi";

import Container from "../components/common/Container.jsx";
import FloatingCard from "../components/Hero/FloatingCard.jsx";
import HeroMobileImage from "../components/Hero/HeroMobileImage.jsx";
import HeroStats from "../components/Hero/HeroStats.jsx";

const Hero = () => {
    return (
        <section
            id="home"
            className="scroll-mt-24 relative min-h-screen overflow-hidden pt-28 bg-background mb-10"
        >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full" />

            {/* Background Grid */}

            <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                    backgroundImage: `
                    linear-gradient(to right,#2563eb 1px,transparent 1px),
                    linear-gradient(to bottom,#2563eb 1px,transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">

                    {/* ================= LEFT CONTENT ================= */}
                    <div>

                        {/* Trust Badge */}
                        <div
                            className="inline-flex items-center gap-3 px-4 py-3 rounded-full
                             bg-blue-100 border  border-blue-100 shadow-sm mb-8 transition-all 
                             duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                        >
                            <div
                                className="flex items-center justify-center w-8 h-8 rounded-full 
                                bg-blue-600 text-secondary shadow-sm"
                            >
                                <FiShield className="text-lg text-white" />
                            </div>

                            <span
                                className="text-secondary font-semibold text-sm md:text-base text-blue-700"
                            >
                                Trusted Biomedical Equipment Partner
                            </span>
                        </div>

                        {/* Left Content */}
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            {/* Heading */}
                            <h2
                                className="text-4xl sm:text-5xl xl:text-5xl font-black leading-tight text-slate-900 max-w-xl"
                            >
                                One Stop Solution For
                                <br />
                                All Your Hospital Needs
                            </h2>

                            {/* Service Line */}
                            <p
                                className="mt-6 text-lg sm:text-xl lg:text-xl font-semibold text-blue-600"
                            >
                                Sales • Service • Refurbishment • Accessories
                            </p>

                            {/* Description */}
                            <p
                                className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-slate-600"
                            >
                                We provide reliable biomedical equipment solutions
                                for hospitals, clinics, diagnostic centers,
                                laboratories, and healthcare institutions with
                                expert service and 24/7 technical support.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
                            <a
                                href="tel:8919977474"
                                className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-secondary 
                                text-white bg-blue-600 border-blue-600 font-semibold text-lg shadow-lg 
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <FiPhone className="text-xl" />
                                <span>Call Now</span>
                            </a>

                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-blue-600
                                border-2 border-secondary text-white text-secondary font-semibold text-lg shadow-sm transition-all
                                duration-300 hover:-translate-y-1 hover:shadow-lg group"
                            >
                                <span>Explore Services</span>

                                <FiArrowRight
                                    className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        <HeroMobileImage />

                        {/* Stats */}
                        <div>
                            <HeroStats />
                        </div>

                    </div>

                    {/* ================= RIGHT CONTENT ================= */}
                    <div className="relative hidden lg:flex items-center justify-center">

                        {/* Main Image */}
                        {/* <img
                            src={patientMonitor}
                            alt="Patient Monitor"
                            className="
                            w-full
                            max-w-[750px]
                            relative
                            z-10
                            lg:-mt-30
                            "
                        /> */}

                        <img
                            src={patientMonitor}
                            alt="Patient Monitor"
                            className="
                            relative
                            z-10
                            w-full
                            max-w-[720px]
                            lg:-mt-24
                            drop-shadow-[0_40px_80px_rgba(37,99,235,0.18)]
                            transition-transform
                            duration-700
                            hover:scale-[1.02]"
                        />

                        {/* Floating Cards */}
                        <FloatingCard
                            icon={<FiShoppingCart />}
                            title="Equipment Sales"
                            className="-top-12 left-0"
                        />

                        <FloatingCard
                            icon={<FiSettings />}
                            title="AMC Services"
                            className="top-10 right-0"
                        />

                        <FloatingCard
                            icon={<FiTool />}
                            title="Repair Solutions"
                            className="bottom-26 left-10"
                        />

                        <FloatingCard
                            icon={<FiHeadphones />}
                            title="24/7 Support"
                            className="bottom-16 right-4"
                        />

                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;