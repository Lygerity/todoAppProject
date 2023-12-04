import { useState } from 'react'
import reactLogo from '../assets/stylesheets/images/react.svg'
import viteLogo from '/vite.svg'
import '../assets/stylesheets/components/App.css'
import Task from "./tasks/task/Task.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
          <Task id={1} name={"Aller chercher le pain"} date={new Date()} completed={true}/>
        <Task id={1} name={"Aller chercher le paing"} date={new Date()} completed={false}/>
    </>
  )
}

export default App
