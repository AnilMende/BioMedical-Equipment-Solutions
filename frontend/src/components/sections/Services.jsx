import { services } from "../../data/services.js";
import Container from "../common/Container.jsx"
import ServiceHeader from "../services/ServiceHeader.jsx"
import ServiceCard from "../services/ServiceCard.jsx";
import ServiceHighlights from "../services/ServiceHighlights.jsx";

const Services = () => {

    return (
        <section id="services" className="py-24 bg-slate-50">

            <Container>

                {/* Serive Header */}
                <ServiceHeader />

                {/* Services Card */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {
                        services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))
                    }
                </div>

                {/* Service Highlights */}
                {/* <ServiceHighlights/> */}

            </Container>

        </section>
    )
}

export default Services;