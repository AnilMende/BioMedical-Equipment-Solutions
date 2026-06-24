import { FiSettings } from "react-icons/fi";

const ServiceHeader = () => {

    return(
        <div className="text-center max-w-4xl mx-auto mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-100 border
            border-blue-100 shadow-sm mb-6 cursor-pointer">

                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <FiSettings className="text-white text-lg"/>
                </div>

                <span className="text-blue-700 font-semibold text-sm md:text-base">
                    Our Biomedical Services
                </span>

            </div>

            {/* Main Headling */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
                Complete Biomedical
                <br />
                Equipment Solutions
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                From equipment sales and installation to AMC contracts,
                board-level repairs, refurbishment, calibration, and
                technical support, we provide end-to-end biomedical
                engineering solutions for hospitals, clinics,
                laboratories, and healthcare facilities.
            </p>
        </div>
    )
}

export default ServiceHeader;