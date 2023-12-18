import SideBar from './SideBar';
import "./MainPage.css";
import TaskForm from './components/taskForm/TaskForm';
import Tasks from './components/tasks/Tasks';
import { useState } from 'react';

function MainPage(): JSX.Element{
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };
    return (
        <div className='mainPageContent'>
            
            <SideBar/>                
            <h1>Main Page</h1>
            <h1>React To-Do App</h1>
            <TaskForm onAddTask={addTask}/>
            <Tasks/>
        </div>
    )
}

export default MainPage;