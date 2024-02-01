import SideBar from './SideBar';
import "../assets/stylesheets/components/TaskPage.css";

import {FunctionComponent, PropsWithChildren, useEffect, useState} from 'react';
import firebase from "../firebase/firebase.tsx";
import Task from '../components/tasks/task/Task';
import {useThemeStore} from '../store/useThemeStore.tsx';
import {observer} from "mobx-react";

type Props = NonNullable<unknown> & PropsWithChildren;

type Task = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
}


const ViewWeeklyTasks: FunctionComponent<Props> = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const themeClass = useThemeStore().isDarkMode ? 'dark-theme' : 'light-theme';

    useEffect(() => {
        const tasksRef = firebase.firestore().collection('tasks');
        const unsubscribe = tasksRef.onSnapshot(snapshot => {
            const tasksData: Task[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                data.date = data.date.toDate();
                const today = new Date();
                // faire un for qui passe sur les 7 jours suivants de today
                let j = 0;
                for (let i = 0; i < 7; i++) {
                    today.setDate(today.getDate() + j);
                    if (
                        data.date.getDate() === today.getDate() &&
                        data.date.getMonth() === today.getMonth() &&
                        data.date.getFullYear() === today.getFullYear()
                    ) {
                        tasksData.push({
                            completed: data.completed,
                            date: data.date,
                            name: data.name,
                            id: doc.id, ...data
                        });
                    }
                    j++;
                }

            });
            tasksData.sort((a, b) => a.date.getTime() - b.date.getTime());
            setTasks(tasksData);
        });
        return () => unsubscribe();
    }, []);


    return (
        <div className={`mainPageContent ${themeClass}`}>
            <SideBar/>

            <div>
                <h1>Week list</h1>
            </div>
            {/* <ViewDailyTasks/> */}
            <div className={"tasks"}>
                {tasks.map((task, index) => (
                    <Task id={task.id} name={task.name} date={task.date} completed={task.completed} key={index}/>
                ))}
            </div>
        </div>
    );
}


export default observer(ViewWeeklyTasks);