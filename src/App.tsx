// import { useState } from 'react'
// import reactLogo from './assets/stylesheets/images/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import SideBar from './SideBar'
import MainPage from './MainPage'
import TaskPage from './TaskPage'

function App() {
  // const [count, setCount] = useState(0)

  return (


      <div>
        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/taskpage/:data" element={<TaskPage/>}/>
            </Routes>
          </BrowserRouter>
      </div>

  )
}

export default App
