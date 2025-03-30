import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router";
import './index.css' // reset styles 
import App from './App.jsx'

// https://reactrouter.com/start/declarative/installation

createRoot(document.getElementById('root')).render(
    <App />
)
