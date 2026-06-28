

const FloatingElements = () => {

    return (

        <div
            className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* ================= Large Left Glow ================= */}

            <div
                className="
                absolute
                -top-40
                -left-32
                w-[520px]
                h-[520px]
                rounded-full
                bg-blue-500/15
                blur-[130px]
                animate-floatSlow
                "
            />

            {/* ================= Right Glow ================= */}

            <div
                className="
                absolute
                bottom-[-120px]
                right-[-100px]
                w-[420px]
                h-[420px]
                rounded-full
                bg-cyan-400/10
                blur-[120px]
                animate-floatReverse
                "
            />

            {/* ================= Center Radial Light ================= */}

            <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[900px]
                h-[900px]
                rounded-full
                bg-blue-500/10
                blur-[180px]
                "
            />

            {/* ================= Dot Pattern ================= */}

            <div
                className="
                absolute
                inset-0
                opacity-[0.08]
                "
                style={{
                    backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* ================= Top Ring ================= */}

            <div
                className="
                absolute
                top-24
                right-[12%]
                w-44
                h-44
                rounded-full
                border
                border-white/10
                animate-spinSlow
                "
            />

            {/* ================= Bottom Ring ================= */}

            <div
                className="
                absolute
                bottom-20
                left-[8%]
                w-72
                h-72
                rounded-full
                border
                border-cyan-300/10
                animate-spinSlowReverse
                "
            />

            {/* ================= Accent Line 1 ================= */}

            <div
                className="
                absolute
                left-0
                top-32
                w-48
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-300/40
                to-transparent
                "
            />

            {/* ================= Accent Line 2 ================= */}

            <div
                className="
                absolute
                right-0
                bottom-28
                w-56
                h-px
                bg-gradient-to-r
                from-transparent
                via-blue-300/40
                to-transparent
                "
            />

        </div>

    );

};

export default FloatingElements;