import {FunctionComponent, PropsWithChildren, useState} from "react";
import {TaskAlt, RemoveDone} from '@mui/icons-material';
import "../../../assets/stylesheets/components/Task.css"

type Props = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
} & PropsWithChildren;

const Task:FunctionComponent<Props> = (props: Props) => {

    const [status, setStatus] =useState(props.completed)

    const handleClick = () =>{
        setStatus(!status)
    }

    const minutes:string | number = props.date.getMinutes()<10 ? "0"+props.date.getMinutes() : props.date.getMinutes()

    return(
        <div className={"task"}>
            <h3 className={"task__name"}>{props.name}</h3>
            <div className={"task__date"}>
                <p>{props.date.getDate()}/{props.date.getMonth()+1}/{props.date.getFullYear()}</p>
                <p>{props.date.getHours()}h{minutes}</p>
            </div>
            <div className={"task__completed"} onClick={() => handleClick()}>
                {status ? <TaskAlt style={{color: 'lightgreen'}}/> : <RemoveDone style={{color: 'indianred'}}/>}
            </div>
        </div>
    )
}
export default Task