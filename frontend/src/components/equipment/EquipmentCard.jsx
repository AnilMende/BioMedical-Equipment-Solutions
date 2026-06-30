import { FiArrowRight } from "react-icons/fi";

const EquipmentCard = ({ icon: Icon, title, image, description, }) => {

    return (
        <div
            className="group flex flex-col h-full overflow-hidden bg-white rounded-[28px] overflow-hidden border
             border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-3 hover:border-blue-300
             hover:ring-2 hover:ring-blue-100 transition-all duration-500 hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)] 
             cursor-pointer"
        >
            {/* Premium Top Accent */}
            <div
                className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r 
                from-blue-600 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100"
            />

            {/* Equipment Image */}
            <div
                className="relative h-64 bg-gradient-to-br from-blue-5 via-white to-slate-50 overflow-hidden"
            >
                <div
                    className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-white
                    shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600"
                >
                    <Icon className="text-2xl text-blue-600 transition-colors duration-500 group-hover:text-white" />
                </div>

                <div
                    className="absolute left-1/2 top-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full
                    bg-blue-300/30 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-300/40"
                />

                <img
                    src={image}
                    alt={title}
                    className="
                    w-full
                    h-full
                    object-contain
                    p-2

                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:-translate-y-2
                    "
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

                <h3
                    className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600"
                >
                    {title}
                </h3>

                <p
                    className="text-slate-600 leading-relaxed flex-grow"
                >
                    {description}
                </p>

                <div
                    className="mt-6 h-px w-12  bg-blue-200 transition-all duration-500
                    group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-600
                     group-hover:to-cyan-500"
                />

            </div>

        </div>
    );
};

export default EquipmentCard;