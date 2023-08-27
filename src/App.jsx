import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import MainView from './MainView'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container-md">
      <MainView />
    </div>
  </React.StrictMode>,
)
