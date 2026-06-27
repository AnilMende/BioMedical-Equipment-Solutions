import { FiGitBranch } from "react-icons/fi";


const ProcessHeader = () => {

    return(
        <div className="max-w-3xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r
            from-blue-50 to-blue-100 border border-blue-200 shadow-sm">

                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <FiGitBranch/>
                </div>

                <span className="font-semibold text-blue-700">
                    Our Service Process
                </span>

            </div>

            <h2
                className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight"
            >
                A Simple Process,
                <br />
                Exceptional Results
            </h2>

            {/* Description */}

            <p
                className="mt-8 text-lg leading-8 text-slate-600 max-w-2xl mx-auto"
            >
                From the moment you contact us to the final delivery of your
                biomedical equipment, every step is handled with precision,
                transparency, and professional care to ensure maximum
                reliability.
            </p>
        </div>
    )
}

export default ProcessHeader;