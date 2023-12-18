// TaskPage.tsx
import SideBar from './SideBar';
import "../assets/stylesheets/components/TaskPage.css";
import { observer } from 'mobx-react-lite';
import { useDateStore } from '../store/useDateStore';

const TaskPage = () => {
  const dateStore = useDateStore();

  console.log('Selected Date:', dateStore.selectedDate);

  return (
    <div className='mainContentTask'>
      <SideBar />
      <h1>Task Page</h1>
      <p>{dateStore.selectedDate ? dateStore.selectedDate.toLocaleString() : "no date"}</p>
    </div>
  );
}

export default observer(TaskPage);
