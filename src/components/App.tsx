import React, { useState } from 'react';
import '../assets/stylesheets/components/App.css'
import TaskForm from "./taskForm/TaskForm";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="App">
            <h1>React To-Do App</h1>
            <TaskForm onAddTask={addTask} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App
