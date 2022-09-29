import Input from '../Atoms/Input';
import Label from '../Atoms/Label';

function LabelAndInputTextAfter (props) {
    return (
        <Label htmlFor={props.htmlFor} text={props.text}>
            <Input id={props.id} name={props.name} type={props.type} className={props.className}/>
        </Label>
    )

}

export default LabelAndInputTextAfter;