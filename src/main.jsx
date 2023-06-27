import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter 
  basename={import.meta.env.DEV ? '/' : '/portfolio2/'}>
    <App/>
  </BrowserRouter>,
)
