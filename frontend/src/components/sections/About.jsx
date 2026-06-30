import Container from "../common/Container.jsx";
import AboutHeader from "../about/AboutHeader.jsx";
import AboutContent from "../about/AboutContent.jsx";

const About = () => {

    return (

        <section
            id="about"
            className="
                scroll-mt-24
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-slate-50
                to-white
                py-20
            "
        >

            {/* ================= Background Decoration ================= */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Top Left Glow */}

                <div
                    className="absolute -top-44 -left-44 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl"
                />

                {/* Bottom Right Glow */}

                <div
                    className="absolute -bottom-44 -right-44 h-[460px] w-[460px] rounded-full bg-cyan-100/40 blur-3xl"
                />

                {/* Decorative Ring */}

                <div
                    className="
                        absolute top-32 right-[10%] h-56 w-56 rounded-full border border-blue-100/40 animate-spin-slow"
                />

                {/* Decorative Ring */}

                <div
                    className="absolute bottom-24 left-[8%] h-40 w-40 rounded-full border 
                    border-cyan-100/40 animate-spin-slow-reverse"
                />

            </div>

            {/* ================= Content ================= */}

            <Container>

                <div className="relative z-10">

                    <AboutHeader />

                    <AboutContent />

                </div>

            </Container>

        </section>

    );

};

export default About;