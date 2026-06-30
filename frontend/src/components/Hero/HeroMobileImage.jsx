import patientMonitor from "../../assets/images/modern-patient-monitor.png";
import { FiShield } from "react-icons/fi";

const HeroMobileImage = () => {

    return (

        <div className="relative mt-12 flex justify-center lg:hidden">

            <img
                src={patientMonitor}
                alt="Patient Monitor"
                className="
                    w-full
                    max-w-[320px]

                    drop-shadow-[0_30px_60px_rgba(37,99,235,0.18)]
                "
            />

            {/* Floating Trust Badge */}

            <div
                className="
                absolute
                top-3
                left-3
                flex
                items-center
                gap-3
                rounded-2xl
                border 
                border-white/60
                bg-white/85
                backdrop-blur-xl
                px-3
                py-3
                shadow-xl
                
                animate-badge-travel
                
                sm:top-6
                sm:left-6
                sm:px-5
                sm:py-4
                "
            >

                {/* Icon */}

                <div
                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500
                    text-white
                    
                    shadow-md
                    sm:h-12
                    sm:w-12
                    "
                >

                    <FiShield size={20} />

                </div>

                {/* Text */}

                <div>

                    <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                        Trusted Quality
                    </h4>

                    <p className=" text-xs text-slate-600 sm:text-sm">
                        Genuine Equipment
                    </p>

                </div>

            </div>

        </div>

    );

};

export default HeroMobileImage;