// import { useState } from "react";
import stiles from "./Okno.module.css"

function Okno (props) {

    

    return (
        <div tabIndex="0" className={stiles.div}>
      <img onDoubleClick={props.openFormHendler} className={stiles.formImage} src="https://play-lh.googleusercontent.com/8hKFmelBBrQuSZhG65MvNEoQSbnxUtwAgYSH8_CUAa0hHNoptLoLfTBoWLVxSCGC1A" alt="kartinka"></img>
      <p>Gmail</p>
      </div>

    )
}

export default Okno