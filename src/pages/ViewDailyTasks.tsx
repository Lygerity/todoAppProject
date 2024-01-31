import SideBar from './SideBar';
import "../assets/stylesheets/components/TaskPage.css";

import {FunctionComponent, PropsWithChildren} from 'react';
import {useThemeStore} from '../store/useThemeStore.tsx';
import Tasks from "../components/tasks/Tasks.tsx";

type Props = NonNullable<unknown> & PropsWithChildren;

const ViewDailyTasks: FunctionComponent<Props> = () => {

    const themeClass = useThemeStore().isDarkMode ? 'dark-theme' : 'light-theme';

    return (
        <div className={themeClass}>
            <SideBar/>
            <div>
                <h1>Today list</h1>
            </div>
            <Tasks full={false} date={new Date()}/>
        </div>
    );
}


export default ViewDailyTasks;