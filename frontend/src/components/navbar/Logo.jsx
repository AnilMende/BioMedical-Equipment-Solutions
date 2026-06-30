const Logo = () => {

    return (

        <a
            href="#home"
            className="
                flex
                flex-col
                transition-transform
                duration-300
                hover:scale-[1.02]
            "
        >

            <h1
                className="
                    text-xl
                    sm:text-2xl

                    font-black

                    tracking-tight

                    bg-gradient-to-r
                    from-blue-700
                    via-blue-600
                    to-cyan-500

                    bg-clip-text
                    text-transparent
                "
            >
                Universal Bio-Meds
            </h1>

            <span
                className="
                    mt-0.5

                    text-[10px]
                    sm:text-xs

                    font-medium

                    tracking-wide

                    text-slate-500
                "
            >
                Biomedical Equipment Solutions
            </span>

        </a>

    );

};

export default Logo;