import { useEffect, useState } from "react";
import { processData } from "../../data/processData.js";
import ProcessStep from "./ProcessStep.jsx";


const ProcessTime = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        let animationFrame;
        let startTime;

        const duration = 7000; // 7 seconds for one full journey

        const animate = (time) => {

            if (!startTime) startTime = time;

            const elapsed = (time - startTime) % duration;

            setProgress(elapsed / duration);

            animationFrame = requestAnimationFrame(animate);

        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);

    }, []);

    const totalSteps = processData.length;

    const activeStep = Math.min(
        totalSteps - 1,
        Math.floor(progress * totalSteps)
    );

    return (

        <div className="relative mt-24">

            {/* ===================== DESKTOP ===================== */}

            <div className="hidden lg:block relative">

                {/* Timeline */}
                <div
                    className="
                    absolute
                    top-12
                    left-[10%]
                    right-[10%]
                    h-1
                    rounded-full
                    overflow-visible
                    "
                >

                    {/* Base Line */}
                    <div
                        className="
                        absolute
                        inset-0
                        rounded-full
                        bg-slate-200
                        "
                    />

                    {/* Filled Line */}
                    <div
                        className="
                        absolute
                        left-0
                        top-0
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        via-cyan-400
                        to-blue-600
                        "
                        style={{
                            width: `${progress * 100}%`
                        }}
                    />

                    {/* Moving Glow */}
                    <div
                        className="
                        absolute
                        top-1/2
                        -translate-y-1/2
                        pointer-events-none
                        "
                        style={{
                            left: `calc(${progress * 100}% - 12px)`
                        }}
                    >

                        {/* Large Glow */}
                        <div
                            className="
                            absolute
                            -left-8
                            -top-8
                            w-20
                            h-20
                            rounded-full
                            bg-blue-500/20
                            blur-3xl
                            "
                        />

                        {/* Medium Glow */}
                        <div
                            className="
                            absolute
                            -left-2
                            -top-2
                            w-10
                            h-10
                            rounded-full
                            bg-cyan-400/40
                            blur-xl
                            "
                        />

                        {/* Trail */}
                        <div
                            className="
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            w-36
                            h-3
                            rounded-full
                            bg-gradient-to-r
                            from-transparent
                            via-cyan-300/80
                            to-blue-500
                            blur-md
                            "
                        />

                        {/* Sparkles */}
                        <div
                            className="
                            absolute
                            -left-3
                            top-1/2
                            -translate-y-1/2
                            flex
                            gap-1
                            "
                        >
                            <div className="w-1 h-1 rounded-full bg-cyan-300 opacity-80" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-60" />
                            <div className="w-2 h-2 rounded-full bg-blue-200 opacity-40" />
                        </div>

                        {/* Main Orb */}
                        <div
                            className="
                            relative
                            w-5
                            h-5
                            rounded-full
                            bg-blue-600
                            animate-pulse
                            shadow-[0_0_30px_15px_rgba(37,99,235,0.55)]
                            "
                        />

                    </div>

                </div>

                {/* Process Steps */}
                <div
                    className="
                    relative
                    grid
                    grid-cols-5
                    gap-8
                    "
                >

                    {processData.map((step, index) => (

                        <ProcessStep
                            key={index}
                            {...step}
                            active={index === activeStep}
                            className={
                                index % 2 === 0
                                    ? "mt-0"
                                    : "mt-24"
                            }
                        />

                    ))}

                </div>

            </div>

            {/* ===================== MOBILE ===================== */}

            <div className="relative lg:hidden">

                {/* Vertical Line */}
                <div
                    className="
                    absolute
                    left-12
                    top-0
                    bottom-0
                    w-1
                    rounded-full
                    bg-slate-200
                    overflow-hidden
                    "
                >

                    {/* Filled Line */}
                    <div
                        className="
                        absolute
                        left-0
                        top-0
                        w-full
                        bg-gradient-to-b
                        from-blue-600
                        via-cyan-400
                        to-blue-600
                        "
                        style={{
                            height: `${progress * 100}%`
                        }}
                    />

                    {/* Glow */}
                    <div
                        className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        "
                        style={{
                            top: `calc(${progress * 100}% - 12px)`
                        }}
                    >

                        <div
                            className="
                            absolute
                            -left-8
                            -top-8
                            w-20
                            h-20
                            rounded-full
                            bg-blue-500/20
                            blur-3xl
                            "
                        />

                        <div
                            className="
                            absolute
                            -left-2
                            -top-2
                            w-10
                            h-10
                            rounded-full
                            bg-cyan-400/40
                            blur-xl
                            "
                        />

                        <div
                            className="
                            relative
                            w-6
                            h-6
                            rounded-full
                            bg-blue-600
                            animate-pulse
                            shadow-[0_0_25px_10px_rgba(37,99,235,0.55)]
                            "
                        />

                    </div>

                </div>

                <div className="space-y-20">

                    {processData.map((step, index) => (

                        <div
                            key={index}
                            className="relative pl-24"
                        >

                            <ProcessStep
                                {...step}
                                active={index === activeStep}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

};

export default ProcessTime;