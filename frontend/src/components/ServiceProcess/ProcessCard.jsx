import { motion } from "framer-motion";


const ProcessCard = ({
    number,
    title,
    description,
    active = false,
    completed = false,
}) => {

    const stepNumber = String(number).padStart(2, "0");

    return (

        <motion.div
            whileHover={{ y: -8 }}
            animate={{
                y: active ? -6 : 0,
                scale: active ? 1.03 : 1,
            }}
            transition={{ duration: 0.35 }}
            className={`
                relative
                overflow-hidden
                rounded-[28px]
                border
                p-7
                bg-white
                transition-all
                duration-500

                ${
                    active
                        ? "border-blue-500 shadow-[0_25px_70px_rgba(37,99,235,0.18)]"
                        : completed
                        ? "border-blue-200 shadow-lg"
                        : "border-slate-200 shadow-md"
                }
            `}
        >

            {/* Background Glow */}

            {active && (
                <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-blue-50
                    via-white
                    to-cyan-50
                    "
                />
            )}

            {/* Top Accent */}

            <div
                className={`
                    absolute
                    top-0
                    left-0
                    h-1
                    transition-all
                    duration-700

                    ${
                        active || completed
                            ? "w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"
                            : "w-0"
                    }
                `}
            />

            <div className="relative z-10">

                {/* Step Label */}

                <div
                    className={`
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        transition-all
                        duration-300

                        ${
                            active
                                ? "bg-blue-100 text-blue-700"
                                : completed
                                ? "bg-cyan-100 text-cyan-700"
                                : "bg-slate-100 text-slate-600"
                        }
                    `}
                >
                    <span>{stepNumber}</span>

                    <span className="opacity-50">•</span>

                    <span>{title}</span>
                </div>

                {/* Heading */}

                <h3
                    className={`
                        mt-6
                        text-2xl
                        font-bold
                        transition-colors
                        duration-300

                        ${
                            active
                                ? "text-blue-700"
                                : "text-primary"
                        }
                    `}
                >
                    {title}
                </h3>

                {/* Description */}

                <p
                    className="
                    mt-4
                    text-slate-600
                    leading-7
                    "
                >
                    {description}
                </p>

            </div>

            {/* Decorative Number */}

            <span
                className={`
                    absolute
                    -bottom-8
                    right-3
                    text-[110px]
                    font-black
                    leading-none
                    pointer-events-none
                    select-none

                    ${
                        active
                            ? "text-blue-100"
                            : "text-slate-100"
                    }
                `}
            >
                {stepNumber}
            </span>

        </motion.div>

    );

};

export default ProcessCard;