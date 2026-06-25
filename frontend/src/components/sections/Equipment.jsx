import Container from "../common/Container.jsx";
import EquipmentHeader from "../equipment/EquipmentHeader.jsx";
import EquipmentGrid from "../equipment/EquipmentGrid.jsx";

const Equipment = () => {

    return(
        <section id="equipment" className="py-24 bg-white overflow-hidden">

            <Container>

                <EquipmentHeader/>

                <EquipmentGrid/>

            </Container>
        </section>
    )
}

export default Equipment;