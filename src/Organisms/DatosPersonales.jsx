import LabelAndInputTextBefore from "../Molecules/LabelAndInputTextBefore";
import Fieldset from "../Atoms/Fieldset";

import dataDatosPersonales from "../assets/data/DatosPersonales.json"

function DatosPersonales() {
    return (
            <Fieldset>
                {dataDatosPersonales.map(
                    (data)=>{
                    return ( <LabelAndInputTextBefore htmlFor={data.htmlFor} id={data.id} name={data.name} type={data.type} text={data.text}/> )
                })}
            </Fieldset>
    )
}

export default DatosPersonales;