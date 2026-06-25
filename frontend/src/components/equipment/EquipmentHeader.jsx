import { FiMonitor } from "react-icons/fi";

const EquipmentHeader = () => {

    return(
        <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-100 border border-blue-100
            shadow-sm mb-6">

                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <FiMonitor className="text-white text-lg"/>
                </div>

                <span className="text-blue-700 font-semibold text-sm md:text-base">
                    Equipment We Deal In
                </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
                Advanced Biomedical
                <br />
                Equipment Solutions
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                We supply, service, maintain, refurbish, and support a
                comprehensive range of biomedical equipment used across
                hospitals, clinics, diagnostic centers, laboratories,
                ICUs, operation theatres, and healthcare facilities.
            </p>
        </div>
    )
}

export default EquipmentHeader;