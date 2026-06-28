import { FiMessageSquare } from "react-icons/fi";

const TestimonialsHeader = () => {

    return (

        <div className="max-w-4xl mx-auto text-center">

            {/* Section Label */}

            <div
                className="
                inline-flex
                items-center
                gap-3
                mb-8
                "
            >

                <div className="w-12 h-[2px] bg-blue-600 rounded-full" />

                <div
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-400
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-blue-500/20
                "
                >
                    <FiMessageSquare className="text-xl" />
                </div>

                <div className="w-12 h-[2px] bg-blue-600 rounded-full" />

            </div>

            {/* Small Label */}

            <p
                className="
                uppercase
                tracking-[0.35em]
                text-blue-600
                font-bold
                text-sm
                "
            >
                Client Success Stories
            </p>

            {/* Heading */}

            <h2
                className="
                mt-5
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                leading-[1.1]
                text-slate-900
                "
            >
                Trusted by
                <br />

                <span
                    className="
                    bg-gradient-to-r
                    from-blue-700
                    via-blue-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                    "
                >
                    Healthcare Professionals
                </span>

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
                Hospitals, clinics and diagnostic centres rely on
                Universal Bio-Meds for dependable biomedical equipment,
                expert repair services and long-term technical support.
                Here's what our valued clients have to say.
            </p>

        </div>

    );

};

export default TestimonialsHeader;