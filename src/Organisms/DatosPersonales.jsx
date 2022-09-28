import LabelAndInput from "../Molecules/LabelAndInput";
import Fieldset from "../Atoms/Fieldset";

import dataDatosPersonales from "../assets/data/DatosPersonales.json"

function DatosPersonales() {
    return (
            <Fieldset>
                {dataDatosPersonales.map(
                    (data)=>{
                    return ( <LabelAndInput htmlFor={data.htmlFor} id={data.id} name={data.name} type={data.type} text={data.text}/> )
                })}
            </Fieldset>
      
    )
}

export default DatosPersonales;