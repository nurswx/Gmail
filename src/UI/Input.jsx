import InputStile from "./Input.module.css"

function Input (props) {
    

    return(
        <input onChange={props.onChange} value={props.value} placeholder={props.placeholder} type={props.type} className={InputStile.stile}></input>
    )
}

export default Input