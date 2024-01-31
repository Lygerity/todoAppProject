import SideBar from './SideBar';
import "../assets/stylesheets/components/TaskPage.css";
import {observer} from 'mobx-react-lite';
import {useDateStore} from '../store/useDateStore';
import {FunctionComponent, PropsWithChildren} from 'react';
import {useThemeStore} from "../store/useThemeStore.tsx";
import Tasks from "../components/tasks/Tasks.tsx";


type Props = NonNullable<unknown> & PropsWithChildren;

const TaskPage: FunctionComponent<Props> = () => {
    const dateStore = useDateStore();
    const themeClass = useThemeStore().isDarkMode ? 'dark-theme' : 'light-theme';

    const month = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ];

    console.log('Selected Date:', dateStore.selectedDate);


    return (
        <div className={`mainContentTask ${themeClass}`}>
            <SideBar/>

            <div>
                <h1>Task Page</h1>
                <p>{dateStore.selectedDate ? dateStore.selectedDate.getDate() + " " + month[dateStore.selectedDate.getMonth()] + " " + dateStore.selectedDate.getFullYear() : "no date"}</p>
            </div>
            <Tasks full={false}/>
        </div>
    );
}

export default observer(TaskPage);
