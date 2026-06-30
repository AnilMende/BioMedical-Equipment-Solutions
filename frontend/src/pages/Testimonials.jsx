import Container from "../components/common/Container.jsx";

import TestimonialsHeader from "../components/testimonials/TestimonialsHeader.jsx";
import TestimonialSlider from "../components/testimonials/TestimonialSlider.jsx";

const Testimonials = () => {

    return (
        <section
            id="testimonials"
            className="
            relative
            py-28
            overflow-hidden
            bg-gradient-to-b
            from-white
            via-slate-50
            to-white
            "
        >

            {/* Background Glow */}

            <div
                className="
                absolute
                top-20
                left-1/2
                -translate-x-1/2
                w-[700px]
                h-[700px]
                rounded-full
                bg-blue-300/5
                blur-[140px]
                pointer-events-none
                "
            />

            {/* Decorative Quote */}

            <div
                className="hidden lg:block absolute top-10 left-12 text-[260px] font-black 
                leading-none text-blue-50 select-none pointer-events-none"
            >
                “
            </div>

            <div
                className="hidden lg:block absolute bottom-0 right-12 text-[260px] 
                font-black leading-none  text-blue-50 rotate-180 select-none pointer-events-none"
            >
                “
            </div>

            <Container>

                <TestimonialsHeader />

                <TestimonialSlider />

            </Container>

        </section>
    )
}

export default Testimonials;