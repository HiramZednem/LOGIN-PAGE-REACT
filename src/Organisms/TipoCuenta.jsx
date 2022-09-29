import LabelAndInputTextAfter from "../Molecules/LabelAndInputTextAfter";
import Fieldset from "../Atoms/Fieldset";

import dataTipoCuenta from "../assets/data/TipoCuenta.json"

function TipoCuenta() {
     return (
        <Fieldset>
            {dataTipoCuenta.map(
                (data)=>{
                return ( <LabelAndInputTextAfter 
                    htmlFor={data.htmlFor} 
                    id={data.id} 
                    name={data.name} 
                    type={data.type} 
                    text={data.text} 
                    className={data.className}/> )
            })}
        </Fieldset>
    
      )
}
export default TipoCuenta;