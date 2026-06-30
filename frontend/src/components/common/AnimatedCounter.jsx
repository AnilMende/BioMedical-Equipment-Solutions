import useAnimatedCounter from "../../hooks/useAnimatedCounter.js";

const AnimatedCounter = ({
    end,
    suffix = "",
    duration = 2000,
    startAnimation = true,
}) => {

    const count = useAnimatedCounter(
        end,
        duration,
        startAnimation
    );

    return (
        <>
            {count}
            {suffix}
        </>
    );

};

export default AnimatedCounter;