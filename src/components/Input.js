import React from "react"


export default function DisplayTaskTodo({updateTaskList}) {
    const [value, setValue] = React.useState('')
    const handleValue = (event) => {
        setValue(event.target.value)
    }
    const handleSubmit = () => {
        updateTaskList(value)
        setValue('')
    }
    
    return (
        <div>
            <input  value={value} onChange={handleValue} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}