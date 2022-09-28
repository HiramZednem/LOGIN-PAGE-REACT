
function Label (props) {
    return (
        <label htmlFor={props.htmlFor}>
            {props.text}
            {props.children}
        </label>
    )
}

export default Label;