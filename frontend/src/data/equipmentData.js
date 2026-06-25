import {
    FiMonitor,FiActivity,FiHeart,FiCpu,FiCrosshair,FiThermometer,FiDatabase,FiGrid,
    FiLayers,FiPackage,FiTool,FiBox,FiArchive,FiHome,FiZap,
} from "react-icons/fi";


import patientMonitor from "../assets/equipmentimages/pm-image.png";
import Ventilator from "../assets/equipmentimages/modern-ventilator.png";
import ecgMachine from "../assets/equipmentimages/ecg-machine.png";
import Defibrilators from "../assets/equipmentimages/defibrilators.png";
import SyringePump from "../assets/equipmentimages/syringe-pumps.png";
import infusionPump from "../assets/equipmentimages/infusion-pump.png";
import AnesthesiaMission from "../assets/equipmentimages/anesthisia-Workstation.png";
import icuEquipment from "../assets/equipmentimages/icu-equipment.png";
import otEquipment from "../assets/equipmentimages/ot-equipment.png";
import Xraymachine from "../assets/equipmentimages/xray-machine.png";
import UltraSoundSystem from "../assets/equipmentimages/ultrasound-systems.png";
import HematologyAnalyzer from "../assets/equipmentimages/hematology-analyzer.png";
import BloodBank from "../assets/equipmentimages/bloodbank-equipment.png";
import HospitalBed from "../assets/equipmentimages/hospital-bed.png";
import MedicalGas from "../assets/equipmentimages/medical-gas.png";
import OTSolutions from "../assets/equipmentimages/surgical-setup.png";

export const equipmentData = [
    {
        icon: FiMonitor,
        image : patientMonitor,
        title: "Patient Monitors",
        description: "Advanced monitoring of vital patient parameters.",
    },
    {
        icon: FiActivity,
        image : Ventilator,
        title: "Ventilators",
        description: "Reliable respiratory support systems for critical care.",
    },
    {
        icon: FiHeart,
        image : ecgMachine,
        title: "ECG Machines",
        description: "Accurate cardiac monitoring and diagnostics.",
    },
    {
        icon: FiZap,
        image : Defibrilators,
        title: "Defibrillators",
        description: "Life-saving emergency cardiac care equipment.",
    },
    {
        icon: FiCpu,
        image : SyringePump,
        title: "Syringe Pumps",
        description: "Precise medication delivery systems.",
    },
    {
        icon: FiCrosshair,
        image : infusionPump,
        title: "Infusion Pumps",
        description: "Controlled fluid and drug administration.",
    },
    {
        icon: FiThermometer,
        image : AnesthesiaMission,
        title: "Anesthesia Workstations",
        description: "Safe anesthesia delivery and monitoring.",
    },
    {
        icon: FiGrid,
        image : icuEquipment,
        title: "ICU Equipment",
        description: "Critical care solutions for intensive care units.",
    },
    {
        icon: FiLayers,
        image : otEquipment,
        title: "OT Equipment",
        description: "Operation theatre equipment and support systems.",
    },
    {
        icon: FiPackage,
        image : Xraymachine,
        title: "X-Ray Machines",
        description: "Diagnostic imaging solutions.",
    },
    {
        icon: FiBox,
        image : UltraSoundSystem,
        title: "Ultrasound Systems",
        description: "High-performance imaging and diagnostics.",
    },
    {
        icon: FiDatabase,
        image : HematologyAnalyzer,
        title: "Laboratory Equipment",
        description: "Reliable testing and analysis systems.",
    },
    {
        icon: FiArchive,
        image : BloodBank,
        title: "Blood Bank Equipment",
        description: "Storage and preservation solutions.",
    },
    {
        icon: FiHome,
        image : HospitalBed,
        title: "Hospital Furniture",
        description: "Essential furniture for healthcare facilities.",
    },
    {
        icon: FiTool,
        image : MedicalGas,
        title: "Medical Gas Equipment",
        description: "Safe medical gas delivery and management.",
    },
    {
        icon : FiGrid,
        image : OTSolutions,
        title : "Operation Theatre Solutions",
        description : "Complete operation theatre equipment setup, installation, maintenance and support services."
    }
];