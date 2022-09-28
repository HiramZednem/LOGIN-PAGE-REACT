
function TipoCuenta() {
     return (
        <fieldset>
            <label htmlFor="personal-account">
                <input id="student-account" type="radio" name="account-type" className="inline" /> 
                Estudiante
            </label>
            <label htmlFor="business-account">
                <input id="teacher-account" type="radio" name="account-type" className="inline" /> 
                Profesor
            </label>
            <label htmlFor="terms-and-conditions" name="terms-and-conditions">
            <input id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" className="inline" /> 
            Yo acepto los <a href="https://www.upchiapas.edu.mx/">terminos y condiciones</a>
            </label>
        </fieldset>
      )
}
export default TipoCuenta;