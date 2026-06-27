import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProcessNode from "./ProcessNode.jsx";
import ProcessCard from "./ProcessCard.jsx";
import { processData } from "../../data/processData.js";

const ProcessTimeline = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        let frame;
        let start;

        const duration = 8000;

        const animate = (time) => {

            if (!start) start = time;

            const elapsed = (time - start) % duration;

            setProgress(elapsed / duration);

            frame = requestAnimationFrame(animate);

        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);

    }, []);

    const total = processData.length;

    const activeStep = Math.min(
        total - 1,
        Math.floor(progress * total)
    );

    return (

        <div className="relative mt-24">

            {/* ====================== DESKTOP ====================== */}

            <div className="hidden lg:block relative">

                {/* Base Line */}

                <div
                    className="
                    absolute
                    top:92px
                    left-[10%]
                    right-[10%]
                    h-1
                    rounded-full
                    bg-slate-200
                    "
                />

                {/* Filled Line */}

                <motion.div
                    className="
                    absolute
                    top:92px
                    left-[10%]
                    h-1
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-400
                    to-blue-600
                    "
                    style={{
                        width: `${progress * 80}%`,
                    }}
                />

                {/* Moving Service Orb */}

                <motion.div
                    className="
                    absolute
                    top:92px
                    left-[10%]
                    -translate-y-1/2
                    z-30
                    "
                    style={{
                        left: `calc(${10 + progress * 80}% - 14px)`
                    }}
                >

                    {/* Glow */}

                    <div
                        className="
                        absolute
                        -inset-6
                        rounded-full
                        bg-blue-500/20
                        blur-2xl
                        "
                    />

                    {/* Trail */}

                    <div
                        className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        w-24
                        h-2
                        rounded-full
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-300
                        to-blue-500
                        blur-md
                        "
                    />

                    {/* Orb */}

                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.4
                        }}
                        className="
                        relative
                        w-6
                        h-6
                        rounded-full
                        bg-blue-600
                        shadow-[0_0_35px_18px_rgba(37,99,235,0.45)]
                        "
                    />

                </motion.div>

                {/* ================= Timeline Grid ================= */}

                <div
                    className="
                    relative
                    grid
                    grid-cols-5
                    gap-6
                    "
                >

                    {processData.map((step, index) => {

                        const active = index === activeStep;

                        const completed = index < activeStep;

                        const top = index % 2 === 1;

                        return (

                            <div
                                key={index}
                                className="
                                relative
                                flex
                                flex-col
                                items-center
                                "
                            >

                                {/* ---------- TOP CARD ---------- */}

                                {top && (

                                    <>

                                        <ProcessCard
                                            {...step}
                                            active={active}
                                            completed={completed}
                                        />

                                        <div
                                            className="
                                            h-16
                                            w-[2px]
                                            bg-slate-300
                                            "
                                        />

                                    </>

                                )}

                                {/* ---------- NODE ---------- */}

                                <ProcessNode
                                    icon={step.icon}
                                    active={active}
                                    completed={completed}
                                />

                                {/* ---------- BOTTOM CARD ---------- */}

                                {!top && (

                                    <>

                                        <div
                                            className="
                                            h-16
                                            w-[2px]
                                            bg-slate-300
                                            "
                                        />

                                        <ProcessCard
                                            {...step}
                                            active={active}
                                            completed={completed}
                                        />

                                    </>

                                )}

                            </div>

                        );

                    })}

                </div>

            </div>

            {/* ====================== MOBILE ====================== */}

            <div className="lg:hidden relative">

                {/* Vertical Line */}

                <div
                    className="
                    absolute
                    left-9
                    top-0
                    bottom-0
                    w-[4px]
                    rounded-full
                    bg-slate-200
                    "
                />

                {/* Filled */}

                <div
                    className="
                    absolute
                    left-9
                    top-0
                    w-[4px]
                    rounded-full
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

                <motion.div
                    className="
                    absolute
                    left-9
                    -translate-x-1/2
                    z-20
                    "
                    style={{
                        top: `${progress * 100}%`
                    }}
                >

                    <div
                        className="
                        absolute
                        -inset-5
                        rounded-full
                        bg-blue-500/20
                        blur-xl
                        "
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.4
                        }}
                        className="
                        w-5
                        h-5
                        rounded-full
                        bg-blue-600
                        shadow-[0_0_30px_15px_rgba(37,99,235,0.45)]
                        "
                    />

                </motion.div>

                <div className="space-y-20">

                    {processData.map((step, index) => {

                        const active = index === activeStep;

                        const completed = index < activeStep;

                        return (

                            <div
                                key={index}
                                className="
                                relative
                                pl-24
                                "
                            >

                                <div
                                    className="
                                    absolute
                                    left-0
                                    top-10
                                    "
                                >

                                    <ProcessNode
                                        icon={step.icon}
                                        active={active}
                                        completed={completed}
                                    />

                                </div>

                                <ProcessCard
                                    {...step}
                                    active={active}
                                    completed={completed}
                                />

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>

    );

};

export default ProcessTimeline;