import { FiPlus } from "react-icons/fi";

const FAQItem = ({
    category,
    question,
    answer,
    isOpen,
    onClick,
}) => {

    return (

        <div
            className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                bg-white
                transition-all
                duration-500
                cursor-pointer

                ${
                    isOpen
                        ? "border-blue-200 shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                        : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-lg"
                }
            `}
        >

            {/* Left Accent */}

            <span
                className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    rounded-full
                    bg-gradient-to-b
                    from-blue-600
                    to-cyan-400
                    transition-all
                    duration-500

                    ${
                        isOpen
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 scale-y-0"
                    }
                `}
            />

            <button
                onClick={onClick}
                className="
                    w-full
                    px-8
                    py-7
                    text-left
                    cursor-pointer
                "
            >

                {/* Header */}

                <div className="flex justify-between gap-6">

                    <div className="flex-1">

                        {/* Category */}

                        <span
                            className={`
                                inline-flex
                                rounded-full
                                px-4
                                py-1.5
                                text-xs
                                font-semibold
                                tracking-wide
                                transition-all
                                duration-500

                                ${
                                    isOpen
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-slate-100 text-slate-500"
                                }
                            `}
                        >
                            {category}
                        </span>

                        {/* Question */}

                        <h3
                            className={`
                                mt-5
                                text-xl
                                font-bold
                                leading-8
                                transition-colors
                                duration-300

                                ${
                                    isOpen
                                        ? "text-blue-700"
                                        : "text-slate-900"
                                }
                            `}
                        >
                            {question}
                        </h3>

                    </div>

                    {/* Plus Button */}

                    <div
                        className={`
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            transition-all
                            duration-500

                            ${
                                isOpen
                                    ? "bg-blue-600 text-white rotate-45"
                                    : "bg-slate-100 text-slate-600 group-hover:bg-blue-50"
                            }
                        `}
                    >

                        <FiPlus size={22} />

                    </div>

                </div>

                {/* Expandable Content */}

                <div
                    className={`
                        grid
                        transition-all
                        duration-500
                        ease-in-out

                        ${
                            isOpen
                                ? "grid-rows-[1fr] mt-6"
                                : "grid-rows-[0fr]"
                        }
                    `}
                >

                    <div className="overflow-hidden">

                        <p
                            className="
                                leading-8
                                text-slate-600
                                pr-10
                            "
                        >
                            {answer}
                        </p>

                    </div>

                </div>

            </button>

        </div>

    );

};

export default FAQItem;