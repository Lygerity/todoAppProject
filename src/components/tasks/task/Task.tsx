import {PropsWithChildren, useState} from "react";
import {TaskAlt, RemoveDone, Edit} from '@mui/icons-material';
import "../../../assets/stylesheets/components/Task.css"
import firebase from "../../../firebase/firebase.tsx";
import BlueButton from "../../buttons/blueButton.tsx";

type Props = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
} & PropsWithChildren;

const Task = (props: Props) => {
    const [status, setStatus] = useState(props.completed);
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(props.name);
    const [editedDate, setEditedDate] = useState(props.date);

    const handleClick = () =>{
        const tasksRef = firebase.firestore().doc('tasks/'+props.id);
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

    return (
        <div className={"task"}>

            <div className={"task__edit"} onClick={handleEditClick}>
                <Edit style={{color: '#0077B6', cursor: 'pointer'}} />
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
            ) : (
                <div>
                    <h3 className={"task__name"}>{props.name}</h3>
                    <p>{editedDate.getDate()}/{editedDate.getMonth() + 1}/{editedDate.getFullYear()}</p>
                    <div className={"task__completed"} onClick={() => handleClick()}>
                        {status ? <TaskAlt style={{color: 'lightgreen'}}/> : <RemoveDone style={{color: 'indianred'}}/>}
                    </div>
                </div>
            )}
        </div>
    );
}
export default Task