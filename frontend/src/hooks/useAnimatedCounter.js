import { useEffect, useState } from "react";

const useAnimatedCounter = (
    end,
    duration = 2000,
    startAnimation = true
) => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        if (!startAnimation) {
            return;
        }

        let startTimestamp = null;
        let animationFrame;

        const animate = (timestamp) => {

            if (!startTimestamp) {
                startTimestamp = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
            );

            //const current = Math.floor(progress * end);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            const current = Math.floor(easeOutCubic * end);

            setCount(current);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }

        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);

    }, [end, duration, startAnimation]);

    return count;

};

export default useAnimatedCounter;