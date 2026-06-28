import CTAButtons from "../calltoaction/CTAButtons.jsx";
import CTAContent from "../calltoaction/CTAContent.jsx";
import FloatingElements from "../calltoaction/FloatingElements.jsx";
import TrustHighlights from "../calltoaction/TrustHighlights.jsx";
import Container from "../common/Container.jsx";

const CallToAction = () => {

    return (
        <section id="contact-cta" className="relative overflow-hidden py-32 bg-gradient-to-br from-[#0F172A]
            via-[#1E3A8A] to-[#0F172A]"
        >
            <FloatingElements />

            <Container>

                <div className="relative z-10 max-w-5xl mx-auto text-center">

                    <CTAContent />

                    <TrustHighlights />

                    <CTAButtons />
                </div>
            </Container>

        </section>
    )
}

export default CallToAction;