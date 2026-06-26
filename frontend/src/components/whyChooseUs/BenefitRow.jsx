import { FiArrowRight } from "react-icons/fi";

const BenefitRow = ({ icon: Icon, title, description }) => {
    return (
        <div
            className="group relative flex items-start gap-6 py-8 border-b border-slate-200 
            hover:border-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
        >
            {/* Icon */}

            <div
                className="shrink-0 w-16 h-16 rounded-2xl  bg-blue-50 border  border-blue-100
                flex items-center justify-center  text-blue-600 text-2xl shadow-sm transition-all 
                duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 
                group-hover:scale-110 group-hover:shadow-xl"
            >
                <Icon />
            </div>

            {/* Content */}

            <div className="flex-1">

                <h3
                    className="
                    text-2xl
                    font-bold
                    text-primary
                    transition-colors
                    duration-300
                    group-hover:text-blue-600
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                    mt-3
                    text-slate-600
                    leading-8
                    max-w-2xl
                    "
                >
                    {description}
                </p>

            </div>

            {/* Arrow */}

            <div
                className="
                hidden
                md:flex
                items-center
                justify-center
                w-12
                shrink-0
                text-slate-400
                text-2xl
                transition-all
                duration-300
                group-hover:text-blue-600
                group-hover:translate-x-1
                "
            >
                <FiArrowRight />
            </div>

            {/* Left Accent Line */}

            <div
                className="
                absolute
                left-0
                top-0
                h-full
                w-1
                rounded-full
                bg-blue-600
                scale-y-0
                origin-top
                transition-transform
                duration-500
                group-hover:scale-y-100
                "
            />
        </div>
    );
};

export default BenefitRow;