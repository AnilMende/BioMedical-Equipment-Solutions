import { FiCheckCircle, FiShield, FiTool, } from "react-icons/fi";
import engineerImage from "../../assets/images/med-engineer.png";

const TrustImage = () => {

     const items = [
        {
            icon: FiCheckCircle,
            text: "Certified Biomedical Engineers",
        },
        {
            icon: FiTool,
            text: "Board-Level Repair Specialists",
        },
        {
            icon: FiShield,
            text: "Genuine Spare Parts",
        },
    ];

    return (
        <div className="relative mt-20">

            {/* Background Glow */}

            <div
                className="
                absolute
                inset-0
                flex
                justify-center
                items-center
                -z-10
                "
            >

                <div
                    className="
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-blue-500/10
                    blur-[120px]
                    "
                />

            </div>

            {/* Grid Pattern */}

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,#3B82F620_1px,transparent_1px)]
                bg-[length:24px_24px]
                opacity-30
                "
            />

            {/* Main Image */}

            <img
                src={engineerImage}
                alt="Biomedical Engineer"
                className="
                w-full
                max-w-4xl
                mx-auto
                rounded-[36px]
                shadow-[0_40px_100px_rgba(15,23,42,0.15)]
                border
                border-white
                "
            />

            {/* Glass Panel */}

            <div
                className="
                relative
                lg:absolute
                left-1/2
                lg:-bottom-12
                -translate-x-1/2
                mt-8
                lg:mt-0
                w-full
                max-w-3xl
                rounded-[28px]
                border
                border-white/60
                bg-white/80
                backdrop-blur-xl
                shadow-2xl
                p-8
                "
            >

                <div className="grid md:grid-cols-3 gap-6">

                    {items.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="
                                flex
                                items-center
                                gap-4
                                "
                            >

                                <div
                                    className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    bg-blue-100
                                    flex
                                    items-center
                                    justify-center
                                    text-blue-600
                                    "
                                >

                                    <Icon className="text-2xl" />

                                </div>

                                <p
                                    className="
                                    font-semibold
                                    text-primary
                                    leading-snug
                                    "
                                >
                                    {item.text}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>
    )
}

export default TrustImage;