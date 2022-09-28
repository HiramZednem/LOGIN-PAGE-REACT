import Input from '../Atoms/Input';
import Label from '../Atoms/Label';

function LabelAndInput (props) {
    return (
        <Label htmlFor={props.htmlFor} text={props.text}>
            <Input id={props.id} name={props.name} type={props.type}/>
        </Label>
    )

}

export default LabelAndInput;