import { equipmentData } from "../../data/equipmentData.js";
import EquipmentCard from "./EquipmentCard.jsx";


const EquipmentGrid = () => {

    return (
        <div className="grid mg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                equipmentData.map((item, index) => (
                    <EquipmentCard
                        key={index}
                        image={item.image}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
        </div>
    )
}

export default EquipmentGrid;