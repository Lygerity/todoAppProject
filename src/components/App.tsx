import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/stylesheets/components/App.css';
import TaskForm from './taskForm/TaskForm';
import BlueButton from './buttons/BlueButton';

function App(): JSX.Element {
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
            <Helmet>
                <title>Your Page Title</title>
                <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
            </Helmet>
            <h1>React To-Do App</h1>
            <BlueButton onClick={() => setTasks([])}>Clear All</BlueButton>
            <TaskForm onAddTask={addTask} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.name} - Category: {task.category} - Date: {task.date} - Collaborators: {task.collaborators}
                        <BlueButton onClick={() => deleteTask(index)}>Delete</BlueButton>
                    </li>
                ))}
            </ul>

            <dotlottie-player src="https://lottie.host/6b93de08-74fd-4deb-91ff-29f270eb0708/oa3NRa2ClI.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></dotlottie-player>
        </div>
    );
}

export default App;
