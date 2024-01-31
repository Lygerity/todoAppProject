import {FunctionComponent, PropsWithChildren, useState} from "react";
import {TaskAlt, RemoveDone, Edit} from '@mui/icons-material';
import "../../../assets/stylesheets/components/Task.css"
import firebase from "../../../firebase/firebase.tsx";
import BlueButton from "../../buttons/blueButton.tsx";
import {useThemeStore} from '../../../store/useThemeStore.tsx';


type Props = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
} & PropsWithChildren;

const Task: FunctionComponent<Props> = (props: Props) => {

    const [status, setStatus] = useState(props.completed);
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(props.name);
    const [editedDate, setEditedDate] = useState(props.date);
    const themeClass = useThemeStore().isDarkMode ? 'dark-theme' : 'light-theme';

    const handleClick = () => {
        const tasksRef = firebase.firestore().doc('tasks/' + props.id);
        tasksRef.update({
            completed: !status
        }).then(() => setStatus(!status))
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        const tasksRef = firebase.firestore().doc('tasks/' + props.id);
        tasksRef.update({
            name: editedName,
            date: editedDate
        }).then(() => {
            setIsEditing(false);
        });
    }
    const minutes: string | number = props.date.getMinutes() < 10 ? "0" + props.date.getMinutes() : props.date.getMinutes()

    return (
        <div className={`task ${themeClass}`}>
            <h3 className={"task__name"}>{props.name}</h3>
            <div className={"task__date"}>
                <p>{props.date.getDate()}/{props.date.getMonth() + 1}/{props.date.getFullYear()}</p>
                <p>{props.date.getHours()}h{minutes}</p>

                <div className={"task__edit"} onClick={handleEditClick}>
                    <Edit style={{color: '#0077B6', cursor: 'pointer'}}/>
                </div>
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                        <input
                            type="date"
                            value={editedDate.toISOString().split('T')[0]}
                            onChange={(e) => setEditedDate(new Date(e.target.value))}
                        />

                        <div className={"task__save"}>
                            <BlueButton onClick={handleSaveClick}>Save</BlueButton>
                        </div>
                    </div>
                ) : (<div/>)}
            </div>
            <div className={"task__completed"} onClick={() => handleClick()}>
                {status ? <TaskAlt style={{color: 'lightgreen'}}/> :
                    <RemoveDone style={{color: 'indianred'}}/>}
            </div>
        </div>
    );
}
export default Task