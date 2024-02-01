import '../assets/stylesheets/components/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage.tsx';
import TaskPage from '../pages/TaskPage.tsx';
import { Provider } from 'mobx-react';
import dateStore from '../store/DateStore';
import { DateStoreProvider } from '../store/useDateStore';

import ViewDailyTasks from '../pages/ViewDailyTasks.tsx';
import ViewWeeklyTasks from '../pages/ViewWeeklyTasks.tsx';


import themeStore from "../store/ThemeStore.tsx";
import {ThemeStoreProvider} from "../store/useThemeStore.tsx";
import LoginPage from "../pages/LoginPage.tsx";

function App(): JSX.Element {

    return (
        <ThemeStoreProvider>
            <Provider themeStore={themeStore} children={undefined}></Provider>
        <div className="App">
            <DateStoreProvider>
                <BrowserRouter>
                    <Provider dateStore={dateStore}>
                        <Routes>
                            <Route path="/Main" element={<MainPage/>}/>
                            <Route path="/taskpage" element={<TaskPage/>}/>
                            <Route path="/" element={<LoginPage/>}/>
                            <Route path="/TodayList" element={<ViewDailyTasks/>}/>
                            <Route path="/WeekList" element={<ViewWeeklyTasks/>}/>
                        </Routes>
                    </Provider>
                </BrowserRouter>
            </DateStoreProvider>
        </div>
</ThemeStoreProvider>
    );
}

export default App;