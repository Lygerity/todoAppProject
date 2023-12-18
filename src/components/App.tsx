import '../assets/stylesheets/components/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage.tsx';
import TaskPage from '../pages/TaskPage.tsx';

function App(): JSX.Element {

    return (
        <div className="App">
        <>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/taskpage/:data" element={<TaskPage/>}/>
            </Routes>
          </BrowserRouter>
        </>    
        </div>
    );
}

export default App;
