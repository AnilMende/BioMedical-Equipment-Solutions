import Container from "../common/Container.jsx";
import ContactGrid from "../contact/ContactGrid.jsx";
import ContactHeader from "../contact/ContactHeader.jsx";

const Contact = () => {

    return (
        <section id="contact" className="scroll-mt-24 relative overflow-hidden py-20 bg-gradient-to-b
         from-slate-50 via-white to-slate-50">

            {/* Background decoration */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Top Left Glow */}

                <div
                    className="
                        absolute
                        -top-40
                        -left-40
                        w-[420px]
                        h-[420px]
                        rounded-full
                        bg-blue-100/30
                        blur-3xl
                    "
                />

                {/* Bottom Right Glow */}

                <div
                    className="
                        absolute
                        -bottom-44
                        -right-44
                        w-[460px]
                        h-[460px]
                        rounded-full
                        bg-cyan-100/30
                        blur-3xl
                    "
                />

            </div>

            <Container>

                <ContactHeader />

                <ContactGrid/>

                {/* <div className="relative z-10">
                    <ContactHeader />

                </div> */}

            </Container>

        </section>
    )
}

export default Contact;