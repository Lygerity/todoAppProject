import React, { useEffect, useState } from 'react';

import firebase from '../firebase/firebase.tsx'; // Assurez-vous d'avoir le bon chemin vers votre fichier firebase.ts

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<any[]>([]); // Définissez le state pour stocker les tâches

    useEffect(() => {
        // Accéder à la collection Firestore
        const tasksRef = firebase.firestore().collection('tasks');

        // Utiliser onSnapshot pour écouter les modifications en temps réel
        const unsubscribe = tasksRef.onSnapshot(snapshot => {
            const tasksData: any[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                tasksData.push({ id: doc.id, ...data });
            });
            setTasks(tasksData);
        });

        // Nettoyer l'écouteur lorsque le composant est démonté
        return () => unsubscribe();
    }, []); // Le tableau vide signifie que cette fonction d'effet ne dépend d'aucune variable, elle ne sera donc appelée qu'une fois au montage.

    const formatDate = (timestamp: any) => {
        const date = timestamp.toDate(); // Convertir le timestamp en objet Date
        const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'UTC', // Ajoutez le fuseau horaire approprié si nécessaire
        });
        return dateFormatter.format(date);
    };

    return (
        <div>
            <h1>Mes taches</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {`${task.name} le ${formatDate(task.date)}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
