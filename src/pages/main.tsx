import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../components/App.tsx'
import '../assets/stylesheets/pages/index.css'
import Tasks from "../components/Tasks.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
      <Tasks />
  </React.StrictMode>,
)
