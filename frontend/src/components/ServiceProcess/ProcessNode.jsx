import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const ProcessNode = ({
    icon: Icon,
    active,
    completed,
}) => {

    return (

        <motion.div
            animate={{
                scale: active ? 1.12 : completed ? 1.05 : 1,
            }}
            transition={{
                duration: 0.35,
            }}
            className="relative flex items-center justify-center"
        >

            {/* ================= Active Ripple ================= */}

            {active && (
                <>
                    <span
                        className="
                        absolute
                        w-28
                        h-28
                        rounded-full
                        bg-blue-400/20
                        animate-ping
                    "
                    />

                    <span
                        className="
                        absolute
                        w-24
                        h-24
                        rounded-full
                        bg-cyan-400/20
                        animate-pulse
                    "
                    />
                </>
            )}

            {/* ================= Main Circle ================= */}

            <div
                className={`
                    relative
                    w-24
                    h-24
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500

                    ${
                        completed
                            ? "bg-gradient-to-br from-blue-600 to-cyan-500 border-[6px] border-blue-600 shadow-[0_0_35px_rgba(37,99,235,0.30)]"
                            : active
                            ? "bg-white border-[8px] border-blue-600 shadow-[0_0_55px_rgba(37,99,235,0.45)]"
                            : "bg-white border-[8px] border-slate-200"
                    }
                `}
            >

                {/* Inner Circle */}

                <div
                    className={`
                        w-16
                        h-16
                        rounded-full
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500

                        ${
                            completed
                                ? "bg-white"
                                : active
                                ? "bg-blue-50"
                                : "bg-slate-50"
                        }
                    `}

                >

                    <Icon
                        className={`
                            text-3xl
                            transition-all
                            duration-500

                            ${
                                completed
                                    ? "text-blue-600"
                                    : active
                                    ? "text-blue-600 scale-110 rotate-6"
                                    : "text-slate-500"
                            }
                        `}
                    />

                </div>

                {/* Completed Badge */}

                {completed && !active && (

                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        className="
                            absolute
                            -top-2
                            -right-2
                            w-8
                            h-8
                            rounded-full
                            bg-green-500
                            border-4
                            border-white
                            flex
                            items-center
                            justify-center
                            shadow-lg
                        "
                    >

                        <FiCheck
                            className="text-white text-sm"
                        />

                    </motion.div>

                )}

                {/* Active Glow */}

                {active && (

                    <div
                        className="
                            absolute
                            inset-0
                            rounded-full
                            bg-blue-500/25
                            blur-2xl
                            -z-10
                        "
                    />

                )}

            </div>

        </motion.div>

    );

};

export default ProcessNode;