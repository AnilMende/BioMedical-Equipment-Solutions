import { useState } from "react";

import FAQItem from "./FAQItem.jsx";
import { faqData } from "../../data/faqData.js";
import useInView from "../../hooks/useInView.js";

const FAQAccordion = () => {

    const [openId, setOpenId] = useState(1);

    const { ref, isVisible } = useInView({
        threshold: 0.15,
        once: true,
    });

    const handleToggle = (id) => {

        setOpenId((prev) => (prev === id ? null : id));

    };

    return (

        <div
            ref={ref}
            className="space-y-6"
        >

            {faqData.map((faq, index) => (

                <div
                    key={faq.id}
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

                    <FAQItem
                        {...faq}
                        isOpen={openId === faq.id}
                        onClick={() => handleToggle(faq.id)}
                    />

                </div>

            ))}

        </div>

    );

};

export default FAQAccordion;