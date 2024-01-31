import {FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import Task from "./task/Task.tsx";
import "../../assets/stylesheets/components/Tasks.css"
import firebase from "../../firebase/firebase.tsx";
import {useDateStore} from '../../store/useDateStore';

type Props = {
    full: boolean;
    date?: Date;
} & PropsWithChildren;

type Task = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
}

const Tasks: FunctionComponent<Props> = (props: Props) => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const dateStore = useDateStore();

    useEffect(() => {
        const tasksRef = firebase.firestore().collection('tasks');
        const unsubscribe = tasksRef.onSnapshot(snapshot => {
            const tasksData: Task[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                data.date = data.date.toDate();
                if (!props.full) {
                    if (props.date &&
                        data.date.getDate() === props.date.getDate() &&
                        data.date.getMonth() === props.date.getMonth() &&
                        data.date.getFullYear() === props.date.getFullYear()) {
                        tasksData.push({
                            completed: data.completed,
                            date: data.date,
                            name: data.name,
                            id: doc.id, ...data
                        });
                    } else if (
                        data.date.getDate() === dateStore.selectedDate?.getDate() &&
                        data.date.getMonth() === dateStore.selectedDate?.getMonth() &&
                        data.date.getFullYear() === dateStore.selectedDate?.getFullYear()
                    ) {
                        tasksData.push({
                            completed: data.completed,
                            date: data.date,
                            name: data.name,
                            id: doc.id, ...data
                        });
                    }
                } else {
                    if (data.date > Date.now()) {
                        tasksData.push({
                            completed: data.completed,
                            date: data.date,
                            name: data.name,
                            id: doc.id, ...data
                        });
                    }
                }
            });
            setTasks(tasksData);
        });
        return () => unsubscribe();
    }, [dateStore.selectedDate]);


    return (
        <div className={"tasks"}>
            {tasks.map((task, index) => (
                <Task id={task.id} name={task.name} date={task.date} completed={task.completed} key={index}/>
            ))}
        </div>
    )
}
export default Tasks
