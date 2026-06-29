import {
    FiSend,
    FiClock,
    FiShield,
    FiMapPin,
} from "react-icons/fi";

const ContactHeader = () => {

    return (

        <div className="relative max-w-4xl mx-auto text-center">

            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-10
                    -translate-x-1/2
                    h-56
                    w-56
                    rounded-full
                    bg-cyan-100/40
                    blur-3xl
                "
            />

            {/* Floating Accent Dots */}

            <div className="absolute left-10 top-12 h-2 w-2 rounded-full bg-blue-300 animate-float-slow" />
            <div className="absolute right-12 top-20 h-3 w-3 rounded-full bg-cyan-300 animate-float-reverse" />

            {/* Badge */}

            <div
                className="
                    relative
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-blue-100
                    bg-blue-50
                    px-5
                    py-3
                    shadow-sm
                "
            >

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500
                        text-white
                        shadow-lg
                    "
                >
                    <FiSend size={18} />
                </div>

                <span className="font-semibold tracking-wide text-blue-700">
                    Get In Touch
                </span>

            </div>

            {/* Decorative Divider */}

            <div
                className="
                    mx-auto
                    mt-8
                    h-px
                    w-24
                    rounded-full
                    bg-gradient-to-r
                    from-transparent
                    via-blue-500
                    to-transparent
                "
            />

            {/* Heading */}

            <h2
                className="
                    mt-8
                    text-5xl
                    font-black
                    leading-tight
                    text-slate-900
                    lg:text-6xl
                "
            >
                Let's

                <span
                    className="
                        block
                        bg-[linear-gradient(90deg,#2563EB,#06B6D4,#2563EB)]
                        bg-[length:250%_250%]
                        bg-clip-text
                        text-transparent
                        animate-gradient-shift
                    "
                >
                    Connect Today
                </span>

            </h2>

            {/* Description */}

            <p
                className="
                    mx-auto
                    mt-8
                    max-w-2xl
                    text-lg
                    leading-8
                    text-slate-600
                "
            >
                Choose the most convenient way to reach our biomedical
                service team. Whether you need immediate technical
                support, equipment servicing, or simply have a question,
                we're just one click away.
            </p>

            {/* Trust Highlights */}

            <div
                className="
                    mt-10
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-4
                    text-sm
                    font-medium
                    text-slate-600
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2
                        shadow-sm
                    "
                >
                    <FiClock className="text-blue-600" />
                    <span>Fast Response</span>
                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2
                        shadow-sm
                    "
                >
                    <FiShield className="text-green-600" />
                    <span>Certified Engineers</span>
                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2
                        shadow-sm
                    "
                >
                    <FiMapPin className="text-cyan-600" />
                    <span>Hyderabad, Telangana</span>
                </div>

            </div>

        </div>

    );

};

export default ContactHeader;