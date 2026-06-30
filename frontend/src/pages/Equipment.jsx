
import Container from "../components/common/Container.jsx";
import EquipmentHeader from "../components/equipment/EquipmentHeader.jsx";
import EquipmentGrid from "../components/equipment/EquipmentGrid.jsx";

const Equipment = () => {

    return(
        <section id="equipment" className="scroll-mt-24 py-24 bg-white overflow-hidden">

            <Container>

                <EquipmentHeader/>

                <EquipmentGrid/>

            </Container>
        </section>
    )
}

export default Equipment;