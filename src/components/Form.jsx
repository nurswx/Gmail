import { useState } from "react"
import Button from "../UI/Button"
import Input from "../UI/Input"
import FormStile from "./Form.module.css"

function Form (props) {
    
    let [email , setEmail] = useState("")

    let submitHendler = (e) => {
        e.preventDefault()
    }

    let emailStateCenge = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    return(
   <form onSubmit={submitHendler} className={FormStile.form}>
    <div className={FormStile.div}>
    <h1>Gmail</h1>
    </div>
    <Input onChange={emailStateCenge} value={setEmail} placeholder={"Gmail"} type={"gmail"}/>
    <Input placeholder={"Password"} type={"password"}/>
    <div className={FormStile.buttonDiv}>
        <Button onClick={props.closForm}>close</Button>
        <Button>add</Button>
    </div>
   </form>
    )
}

export default Form