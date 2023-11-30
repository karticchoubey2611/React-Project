import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* This is the way in which we can use the component to render inside main.jsx by using angle brackets<> */}
    <App />
  </React.StrictMode>,
)
