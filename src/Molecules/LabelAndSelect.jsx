
import Label from "../Atoms/Label";
import Select from "../Atoms/Select";

function LabelAndSelect (props) {
    return (
        <Label htmlFor={props.htmlFor} text={props.text}>
            <Select>
                {props.children}
            </Select>
        </Label>
    )
}

export default LabelAndSelect;



        