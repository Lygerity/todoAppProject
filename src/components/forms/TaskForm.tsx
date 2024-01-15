import React, {useState, useEffect} from 'react';
import '../../assets/stylesheets/components/taskForm.css';
import BlueButton from "../buttons/blueButton";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import firebase from "../../firebase/firebase.tsx";

interface Task {
    name: string;
    category: string;
    date: Date;
    collaborator: string;
}

interface Collaborator {
    userId: string;
    username: string;
}

const TaskForm: React.FC = () => {
    const [newTask, setNewTask] = useState<Task>({
        name: '',
        category: '',
        date: new Date(),
        collaborator: '',
    });
    const [collaborators, setCollaborators] = useState<Collaborator[]>([]);

    useEffect(() => {
            const unsubscribe = firebase.firestore().collection('collaborators').onSnapshot(snapshot => {
                const fetchedCollaborators = snapshot.docs.map(doc => ({
                    userId: doc.id,
                    username: doc.data().username,
                })) as Collaborator[];
                setCollaborators(fetchedCollaborators);
            });

            return () => unsubscribe(); // Detach listener on cleanup
        },
        []);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    const handleDateChange = (date: Date) => {
        setNewTask({
            ...newTask,
            date,
        });
    };

    const handleAddTask = async () => {
        if (newTask.name.trim() !== '' && newTask.category !== '' && newTask.collaborator !== '') {
            const db = firebase.firestore();

            // Add the new task to Firestore
            await db.collection("tasks").add(newTask);

            // Reset the form state
            setNewTask({
                name: '',
                category: '',
                date: new Date(),
                collaborator: '',
            });

            // Possibly display a success message to the user
        } else {
            // Display an error message if the task details are incomplete
            alert('Please fill in all fields before submitting.');
        }
    };

    return (
        <div className="task-form-container">
            <label>
                Task Name:
                <input type="text" name="name" value={newTask.name} onChange={handleInputChange}/>
            </label>
            <label>
                Date:
                <DatePicker
                    selected={newTask.date}
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    wrapperClassName="datePicker"
                />
            </label>
            <label>
                Category:
                <select name="category" value={newTask.category} onChange={handleInputChange}>
                    <option value="" disabled>Select a category</option>
                    <option value="Food">Food</option>
                    <option value="Work">Work</option>
                    <option value="Sports">Sports</option>
                </select>
            </label>
            <label>
                Collaborators:
                <select name="collaborator" value={newTask.collaborator} onChange={handleInputChange}>
                    <option value="" disabled>Select a collaborator</option>
                    {collaborators.map((collab) => (
                        <option key={collab.userId} value={collab.userId}>
                            {collab.username}
                        </option>
                    ))}
                </select>
            </label>
            <div className="button-container">
                <BlueButton onClick={handleAddTask}>Add Task</BlueButton>
            </div>
        </div>
    );
};

export default TaskForm;
