import React, {useState} from 'react';
import '../assets/stylesheets/components/App.css';
import TaskForm from './taskForm/TaskForm';
import Tasks from "./tasks/Tasks.tsx";
import SideBar from '../SideBar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage.tsx';
import TaskPage from '../TaskPage.tsx';

function App(): JSX.Element {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="App">
            
            {/* <h1>React To-Do App</h1>
            <TaskForm onAddTask={addTask}/>
            <Tasks/> */}

            
        <>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/taskpage/:data" element={<TaskPage/>}/>
            </Routes>
          </BrowserRouter>
        </>    
        </div>
    );
}

export default App;
