import React from "react"
import Input from "./Input"
import DisplayTask from "./DisplayTask"


export default function Todo() {
    const [taskList, setTaskList] = React.useState([])

    const updateTaskList = (item) => {
        setTaskList(prevList => [...prevList, item])
    }
    return (
        <div>
            <Input updateTaskList={updateTaskList} />
            <DisplayTask taskList={taskList} />
        </div>
    )
}