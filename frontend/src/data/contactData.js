
import { FiPhoneCall, FiMessageCircle, FiMapPin, FiInstagram,} from "react-icons/fi";

export const contactData = [

    {
        id: 1,
        title: "Call Now",
        subtitle: "+91 98765 43210",
        description: "Speak directly with our biomedical service team.",
        icon: FiPhoneCall,
        href: "tel:+919876543210",
        accent: "blue",
    },

    {
        id: 2,
        title: "WhatsApp",
        subtitle: "+91 98765 43210",
        description: "Chat with us and share equipment details instantly.",
        icon: FiMessageCircle,
        href: "https://wa.me/919876543210?text=Hello,%20I%20need%20biomedical%20equipment%20service.",
        accent: "green",
    },

    {
        id: 3,
        title: "Visit Us",
        subtitle: "Hyderabad, Telangana",
        description: "Find our office location on Google Maps.",
        icon: FiMapPin,
        href: "https://maps.google.com/?q=Hyderabad",
        accent: "cyan",
    },

    {
        id: 4,
        title: "Instagram",
        subtitle: "@your_instagram",
        description: "Follow us for updates and recent projects.",
        icon: FiInstagram,
        href: "https://instagram.com/your_instagram",
        accent: "instagram",
    },

];