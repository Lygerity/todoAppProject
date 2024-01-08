// TaskPage.tsx
import SideBar from './SideBar';
import "../assets/stylesheets/components/TaskPage.css";
import { observer } from 'mobx-react-lite';
import { useDateStore } from '../store/useDateStore';
import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import firebase from "../firebase/firebase.tsx";
import Task from '../components/tasks/task/Task';

type Props = NonNullable<unknown> & PropsWithChildren;

type Task = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
}

const TaskPage: FunctionComponent<Props> = () => {
  const dateStore = useDateStore();

  console.log('Selected Date:', dateStore.selectedDate);
// methode to pull every tasks of this date

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
      const tasksRef = firebase.firestore().collection('tasks');
      const unsubscribe = tasksRef.onSnapshot(snapshot => {
          const tasksData: Task[] = [];
          snapshot.forEach(doc => {
              const data = doc.data();
              data.date = data.date.toDate();
              if(
                data.date.getDate() === dateStore.selectedDate?.getDate() &&
                data.date.getMonth() === dateStore.selectedDate?.getMonth() &&
                data.date.getFullYear() === dateStore.selectedDate?.getFullYear()
              ){
                tasksData.push({completed: data.completed, date: data.date, name: data.name, id: doc.id, ...data});
              }
          });
          setTasks(tasksData);
      });
      return () => unsubscribe();
  }, [dateStore.selectedDate]);

  return (
    <div className='mainContentTask'>
      <SideBar />

      <div>
        <h1>Task Page</h1>
        <p>{dateStore.selectedDate ? dateStore.selectedDate.getDate()+"/" + dateStore.selectedDate.getMonth() + 1 + "/" + dateStore.selectedDate.getFullYear() : "no date"}</p>
      </div>

      <div className={"tasks"}>
            {tasks.map((task, index) => (
                <Task id={task.id} name={task.name} date={task.date} completed={task.completed} key={index}/>
            ))}
        </div>
    </div>
  );
}

export default observer(TaskPage);
