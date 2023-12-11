import SideBar from './SideBar';
import "./TaskPage.css";
import { useParams } from 'react-router-dom';

// type Props = {
//     // data: String;
//     data: Date;
// } & PropsWithChildren;

const TaskPage = () => {
    const { data } = useParams();


    return (
        <div className='mainContentTask'>
            
            <SideBar/>                
            <h1>Task Page</h1>
            <p>{data?.toString() || "no date"}</p>
        </div>
    )
}

export default TaskPage;