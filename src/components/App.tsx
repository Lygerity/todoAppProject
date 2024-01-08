import '../assets/stylesheets/components/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage.tsx';
import TaskPage from '../pages/TaskPage.tsx';
import { Provider } from 'mobx-react';
import dateStore from '../store/DateStore';
import { DateStoreProvider } from '../store/useDateStore';
import themeStore from "../store/ThemeStore.tsx";
import {ThemeStoreProvider} from "../store/useThemeStore.tsx";
function App(): JSX.Element {

    return (
        <ThemeStoreProvider>
            <Provider themeStore={themeStore} children={undefined}></Provider>
        <div className="App">
        <DateStoreProvider>
            <BrowserRouter>
            <Provider dateStore={dateStore} children={undefined}></Provider>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/taskpage" element={<TaskPage/>}/>
            </Routes>
          </BrowserRouter>
        </DateStoreProvider>    
        </div>
        </ThemeStoreProvider>
    );
}

export default App;
