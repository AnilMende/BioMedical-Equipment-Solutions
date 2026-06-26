import { FiShield } from "react-icons/fi";


const WhyChooseHeader = () => {

    return(
        <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            {/* Badge */}
            <div
                className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                bg-gradient-to-r
                from-blue-50
                to-blue-100
                border
                border-blue-200
                shadow-sm
                "
            >
                <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-md
                    "
                >
                    <FiShield className="text-lg" />
                </div>

                <span
                    className="
                    font-semibold
                    text-blue-700
                    tracking-wide
                    "
                >
                    WHY CHOOSE UNIVERSAL BIO-MEDS
                </span>
            </div>

            {/* Heading */}

            <h2
                className="
                mt-8
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                text-primary
                leading-[1.1]
                "
            >
                Trusted By Healthcare
                <br />

                Professionals Every Day
            </h2>

            {/* Description */}

            <p
                className="
                mt-8
                max-w-3xl
                mx-auto
                text-lg
                leading-8
                text-slate-600
                "
            >
                Universal Bio-Meds delivers dependable biomedical equipment
                solutions through experienced engineers, board-level repair
                expertise, genuine spare parts, preventive maintenance, and
                responsive technical support helping hospitals and healthcare
                institutions operate without interruption.
            </p>
        </div>
    )
}

export default WhyChooseHeader;