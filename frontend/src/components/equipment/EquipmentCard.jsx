import { FiArrowRight } from "react-icons/fi";

const EquipmentCard = ({ icon: Icon, title, image, description, }) => {

    return (
        <div
            className="group flex flex-col h-full overflow-hidden bg-white rounded-[28px] overflow-hidden border border-slate-100
            shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-3 hover:border-blue-200
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
        >

            {/* Equipment Image */}
            <div
                className="relative h-64 bg-gradient-to-br from-blue-5 via-white to-slate-50 overflow-hidden"
            >
                <div
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl  bg-white shadow-md flex
                    items-center justify-center text-secondary text-xl z-10"
                >
                    <Icon className="text-blue-600 text-2xl" />
                </div>

                <div
                    className="absolute w-40 h-40 bg-blue-200/40 rounded-full blur-3xl left-1/2 
                    top-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                <img
                    src={image}
                    alt={title}
                    className="
                    w-full
                    h-full
                    object-contain
                    p-2
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

                <h3
                    className="text-xl font-bold text-primary mb-3"
                >
                    {title}
                </h3>

                <p
                    className="text-slate-600 leading-relaxed flex-grow"
                >
                    {description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                    View Equipment

                    <FiArrowRight />

                </div>

            </div>

        </div>
    );
};

export default EquipmentCard;