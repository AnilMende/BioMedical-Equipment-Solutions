import Container from "../components/common/Container.jsx";
import FAQAccordion from "../components/faq/FAQAccordion.jsx";
import FAQHeader from "../components/faq/FAQHeader.jsx";


const FAQSection = () => {

    return (

        <section id="faq" className="relative overflow-hidden py-28 bg-gradient-to-b from-white via-slate-50 to-white">

            {/* Background decoration */}
            <div
                className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-[900px]
                h-[900px]
                rounded-full
                bg-blue-100/20
                blur-3xl
                pointer-events-none
                "
            />

            <Container>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Left */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28">
                        <FAQHeader />
                    </div>

                    <div
                        className="lg:col-span-8 lg:border-l lg:border-slate-200 lg:pl-12">

                        <FAQAccordion />

                    </div>

                </div>

            </Container>



        </section>
    )
}

export default FAQSection;