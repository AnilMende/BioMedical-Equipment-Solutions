import { FiArrowUpRight, FiShield } from "react-icons/fi";

const CTAContent = () => {

    return (

        <div className="max-w-4xl mx-auto">

            {/* Premium Badge */}

            <div
                className="relative inline-flex items-center gap-3 px-4 py-3 rounded-full
                 border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg overflow-hidden"
            >

                {/* Shimmer */}

                <span
                    className="absolute inset-y-0  -left-1/3 w-1/3 bg-gradient-to-r from-transparent  
                    via-cyan-200/40 to-transparent skew-x-[-20deg] animate-badgeShimmer"
                />

                {/* Icon */}

                <div
                    className="relative z-10 w-10  h-10 rounded-full bg-blue-500 flex items-center justify-center
                     text-white"
                >
                    <FiShield size={18} />
                </div>

                {/* Text */}

                <span
                    className="relative z-10 text-white font-semibold tracking-wide"
                >
                    Trusted Biomedical Service Partner
                </span>

                <FiArrowUpRight
                    className="relative z-10  text-cyan-300 text-lg"
                />

            </div>

            {/* Heading */}

            <h2
                className="
                mt-10
                text-white
                font-black
                text-5xl
                md:text-6xl
                lg:text-7xl
                leading-[1.05]
                tracking-tight
                "
            >
                Keep Your
                <span
                    className="
                    block
                    bg-gradient-to-r
                    from-cyan-300
                    via-white
                    to-blue-300
                    bg-clip-text
                    text-transparent
                    "
                >
                    Medical Equipment
                </span>

                Performing at Its Best
            </h2>

            {/* Description */}

            <p
                className="
                mt-8
                mx-auto
                max-w-3xl
                text-lg
                md:text-xl
                leading-9
                text-slate-300
                "
            >
                From preventive maintenance and equipment calibration
                to board-level repairs and genuine spare parts,
                Universal Bio-Meds helps healthcare facilities
                minimise downtime and maintain reliable performance
                for critical medical equipment.
            </p>

        </div>

    );

};

export default CTAContent;