import SideBar from './SideBar';
import "../assets/stylesheets/components/MainPage.css";

import TaskForm from '../components/forms/TaskForm';
import Tasks from '../components/tasks/Tasks';

function MainPage(): JSX.Element{

    return (
        <div className='mainPageContent'>
            
            <SideBar/>
            <h1>React To-Do App</h1>
            <TaskForm/>
            <Tasks/>
        </div>
    )
}

export default MainPage;