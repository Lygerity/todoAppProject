import SideBar from './SideBar';
import "../assets/stylesheets/components/MainPage.css";

import TaskForm from '../components/forms/TaskForm';
import Tasks from '../components/tasks/Tasks';
import {useThemeStore} from "../store/useThemeStore.tsx";
import {observer} from "mobx-react";
import {FunctionComponent, PropsWithChildren} from "react";


type Props = NonNullable<unknown> & PropsWithChildren;

const MainPage: FunctionComponent<Props> = () =>{
    const themeClass = useThemeStore().isDarkMode ? 'dark-theme' : 'light-theme';

    return (
        <div className={`mainPageContent ${themeClass}`}>

            <SideBar/>
            <h1 className={`${themeClass}`}>React To-Do App</h1>
            <TaskForm/>
            <Tasks full={true}/>
        </div>
    );
}

export default observer(MainPage);