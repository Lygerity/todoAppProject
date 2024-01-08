import React, {useState} from 'react';
import Lottie from 'lottie-react';
import animationData from '../taskForm/animrouge.json'
import '../../assets/stylesheets/components/taskForm.css';
import BlueButton from "../buttons/blueButton";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import firebase from "../../firebase/firebase.tsx";


interface Task {
    name: string;
    category: string;
    date: Date;
    collaborators: string;
}

const TaskForm: React.FC = () => {
    const [newTask, setNewTask] = useState<Task>({
        name: '',
        category: '',
        date: new Date(),
        collaborators: '',
    });
    const [isAnimating, setIsAnimating] = useState(false);

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

    const handleAddTask = () => {
        if (newTask.name.trim() !== '') {
            const db = firebase.firestore();

            // Vérifiez que les champs select ne sont pas vides
            if (newTask.category !== '' && newTask.collaborators !== '') {
                db.collection("tasks").add(newTask);

                // Animation and state reset logic
                setIsAnimating(true);
                setTimeout(() => {
                    setIsAnimating(false);
                    setNewTask({
                        name: '',
                        category: '',
                        date: new Date(),
                        collaborators: '',
                    });
                }, 3000);
            } else {
                // Affichez un message d'erreur ou effectuez une action appropriée pour indiquer à l'utilisateur de remplir les champs select.
                alert('Please select options for Category and Collaborators');
            }
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
                    timeCaption="Heure"
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
                <select name="collaborators" value={newTask.collaborators} onChange={handleInputChange}>
                    <option value="" disabled>Select a collaborator</option>
                    <option value="Kevin">Kevin</option>
                    <option value="Daykwaza">Daykwaza</option>
                </select>
            </label>


            <div className="button-and-animation-container">
                <BlueButton onClick={handleAddTask}>Add Task</BlueButton>
                {isAnimating && (
                    <Lottie animationData={animationData} loop={false} style={{width: '50px', height: '50px'}}/>
                )}
            </div>
        </div>
    );
};

export default TaskForm;
