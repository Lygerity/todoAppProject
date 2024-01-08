import SideBar from './SideBar';
import "../assets/stylesheets/components/TaskPage.css";

import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import firebase from "../firebase/firebase.tsx";
import Task from '../components/tasks/task/Task';

type Props = NonNullable<unknown> & PropsWithChildren;

type Task = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
}


const ViewWeeklyTasks: FunctionComponent<Props> = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
  
    useEffect(() => {
        const tasksRef = firebase.firestore().collection('tasks');
        const unsubscribe = tasksRef.onSnapshot(snapshot => {
            const tasksData: Task[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                data.date = data.date.toDate();
                let today = new Date();
                // faire un for qui passe sur les 7 jours suivants de today
                if(
                  data.date.getDate() === today.getDate() &&
                  data.date.getMonth() === today.getMonth() &&
                  data.date.getFullYear() === today.getFullYear()
                ){
                  tasksData.push({completed: data.completed, date: data.date, name: data.name, id: doc.id, ...data});
                }
            });
            setTasks(tasksData);
        });
        return () => unsubscribe();
    }, []);


    return(
        <div>
            <SideBar />

            <div>
            <h1>Today list</h1>
            </div>

            <div className={"tasks"}>
                {tasks.map((task, index) => (
                    <Task id={task.id} name={task.name} date={task.date} completed={task.completed} key={index}/>
                ))}
            </div>
        </div>
    );
}


export default ViewWeeklyTasks;