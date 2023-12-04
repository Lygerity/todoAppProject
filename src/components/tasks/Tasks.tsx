import {FunctionComponent, PropsWithChildren} from "react";
import Task from "./task/Task.tsx";
import "../../assets/stylesheets/components/Tasks.css"

type Props = NonNullable<unknown> & PropsWithChildren;

type Task = {
    id: number;
    name: string;
    date: Date;
    completed: boolean;
}

const Tasks: FunctionComponent<Props> = () => {
const tasks:Task[] = [
        {
            id: 1,
            name: "Aller chercher le pain",
            date: new Date(),
            completed: true
        },
        {
            id: 2,
            name: "Aller chercher le dpain",
            date: new Date(),
            completed: false
        },
        {
            id: 3,
            name: "Aller chercher le psain",
            date: new Date(),
            completed: true
        },
        {
            id: 4,
            name: "Aller chercher le pafin",
            date: new Date(),
            completed: false
        },
        {
            id: 5,
            name: "Aller chercher le paifn",
            date: new Date(),
            completed: true
        },
        {
            id: 6,
            name: "Aller chercher le pfain",
            date: new Date(),
            completed: false
        },
        {
            id: 7,
            name: "Aller chercher le pqain",
            date: new Date(),
            completed: true
        },
        {
            id: 8,
            name: "Aller chercher le paain",
            date: new Date(),
            completed: false
        },
        {
            id: 9,
            name: "Aller chercher le paizn",
            date: new Date(),
            completed: true
        },
        {
            id: 10,
            name: "Aller chercher le paine",
            date: new Date(),
            completed: false
        },
        {
            id: 11,
            name: "Aller chercher le rpain",
            date: new Date(),
            completed: true
        },
        {
            id: 12,
            name: "Aller chercher le ptain",
            date: new Date(),
            completed: false
        },
        {
            id: 13,
            name: "Aller chercher le payin",
            date: new Date(),
            completed: true
        },
        {
            id: 14,
            name: "Aller chercher le paiun",
            date: new Date(),
            completed: false
        },
        {
            id: 15,
            name: "Aller chercher le paini",
            date: new Date(),
            completed: true
        }]

    return (
        <div className={"tasks"}>
            {tasks.map((task, index) => (
                <Task id={task.id} name={task.name} date={task.date} completed={task.completed} key={index}/>
            ))}
        </div>
    )
}
export default Tasks
