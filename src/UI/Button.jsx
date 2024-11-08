import ButtonStile from "./Button.module.css"

function Button (props) {
    

    return(
       <button className={ButtonStile.stile} onClick={props.onClick}>{props.children}</button> 
    )
}

export default Button