import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ icon: Icon, title, description }) => {

    return (
        <div className="group relative bg-white rounded-[32px] p-5
        md:p-6 lg:p-7 border border-slate-100 shadow-lg overflow-hidden 
        transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)] 
        hover:border-blue-300 hover:ring-2 hover:ring-blue-100 cursor-pointer">

            <div
                className="absolute top-0 left-0 h-1 w-full scale-x-0 origin-left bg-gradient-to-r
                 from-blue-600 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100"
            />

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent
            opacity-0 group-hover:opacity-100 transition-all duration-500"/>

            {/* Icon */}
            <div className="relative z-10 w-16 h-16 rounded-2xl group-hover:text-white
             flex items-center justify-center text-secondary text-3xl group-hover:scale-110 
             group-hover:rotate-6 transition-all duration-500">
                <Icon className="text-3xl text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="z-10 relative text-2xl font-bold text-primary mb-4">
                {title}
            </h3>

            {/* description */}
            <p className="relative z-10 text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700">
                {description}
            </p>

            <div
                className="mt-6 h-px w-12  bg-blue-200 transition-all duration-500 group-hover:w-full 
                group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500"
            />

        </div>
    )
}

export default ServiceCard;