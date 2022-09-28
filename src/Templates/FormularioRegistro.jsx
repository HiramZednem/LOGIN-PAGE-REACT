import Form from '../Atoms/Form';
import DatosPersonales from '../Organisms/DatosPersonales';
import TipoCuenta from '../Organisms/TipoCuenta';
import Perfil from '../Organisms/Perfil';
import SubbmitButton from '../Atoms/SubbmitButton';

function FormularioRegistro (options) {
    return (
        <Form>
            <h1>FORMULARIO REGISTRO</h1>
            <h2>DATOS PERSONALES</h2>
            <DatosPersonales />
            <h2>TIPO DE CUENTA</h2>
            <TipoCuenta />
            <h2>PERFIL</h2>
            <Perfil />
            <SubbmitButton />
        </Form>
    )
}

export default FormularioRegistro;