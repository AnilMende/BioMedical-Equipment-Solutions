import Container from "../components/common/Container.jsx";
import ProcessHeader from "../components/ServiceProcess/ProcessHeader.jsx";
import ProcessTimeline from "../components/ServiceProcess/ProcessTimeline.jsx";

const ServiceProcess = () => {

    return (

        <section
            id="process"
            className="
                scroll-mt-24
                relative
                py-20
                overflow-hidden
                bg-gradient-to-b
                from-slate-50
                via-white
                to-slate-50
            "
        >

            {/* Background Glow */}

            <div
                className="
                    absolute
                    top-20
                    left-1/2
                    -translate-x-1/2
                    w-[900px]
                    h-[900px]
                    rounded-full
                    bg-blue-500/5
                    blur-[180px]
                    pointer-events-none
                "
            />

            {/* Decorative Grid */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.04]
                    bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)]
                    bg-[length:30px_30px]
                    pointer-events-none
                "
            />

            <Container>

                <div className="relative z-10">

                    <ProcessHeader />

                    <div className="mt-20">

                        <ProcessTimeline />

                    </div>

                </div>

            </Container>

        </section>

    );

};

export default ServiceProcess;