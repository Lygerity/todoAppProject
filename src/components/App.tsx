import React, {useState} from 'react';
import '../assets/stylesheets/components/App.css';
import TaskForm from './taskForm/TaskForm';
import Tasks from "./tasks/Tasks.tsx";

function App(): JSX.Element {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="App">
            <h1>React To-Do App</h1>
            <TaskForm onAddTask={addTask}/>
            <Tasks/>
        </div>
    );
}

export default App;
