
import Container from "../components/common/Container.jsx";
import CTAContent from "../components/calltoaction/CTAContent.jsx";
import FloatingElements from "../components/calltoaction/FloatingElements.jsx";
import TrustHighlights from "../components/calltoaction/TrustHighlights.jsx";
import CTAButtons from "../components/calltoaction/CTAButtons.jsx";

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