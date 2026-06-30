import { useEffect, useState } from "react";
import navbarData from "../data/navbarData.js";

const NAVBAR_HEIGHT = 90;

const useActiveSection = () => {

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const sections = navbarData
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const updateActiveSection = () => {

            const viewportCenter =
                window.innerHeight / 2;

            let closestSection = sections[0];

            let smallestDistance = Number.POSITIVE_INFINITY;

            sections.forEach((section) => {

                const rect = section.getBoundingClientRect();

                const sectionCenter =
                    rect.top + rect.height / 2;

                const distance =
                    Math.abs(sectionCenter - viewportCenter);

                if (distance < smallestDistance) {

                    smallestDistance = distance;

                    closestSection = section;

                }

            });

            if (closestSection) {

                setActiveSection(closestSection.id);

            }

        };

        let ticking = false;

        const handleScroll = () => {

            if (!ticking) {

                requestAnimationFrame(() => {

                    updateActiveSection();

                    ticking = false;

                });

                ticking = true;

            }

        };

        updateActiveSection();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", updateActiveSection);

        return () => {

            window.removeEventListener("scroll", handleScroll);

            window.removeEventListener("resize", updateActiveSection);

        };

    }, []);

    return activeSection;

};

export default useActiveSection;