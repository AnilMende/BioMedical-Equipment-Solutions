import heroStatsData from "../../data/heroStatsData.js";
import HeroStatCard from "./HeroStatCard.jsx";
import useInView from "../../hooks/useInView.js";

const HeroStats = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.2,
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

                lg:grid-cols-4
            "
        >

            {heroStatsData.map((stat, index) => (

                <div
                    key={stat.id}
                    className={`
                        transition-all duration-700 cursor-pointer

                        ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }
                    `}
                    style={{
                        transitionDelay: `${index * 120}ms`,
                    }}
                >

                    <HeroStatCard stat={stat} />

                </div>

            ))}

        </div>

    );

};

export default HeroStats;