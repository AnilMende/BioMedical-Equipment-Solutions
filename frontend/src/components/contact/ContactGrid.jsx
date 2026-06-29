import ContactCard from "./ContactCard.jsx";
import { contactData } from "../../data/contactData.js";
import useInView from "../../hooks/useInView.js";

const ContactGrid = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.15,
        once: true,
    });

    return (

        <div
            ref={ref}
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                items-stretch
                gap-8
                mt-16
            "
        >

            {contactData.map((contact, index) => (

                <div
                    key={contact.id}
                    className={`
                        h-full
                        transition-all
                        duration-700

                        ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }
                    `}
                    style={{
                        transitionDelay: `${index * 120}ms`,
                    }}
                >

                    <ContactCard {...contact} />

                </div>

            ))}

        </div>

    );

};

export default ContactGrid;