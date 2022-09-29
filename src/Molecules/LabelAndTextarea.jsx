import Textarea from "../Atoms/Textarea"
import Label from "../Atoms/Label";

function LabelAndTextarea (props) {
    return (
    <Label>
        {props.text}
        <Textarea {...props}/>
    </Label>
    )
}

export default LabelAndTextarea;