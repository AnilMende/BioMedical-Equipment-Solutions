
const NavLink = ({
    link,
    activeSection,
    onNavigate,
    className = "",
}) => {

    const isActive =
        activeSection === link.href.replace("#", "");

    const handleClick = (e) => {

        e.preventDefault();

        onNavigate(link.href);

    };

    return (

        <a
            href={link.href}
            onClick={handleClick}
            className={`
                group
                relative
                inline-flex
                items-center

                py-2

                font-semibold
                tracking-wide

                transition-colors
                duration-300

                ${
                    isActive
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                }

                ${className}
            `}
        >

            {link.name}

            {/* Hover Underline */}

            {!isActive && (

                <span
                    className="
                        absolute
                        left-0
                        -bottom-1

                        h-[2px]
                        w-0

                        rounded-full

                        bg-blue-300

                        transition-all
                        duration-300

                        group-hover:w-full
                    "
                />

            )}

        </a>

    );

};

export default NavLink;