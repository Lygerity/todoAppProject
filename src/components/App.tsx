import '../assets/stylesheets/components/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage.tsx';
import TaskPage from '../pages/TaskPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import { Provider } from 'mobx-react';
import dateStore from '../store/DateStore';
import { DateStoreProvider } from '../store/useDateStore';

function App(): JSX.Element {
    return (
        <div className="App">
            <DateStoreProvider>
                <BrowserRouter>
                    <Provider dateStore={dateStore}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/taskpage" element={<TaskPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>
                    </Provider>
                </BrowserRouter>
            </DateStoreProvider>
        </div>
    );
}

export default App;
