import Container from "../common/Container.jsx";
import HeroStats from "../Hero/HeroStats.jsx";
import FloatingCard from "../Hero/FloatingCard.jsx";
import patientMonitor from "../../assets/images/modern-patient-monitor.png";
import { FiShield } from "react-icons/fi";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { FiShoppingCart, FiTool, FiSettings, FiHeadphones } from "react-icons/fi";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden pt-32 bg-background"
        >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full" />

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

                        {/* Heading */}
                        <h2
                            className="text-3xl md:text-5xl xl:text-5xl font-extrabold leading-tight text-primary"
                        >
                            One Stop Solution For
                            <br />
                            All Your Hospital Needs
                        </h2>

                        {/* Service Line */}
                        <p
                            className="mt-6 text-secondary text-2xl md:text-xl font-semibold  text-blue-600"
                        >
                            Sales • Service • Refurbishment • Accessories
                        </p>

                        {/* Description */}
                        <p
                            className="
                            mt-6
                            text-muted
                            text-lg
                            leading-relaxed
                            max-w-xl
                            "
                        >
                            We provide reliable biomedical equipment solutions
                            for hospitals, clinics, diagnostic centers,
                            laboratories, and healthcare institutions with
                            expert service and 24/7 technical support.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
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

                        {/* Stats */}
                        <div>
                            <HeroStats />
                        </div>

                        {/* Trust Strip */}
                        {/* <TrustStrip/> */}

                    </div>

                    {/* ================= RIGHT CONTENT ================= */}
                    <div className="relative hidden lg:flex justify-center">

                        {/* Main Image */}
                        <img
                            src={patientMonitor}
                            alt="Patient Monitor"
                            className="
                            w-full
                            max-w-[750px]
                            relative
                            z-10
                            lg:-mt-30
                            "
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