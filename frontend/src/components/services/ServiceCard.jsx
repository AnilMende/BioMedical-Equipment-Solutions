import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ icon: Icon, title, description }) => {

    return (
        <div className="group relative bg-white rounded-[32px] p-6 border border-slate-100
        shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
        hover:border-secondary/20 cursor-pointer">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent
            opacity-0 group-hover:opacity-100 transition-all duration-500"/>

            {/* Icon */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center
            text-secondary text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Icon className="text-3xl text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="z-10 relative text-2xl font-bold text-primary mb-4">
                {title}
            </h3>

            {/* description */}
            <p className="relative z-10 text-slate-600 leading-relaxed mb-4">
                {description}
            </p>

            {/* Learn More */}
            {/* <div className="relative z-10 inline-flex items-center gap-2 text-seondary font-semibold">
                <span>Learn More</span>

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </div> */}
        </div>
    )
}

export default ServiceCard;