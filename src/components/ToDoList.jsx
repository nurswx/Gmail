import ToDoListStile from "./ToDoList.module.css"

function ToDoList (props) {
    
    let nurs = "NoN"

    let nurs2 = "NoN"

    return(
        <div className={ToDoListStile.globalDiv}>
            <h2 className={ToDoListStile.giveDiv}>Добавленные аккаунты:</h2>
            <div className={ToDoListStile.smallDiv}>
                <h3 style={{margin:0}}>Email:{` ${nurs}`}</h3>
                <h3 style={{margin:0}}>password:{` ${nurs2}`}</h3>
            </div>
        </div>
    )
}

export default ToDoList



