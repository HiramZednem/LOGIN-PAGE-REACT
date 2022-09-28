
function Perfil() {
  return (
    <fieldset>
      <label htmlFor="profile-picture">Foto de perfil: <input id="profile-picture" type="file" name="file" /></label>
      <label htmlFor="age">Edad: <input id="age" type="number" name="age" min="13" max="120" /></label>
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
      </label>
    </fieldset>
  )
}
export default Perfil;