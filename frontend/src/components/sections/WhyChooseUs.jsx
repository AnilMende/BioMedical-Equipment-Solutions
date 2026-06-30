import Container from "../common/Container.jsx";
import BenefitsList from "../whyChooseUs/BenefitsList.jsx";
import TrustImage from "../whyChooseUs/TrustImage.jsx";
import WhyChooseHeader from "../whyChooseUs/WhyChooseHeader.jsx";


const WhyChooseUs = () => {

    return(
        <section id="why-us" className="scroll-mt-24 relative py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">

             {/* Background Glow */}

            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
                rounded-full bg-blue-500/5 blur-[180px] -z-10"
            />

            <Container>

                <WhyChooseHeader/>

                <TrustImage/>

                <BenefitsList/>

            </Container>
            
        </section>
    )
}

export default WhyChooseUs;