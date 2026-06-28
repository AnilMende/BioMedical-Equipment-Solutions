import {
    FiActivity,
    FiHeart,
    FiBriefcase,
    FiShield,
} from "react-icons/fi";

// import doctor1 from "../../assets/testimonials/doctor-1.jpg";
// import doctor2 from "../../assets/testimonials/doctor-2.jpg";
// import director1 from "../../assets/testimonials/director-1.jpg";
// import manager1 from "../../assets/testimonials/manager-1.jpg";

export const testimonials = [
    {
        id: 1,
        name: "Dr. Rajesh Kumar",
        designation: "Chief Biomedical Engineer",
        organization: "City Hospital, Hyderabad",
        image: "",
        rating: 5,
        icon: FiActivity,
        highlight: "24-Hour Response",
        review:
            "Universal Bio-Meds repaired our patient monitors within 24 hours. Their engineers were highly professional, responsive, and ensured minimal equipment downtime.",
    },

    {
        id: 2,
        name: "Dr. Priya Sharma",
        designation: "ICU Administrator",
        organization: "Care Multispeciality Hospital",
        image: "",
        rating: 5,
        icon: FiHeart,
        highlight: "Trusted AMC Partner",
        review:
            "We've relied on Universal Bio-Meds for AMC and preventive maintenance for years. Their service quality and technical expertise have always exceeded our expectations.",
    },

    {
        id: 3,
        name: "Mr. Suresh Patel",
        designation: "Director",
        organization: "Precision Diagnostics",
        image: "",
        rating: 5,
        icon: FiBriefcase,
        highlight: "Cost-Effective Solutions",
        review:
            "Their refurbished biomedical equipment helped us expand our diagnostic centre while staying within budget. Excellent quality and dependable after-sales support.",
    },

    {
        id: 4,
        name: "Dr. Firoz Khan",
        designation: "Hospital Operations Manager",
        organization: "Apollo Medical Centre",
        image: "",
        rating: 5,
        icon: FiShield,
        highlight: "Board-Level Repair Experts",
        review:
            "Whenever our critical equipment requires immediate attention, Universal Bio-Meds responds quickly. Their board-level repair expertise has saved us significant replacement costs.",
    },
];