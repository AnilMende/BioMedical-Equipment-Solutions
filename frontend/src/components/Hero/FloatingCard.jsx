

const FloatingCard = ({
    icon,
    title,
    className
}) => {
    return (
        <div
            className={`
            animate-[float_5s_ease-in-out_infinite] absolute z-20 bg-white/95 backdrop-blur-md
            px-5 py-4 rounded-3xl border  border-white shadow-xl flex items-center gap-3 hover:-translate-y-1
            hover:shadow-2xl  transition-all duration-300 cursor-pointer

            ${className}
            `}
        >
            <p
                className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center
                text-secondary text-2xl text-blue-600"
            >
                {icon}
            </p>

            <p
                className="text-primary font-bold leading-tight text-base text-blue-600"
            >
                {title}
            </p>
        </div>
    );
};

export default FloatingCard;