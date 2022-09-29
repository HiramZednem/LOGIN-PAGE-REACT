import LabelAndInputTextBefore from "../Molecules/LabelAndInputTextBefore";
import LabelAndSelect from "../Molecules/LabelAndSelect";
import LabelAndTextarea from "../Molecules/LabelAndTextarea";

import dataPerfil from "../assets/data/Perfil.json"

function Perfil() {
  return (
    <fieldset>
      {/* 
      <label htmlFor="referrer">Carrera
        <select id="referrer" name="referrer">
          <option value="">seleccionar carrera</option>
          <option value="1">Software</option>
          <option value="2">Biomedica</option>
          <option value="3">Mecatronica</option>
          <option value="4">Energia</option>
        </select>
      </label>

      <label htmlFor="bio">Biografia:
        <textarea id="bio" name="bio" rows="3" cols="30" placeholder="Quiero estudiar, graduarme y trabajar para las mejores empresas del mundo..."></textarea>
      </label> */}

      {dataPerfil.map(
              ( data ) => {
              return ( 
              <LabelAndInputTextBefore 
                htmlFor={data.htmlFor} 
                id={data.id} 
                name={data.name} 
                type={data.type} 
                text={data.text} 
                className={data.className}/> )
          })}

      <LabelAndSelect text="Carrera:">
        <option value="">seleccionar carrera</option>
        <option value="1">Software</option>
        <option value="2">Biomedica</option>
        <option value="3">Mecatronica</option>
        <option value="4">Energia</option>
      </LabelAndSelect>

      <LabelAndTextarea 
      id="bio" 
      name="bio" 
      rows="3" 
      cols="30" 
      placeholder="Quiero estudiar, graduarme y trabajar para las mejores empresas del mundo..." 
      text="Biografia:"/>
    
    </fieldset>
  )
}
export default Perfil;