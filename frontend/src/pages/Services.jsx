import { services } from "../data/services.js";

import Container from "../components/common/Container.jsx";
import ServiceHeader from "../components/services/ServiceHeader.jsx";
import ServiceCard from "../components/services/ServiceCard.jsx";
import useInView from "../hooks/useInView.js";

const Services = () => {

    const { ref, isVisible } = useInView({
        threshold: 0.15,
        once: true,
    });

    return (
        <section id="services" className="scroll-mt-24 relative overflow-hidden py-20 
        bg-gradient-to-b from-slate-50 via-white to-slate-50">

            {/* Background Glow */}

            <div
                className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl"
            />

            <div
                className="absolute bottom-0 -left-32 h-96 w-96 rounded-full  bg-cyan-200/20 blur-3xl"
            />

            <Container>

                {/* Serive Header */}
                <ServiceHeader />

                {/* Services Card */}
                <div ref={ref} className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-10">
                    {
                        services.map((service, index) => (
                            <div

                                key={index}

                                className={`
                                    transition-all
                                    duration-700
                                    ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                    }
                                `}

                                style={{

                                    transitionDelay: `${index * 120}ms`,

                                }}

                            >
                                <ServiceCard

                                    icon={service.icon}

                                    title={service.title}

                                    description={service.description}

                                />

                            </div>

                        ))
                    }
                </div>

            </Container>

        </section>
    )
}

export default Services;