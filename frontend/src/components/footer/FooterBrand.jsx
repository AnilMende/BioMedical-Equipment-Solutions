import {
    FiActivity,
    FiCheckCircle,
    FiShield,
    FiClock,
} from "react-icons/fi";

const FooterBrand = () => {

    return (

        <div className="max-w-md">

            {/* Logo */}

            <div className="flex items-center gap-4">

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500
                        text-white
                        shadow-[0_12px_30px_rgba(37,99,235,0.35)]
                    "
                >
                    <FiActivity size={28} />
                </div>

                <div>

                    <h3 className="text-2xl font-black tracking-tight text-white">
                        Universal Bio-Meds
                    </h3>

                    <p className="mt-1 text-sm font-medium tracking-wide text-blue-300">
                        Biomedical Equipment Experts
                    </p>

                </div>

            </div>

            {/* Description */}

            <p
                className="
                    mt-8
                    text-[16px]
                    leading-8
                    text-slate-400
                "
            >
                Keeping hospitals, laboratories and healthcare providers
                operating at their best through dependable biomedical
                equipment repair, installation, preventive maintenance,
                calibration and technical support.
            </p>

            {/* Trust Highlights */}

            <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                    <FiCheckCircle
                        className="text-blue-400 flex-shrink-0"
                        size={18}
                    />

                    <span className="text-slate-300">
                        Trusted Biomedical Service Partner
                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <FiShield
                        className="text-cyan-400 flex-shrink-0"
                        size={18}
                    />

                    <span className="text-slate-300">
                        Certified & Experienced Engineers
                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <FiClock
                        className="text-green-400 flex-shrink-0"
                        size={18}
                    />

                    <span className="text-slate-300">
                        Fast Response & Reliable Support
                    </span>

                </div>

            </div>

            {/* Decorative Divider */}

            <div
                className="
                    mt-10
                    h-px
                    w-32
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    via-cyan-400
                    to-transparent
                "
            />

        </div>

    );

};

export default FooterBrand;