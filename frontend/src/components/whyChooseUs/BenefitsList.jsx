import BenefitRow from "./BenefitRow.jsx";
import { benefits } from "../../data/benefits.js";

const BenefitsList = () => {
    return (
        <section className="mt-32">

            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center">

                <h3
                    className="text-4xl md:text-5xl font-bold text-primary"
                >
                    What Makes Us Different?
                </h3>

                <p
                    className="mt-5 text-lg leading-8 text-slate-600"
                >
                    Every healthcare facility depends on reliable biomedical
                    equipment. Our experienced engineers, technical expertise,
                    and customer-first approach ensure that your equipment
                    performs when it matters most.
                </p>

            </div>

            {/* Benefits Container */}
            <div
                className="
                max-w-5xl
                mx-auto
                mt-20
                rounded-[36px]
                bg-white
                border
                border-slate-200
                shadow-[0_20px_70px_rgba(15,23,42,0.06)]
                overflow-hidden
                "
            >

                {benefits.map((benefit, index) => (

                    <BenefitRow
                        key={index}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />

                ))}

            </div>

        </section>
    );
};

export default BenefitsList;