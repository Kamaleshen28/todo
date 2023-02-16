import React from "react"


export default function Todo(props) {
    const displayTaskList = props.taskList.map(task => <p>{task}</p>)

    return (
        <div>
            {displayTaskList}
        </div>
    )
}