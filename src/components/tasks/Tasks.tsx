import {FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import Task from "./task/Task.tsx";
import "../../assets/stylesheets/components/Tasks.css"
import firebase from "../../firebase/firebase.tsx";

type Props = NonNullable<unknown> & PropsWithChildren;

type Task = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
}

const Tasks: FunctionComponent<Props> = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const tasksRef = firebase.firestore().collection('tasks');
        const unsubscribe = tasksRef.onSnapshot(snapshot => {
            const tasksData: Task[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                data.date = data.date.toDate();
                if(data.date > Date.now()){
                    tasksData.push({completed: data.completed, date: data.date, name: data.name, id: doc.id, ...data});
                }
            });
            setTasks(tasksData);
        });
        return () => unsubscribe();
    }, []);


    return (
        <div className={"tasks"}>
            {tasks.map((task, index) => (
                <Task id={task.id} name={task.name} date={task.date} completed={task.completed} key={index}/>
            ))}
        </div>
    )
}
export default Tasks
