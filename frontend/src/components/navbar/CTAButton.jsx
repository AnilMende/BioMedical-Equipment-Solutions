import { FiPhone } from "react-icons/fi";

const CTAButton = () => {

    return (

        <a
            href="tel:8919977474"
            className="
                hidden
                lg:inline-flex

                items-center
                gap-3

                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                to-cyan-500

                px-5
                py-3

                font-semibold
                text-white

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <FiPhone size={18} />

            Call Now

        </a>

    );

};

export default CTAButton;