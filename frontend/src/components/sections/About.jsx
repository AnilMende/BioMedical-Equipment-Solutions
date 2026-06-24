import {
    FiTarget,
    FiEye,
    FiShield,
    FiHeadphones,
    FiTool,
    FiPackage,
    FiUsers
} from "react-icons/fi";


import Container from "../common/Container.jsx";
import engineerImage from "../../assets/images/biomedical-engineer.png";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-24 lg:py-32 bg-white overflow-hidden"
        >
            {/* Background Glow 1 */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"
            />

            {/* Background Glow 2 */}
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"
            />
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>

                        {/* Section Label */}
                        <div
                            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 
                            text-secondary font-semibold"
                        >
                            <FiShield size={20} className="mr-1" /> About Universal Bio-Meds
                        </div>

                        {/* Heading */}
                        <h2
                            className="mt-6 text-4xl md:text-5xl font-extrabold text-primary leading-tight"
                        >
                            Trusted Biomedical Equipment
                            Solutions Partner
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-6 text-lg text-slate-600 leading-relaxed"
                        >
                            Universal Bio-Meds is a trusted provider of
                            biomedical equipment sales, repair,
                            maintenance, refurbishment and technical
                            support services.

                            We help hospitals, clinics, diagnostic
                            centers and laboratories maintain peak
                            equipment performance while reducing
                            operational costs.
                        </p>

                        {/* Mission + Vision */}
                        <div className="mt-10 grid sm:grid-cols-2 gap-5">

                            {/* Mission */}
                            <div
                                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm 
                                transition-all duration-300 hover:-translate-y-2 hover:border-secondary/20 
                                hover:shadow-xl cursor-pointer"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary 
                                    flex items-center justify-center text-2xl text-blue-700"
                                >
                                    <FiTarget />
                                </div>

                                <h3
                                    className="mt-4 text-xl font-bold text-primary"
                                >
                                    Our Mission
                                </h3>

                                <p
                                    className="mt-3 text-slate-600 leading-relaxed"
                                >
                                    To provide cost-effective,
                                    high-quality biomedical equipment
                                    solutions that enhance healthcare
                                    delivery and patient safety.
                                </p>
                            </div>

                            {/* Vision */}
                            <div
                                className="bg-white border border-slate-200 rounded-3xl  p-6 shadow-sm transition-all
                                duration-300 hover:-translate-y-2 hover:border-secondary/20 hover:shadow-xl cursor-pointer"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex
                                    items-center  justify-center text-2xl  text-blue-700"
                                >
                                    <FiEye />
                                </div>

                                <h3
                                    className="
                                    mt-4
                                    text-xl
                                    font-bold
                                    text-primary
                                    "
                                >
                                    Our Vision
                                </h3>

                                <p
                                    className="
                                    mt-3
                                    text-slate-600
                                    leading-relaxed
                                    "
                                >
                                    To become the most trusted
                                    biomedical engineering and
                                    healthcare technology partner for
                                    hospitals and healthcare
                                    institutions.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Visual Side */}
                    <div className="relative">

                        {/* Background Glow */}
                        <div
                            className="absolute top-20 right-10 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[120px]"
                        />

                        {/* Floating Card Top */}
                        <div
                            className="absolute top-6 -left-8 z-30  bg-white px-5 py-4  rounded-2xl
                             shadow-xl border border-slate-100 flex items-center gap-3"
                        >
                            <FiTool className="text-secondary text-2xl text-blue-700" />

                            <div>
                                <h4 className="text-xl font-bold text-primary">
                                    15+
                                </h4>

                                <p className="text-sm text-slate-600">
                                    Equipment Categories
                                </p>
                            </div>
                        </div>

                        {/* Main Card */}
                        <div
                            className=" relative  bg-gradient-to-br from-white to-slate-50 border
                             border-slate-100 rounded-[32px] overflow-hidden shadow-xl"
                        >

                            {/* Image Section */}
                            <div className="relative">

                                <img
                                    src={engineerImage}
                                    alt="Biomedical Engineer"
                                    className="w-full h-[320px] object-cover"
                                />

                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent "
                                />

                            </div>

                            {/* Content */}
                            <div className="p-8">

                                <h3
                                    className="text-3xl font-bold text-primary"
                                >
                                    Why Healthcare Facilities Trust Us
                                </h3>

                                <p
                                    className=" mt-3 text-slate-600 leading-relaxed"
                                >
                                    Delivering reliable biomedical equipment solutions
                                    with expert engineering support, genuine spare parts,
                                    rapid response services and preventive maintenance.
                                </p>

                                {/* Trust Points */}
                                <div className="grid grid-cols-2 gap-4 mt-8">

                                    <div className="flex items-center gap-3">
                                        <FiShield className="text-secondary text-2xl text-blue-700" />
                                        <span className="font-medium text-primary">
                                            Quality Assured
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FiHeadphones className="text-secondary text-2xl text-blue-700" />
                                        <span className="font-medium text-primary">
                                            24/7 Support
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FiPackage className="text-secondary text-2xl text-blue-700" />
                                        <span className="font-medium text-primary">
                                            Genuine Parts
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FiUsers className="text-secondary text-2xl text-blue-700" />
                                        <span className="font-medium text-primary">
                                            Expert Engineers
                                        </span>
                                    </div>

                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-4 mt-8">

                                    <div
                                        className="bg-secondary/5 border border-secondary/10 rounded-2xl p-4 "
                                    >
                                        <h4 className="text-2xl font-bold text-secondary">
                                            24/7
                                        </h4>

                                        <p className="text-sm text-slate-600">
                                            Emergency Support
                                        </p>
                                    </div>

                                    <div
                                        className="bg-secondary/5 border border-secondary/10 rounded-2xl p-4"
                                    >
                                        <h4 className="text-2xl font-bold text-secondary">
                                            AMC
                                        </h4>

                                        <p className="text-sm text-slate-600">
                                            Maintenance Services
                                        </p>
                                    </div>

                                    <div
                                        className="bg-secondary/5 border border-secondary/10 rounded-2xl p-4"
                                    >
                                        <h4 className="text-2xl font-bold text-secondary">
                                            Sales
                                        </h4>

                                        <p className="text-sm text-slate-600">
                                            New Equipment
                                        </p>
                                    </div>

                                    <div
                                        className="bg-secondary/5 border border-secondary/10 rounded-2xl p-4"
                                    >
                                        <h4 className="text-2xl font-bold text-secondary">
                                            Repair
                                        </h4>

                                        <p className="text-sm text-slate-600">
                                            Board-Level Service
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Floating Card Bottom */}
                        <div
                            className="absolute -bottom-14 -right-2 z-30 bg-white px-5 py-4 
                            rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                        >
                            <FiHeadphones className="text-secondary text-2xl text-blue-700" />

                            <div>
                                <h4
                                    className="text-xl font-bold text-secondary"
                                >
                                    24/7
                                </h4>

                                <p className="text-sm text-slate-600">
                                    Emergency Support
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;