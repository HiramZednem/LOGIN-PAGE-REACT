
function DatosPersonales() {
    return (
        <fieldset>
            <label htmlFor="first-name">Nombre <input id="first-name" name="first-name" type="text" required /></label>
            <label htmlFor="last-name">Apellido: <input id="last-name" name="last-name" type="text" required /></label>
            <label htmlFor="email">Correo Electronico: <input id="email" name="email" type="email" required /></label>
            <label htmlFor="new-password">Contraseña: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
        </fieldset>
    )
}

export default DatosPersonales;