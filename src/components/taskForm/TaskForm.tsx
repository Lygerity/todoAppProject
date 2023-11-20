import React, { useState } from 'react';
import Lottie from 'react-lottie';
import fadeInAnimation from './Animation - 1700475415786.json'
interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

interface Task {
    id: number;
    name: string;
    category: string;
    date: string;
    collaborators: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState<Task>({
        id: 0,
        name: '',
        category: '',
        date: '',
        collaborators: '',
    });

    const [animationVisible, setAnimationVisible] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    const handleAddTask = () => {
        if (newTask.name.trim() !== '') {
            onAddTask(newTask);
            setNewTask({
                id: 0,
                name: '',
                category: '',
                date: '',
                collaborators: '',
            });


            // Set the state to make the animation visible
            setAnimationVisible(true);

            // Set autoplay to false after the animation is played
            setTimeout(() => {
                setAnimationVisible(false);
            }, 500); // Adjust the duration based on your animation
        }
    };

    const fadeInOptions = {
        loop: false,
        autoplay: animationVisible, // Only autoplay when the button is clicked
        animationData: fadeInAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            {/* Your existing form elements */}
            <label>
                Task Name:
                <input type="text" name="name" value={newTask.name} onChange={handleInputChange} />
            </label>
            {/* ... (other form elements) */}

            {/* Add the Lottie animation for fade-in */}
            <Lottie options={fadeInOptions} height={50} width={50} />

            <button onClick={handleAddTask}>Add</button>
        </div>
    );
};

export default TaskForm;
