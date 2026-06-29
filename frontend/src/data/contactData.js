import { FiPhone, FiMessageCircle, FiInstagram, FiMapPin,} from "react-icons/fi";

export const contactData = [
    {
        id: 1,

        title: "Call Now",

        subtitle: "+91 98765 43210",

        description:
            "Speak directly with our biomedical service team.",

        icon: FiPhone,

        href: "tel:+919876543210",

        accent: "blue",
    },

    {
        id: 2,

        title: "WhatsApp",

        subtitle: "Chat with our team",

        description:
            "Connect instantly with our support engineers for quick assistance.",

        icon: FiMessageCircle,

        href: "https://wa.me/919876543210",

        accent: "green",
    },

    {
        id: 3,

        title: "Location",

        subtitle: "Hyderabad, Telangana",

        description:
            "Visit our office or open the location directly in Google Maps.",

        icon: FiMapPin,

        href: "https://maps.google.com",

        accent: "cyan",
    },

    {
        id: 4,

        title: "Instagram",

        subtitle: "@universal_biomeds",

        description:
            "Follow us for updates, projects and the latest biomedical solutions.",

        icon: FiInstagram,

        href: "https://instagram.com/universal_biomeds",

        accent: "instagram",
    },
];