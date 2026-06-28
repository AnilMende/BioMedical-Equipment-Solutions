import { useEffect, useRef, useState } from "react";

const useInView = ({ threshold = 0.2, once = true } = {}) => {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }

            },
            {
                threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();

    }, [threshold]);

    return { ref, isVisible };

};

export default useInView;