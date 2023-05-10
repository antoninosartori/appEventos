import Titulo from "../components/Titulo";
import Input from "../components/Input";

const BuscarViajeForm = () => {
    return (
        <>
            <Titulo nombre="AppViajes" />
            <Input
                labelName="Donde estas?"
                name="lugarSalida"
                placeholder="donde estas?"
            />
            <Input
                labelName="A donde queres ir?"
                name="lugarLlegada"
                placeholder="a donde queres llegar?"
            />
        </>
    );
};

export default BuscarViajeForm;
