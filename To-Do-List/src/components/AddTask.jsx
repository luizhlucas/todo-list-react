import { useState } from "react"

import { FaCheck, FaTrash, FaPlus } from 'react-icons/fa';

import "./AddTask.css"

function AddTask() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleAddTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks,task]);
        setTask("");
    }

    const handleRemoveTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove))
    }

    return(
        <div className="content">
          <h1>To-Do List</h1>
            <div className="addTask">
                <input type="text" id="input" placeholder="Add Your Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button onClick={handleAddTask}>Add</button>         
            </div>
          <div>
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <div className="task-content">
                                <input type="checkbox"></input>
                                <h1>{task}</h1>
                            </div>
                            <button className="remove-task-button" onClick={() => handleRemoveTask(index)}><FaTrash className="icon" size={24} /></button>
                        </li>

                    ))}
                </ul>
          </div>
        </div>
    )
}

export default AddTask