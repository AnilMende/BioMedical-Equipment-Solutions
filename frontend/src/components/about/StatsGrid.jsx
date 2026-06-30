import statsData from "../../data/statsData.js";
import StatCard from "./StatCard.jsx";
import useInView from "../../hooks/useInView.js";

const StatsGrid = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.15,
        once: true,
    });

    return (

        <div
            ref={ref}
            className="
                mt-10
                grid
                grid-cols-2
                gap-5
            "
        >

            {statsData.map((stat, index) => (

                <div
                    key={stat.id}
                    className={`
                        transition-all
                        duration-700

                        ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }
                    `}
                    style={{
                        transitionDelay: `${index * 120}ms`,
                    }}
                >

                    <StatCard stat={stat} />

                </div>

            ))}

        </div>

    );

};

export default StatsGrid;