import { FiArrowRight, FiStar } from "react-icons/fi";
import { FaQuoteRight } from 'react-icons/fa6';


const TestimonialCard = ({
    image,
    name,
    designation,
    organization,
    review,
    rating,
    highlight,
    icon: Icon,
}) => {

    return (

        <div
            className="
            group
            relative
            bg-white
            rounded-[36px]
            overflow-hidden
            border
            border-slate-200
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            hover:-translate-y-3
            hover:shadow-[0_35px_90px_rgba(37,99,235,0.16)]
            transition-all
            duration-500
            "
        >

            {/* Decorative Quote */}

            <FaQuoteRight
                className="absolute top-8 right-8  text-[130px] text-blue-50 opacity-40 rotate-180 pointer-events-none"
            />

            {/* Top */}

            <div className="p-8">

                {/* Badge */}

                <div
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-blue-50
                    border
                    border-blue-100
                    text-blue-700
                    font-semibold
                    text-sm
                    "
                >

                    <Icon className="text-lg" />

                    {highlight}

                </div>

                {/* Stars */}

                <div className="flex items-center gap-1 mt-6">

                    {[...Array(rating)].map((_, index) => (

                        <FiStar
                            key={index}
                            className="
                            text-yellow-400
                            fill-yellow-400
                            text-lg
                            "
                        />

                    ))}

                </div>

                {/* Review */}

                <p
                    className="mt-6 text-slate-600 leading-8 text-lg italic relative z-10"
                >
                    "{review}"
                </p>

            </div>

            {/* Divider */}

            <div className="mx-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            {/* Bottom */}

            {/* Bottom */}

            <div className="relative px-8 pb-8 pt-14">

                {/* Floating Profile */}

                <div
                    className="absolute -top-8 left-8 w-20  h-20 rounded-full overflow-hidden 
                    ring-4 ring-white shadow-xl bg-white"
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover  transition-transform 
                        duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="flex justify-between items-end">

                    <div className="pl-24">

                        <h4 className="text-xl font-bold text-slate-900">
                            {name}
                        </h4>

                        <p className="text-blue-600 font-medium mt-1">
                            {designation}
                        </p>

                        <p className="text-slate-500 text-sm mt-1">
                            {organization}
                        </p>

                    </div>

                    <div
                        className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center 
                        text-blue-600 transition-all duration-300 group-hover:bg-blue-600 
                        group-hover:text-white group-hover:translate-x-1 group-hover:rotate-45 cursor-pointer"
                    >
                        <FiArrowRight />
                    </div>

                </div>

            </div>

            {/* Bottom Glow */}

            <div
                className="
                absolute
                bottom-0
                left-0
                w-full
                h-1
                bg-gradient-to-r
                from-blue-600
                via-cyan-400
                to-blue-600
                scale-x-0
                origin-left
                transition-transform
                duration-500
                group-hover:scale-x-100
                "
            />

        </div>

    );

};

export default TestimonialCard;