import {FunctionComponent, PropsWithChildren} from "react";
import {TaskAlt, RemoveDone} from '@mui/icons-material';
type Props = {
    id: number;
    name: string;
    date: Date;
    completed: boolean;
} & PropsWithChildren;

const Task:FunctionComponent<Props> = (props: Props) => {

    return(
        <div className={"task"}>
            <h3 className={"task__name"}>{props.name}</h3>
            <div className={"task__date"}>
                <p>{props.date.getDate()}/{props.date.getMonth()}/{props.date.getFullYear()}</p>
            </div>
            <div className={"task__completed"}>
                {props.completed ? <TaskAlt style={{color: 'lightgreen'}}/> : <RemoveDone style={{color: 'indianred'}}/>}
            </div>
        </div>
    )
}
export default Task